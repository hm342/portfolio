import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(243, 239, 230, 0.08)',
        paddingBlock: '44px',
        backgroundColor: '#171717',
        color: '#F3EFE6',
        position: 'relative',
        zIndex: 10
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
        {/* Left: Identity */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9375rem',
                fontWeight: 800,
                color: '#F3EFE6',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              Harshit Mishra
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#B7D63D',
                boxShadow: '0 0 8px #B7D63D'
              }}
            />
          </div>

          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              color: '#B7D63D',
              fontFamily: 'var(--font-mono)',
              marginTop: '4px'
            }}
          >
            SOFTWARE DEVELOPER // PORTFOLIO 3D
          </span>
        </div>

        {/* Center / Right: Links and Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#B7D63D')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            GitHub
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#B7D63D')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            LinkedIn
          </a>

          <a
            href={personalInfo.socials.emailMailto}
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#B7D63D')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Email
          </a>

          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            © {personalInfo.meta.year} Harshit Mishra
          </span>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="btn-charcoal"
            style={{
              padding: '6px 14px',
              fontSize: '0.75rem'
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
