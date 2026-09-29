import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  icon = null,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return {
          background: 'rgba(212, 175, 55, 0.12)',
          borderColor: 'rgba(212, 175, 55, 0.35)',
          color: 'var(--gold-light)'
        };
      case 'outline':
        return {
          background: 'transparent',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-secondary)'
        };
      case 'solid':
        return {
          background: 'var(--bg-elevated)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-primary)'
        };
      default:
        return {
          background: 'rgba(255, 255, 255, 0.04)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-secondary)'
        };
    }
  };

  const currentStyle = getVariantStyles();

  return (
    <span
      className={`tech-tag ${className}`}
      style={{
        ...currentStyle,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 11px',
        fontSize: '0.75rem',
        borderRadius: 'var(--radius-xs)',
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        letterSpacing: '0.04em'
      }}
    >
      {icon && <span style={{ display: 'inline-flex', opacity: 0.85 }}>{icon}</span>}
      {children}
    </span>
  );
};
