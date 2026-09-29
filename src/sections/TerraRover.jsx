import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Cpu, Smartphone, Radio, Activity, Eye } from 'lucide-react';
import { terraRoverProject } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { Badge } from '../components/common/Badge';
import { useCursor } from '../context/CursorContext';
import { LUXURY_EASE } from '../utils/animations';

export const TerraRover = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeStep, setActiveStep] = useState(1); // 1 = Edge AI Disease Recognition

  const getStepIcon = (index) => {
    switch (index) {
      case '01':
        return <Camera size={18} />;
      case '02':
        return <Eye size={18} />;
      case '03':
        return <Smartphone size={18} />;
      case '04':
        return <Cpu size={18} />;
      case '05':
        return <Radio size={18} />;
      default:
        return <Activity size={18} />;
    }
  };

  return (
    <section
      id="terrarover"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(14, 15, 20, 0.95) 0%, rgba(10, 10, 13, 0.98) 100%)',
        borderTop: '1px solid var(--gold-border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="04"
          category="FLAGSHIP PHYSICAL & SOFTWARE SYSTEM"
          title="TerraRover: Agricultural robotics & botanical vision."
          subtitle={terraRoverProject.tagline}
        />

        {/* Overview & High-Impact Narrative Banner */}
        <Reveal delay={0.1}>
          <div
            className="editorial-card"
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              background: 'linear-gradient(135deg, rgba(20, 21, 28, 0.9) 0%, rgba(14, 15, 20, 0.95) 100%)',
              border: '1px solid var(--gold-border)',
              boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px var(--gold-glow)',
              marginBottom: '48px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top decorative coordinates */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '24px',
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.6875rem',
                color: 'var(--gold-light)',
                letterSpacing: '0.12em'
              }}
            >
              SYS_REV // AGRI_ROVER_v2
            </div>

            <div style={{ maxWidth: '880px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.75rem',
                  color: 'var(--gold-light)',
                  marginBottom: '20px'
                }}
              >
                <span className="status-dot" />
                <span>{terraRoverProject.badge}</span>
              </div>

              <h3
                className="heading-sub"
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  marginBottom: '16px',
                  color: 'var(--text-primary)'
                }}
              >
                {terraRoverProject.subheading}
              </h3>

              <p className="body-lead" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                {terraRoverProject.overview}
              </p>

              {/* Technologies Involved */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {terraRoverProject.technologies.map((t) => (
                  <Badge key={t} variant="gold">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Technical Architecture Visualization Flow (Signature Element) */}
        <div style={{ marginBottom: '56px' }}>
          <Reveal delay={0.15}>
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="label-overline">// SYSTEM ARCHITECTURE PIPELINE</span>
                <h4 style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '1.25rem', fontWeight: 600, marginTop: '4px' }}>
                  End-to-End Closed Loop Flow
                </h4>
              </div>
              <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                SELECT ANY NODE TO INSPECT SUBSYSTEM LOGIC
              </span>
            </div>
          </Reveal>

          {/* Interactive Flow Nodes Rail */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '12px',
              position: 'relative'
            }}
            className="rover-flow-rail"
          >
            {terraRoverProject.architectureFlow.map((node, idx) => {
              const isNodeActive = activeStep === idx;

              return (
                <Reveal key={node.step} delay={0.1 * idx}>
                  <div
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="editorial-card"
                    style={{
                      padding: '20px 16px',
                      cursor: 'pointer',
                      height: '100%',
                      background: isNodeActive ? 'rgba(212, 175, 55, 0.08)' : 'rgba(16, 17, 23, 0.8)',
                      borderColor: isNodeActive ? 'var(--gold-primary)' : 'var(--border-subtle)',
                      boxShadow: isNodeActive ? '0 0 24px rgba(212, 175, 55, 0.2)' : 'none',
                      transition: 'all 0.35s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-xs)',
                          background: isNodeActive ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.04)',
                          color: isNodeActive ? '#0a0a0d' : 'var(--gold-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {getStepIcon(node.step)}
                      </div>
                      <span
                        className="mono-num"
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.75rem',
                          color: isNodeActive ? 'var(--gold-light)' : 'var(--text-dim)',
                          fontWeight: 600
                        }}
                      >
                        {node.step}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.625rem',
                        color: isNodeActive ? 'var(--gold-primary)' : 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '4px'
                      }}
                    >
                      {node.layer}
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: isNodeActive ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}
                    >
                      {node.name}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Active Node Detail Inspector */}
          <div style={{ marginTop: '16px' }}>
            <AnimatePresence mode="wait">
              {terraRoverProject.architectureFlow[activeStep] && (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: LUXURY_EASE }}
                  style={{
                    padding: '24px 28px',
                    background: 'rgba(14, 15, 20, 0.95)',
                    border: '1px solid var(--gold-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ maxWidth: '720px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.75rem',
                          color: 'var(--gold-primary)',
                          fontWeight: 600
                        }}
                      >
                        STEP {terraRoverProject.architectureFlow[activeStep].step} DETAIL
                      </span>
                      <span style={{ color: 'var(--text-dim)' }}>—</span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--gold-light)' }}>
                        {terraRoverProject.architectureFlow[activeStep].layer}
                      </span>
                    </div>

                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      {terraRoverProject.architectureFlow[activeStep].description}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: '10px 18px',
                      background: 'rgba(212, 175, 55, 0.06)',
                      border: '1px solid var(--gold-border-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '0.75rem',
                      color: 'var(--gold-light)'
                    }}
                  >
                    STATUS: EXPERIMENTAL RUNTIME
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Botanical Vision Deep-Dive & Hardware Telemetry Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
          className="rover-spec-grid"
        >
          {/* Botanical AI Feature Spotlight */}
          <Reveal delay={0.2}>
            <div
              className="editorial-card"
              style={{
                height: '100%',
                background: 'rgba(16, 17, 23, 0.7)',
                borderColor: 'var(--gold-border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Eye size={18} color="var(--gold-primary)" />
                <span className="label-overline">AI EXPERIMENTATION SPOTLIGHT</span>
              </div>

              <h4 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
                Plant / Leaf Disease Recognition
              </h4>

              <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                The core machine learning objective on TerraRover centers on early pathogen detection. By training and testing lightweight convolutional vision models, the system classifies chlorosis, blight, and fungal infestations directly from raw camera streams without requiring persistent cloud connection.
              </p>

              <div style={{ padding: '14px', background: 'rgba(10, 10, 14, 0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Domain:</span>
                  <span style={{ color: 'var(--gold-light)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>Agricultural Foliage Health</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pipeline Stage:</span>
                  <span style={{ color: 'var(--text-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>Frame Extraction → Inference → Telemetry</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Scope:</span>
                  <span style={{ color: 'var(--gold-primary)', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>Field Prototyping & Academic Research</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Subsystems Breakdown */}
          <Reveal delay={0.3}>
            <div
              className="editorial-card"
              style={{
                height: '100%',
                background: 'rgba(16, 17, 23, 0.7)',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Cpu size={18} color="var(--gold-primary)" />
                <span className="label-overline">INTEGRATED SUBSYSTEM MATRIX</span>
              </div>

              <h4 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
                Hardware & Telemetry Architecture
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {terraRoverProject.subsystems.map((sub) => (
                  <div
                    key={sub.name}
                    style={{
                      padding: '8px 12px',
                      background: 'rgba(10, 10, 14, 0.5)',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {sub.name}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginLeft: '8px' }}>
                        [{sub.type}]
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)" }}>
                      {sub.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .rover-flow-rail {
            grid-template-columns: 1fr !important;
          }
          .rover-spec-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
