import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';
import { scrollToSection } from '../utils/helpers';

export const About = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="01"
          category="ETHOS & DISCIPLINE"
          title="Engineered from relational foundations to fluid interaction."
          subtitle="Building resilient software systems across full-stack web, cross-platform mobile, and applied artificial intelligence."
        />

        {/* Split Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 6vw, 72px)',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Narrative Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <Reveal delay={0.1}>
              <h3
                className="heading-sub"
                style={{
                  color: 'var(--gold-light)',
                  marginBottom: '12px'
                }}
              >
                {personalInfo.bio.headline}
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-lead" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.bio.intro}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {personalInfo.bio.narrative.map((paragraph, idx) => (
                  <p key={idx} className="body-regular" style={{ color: 'var(--text-muted)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Three Capability Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              {personalInfo.bio.pillars.map((pillar, idx) => (
                <Reveal key={pillar.number} delay={0.3 + idx * 0.1}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      padding: '18px 20px',
                      backgroundColor: 'rgba(18, 19, 25, 0.6)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      transition: 'border-color 0.3s ease, transform 0.3s ease'
                    }}
                    className="pillar-card"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--gold-primary)',
                        paddingTop: '2px'
                      }}
                    >
                      {pillar.number}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <h4
                        style={{
                          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)'
                        }}
                      >
                        {pillar.title}
                      </h4>
                      <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Quick Action */}
            <Reveal delay={0.5}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => scrollToSection('expertise')}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-secondary"
                  style={{ padding: '10px 20px', fontSize: '0.8125rem' }}
                >
                  <span>Explore Capabilities</span>
                  <ArrowUpRight size={14} style={{ color: 'var(--gold-primary)' }} />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('work')}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.78125rem',
                    color: 'var(--gold-light)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    letterSpacing: '0.04em'
                  }}
                >
                  View Case Studies →
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Dossier Visual */}
          <Reveal delay={0.25} yOffset={30}>
            <div
              className="editorial-card"
              style={{
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(20, 21, 28, 0.9) 0%, rgba(13, 14, 18, 0.95) 100%)',
                border: '1px solid var(--gold-border-subtle)',
                overflow: 'hidden'
              }}
            >
              {/* Gold Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, var(--gold-primary) 50%, transparent 100%)'
                }}
              />

              {/* Dossier Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--border-hairline)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--gold-light)'
                    }}
                  >
                    HM
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '0.875rem', fontWeight: 600 }}>
                      Harshit Mishra
                    </div>
                    <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      DOSSIER // DEV_RECORD_026
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.625rem',
                    color: 'var(--gold-light)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  ACTIVE ENGR
                </div>
              </div>

              {/* Architectural Attributes Matrix */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {[
                  { label: 'ROLE FOCUS', val: 'Full-Stack Web & Mobile Product Engineering' },
                  { label: 'CORE BACKEND', val: 'PHP, Laravel, MySQL, RESTful Architectures' },
                  { label: 'CORE FRONTEND', val: 'React, Modern JavaScript, Semantic CSS' },
                  { label: 'MOBILE RUNTIMES', val: 'React Native, Swift, Supabase, Firebase' },
                  { label: 'RESEARCH LAB', val: 'TerraRover (Edge CV, Agricultural Robotics)' },
                  { label: 'INTELLIGENCE', val: 'Prompt Loops, Agentic Workflows, Tool Calling' }
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      padding: '10px 14px',
                      background: 'rgba(10, 10, 13, 0.4)',
                      borderRadius: 'var(--radius-xs)',
                      borderLeft: '2px solid rgba(212, 175, 55, 0.4)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: 'var(--gold-primary)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: '0.84375rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engineering Quote */}
              <div
                style={{
                  padding: '18px',
                  background: 'rgba(212, 175, 55, 0.04)',
                  border: '1px solid var(--gold-border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                  position: 'relative'
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-editorial, 'Syne', serif)",
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                    lineHeight: 1.5,
                    color: 'var(--gold-light)',
                    marginBottom: '8px'
                  }}
                >
                  "Clean software is not defined by excess abstraction, but by clarity of state, resilience under load, and honest engineering."
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  — Harshit Mishra / Development Principles
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <style>{`
        .pillar-card:hover {
          border-color: var(--gold-border) !important;
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
