import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { LUXURY_EASE } from '../../utils/animations';

export const Reveal = ({
  children,
  width = '100%',
  delay = 0,
  duration = 0.7,
  yOffset = 24,
  className = ''
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className} style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      style={{ width }}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE
      }}
    >
      {children}
    </motion.div>
  );
};
