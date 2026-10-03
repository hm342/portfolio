import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToSection } from '../../utils/helpers';

export const Navbar = ({ activeSection }) => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

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
          position: 'fixed',
          top: '16px',
          left: 0,
          width: '100%',
          zIndex: 100,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          paddingInline: '16px'
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1160px',
            height: '62px',
            backgroundColor: isScrolled ? 'rgba(41, 41, 41, 0.88)' : 'rgba(23, 23, 23, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(243, 239, 230, 0.12)',
            borderRadius: 'var(--radius-full)',
            boxShadow: isScrolled
              ? '0 16px 40px -4px rgba(0, 0, 0, 0.8), 0 0 24px -6px rgba(183, 214, 61, 0.2), inset 0 1px 1px rgba(243, 239, 230, 0.12)'
              : '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(243, 239, 230, 0.08)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 'clamp(16px, 3vw, 28px)'
          }}
        >
          {/* Logo / Brand */}
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
              color: '#F3EFE6',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
            aria-label="Harshit Mishra - Scroll to top"
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'rgba(183, 214, 61, 0.14)',
                border: '1px solid rgba(183, 214, 61, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B7D63D'
              }}
            >
              <Terminal size={16} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span style={{ lineHeight: 1.1 }}>HARSHIT MISHRA</span>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                DEV // 3D_PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: 'rgba(41, 41, 41, 0.6)',
              padding: '4px 6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(243, 239, 230, 0.08)'
            }}
            className="desktop-nav-menu"
          >
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    position: 'relative',
                    padding: '7px 15px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#B7D63D' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'rgba(183, 214, 61, 0.12)' : 'transparent',
                    borderRadius: 'var(--radius-full)',
                    border: `1px solid ${isActive ? 'rgba(183, 214, 61, 0.35)' : 'transparent'}`,
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                  className="nav-link-btn"
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#B7D63D',
                        boxShadow: '0 0 6px #B7D63D'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Status Beacon & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(183, 214, 61, 0.12)',
                border: '1px solid rgba(183, 214, 61, 0.35)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#B7D63D'
              }}
              className="status-pill"
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#B7D63D',
                  boxShadow: '0 0 8px #B7D63D'
                }}
              />
              AVAILABLE
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="btn-copper"
              style={{
                padding: '8px 18px',
                fontSize: '0.8125rem'
              }}
            >
              <span>Contact</span>
              <ArrowUpRight size={14} className="btn-arrow" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(41, 41, 41, 0.7)',
                border: '1px solid rgba(243, 239, 230, 0.12)',
                color: '#F3EFE6',
                cursor: 'pointer'
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer in Frosted Black Glass */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 90,
            backgroundColor: 'rgba(23, 23, 23, 0.96)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', width: '100%', maxWidth: '320px' }}>
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-md)',
                    color: isActive ? '#B7D63D' : '#F3EFE6',
                    backgroundColor: isActive ? 'rgba(183, 214, 61, 0.12)' : 'rgba(41, 41, 41, 0.6)',
                    border: `1px solid ${isActive ? 'rgba(183, 214, 61, 0.4)' : 'rgba(243, 239, 230, 0.1)'}`,
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .status-pill {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        .nav-link-btn:hover {
          color: #B7D63D !important;
          background-color: rgba(183, 214, 61, 0.08) !important;
        }
      `}</style>
    </>
  );
};
