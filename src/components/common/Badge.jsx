import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  icon = null,
  className = ''
}) => {
  const isAccent = variant === 'accent';

  return (
    <span
      className={`tech-badge ${isAccent ? 'tech-badge-accent' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      {icon && <span style={{ display: 'inline-flex', opacity: 0.85 }}>{icon}</span>}
      {children}
    </span>
  );
};
