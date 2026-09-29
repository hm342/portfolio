import React from 'react';
import { ArrowUpRight, Smartphone, Globe } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { Reveal } from '../common/Reveal';
import { Badge } from '../common/Badge';

export const ProjectShowcase = ({ project, _index, isReversed = false }) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div
      style={{
        position: 'relative',
        paddingBlock: 'clamp(32px, 6vw, 64px)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 6vw, 64px)',
          alignItems: 'center'
        }}
        className={`project-row ${isReversed ? 'project-reversed' : ''}`}
      >
        {/* Project Narrative & Details */}
        <div style={{ display: 'flex', flexDirection: 'column', order: isReversed ? 2 : 1 }}>
          
          {/* Metadata Bar */}
          <Reveal delay={0.05}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <span
                className="mono-num"
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.8125rem',
                  color: 'var(--gold-primary)',
                  fontWeight: 600,
                  letterSpacing: '0.1em'
                }}
              >
                [{project.index}]
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {project.category}
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>•</span>
              <span
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)'
                }}
              >
                {project.year}
              </span>
            </div>
          </Reveal>

          {/* Project Title */}
          <Reveal delay={0.15}>
            <h3
              className="heading-sub"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}
            >
              {project.title}
            </h3>
          </Reveal>

          {/* Summary & Details */}
          <Reveal delay={0.2}>
            <p className="body-lead" style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>
              {project.summary}
            </p>
            <p className="body-regular" style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
              {project.details}
            </p>
          </Reveal>

          {/* Core Deliverables */}
          <Reveal delay={0.25}>
            <div style={{ marginBottom: '28px' }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.6875rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                // Engineering Deliverables
              </div>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                {project.deliverables.map((item, dIdx) => (
                  <li
                    key={dIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Technology Badges */}
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>

          {/* Action Trigger */}
          <Reveal delay={0.35}>
            <div style={{ display: 'inline-flex' }}>
              <div
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '10px 20px', cursor: 'default' }}
              >
                <span>{project.linkText}</span>
                <ArrowUpRight size={14} style={{ color: 'var(--gold-primary)' }} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Mockup Presentation Area */}
        <div
          style={{
            order: isReversed ? 1 : 2,
            position: 'relative'
          }}
        >
          <Reveal delay={0.2} yOffset={30}>
            <div
              onMouseEnter={() => setCursor('project', 'EXPLORE')}
              onMouseLeave={resetCursor}
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1px solid var(--gold-border-subtle)',
                background: 'linear-gradient(180deg, #13141a 0%, #0c0d11 100%)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(212, 175, 55, 0.05)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="project-mockup-frame"
            >
              {/* Window Header Chrome */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
                </div>

                <div
                  style={{
                    padding: '3px 12px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(10, 10, 13, 0.8)',
                    border: '1px solid var(--border-hairline)',
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.6875rem',
                    color: 'var(--gold-light)'
                  }}
                >
                  {project.id === 'simplifyte' ? 'simplifyte.app // mobile_runtime' : `${project.id}.systems // production`}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.625rem',
                    color: 'var(--text-dim)'
                  }}
                >
                  {project.type}
                </div>
              </div>

              {/* High-Fidelity Architectural Visual Canvas */}
              <div
                style={{
                  minHeight: '280px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                {/* Background Grid Pattern */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.06) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    pointerEvents: 'none'
                  }}
                />

                {project.id === 'ma-engineering' && (
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '28px', height: '28px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Globe size={14} color="var(--gold-primary)" />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '0.8125rem', fontWeight: 600 }}>M.A. Engineering Industries</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Precision Manufacturing & Industrial Products</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--gold-light)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>CATALOG_STATUS: LIVE</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {['CNC Machining', 'Fabrication Line', 'Tooling Assemblies'].map((item, i) => (
                        <div key={i} style={{ padding: '14px', background: 'rgba(10, 10, 14, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                          <div style={{ fontSize: '0.625rem', color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>SPEC_0{i+1}</div>
                          <div style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>{item}</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '2px' }}>Industrial Spec Verified</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid var(--gold-border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>Client RFQ & Technical Inquiry Pipeline</span>
                      <span style={{ fontSize: '0.6875rem', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: 'var(--text-secondary)' }}>PHP • MySQL Backend</span>
                    </div>
                  </div>
                )}

                {project.id === 'universal-exports' && (
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '28px', height: '28px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Globe size={14} color="var(--gold-primary)" />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '0.8125rem', fontWeight: 600 }}>Universal Exports</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>International Export & Logistics Platform</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--gold-light)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>PORTAL: ACTIVE</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                      <div style={{ padding: '16px', background: 'rgba(10, 10, 14, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>TRADE_MATRIX</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBlock: '4px' }}>Global Product Indices</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cross-border compliance standards & categories</div>
                      </div>

                      <div style={{ padding: '16px', background: 'rgba(10, 10, 14, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>LARAVEL_FRAMEWORK</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBlock: '4px' }}>Structured Routing & Auth</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise client inquiries & data separation</div>
                      </div>
                    </div>

                    <div style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Architecture: MVC Model-View-Controller</span>
                      <span style={{ color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>DB: MySQL Relational</span>
                    </div>
                  </div>
                )}

                {project.id === 'simplifyte' && (
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '340px', background: 'rgba(10, 10, 14, 0.85)', border: '1px solid var(--gold-border-subtle)', borderRadius: '12px', padding: '16px' }}>
                      
                      {/* Mobile App Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Smartphone size={15} color="var(--gold-primary)" />
                          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Simplifyte</span>
                        </div>
                        <span style={{ fontSize: '0.625rem', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: 'var(--gold-light)' }}>SYNC: SUPABASE</span>
                      </div>

                      {/* Mock Task Rows */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['Daily Workflow Architecture', 'Telemetry Sync Endpoint', 'Performance Optimization'].map((t, idx) => (
                          <div key={idx} style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '4px', border: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>{t}</span>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                        REACT NATIVE RUNTIME • FLUID TOUCH ERGONOMICS
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .project-mockup-frame:hover {
          border-color: var(--gold-border) !important;
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-reversed {
            direction: ltr !important;
          }
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
};
