import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Check, Briefcase, Zap } from 'lucide-react';
import { experienceData } from '../data/experience';
import { hackathonsData } from '../data/hackathons';
import { SectionHeading } from '../components/common/SectionHeading';
import { MagicCard } from '../components/ui/MagicCard';
import { SMOOTH_EASE } from '../utils/animations';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <SectionHeading
          theme="dark"
          category="EXPERIENCE"
          title="Professional work history."
          subtitle="Engineering experience across production web applications, backend services, and cross-platform mobile interfaces."
        />

        {/* Timeline Wrapper with Cyber Neon Spine */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            marginInline: 'auto',
            paddingLeft: 'clamp(28px, 4vw, 44px)',
            marginBottom: '64px'
          }}
          className="timeline-container"
        >
          {/* Vertical Neon Timeline Spine Line */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: 'clamp(10px, 1.8vw, 16px)',
              width: '2px',
              background: 'linear-gradient(180deg, #00F2FE 0%, #A855F7 60%, rgba(255, 255, 255, 0.1) 100%)',
              boxShadow: '0 0 12px rgba(0, 242, 254, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {experienceData.map((item, idx) => {
              const isCurrent = idx === 0;

              return (
                <div key={item.id} style={{ position: 'relative' }}>
                  {/* Timeline Glowing Node */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '22px',
                      left: 'clamp(-28px, -4vw, -44px)',
                      transform: 'translateX(clamp(5px, 1vw, 10px))',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? '#00F2FE' : 'rgba(255, 255, 255, 0.4)',
                      border: `2px solid ${isCurrent ? '#040812' : '#0F172A'}`,
                      boxShadow: isCurrent ? '0 0 16px #00F2FE, 0 0 30px #00F2FE' : 'none',
                      zIndex: 2
                    }}
                  />

                  {/* Sequential Entrance Black Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: SMOOTH_EASE }}
                  >
                    <MagicCard
                      spotlightColor="rgba(0, 242, 254, 0.12)"
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
                          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: '#00F2FE',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              display: 'block',
                              marginBottom: '4px'
                            }}
                          >
                            {item.company}
                          </span>
                          <h3 className="heading-sub" style={{ fontSize: '1.25rem', color: '#F8FAFC' }}>
                            {item.role}
                          </h3>
                        </div>

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 12px',
                            backgroundColor: isCurrent ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                            border: `1px solid ${isCurrent ? 'rgba(0, 242, 254, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                            borderRadius: 'var(--radius-full)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: isCurrent ? '#00F2FE' : 'var(--text-secondary)',
                            fontWeight: isCurrent ? 700 : 500
                          }}
                        >
                          <Calendar size={13} color={isCurrent ? '#00F2FE' : 'var(--text-muted)'} />
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
                              lineHeight: 1.6
                            }}
                          >
                            <Check size={14} color="#00F2FE" style={{ marginTop: '4px', flexShrink: 0 }} />
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
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.71875rem',
                              color: '#F8FAFC',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              padding: '3px 9px',
                              borderRadius: '4px'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </MagicCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hackathons Subsection in Frosted Black Glass */}
        {hackathonsData && hackathonsData.length > 0 && (
          <div style={{ maxWidth: '920px', marginInline: 'auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="label-overline">
                HACKATHONS & INNOVATION CHALLENGES
              </span>
              <h3 className="heading-sub" style={{ fontSize: '1.25rem', marginTop: '6px', color: '#F8FAFC' }}>
                Technical Prototyping & Sprint Competitions
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '18px'
              }}
            >
              {hackathonsData.map((hack, hIdx) => (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: hIdx * 0.1, ease: SMOOTH_EASE }}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(192, 132, 252, 0.15)',
                        border: '1px solid rgba(192, 132, 252, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C084FC'
                      }}
                    >
                      <Award size={16} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#F8FAFC' }}>
                      {hack.title}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#00F2FE',
                      fontWeight: 600
                    }}
                  >
                    {hack.edition}
                  </span>

                  <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
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
