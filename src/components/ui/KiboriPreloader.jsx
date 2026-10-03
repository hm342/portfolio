import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { KiboriLandingPage } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

export const KiboriPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, responsive preloader sequence (~1.6 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return prev + 12;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(8px)',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }}
      onClick={onComplete}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#000000',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      title="Click anywhere to skip"
    >
      {/* Pure Fullscreen 3D Kibori Animation Scene */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <KiboriLandingPage style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ultra-minimal bottom laser progress line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'rgba(243, 239, 230, 0.08)',
          zIndex: 10
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #B7D63D, #D4E968)',
            boxShadow: '0 0 12px #B7D63D',
            transition: 'width 0.1s linear'
          }}
        />
      </div>

      {/* Minimal micro-hint in bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          right: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          color: 'rgba(243, 239, 230, 0.45)',
          letterSpacing: '0.12em',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        CLICK TO SKIP
      </div>
    </motion.div>
  );
};
