import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/personal';
import { navigationLinks } from '../../data/navigation';
import { scrollToSection } from '../../utils/helpers';
import { useCursor } from '../../context/CursorContext';

export const Footer = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#07070a',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '40px',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Identity & Subtext */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--gold-border)',
                  background: 'rgba(212, 175, 55, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontWeight: 600,
                  fontSize: '0.8125rem'
                }}
              >
                {personalInfo.monogram}
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {personalInfo.name}
                </span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                  {personalInfo.role}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.84375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Crafted with disciplined engineering across full-stack web platforms, mobile applications, autonomous robotics, and applied AI systems.
            </p>
          </div>

          {/* Navigation Links Index */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.6875rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              // Quick Navigation
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 140px)', gap: '8px' }}>
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  style={{
                    textAlign: 'left',
                    fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    padding: '2px 0'
                  }}
                  onMouseOver={(e) => (e.target.style.color = 'var(--gold-light)')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Return to Top Button & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => scrollToSection('hero')}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '8px 14px', fontSize: '0.78125rem' }}
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp size={14} style={{ color: 'var(--gold-primary)' }} />
              </button>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '8px 10px' }}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '8px 10px' }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
              </a>
            </div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
              LOCATION: {personalInfo.location.toUpperCase()} // GLOBALLY DISTRIBUTED
            </span>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)"
          }}
        >
          <div>
            © {personalInfo.meta.year} {personalInfo.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>REACT 19 + VITE</span>
            <span>•</span>
            <span>FRAMER MOTION</span>
            <span>•</span>
            <span>EDITORIAL NOIR & GOLD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
