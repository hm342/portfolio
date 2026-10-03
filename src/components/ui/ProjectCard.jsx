import React, { useState } from 'react';
import { ArrowRight, Globe, Smartphone, Cpu, Check } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, index = 0, isReversed = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-row"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(36px, 6vw, 64px)',
        alignItems: 'center',
        paddingBlock: 'clamp(44px, 7vw, 72px)',
        borderBottom: '1px solid var(--dark-border)'
      }}
    >
      {/* Information Column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          order: isReversed ? 2 : 1
        }}
      >
        {/* Project Number & Category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--accent-copper)',
              letterSpacing: '0.04em'
            }}
          >
            {projectNumber}
          </span>
          <span style={{ color: 'var(--dark-border)', fontSize: '0.75rem' }}>/</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-sand)'
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Project Title with subtle shift on hover */}
        <h3
          className="heading-sub"
          style={{
            fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
            color: 'var(--dark-text)',
            transform: isHovered ? 'translateX(4px)' : 'none',
            transition: 'transform var(--transition-fast), color var(--transition-fast)'
          }}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p
          className="body-lead"
          style={{
            fontSize: '1rem',
            color: 'var(--dark-text-secondary)',
            lineHeight: 1.65
          }}
        >
          {project.summary}
        </p>

        {/* Deliverables / Features */}
        {project.features && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBlock: '4px' }}>
            {project.features.map((feat, fIdx) => (
              <li
                key={fIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.84375rem',
                  color: 'var(--dark-text-secondary)'
                }}
              >
                <Check size={14} color="var(--accent-copper)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="dark">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Interactive Action Link (Arrow moves 5-8px on hover) */}
        {project.link && (
          <div style={{ paddingTop: '10px' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper"
              style={{ width: 'fit-content' }}
            >
              <span>{project.linkText || 'View Project'}</span>
              <ArrowRight
                size={15}
                className="btn-arrow"
                style={{
                  transform: isHovered ? 'translateX(6px)' : 'none',
                  transition: 'transform var(--transition-fast)'
                }}
              />
            </a>
          </div>
        )}
      </div>

      {/* Visual Mockup Presentation Column */}
      <div
        style={{
          order: isReversed ? 1 : 2
        }}
      >
        <div
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            border: isHovered ? '1px solid rgba(183, 110, 76, 0.45)' : '1px solid var(--dark-border)',
            backgroundColor: 'var(--dark-surface)',
            boxShadow: 'var(--shadow-dark-card)',
            transition: 'border-color var(--transition-normal)'
          }}
        >
          {/* Mockup Window Chrome */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              backgroundColor: 'rgba(247, 243, 236, 0.03)',
              borderBottom: '1px solid var(--dark-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(247, 243, 236, 0.2)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(247, 243, 236, 0.2)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(247, 243, 236, 0.2)' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--accent-sand)',
                backgroundColor: 'rgba(247, 243, 236, 0.06)',
                padding: '2px 10px',
                borderRadius: '4px',
                border: '1px solid var(--dark-border)'
              }}
            >
              {project.displayUrl}
            </div>

            <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)', fontFamily: 'var(--font-mono)' }}>
              {project.type}
            </div>
          </div>

          {/* Product UI Canvas (Scales 1 -> 1.03 on hover) */}
          <div
            style={{
              padding: '28px',
              minHeight: '270px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transform: isHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {/* MA Engineering */}
            {project.id === 'ma-engineering' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(183, 110, 76, 0.15)', border: '1px solid rgba(183, 110, 76, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="var(--accent-sand)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--dark-text)' }}>M.A. Engineering Industries</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>Precision Industrial Manufacturing</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-sand)', fontFamily: 'var(--font-mono)', border: '1px solid rgba(183, 110, 76, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                    LIVE_SITE ↗
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {['CNC Machining', 'Fabrication Line', 'Tooling Assemblies'].map((item, i) => (
                    <div key={i} style={{ padding: '12px', backgroundColor: 'rgba(247, 243, 236, 0.04)', border: '1px solid var(--dark-border)', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>SPEC 0{i+1}</div>
                      <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--dark-text)', marginTop: '2px' }}>{item}</div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)', marginTop: '2px' }}>Verified Spec</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '10px 14px', backgroundColor: 'rgba(183, 110, 76, 0.08)', border: '1px solid rgba(183, 110, 76, 0.2)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78125rem', color: 'var(--accent-sand)' }}>Dynamic RFQ & Technical Inquiry System</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--dark-text-secondary)' }}>PHP · MySQL</span>
                </div>
              </div>
            )}

            {/* Universal Exports */}
            {project.id === 'universal-exports' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(183, 110, 76, 0.15)', border: '1px solid rgba(183, 110, 76, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="var(--accent-sand)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--dark-text)' }}>Universal Exports</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>International Trade & Logistics</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-sand)', fontFamily: 'var(--font-mono)', border: '1px solid rgba(183, 110, 76, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                    LIVE_SITE ↗
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(247, 243, 236, 0.04)', border: '1px solid var(--dark-border)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>TRADE MATRIX</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--dark-text)', marginTop: '2px' }}>Global Product Indices</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)' }}>Compliance tracking</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(247, 243, 236, 0.04)', border: '1px solid var(--dark-border)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>LARAVEL BACKEND</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--dark-text)', marginTop: '2px' }}>Enterprise Pipeline</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)' }}>International queries</div>
                  </div>
                </div>

                <div style={{ padding: '8px 12px', backgroundColor: 'rgba(247, 243, 236, 0.03)', border: '1px solid var(--dark-border)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>
                  <span>Architecture: MVC Pattern</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>Relational MySQL</span>
                </div>
              </div>
            )}

            {/* Simplifyte */}
            {project.id === 'simplifyte' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%', maxWidth: '320px', backgroundColor: 'rgba(247, 243, 236, 0.03)', border: '1px solid var(--dark-border)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--dark-border)', paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Smartphone size={16} color="var(--accent-copper)" />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--dark-text)' }}>Simplifyte Mobile</span>
                    </div>
                    <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)', backgroundColor: 'rgba(183, 110, 76, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                      Supabase Sync
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Daily Task Ergonomics', 'Reactive Cloud State', 'Lightweight Local Cache'].map((t, i) => (
                      <div key={i} style={{ padding: '8px 12px', backgroundColor: 'rgba(247, 243, 236, 0.05)', border: '1px solid var(--dark-border)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--dark-text)', fontWeight: 500 }}>{t}</span>
                        <Check size={12} color="var(--accent-copper)" />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.6875rem', color: 'var(--dark-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    React Native · Fluid Touch Ergonomics
                  </div>
                </div>
              </div>
            )}

            {/* TerraRover */}
            {project.id === 'terrarover' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--dark-border)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(183, 110, 76, 0.15)', border: '1px solid rgba(183, 110, 76, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cpu size={16} color="var(--accent-sand)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--dark-text)' }}>TerraRover System</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>Field Robotics & Computer Vision</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-sand)', fontFamily: 'var(--font-mono)', border: '1px solid rgba(183, 110, 76, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                    HARDWARE / APP
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(247, 243, 236, 0.04)', border: '1px solid var(--dark-border)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>ON-DEVICE VISION</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--dark-text)', marginTop: '2px' }}>Leaf Pathology Model</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)' }}>Real-time disease detection</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(247, 243, 236, 0.04)', border: '1px solid var(--dark-border)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>OPERATOR APP</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--dark-text)', marginTop: '2px' }}>React Native Telemetry</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--dark-text-secondary)' }}>GPS & telemetry readouts</div>
                  </div>
                </div>

                <div style={{ padding: '8px 12px', backgroundColor: 'rgba(247, 243, 236, 0.03)', border: '1px solid var(--dark-border)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>
                  <span>Microcontroller & Sensor Fusion</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-sand)' }}>Wireless Telemetry</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </article>
  );
};
