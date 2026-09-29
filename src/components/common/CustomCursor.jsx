import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor = () => {
  const { cursorVariant, cursorText } = useCursor();
  const isTouchOrSmall = useMediaQuery('(hover: none), (pointer: coarse), (max-width: 1024px)');
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Follower spring with refined luxury damping
  const springConfig = prefersReduced
    ? { damping: 60, stiffness: 1000 }
    : { damping: 28, stiffness: 280, mass: 0.5 };

  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchOrSmall) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchOrSmall, isVisible, mouseX, mouseY]);

  if (isTouchOrSmall || !isVisible) {
    return null;
  }

  // Variant styles for outer follower
  const followerVariants = {
    default: {
      width: 34,
      height: 34,
      backgroundColor: 'transparent',
      borderColor: 'rgba(212, 175, 55, 0.45)',
      borderWidth: '1px'
    },
    hover: {
      width: 52,
      height: 52,
      backgroundColor: 'rgba(212, 175, 55, 0.08)',
      borderColor: 'rgba(212, 175, 55, 0.75)',
      borderWidth: '1.5px'
    },
    project: {
      width: 82,
      height: 82,
      backgroundColor: 'rgba(10, 10, 13, 0.88)',
      borderColor: 'rgba(212, 175, 55, 0.8)',
      borderWidth: '1.5px',
      boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* Precision Center Dot */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorVariant === 'project' ? 0 : 5,
          height: cursorVariant === 'project' ? 0 : 5,
          borderRadius: '50%',
          backgroundColor: '#f4e5b8',
          boxShadow: '0 0 6px rgba(212, 175, 55, 0.8)',
          pointerEvents: 'none'
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Smooth Outer Follower */}
      <motion.div
        animate={cursorVariant}
        variants={followerVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          borderStyle: 'solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          backdropFilter: cursorVariant === 'project' ? 'blur(4px)' : 'none'
        }}
        transition={{
          duration: prefersReduced ? 0.05 : 0.25,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--gold-light, #f4e5b8)',
              textTransform: 'uppercase',
              userSelect: 'none'
            }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
