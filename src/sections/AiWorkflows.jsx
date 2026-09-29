import React, { useState } from 'react';
import { Sparkles, Repeat, Cpu, Network, Terminal } from 'lucide-react';
import { aiWorkflowsData } from '../data/aiWorkflows';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';

export const AiWorkflows = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeDomain, setActiveDomain] = useState(0);

  const getDomainIcon = (id) => {
    switch (id) {
      case 'prompt-engineering':
        return <Terminal size={20} />;
      case 'loop-prompting':
        return <Repeat size={20} />;
      case 'agentic-ai':
        return <Cpu size={20} />;
      case 'multi-agent-workflows':
        return <Network size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <section id="ai" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="05"
          category="SYSTEMS EXPERIMENTATION"
          title="AI / Beyond conventional code."
          subtitle={aiWorkflowsData.tagline}
        />

        {/* Manifesto Banner */}
        <Reveal delay={0.1}>
          <div
            style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              background: 'rgba(16, 17, 24, 0.7)',
              borderLeft: '3px solid var(--gold-primary)',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              marginBottom: '48px',
              borderTop: '1px solid var(--border-subtle)',
              borderRight: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <p className="body-lead" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '12px' }}>
              "{aiWorkflowsData.manifesto}"
            </p>
            <div
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.6875rem',
                color: 'var(--gold-light)',
                letterSpacing: '0.1em'
              }}
            >
              // RESEARCH PHILOSOPHY & SYSTEMIC REASONING
            </div>
          </div>
        </Reveal>

        {/* Interactive 4-Domain Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
          className="ai-domains-grid"
        >
          {aiWorkflowsData.domains.map((domain, idx) => {
            const isSelected = activeDomain === idx;

            return (
              <Reveal key={domain.id} delay={0.1 * idx}>
                <div
                  onClick={() => setActiveDomain(idx)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="editorial-card"
                  style={{
                    height: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: isSelected ? 'rgba(20, 21, 29, 0.95)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--gold-border)' : 'var(--border-subtle)',
                    boxShadow: isSelected ? '0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 20px -6px var(--gold-glow)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: 'var(--radius-xs)',
                          background: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: isSelected ? '1px solid var(--gold-border)' : '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)'
                        }}
                      >
                        {getDomainIcon(domain.id)}
                      </div>
                      <span
                        className="mono-num"
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.75rem',
                          color: isSelected ? 'var(--gold-primary)' : 'var(--text-dim)'
                        }}
                      >
                        [{domain.index}]
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '1.1875rem',
                        fontWeight: 600,
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-primary)',
                        marginBottom: '6px'
                      }}
                    >
                      {domain.title}
                    </h4>

                    <div
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        marginBottom: '14px'
                      }}
                    >
                      {domain.subtitle}
                    </div>

                    <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                      {domain.description}
                    </p>
                  </div>

                  {/* Techniques list */}
                  <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '12px' }}>
                    <div style={{ fontSize: '0.6875rem', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: 'var(--gold-primary)', marginBottom: '8px' }}>
                      // Core Mechanisms
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {domain.techniques.map((t, tIdx) => (
                        <li key={tIdx} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: 'var(--gold-primary)' }}>•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Visual Multi-Agent Orchestration Flow Simulator */}
        <Reveal delay={0.25} yOffset={25}>
          <div
            className="editorial-card"
            style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              background: 'linear-gradient(180deg, rgba(16, 17, 24, 0.95) 0%, rgba(10, 10, 14, 0.98) 100%)',
              border: '1px solid var(--gold-border-subtle)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Network size={18} color="var(--gold-primary)" />
                <span className="label-overline">SIMULATED AGENTIC WORKFLOW // ORCHESTRATION PIPELINE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-dot" />
                <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.6875rem', color: 'var(--gold-light)' }}>
                  STATE: DETERMINISTIC EXECUTION
                </span>
              </div>
            </div>

            {/* Agent Pipeline Nodes Visual */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                position: 'relative'
              }}
              className="agent-nodes-grid"
            >
              {[
                { name: '1. Planner Agent', role: 'Deconstructs objective into DAG subtasks', tag: 'INPUT_DECOMPOSITION' },
                { name: '2. Code Agent', role: 'Synthesizes modular TypeScript/Python logic', tag: 'DETERMINISTIC_GEN' },
                { name: '3. Critic / Test Agent', role: 'Executes static analysis & unit tests', tag: 'VERIFICATION_PASS' },
                { name: '4. Loop Controller', role: 'Feeds error traces back until specs pass', tag: 'RECURSIVE_HEALING' }
              ].map((agent, aIdx) => (
                <div
                  key={aIdx}
                  style={{
                    padding: '18px 16px',
                    background: 'rgba(10, 10, 14, 0.7)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.625rem',
                        color: 'var(--gold-primary)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      {agent.tag}
                    </span>
                    <h5
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px'
                      }}
                    >
                      {agent.name}
                    </h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {agent.role}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      borderTop: '1px solid var(--border-hairline)',
                      fontSize: '0.6875rem',
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)"
                    }}
                  >
                    <span style={{ color: 'var(--text-dim)' }}>STATUS:</span>
                    <span style={{ color: 'var(--gold-light)' }}>ACTIVE_THREAD</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Experimentation */}
            <div
              style={{
                marginTop: '20px',
                padding: '12px 16px',
                background: 'rgba(212, 175, 55, 0.04)',
                border: '1px solid var(--gold-border-subtle)',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)' }}>
                Applied methodology: Programmatic validation over raw stochastic generation.
              </span>
              <span style={{ fontSize: '0.6875rem', fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", color: 'var(--gold-primary)' }}>
                [NON-FABRICATED RESEARCH EXPLORATION]
              </span>
            </div>
          </div>
        </Reveal>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-domains-grid {
            grid-template-columns: 1fr !important;
          }
          .agent-nodes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
