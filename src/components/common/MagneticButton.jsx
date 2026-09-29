import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  strength = 18,
  target,
  rel,
  ariaLabel
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isTouch = useMediaQuery('(hover: none), (pointer: coarse)');
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e) => {
    if (isTouch || prefersReduced || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = ((clientX - centerX) / (width / 2)) * strength;
    const y = ((clientY - centerY) / (height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target, rel, 'aria-label': ariaLabel }
    : { onClick, type: 'button', 'aria-label': ariaLabel };

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
};
