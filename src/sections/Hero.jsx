import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Code2, Layers, Cpu, ExternalLink } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';
import { SMOOTH_EASE } from '../utils/animations';
import { HeroScene3D } from '../components/3d/HeroScene3D';
import { Meteors } from '../components/ui/Meteors';
import { MagicCard } from '../components/ui/MagicCard';
import { BorderBeam } from '../components/ui/BorderBeam';

export const Hero = () => {
  const heroTechnologies = [
    { name: 'Laravel & PHP', color: '#00F2FE' },
    { name: 'React & Three.js', color: '#38BDF8' },
    { name: 'React Native', color: '#34D399' },
    { name: 'MySQL & Architecture', color: '#F59E0B' },
    { name: 'AI & Edge Vision', color: '#C084FC' }
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(110px, 14vh, 140px)',
        paddingBottom: ' clamp(60px, 8vh, 90px)'
      }}
    >
      {/* Background Magic UI Meteors */}
      <Meteors number={22} />

      {/* Ambient Radial Glowing Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Operational Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(14, 18, 28, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              boxShadow: '0 0 20px -5px rgba(0, 242, 254, 0.3)'
            }}
          >
            <span className="status-beacon" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em'
              }}
            >
              HARSHIT MISHRA // SENIOR SOFTWARE DEVELOPER
            </span>
          </div>
        </motion.div>

        {/* Hero Title and Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '960px', marginInline: 'auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: SMOOTH_EASE }}
            className="display-hero"
            style={{
              marginBottom: '20px',
              letterSpacing: '-0.035em'
            }}
          >
            Architecting{' '}
            <span className="gradient-text-cyan">High-Performance</span>{' '}
            Web, Mobile &{' '}
            <span className="gradient-text-purple">3D Systems</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: SMOOTH_EASE }}
            className="body-lead"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              marginInline: 'auto',
              marginBottom: '36px'
            }}
          >
            Senior engineer specializing in full-cycle software engineering: robust Laravel & PHP backends, reactive React & React Native client interfaces, and tactile 3D experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: SMOOTH_EASE }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="btn-copper"
              style={{ padding: '14px 32px', fontSize: '0.9375rem' }}
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={16} className="btn-arrow" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="btn-charcoal"
              style={{ padding: '14px 28px', fontSize: '0.9375rem' }}
            >
              <Sparkles size={16} style={{ color: '#00F2FE' }} />
              <span>Interactive 3D Skills</span>
            </button>
          </motion.div>
        </div>

        {/* 3D Interactive Stage / Holographic Quantum Matrix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: SMOOTH_EASE }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
            marginInline: 'auto'
          }}
        >
          <div
            className="glass-card-elevated"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              padding: 'clamp(20px, 4vw, 40px)',
              overflow: 'hidden',
              alignItems: 'center'
            }}
          >
            {/* Animated Border Beam */}
            <BorderBeam size={320} duration={14} colorFrom="#00F2FE" colorTo="#A855F7" />

            {/* Left Column: Interactive Three.js 3D WebGL Scene */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '380px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, rgba(0, 242, 254, 0.08) 0%, rgba(3, 4, 8, 0.4) 70%)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Three.js Canvas */}
              <HeroScene3D />

              {/* Overlay 3D Hint */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span className="status-beacon" />
                THREE_UI // 3D_INTERACTIVE_CORE (DRAG / HOVER)
              </div>
            </div>

            {/* Right Column: High-Tech Telemetry HUD & Tech Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  // ARCHITECTURE & STACK
                </span>
                <h3
                  className="heading-sub"
                  style={{ color: '#F8FAFC', fontSize: '1.45rem', marginBottom: '10px' }}
                >
                  Production-Grade Full-Cycle Engineering
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Direct hands-on architecture across relational database schema modeling in MySQL, complex backend business logic in Laravel & PHP, high-performance responsive web layouts in React, and native mobile ergonomics.
                </p>
              </div>

              {/* Tech Pills with Glowing Dots */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {heroTechnologies.map((t) => (
                  <div
                    key={t.name}
                    className="tech-badge"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      gap: '8px'
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: t.color,
                        boxShadow: `0 0 8px ${t.color}`
                      }}
                    />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>

              {/* 3 Metrics in Glass Strips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#00F2FE'
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    Production Ready
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#C084FC'
                    }}
                  >
                    4+
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    Core Domains
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#34D399'
                    }}
                  >
                    24+
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    Live Skills
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
