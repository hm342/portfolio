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
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBlock: '44px',
        backgroundColor: '#030407',
        color: '#F8FAFC',
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
                color: '#F8FAFC',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              Harshit Mishra
            </span>
            <span className="status-beacon" style={{ width: '5px', height: '5px' }} />
          </div>

          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              color: '#00F2FE',
              fontFamily: 'var(--font-mono)',
              marginTop: '4px'
            }}
          >
            SOFTWARE DEVELOPER // 3D BLACK GLASS EDITION
          </span>
        </div>

        {/* Center / Right: Links and Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00F2FE')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            GitHub
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00F2FE')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            LinkedIn
          </a>

          <a
            href={personalInfo.socials.emailMailto}
            style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00F2FE')}
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
