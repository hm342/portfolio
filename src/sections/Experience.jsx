import React from 'react';
import { Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { Badge } from '../components/common/Badge';
import { useCursor } from '../context/CursorContext';

export const Experience = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="06"
          category="WORK HISTORY"
          title="Professional engineering timeline."
          subtitle="Contributing production code, platform features, and collaborative solutions across professional roles."
        />

        {/* Vertical Editorial Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            marginInline: 'auto',
            paddingLeft: 'clamp(28px, 5vw, 48px)'
          }}
          className="timeline-wrapper"
        >
          {/* Vertical Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              bottom: '24px',
              left: 'clamp(10px, 2.5vw, 16px)',
              width: '1px',
              background: 'linear-gradient(180deg, var(--gold-primary) 0%, var(--border-subtle) 80%, transparent 100%)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experienceData.map((item, idx) => (
              <div key={item.id} style={{ position: 'relative' }}>
                
                {/* Milestone Node on Spine */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: 'clamp(-28px, -5vw, -48px)',
                    transform: 'translateX(clamp(6px, 1.5vw, 11px))',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#0a0a0d',
                    border: '2px solid var(--gold-primary)',
                    boxShadow: '0 0 10px var(--gold-glow)',
                    zIndex: 2
                  }}
                />

                <Reveal delay={0.15 * idx} yOffset={24}>
                  <div
                    className="editorial-card"
                    style={{
                      background: 'var(--bg-card)',
                      padding: 'clamp(24px, 3.5vw, 36px)',
                      borderColor: 'var(--border-subtle)',
                      transition: 'all 0.35s ease'
                    }}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                  >
                    {/* Header: Role & Period */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                            fontSize: '0.6875rem',
                            color: 'var(--gold-primary)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '4px'
                          }}
                        >
                          // {item.company}
                        </div>
                        <h3
                          className="heading-sub"
                          style={{
                            fontSize: '1.375rem',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {item.role}
                        </h3>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                            fontSize: '0.75rem',
                            color: 'var(--gold-light)',
                            padding: '3px 8px',
                            background: 'rgba(212, 175, 55, 0.08)',
                            borderRadius: 'var(--radius-xs)',
                            border: '1px solid var(--gold-border-subtle)'
                          }}
                        >
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </div>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="body-lead" style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                      {item.summary}
                    </p>

                    {/* Responsibilities list */}
                    <div style={{ marginBottom: '24px' }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: 'var(--gold-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          marginBottom: '10px'
                        }}
                      >
                        // Engineering Execution
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {item.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.84375rem',
                              color: 'var(--text-muted)'
                            }}
                          >
                            <span style={{ color: 'var(--gold-primary)', marginTop: '4px', fontSize: '0.75rem' }}>▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Applied */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
                      {item.technologies.map((t) => (
                        <Badge key={t} variant="default">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
