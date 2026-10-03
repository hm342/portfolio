import React, { useMemo } from 'react';

export const Meteors = ({ number = 18 }) => {
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, idx) => ({
      id: idx,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
      animationDuration: `${(Math.random() * 4 + 4).toFixed(2)}s`
    }));
  }, [number]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="animate-meteor"
          style={{
            position: 'absolute',
            top: m.top,
            left: m.left,
            height: '2px',
            width: '2px',
            borderRadius: '9999px',
            backgroundColor: '#00F2FE',
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.15)',
            transform: 'rotate(215deg)',
            animationDelay: m.animationDelay,
            animationDuration: m.animationDuration
          }}
        >
          {/* Meteor Tail */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '1px',
              background: 'linear-gradient(90deg, #00F2FE, transparent)'
            }}
          />
        </span>
      ))}
    </div>
  );
};
