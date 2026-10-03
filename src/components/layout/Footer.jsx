import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--dark-border)',
        paddingBlock: '40px',
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--dark-text)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        {/* Left: Identity with copper detail */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9375rem',
                fontWeight: 800,
                color: 'var(--dark-text)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              Harshit Mishra
            </span>
            <span className="status-dot-copper" style={{ width: '4px', height: '4px' }} />
          </div>

          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              color: 'var(--accent-sand)',
              fontFamily: 'var(--font-mono)',
              marginTop: '2px'
            }}
          >
            Software Developer
          </span>
        </div>

        {/* Center / Right: Links and Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--dark-text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-copper)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dark-text-secondary)')}
          >
            GitHub
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--dark-text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-copper)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dark-text-secondary)')}
          >
            LinkedIn
          </a>

          <a
            href={personalInfo.socials.emailMailto}
            style={{ fontSize: '0.84375rem', color: 'var(--dark-text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-copper)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dark-text-secondary)')}
          >
            Email
          </a>

          <span style={{ fontSize: '0.8125rem', color: 'var(--dark-text-secondary)', fontFamily: 'var(--font-mono)' }}>
            © {personalInfo.meta.year}
          </span>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78125rem',
              color: 'var(--accent-sand)',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--dark-border)',
              backgroundColor: 'rgba(247, 243, 236, 0.04)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-copper)';
              e.currentTarget.style.color = 'var(--accent-copper)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--dark-border)';
              e.currentTarget.style.color = 'var(--accent-sand)';
            }}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
