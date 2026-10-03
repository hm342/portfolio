import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ArrowUpRight, Layers, Database, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { scrollToSection } from '../utils/helpers';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { SMOOTH_EASE } from '../utils/animations';

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(48px, 9vh, 96px)',
        paddingBottom: 'clamp(48px, 9vh, 96px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Typography & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Eyebrow Label (150ms) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: SMOOTH_EASE }}
              style={{ marginBottom: '18px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 12px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--accent-copper)',
                  textTransform: 'uppercase'
                }}
              >
                <span className="status-dot-copper" />
                SOFTWARE DEVELOPER · WEB & MOBILE
              </span>
            </motion.div>

            {/* Main Heading (250ms) */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: SMOOTH_EASE }}
              className="display-hero"
              style={{
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}
            >
              I build web and mobile applications that solve real business problems.
            </motion.h1>

            {/* Description (400ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: SMOOTH_EASE }}
              className="body-lead"
              style={{
                marginBottom: '28px',
                maxWidth: '560px',
                color: 'var(--text-secondary)'
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{personalInfo.name}</strong>. I specialize in full-stack web platforms, API architectures, and tactile mobile apps—turning functional requirements into resilient, production-ready software.
            </motion.p>

            {/* Technologies Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: SMOOTH_EASE }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '36px',
                padding: '10px 14px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                width: 'fit-content'
              }}
            >
              <span
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em'
                }}
              >
                STACK:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {personalInfo.heroTechnologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.84375rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {tech}
                    </span>
                    {idx < personalInfo.heroTechnologies.length - 1 && (
                      <span style={{ color: 'var(--accent-copper)', fontSize: '0.75rem' }}>·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            {/* Primary Action Buttons (500ms) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: SMOOTH_EASE }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              <button
                type="button"
                onClick={() => scrollToSection('work')}
                className="btn-copper"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="btn-arrow" />
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn-secondary-warm"
              >
                <FileText size={15} color="var(--accent-copper)" />
                <span>Get in Touch / Resume</span>
              </a>
            </motion.div>

            {/* Connect Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: SMOOTH_EASE }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Connect:
              </span>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link-copper"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="link-arrow" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link-copper"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="link-arrow" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Tasteful Editorial Visual Composition (650ms) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: SMOOTH_EASE }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Soft decorative warm sand/terracotta backdrop shape */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--accent-tint)',
                border: '1px solid var(--accent-border)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Main Editorial Card */}
            <div
              className="card-warm"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: 'clamp(24px, 4vw, 32px)',
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-dot-copper" style={{ width: '7px', height: '7px' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.06em'
                    }}
                  >
                    HARSHIT_MISHRA // RUNTIME
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--accent-copper)',
                    backgroundColor: 'var(--accent-tint)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 500
                  }}
                >
                  FULL-STACK
                </span>
              </div>

              {/* Architecture Layer Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Layer 1: Client Interfaces */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-warm-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Smartphone size={15} color="var(--accent-copper)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        User Interface & Mobile
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        React · React Native · Fluid UX
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-copper)' }}>
                    CLIENT
                  </span>
                </div>

                {/* Layer 2: API & Logic */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-warm-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Layers size={15} color="var(--accent-copper)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Backend Services & APIs
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Laravel · PHP · REST Endpoints
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-copper)' }}>
                    LOGIC
                  </span>
                </div>

                {/* Layer 3: Persistence */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-warm-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Database size={15} color="var(--accent-copper)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Data Architecture
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        MySQL · Relational Schemas · Supabase
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-copper)' }}>
                    DATA
                  </span>
                </div>
              </div>

              {/* Bottom Spec Badge */}
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78125rem'
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>Current Status:</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>

        </div>
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
