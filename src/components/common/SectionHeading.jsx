import React from 'react';

export const SectionHeading = ({
  category,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-header-wrap ${className}`}
      style={{
        marginBottom: 'clamp(32px, 5vw, 48px)',
        textAlign: isCentered ? 'center' : 'left'
      }}
    >
      {category && (
        <div style={{ marginBottom: '8px' }}>
          <span className="label-overline">
            {category}
          </span>
        </div>
      )}

      <h2
        className="heading-section"
        style={{
          maxWidth: isCentered ? '760px' : '720px',
          marginInline: isCentered ? 'auto' : '0',
          marginBottom: subtitle ? '12px' : '0'
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="body-lead"
          style={{
            maxWidth: isCentered ? '640px' : '600px',
            marginInline: isCentered ? 'auto' : '0'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
