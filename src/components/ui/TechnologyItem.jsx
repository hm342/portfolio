import React from 'react';
import { useCursor } from '../../context/CursorContext';

export const TechnologyItem = ({ item }) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div
      onMouseEnter={() => setCursor('hover')}
      onMouseLeave={resetCursor}
      className="editorial-card tech-item-card"
      style={{
        padding: '18px 20px',
        background: 'rgba(16, 17, 23, 0.7)',
        borderColor: 'var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4
          style={{
            fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            fontSize: '1.0625rem',
            fontWeight: 600,
            color: 'var(--text-primary)'
          }}
        >
          {item.name}
        </h4>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold-primary)',
            opacity: 0.6
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5
        }}
      >
        {item.description}
      </p>

      <div
        style={{
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: '0.625rem',
          color: 'var(--gold-light)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}
      >
        ROLE: {item.category.toUpperCase()}
      </div>

      <style>{`
        .tech-item-card:hover {
          border-color: var(--gold-border) !important;
          background: rgba(22, 23, 32, 0.95) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};
