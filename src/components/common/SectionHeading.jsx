import React from 'react';

export const SectionHeading = ({
  category,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const isCentered = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-header-wrap ${className}`}
      style={{
        marginBottom: 'clamp(36px, 6vw, 56px)',
        textAlign: isCentered ? 'center' : 'left'
      }}
    >
      {category && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', justifyContent: isCentered ? 'center' : 'flex-start' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#B7D63D',
              boxShadow: '0 0 8px #B7D63D',
              flexShrink: 0
            }}
          />
          <span className="label-overline" style={{ color: '#B7D63D' }}>
            {category}
          </span>
        </div>
      )}

      <h2
        className="heading-section"
        style={{
          maxWidth: isCentered ? '800px' : '760px',
          marginInline: isCentered ? 'auto' : '0',
          marginBottom: subtitle ? '12px' : '0',
          color: isDark ? 'var(--dark-text)' : 'var(--text-primary)'
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="body-lead"
          style={{
            maxWidth: isCentered ? '680px' : '640px',
            marginInline: isCentered ? 'auto' : '0',
            color: isDark ? 'var(--dark-text-secondary)' : 'var(--text-secondary)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
