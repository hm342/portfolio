import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navigationLinks } from '../../data/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useCursor } from '../../context/CursorContext';
import { scrollToSection } from '../../utils/helpers';
import { LUXURY_EASE } from '../../utils/animations';

export const Navbar = ({ activeSection }) => {
  const { isScrolled } = useScrollProgress();
  const { setCursor, resetCursor } = useCursor();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
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

  const navItems = navigationLinks.filter(item => item.id !== 'hero');

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 80,
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, height 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(10, 10, 13, 0.88)' : 'rgba(10, 10, 13, 0.2)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          height: isScrolled ? '72px' : '84px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Identity / Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              textAlign: 'left'
            }}
            aria-label="Harshit Mishra - Return to top"
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                border: '1px solid var(--gold-border)',
                background: 'rgba(212, 175, 55, 0.08)',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)',
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.05em'
              }}
            >
              {personalInfo.monogram}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)'
                }}
              >
                {personalInfo.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                {personalInfo.role}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(14px, 1.6vw, 24px)'
            }}
            className="desktop-nav-bar"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  style={{
                    position: 'relative',
                    padding: '6px 4px',
                    fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                    fontSize: '0.84375rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--gold-light)' : 'var(--text-secondary)',
                    letterSpacing: '0.01em',
                    transition: 'color 0.25s ease'
                  }}
                >
                  {item.shortLabel}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: 'var(--gold-primary)',
                        boxShadow: '0 0 8px var(--gold-glow)'
                      }}
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                    />
                  )}
                </button>
              );
            })}

            {/* Quick Contact CTA */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="btn-luxury-secondary"
              style={{
                padding: '8px 18px',
                fontSize: '0.78125rem',
                marginLeft: '8px'
              }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} style={{ color: 'var(--gold-primary)' }} />
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(10, 10, 13, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 75,
              paddingTop: '96px',
              paddingBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}
              >
                // Navigation Index
              </div>

              {navigationLinks.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.35, ease: LUXURY_EASE }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 0',
                      borderBottom: '1px solid var(--border-hairline)',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        className="mono-num"
                        style={{
                          fontSize: '0.75rem',
                          color: isActive ? 'var(--gold-primary)' : 'var(--text-dim)',
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)"
                        }}
                      >
                        {String(index).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                          fontSize: '1.25rem',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? 'var(--gold-light)' : 'var(--text-primary)',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--gold-primary)',
                          boxShadow: '0 0 8px var(--gold-primary)'
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer Area */}
            <div className="container" style={{ marginTop: '32px' }}>
              <div
                style={{
                  padding: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="status-dot" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                    {personalInfo.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {personalInfo.socials.email}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media query styling for responsive desktop navigation */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-bar {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
