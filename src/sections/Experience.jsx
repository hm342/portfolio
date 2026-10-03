import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Check } from 'lucide-react';
import { experienceData } from '../data/experience';
import { hackathonsData } from '../data/hackathons';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { SMOOTH_EASE } from '../utils/animations';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          category="EXPERIENCE"
          title="Professional work history."
          subtitle="Engineering experience across production web applications, backend services, and cross-platform mobile interfaces."
        />

        {/* Timeline Wrapper with Thin Vertical Line */}
        <div
          style={{
            position: 'relative',
            maxWidth: '860px',
            paddingLeft: 'clamp(28px, 4vw, 40px)',
            marginBottom: '56px'
          }}
          className="timeline-container"
        >
          {/* Vertical Timeline Spine Line (Muted Warm Gray) */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: 'clamp(8px, 1.8vw, 12px)',
              width: '1.5px',
              backgroundColor: 'var(--border-subtle)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {experienceData.map((item, idx) => {
              const isCurrent = idx === 0;

              return (
                <div key={item.id} style={{ position: 'relative' }}>
                  {/* Timeline Dot: Copper for current, subtle warm sand for past */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: 'clamp(-28px, -4vw, -40px)',
                      transform: 'translateX(clamp(4px, 1vw, 8px))',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? 'var(--accent-copper)' : 'var(--bg-surface)',
                      border: `2px solid ${isCurrent ? 'var(--accent-copper)' : 'var(--border-medium)'}`,
                      boxShadow: isCurrent ? '0 0 0 4px var(--accent-tint)' : 'none',
                      zIndex: 2
                    }}
                  />

                  {/* Sequential Entrance Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: SMOOTH_EASE }}
                    className="card-warm"
                    style={{
                      padding: 'clamp(24px, 4vw, 36px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--border-light)'
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--accent-copper)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '4px'
                          }}
                        >
                          {item.company}
                        </span>
                        <h3 className="heading-sub" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                          {item.role}
                        </h3>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          backgroundColor: isCurrent ? 'var(--accent-tint)' : 'var(--bg-warm-card)',
                          border: `1px solid ${isCurrent ? 'var(--accent-border)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-xs)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: isCurrent ? 'var(--accent-copper)' : 'var(--text-secondary)',
                          fontWeight: isCurrent ? 600 : 500
                        }}
                      >
                        <Calendar size={13} color={isCurrent ? 'var(--accent-copper)' : 'var(--text-muted)'} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    {item.summary && (
                      <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                        {item.summary}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55
                          }}
                        >
                          <Check size={14} color="var(--accent-copper)" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Applied */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-light)'
                      }}
                    >
                      {item.technologies.map((t) => (
                        <Badge key={t} variant="default">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hackathons Subsection */}
        {hackathonsData && hackathonsData.length > 0 && (
          <div style={{ maxWidth: '860px', paddingTop: '8px' }}>
            <div style={{ marginBottom: '20px' }}>
              <span className="label-overline">
                HACKATHONS & INNOVATION CHALLENGES
              </span>
              <h3 className="heading-sub" style={{ fontSize: '1.1875rem', marginTop: '6px' }}>
                Technical Prototyping & Sprint Competitions
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px'
              }}
            >
              {hackathonsData.map((hack, hIdx) => (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: hIdx * 0.1, ease: SMOOTH_EASE }}
                  className="card-warm"
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Award size={16} color="var(--accent-copper)" />
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      {hack.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                    {hack.edition}
                  </span>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {hack.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
