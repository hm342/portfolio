import React from 'react';

export const BorderBeam = ({
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = '#00F2FE',
  colorTo = '#A855F7',
  borderWidth = 1.5
}) => {
  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        border: `${borderWidth}px solid transparent`,
        maskImage: `linear-gradient(transparent, transparent), linear-gradient(white, white)`,
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'destination-in',
        zIndex: 5
      }}
    >
      <div
        style={{
          position: 'absolute',
          aspectRatio: '1',
          width: `${size}px`,
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo}, transparent)`,
          offsetAnchor: '100% 50%',
          offsetPath: `rect(0 auto auto 0 round inherit)`,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: `-${delay}s`
        }}
      />
    </div>
  );
};
