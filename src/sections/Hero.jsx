import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useCursor } from '../context/CursorContext';
import { scrollToSection } from '../utils/helpers';
import { LUXURY_EASE } from '../utils/animations';
import { MagneticButton } from '../components/common/MagneticButton';

export const Hero = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(100px, 15vh, 140px)',
        paddingBottom: 'clamp(60px, 10vh, 100px)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Two-Column Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Narrative & Typography */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Category / Status Overline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap'
              }}
            >
              <div className="status-indicator">
                <span className="status-dot" />
                <span>{personalInfo.status}</span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.1em'
                }}
              >
                // 2026
              </span>
            </motion.div>

            {/* Small Uppercase Role Taxonomy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: LUXURY_EASE }}
              style={{ marginBottom: '16px' }}
            >
              <span className="label-overline">
                {personalInfo.categoryLabel}
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
              className="display-hero"
              style={{ marginBottom: '24px' }}
            >
              Engineering <span className="gold-text-gradient">digital products</span> with architectural rigor.
            </motion.h1>

            {/* Concise Human Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: LUXURY_EASE }}
              className="body-lead"
              style={{
                maxWidth: '580px',
                marginBottom: '40px',
                color: 'var(--text-secondary)'
              }}
            >
              Hi, I’m <strong>{personalInfo.name}</strong>. I develop production web platforms, tactile mobile applications, and intelligent systems. Combining robust backend architectures with refined interaction design and applied AI.
            </motion.p>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: LUXURY_EASE }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '48px'
              }}
            >
              <MagneticButton strength={15}>
                <button
                  type="button"
                  onClick={() => scrollToSection('work')}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-primary"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight size={16} />
                </button>
              </MagneticButton>

              <MagneticButton strength={15}>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-secondary"
                >
                  <span>Get in Touch</span>
                  <Mail size={15} style={{ color: 'var(--gold-primary)' }} />
                </button>
              </MagneticButton>
            </motion.div>

            {/* Quick Engineering Disciplines Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex',
                gap: '24px',
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '20px',
                flexWrap: 'wrap'
              }}
            >
              {[
                { no: '01', label: 'Web Architecture' },
                { no: '02', label: 'Mobile Engineering' },
                { no: '03', label: 'Autonomous Robotics' },
                { no: '04', label: 'Agentic AI' }
              ].map((item) => (
                <div key={item.no} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.6875rem',
                      color: 'var(--gold-primary)'
                    }}
                  >
                    {item.no}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                      fontSize: '0.78125rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Abstract Architectural System Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: LUXURY_EASE }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div
              className="editorial-card"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '32px',
                background: 'rgba(16, 17, 23, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--gold-border-subtle)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.08)'
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.75rem',
                      color: 'var(--gold-light)',
                      letterSpacing: '0.08em'
                    }}
                  >
                    SYS_CORE // ARCHITECTURE_NODE
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.6875rem',
                    color: 'var(--text-dim)'
                  }}
                >
                  STATE: OPTIMAL
                </span>
              </div>

              {/* Schematic Technical Diagram */}
              <div
                style={{
                  position: 'relative',
                  height: '200px',
                  marginBlock: '12px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'rgba(10, 10, 14, 0.6)',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {/* Architectural Grid Lines */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 360 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <defs>
                    <pattern id="gridPattern" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" />

                  {/* Geometric Interlocking Rings with Gold Accent */}
                  <circle cx="180" cy="100" r="68" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="180" cy="100" r="44" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
                  <circle cx="180" cy="100" r="22" stroke="#d4af37" strokeWidth="1.5" />
                  
                  {/* Cardinal Axis */}
                  <line x1="60" y1="100" x2="300" y2="100" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.8" />
                  <line x1="180" y1="20" x2="180" y2="180" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="0.8" />

                  {/* Satellite Nodes */}
                  <circle cx="100" cy="65" r="4" fill="#d4af37" />
                  <line x1="100" y1="65" x2="180" y2="100" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
                  
                  <circle cx="260" cy="65" r="4" fill="#f4e5b8" />
                  <line x1="260" y1="65" x2="180" y2="100" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />

                  <circle cx="230" cy="145" r="4" fill="#d4af37" />
                  <line x1="230" y1="145" x2="180" y2="100" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />

                  <circle cx="130" cy="145" r="4" fill="#f4e5b8" />
                  <line x1="130" y1="145" x2="180" y2="100" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
                </svg>

                {/* Central System Pill */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '6px 14px',
                    background: 'rgba(10, 10, 13, 0.95)',
                    border: '1px solid var(--gold-primary)',
                    borderRadius: 'var(--radius-xs)',
                    boxShadow: '0 0 16px rgba(212, 175, 55, 0.3)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'var(--gold-light)',
                      letterSpacing: '0.06em'
                    }}
                  >
                    HARSHIT_MISHRA
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.625rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    STACK: WEB • MOBILE • AI
                  </div>
                </div>
              </div>

              {/* Execution Layers Feed */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                {[
                  { key: 'WEB ENGINE', val: 'React • PHP • Laravel • MySQL' },
                  { key: 'MOBILE CORE', val: 'React Native • Swift • Supabase' },
                  { key: 'INTELLIGENCE', val: 'Multi-Agent • Loop Prompting • Vision' },
                  { key: 'FLAGSHIP', val: 'TerraRover (Agri Robotics & CV)' }
                ].map((row) => (
                  <div
                    key={row.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-hairline)',
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.6875rem'
                    }}
                  >
                    <span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>
                      {row.key}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            marginTop: 'clamp(48px, 8vh, 80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              color: 'var(--text-muted)',
              transition: 'color 0.25s ease'
            }}
            aria-label="Scroll to About section"
          >
            <span
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.6875rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)'
              }}
            >
              Scroll to Explore
            </span>
            <div
              style={{
                width: '20px',
                height: '32px',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '4px'
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '3px',
                  height: '6px',
                  borderRadius: '2px',
                  backgroundColor: 'var(--gold-primary)'
                }}
              />
            </div>
          </button>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
