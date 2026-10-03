import React from 'react';
import { ArrowUpRight, Globe, Smartphone, Cpu, Check } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, isReversed = false }) => {
  return (
    <article
      className="project-row"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(32px, 5vw, 56px)',
        alignItems: 'center',
        paddingBlock: 'clamp(40px, 6vw, 64px)',
        borderBottom: '1px solid var(--border-subtle)'
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
        {/* Category & Year */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="label-overline">
            {project.category}
          </span>
          <span style={{ color: 'var(--border-strong)', fontSize: '0.75rem' }}>•</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="heading-sub" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        {/* Descriptions */}
        <p className="body-lead" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          {project.summary}
        </p>

        {project.details && (
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            {project.details}
          </p>
        )}

        {/* Key Features */}
        {project.features && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBlock: '4px' }}>
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.84375rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Check size={14} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        {project.link && (
          <div style={{ paddingTop: '8px' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: 'fit-content' }}
            >
              <span>{project.linkText || 'View Project'}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>

      {/* Visual Product Mockup Column */}
      <div
        style={{
          order: isReversed ? 1 : 2
        }}
      >
        <div
          className="card-modern"
          style={{
            overflow: 'hidden',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          {/* Mockup Window Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              backgroundColor: 'var(--bg-subtle)',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                backgroundColor: 'var(--bg-surface)',
                padding: '2px 10px',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {project.displayUrl}
            </div>

            <div style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {project.type}
            </div>
          </div>

          {/* Product UI Content Simulation */}
          <div
            style={{
              padding: '24px',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {/* MA Engineering */}
            {project.id === 'ma-engineering' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>M.A. Engineering Industries</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Precision Industrial Manufacturing</div>
                    </div>
                  </div>
                  <span className="status-pill" style={{ fontSize: '0.6875rem' }}>
                    <span className="status-dot" /> Live
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {['CNC Machining', 'Fabrication', 'Tooling Lines'].map((item, i) => (
                    <div key={i} style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>CATALOG 0{i+1}</div>
                      <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginTop: '2px' }}>{item}</div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '2px' }}>Spec Verified</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '10px 14px', backgroundColor: '#F8FAFC', border: '1px solid var(--border-subtle)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)' }}>Dynamic RFQ & Technical Inquiry Pipeline</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>PHP · MySQL</span>
                </div>
              </div>
            )}

            {/* Universal Exports */}
            {project.id === 'universal-exports' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Universal Exports</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>International Export & Logistics</div>
                    </div>
                  </div>
                  <span className="status-pill" style={{ fontSize: '0.6875rem' }}>
                    <span className="status-dot" /> Live
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>GLOBAL CATALOG</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginTop: '2px' }}>Multi-Category Indices</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Cross-border compliance tracking</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>LARAVEL BACKEND</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginTop: '2px' }}>Enterprise Pipeline</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>International client inquiries</div>
                  </div>
                </div>

                <div style={{ padding: '8px 12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Architecture: MVC Pattern</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>Relational MySQL</span>
                </div>
              </div>
            )}

            {/* Simplifyte */}
            {project.id === 'simplifyte' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%', maxWidth: '320px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Smartphone size={16} color="var(--accent-primary)" />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Simplifyte Mobile</span>
                    </div>
                    <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', backgroundColor: 'var(--accent-subtle)', padding: '2px 6px', borderRadius: '4px' }}>
                      Supabase Sync
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Daily Task Flow', 'Cloud State Sync', 'Lightweight Cache'].map((t, i) => (
                      <div key={i} style={{ padding: '8px 12px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>{t}</span>
                        <Check size={12} color="var(--accent-primary)" />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    React Native · Gesture Navigation
                  </div>
                </div>
              </div>
            )}

            {/* TerraRover */}
            {project.id === 'terrarover' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Cpu size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>TerraRover System</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Field Robotics & Computer Vision</div>
                    </div>
                  </div>
                  <span className="status-pill" style={{ fontSize: '0.6875rem' }}>
                    <span className="status-dot" /> Hardware / App
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>ON-DEVICE VISION</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginTop: '2px' }}>Leaf Pathology Model</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Real-time disease detection</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>OPERATOR APP</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginTop: '2px' }}>React Native Telemetry</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>GPS and status telemetry</div>
                  </div>
                </div>

                <div style={{ padding: '8px 12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Sensor Fusion & Motor Control</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>Bidirectional Telemetry</span>
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
