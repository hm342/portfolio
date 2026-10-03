import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  icon = null,
  className = ''
}) => {
  const getClassName = () => {
    switch (variant) {
      case 'dark':
        return 'tech-badge-dark';
      case 'copper':
        return 'status-pill-warm';
      default:
        return 'tech-badge';
    }
  };

  return (
    <span
      className={`${getClassName()} ${className}`}
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
