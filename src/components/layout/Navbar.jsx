import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/helpers';

export const Navbar = ({ activeSection }) => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: isScrolled ? 'rgba(247, 243, 236, 0.95)' : 'rgba(247, 243, 236, 0.85)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
          height: '68px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Left: HARSHIT MISHRA */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '0.9375rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            aria-label="Harshit Mishra - Scroll to top"
          >
            <span>Harshit Mishra</span>
            <span className="status-dot-copper" style={{ width: '5px', height: '5px' }} />
          </button>

          {/* Desktop Right: About, Work, Experience, Skills, Contact */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--accent-copper)' : 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    padding: '6px 2px',
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {isActive && (
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-copper)'
                      }}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 68px)',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 49,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--accent-copper)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}
            >
              // NAVIGATION
            </span>
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isActive ? 'var(--accent-tint)' : 'var(--bg-surface)',
                    border: `1px solid ${isActive ? 'var(--accent-border)' : 'var(--border-subtle)'}`,
                    color: isActive ? 'var(--accent-copper)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="status-dot-copper" style={{ width: '6px', height: '6px' }} />
                  )}
                </button>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Harshit Mishra · Software Developer
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--accent-copper)', fontFamily: 'var(--font-mono)' }}>
              hm9011822@gmail.com
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
