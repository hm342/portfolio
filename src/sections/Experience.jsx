import React from 'react';
import { Calendar, Award, Check } from 'lucide-react';
import { experienceData } from '../data/experience';
import { hackathonsData } from '../data/hackathons';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <SectionHeading
          category="EXPERIENCE"
          title="Professional work history."
          subtitle="Engineering experience across production web applications, backend systems, and cross-platform mobile interfaces."
        />

        {/* Clean Professional Experience List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '840px',
            marginBottom: '48px'
          }}
        >
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="card-modern"
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {/* Header: Company, Role, Period */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      letterSpacing: '0.06em',
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
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <Calendar size={13} color="var(--text-muted)" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Summary */}
              {item.summary && (
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  {item.summary}
                </p>
              )}

              {/* Responsibilities list */}
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
                    <Check size={14} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
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
            </div>
          ))}
        </div>

        {/* Clean, Factual Hackathons Subsection */}
        {hackathonsData && hackathonsData.length > 0 && (
          <div style={{ maxWidth: '840px', paddingTop: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
              <span className="label-overline">
                HACKATHONS & INNOVATION CHALLENGES
              </span>
              <h3 className="heading-sub" style={{ fontSize: '1.125rem', marginTop: '4px' }}>
                Technical Prototyping & Sprint Competitions
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}
            >
              {hackathonsData.map((hack) => (
                <div
                  key={hack.id}
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Award size={16} color="var(--accent-primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      {hack.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                    {hack.edition}
                  </span>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {hack.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
