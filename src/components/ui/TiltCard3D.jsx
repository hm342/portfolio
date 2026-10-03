import React, { useRef, useState, useCallback } from 'react';

export const TiltCard3D = ({
  children,
  className = '',
  style = {},
  maxTilt = 12,
  glare = true,
  ...props
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const tiltX = (percentY - 0.5) * -maxTilt * 2;
    const tiltY = (percentX - 0.5) * maxTilt * 2;

    setTransform(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({
      x: percentX * 100,
      y: percentY * 100,
      opacity: 0.22
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card ${className}`}
      style={{
        transform,
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease-out',
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style
      }}
      {...props}
    >
      {glare && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 70%)`,
            transition: 'background 0.15s ease-out',
            zIndex: 10
          }}
        />
      )}
      <div style={{ transform: 'translateZ(20px)', height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};
