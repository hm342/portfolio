import React, { useState } from 'react';
import { Globe, Smartphone, Cpu, Layers } from 'lucide-react';
import { expertiseData } from '../data/expertise';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';

export const Expertise = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState(0);

  const getDomainIcon = (id) => {
    switch (id) {
      case 'web-development':
        return <Globe size={22} className="text-gold-primary" />;
      case 'app-development':
        return <Smartphone size={22} className="text-gold-primary" />;
      case 'ai-automation':
        return <Cpu size={22} className="text-gold-primary" />;
      default:
        return <Layers size={22} className="text-gold-primary" />;
    }
  };

  return (
    <section id="expertise" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="02"
          category="CORE CAPABILITIES"
          title="Three pillars of modern software engineering."
          subtitle="From relational databases and responsive web systems to cross-platform mobile apps and autonomous agent workflows."
        />

        {/* Large Editorial Interactive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
          className="expertise-cards-grid"
        >
          {expertiseData.map((group, idx) => {
            const isSelected = activeTab === idx;

            return (
              <Reveal key={group.id} delay={0.1 * idx} yOffset={24}>
                <div
                  className="editorial-card"
                  onMouseEnter={() => {
                    setActiveTab(idx);
                    setCursor('hover');
                  }}
                  onMouseLeave={resetCursor}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--gold-border)' : 'var(--border-subtle)',
                    backgroundColor: isSelected ? 'rgba(18, 19, 26, 0.95)' : 'var(--bg-card)',
                    boxShadow: isSelected
                      ? '0 20px 48px -10px rgba(0, 0, 0, 0.7), 0 0 24px -6px var(--gold-glow)'
                      : 'var(--shadow-card)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Card Top / Header */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '24px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: 'var(--radius-xs)',
                            background: isSelected ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                            border: isSelected ? '1px solid var(--gold-border)' : '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--gold-primary)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {getDomainIcon(group.id)}
                        </div>
                        <span
                          className="mono-num"
                          style={{
                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: 'var(--gold-primary)'
                          }}
                        >
                          [{group.index}]
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: isSelected ? 'var(--gold-light)' : 'var(--text-dim)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {isSelected ? '// ACTIVE INSPECTION' : 'CLICK TO FOCUS'}
                      </span>
                    </div>

                    <h3
                      className="heading-card"
                      style={{
                        fontSize: '1.5rem',
                        marginBottom: '8px',
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-primary)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {group.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        marginBottom: '16px',
                        fontWeight: 500
                      }}
                    >
                      {group.tagline}
                    </p>

                    <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                      {group.summary}
                    </p>

                    {/* Key Competencies / Focus Areas */}
                    <div style={{ marginBottom: '28px' }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: 'var(--gold-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          marginBottom: '12px'
                        }}
                      >
                        // Core Competencies
                      </div>

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {group.focusAreas.map((area, aIdx) => (
                          <li
                            key={aIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.84375rem',
                              color: 'var(--text-muted)'
                            }}
                          >
                            <span style={{ color: 'var(--gold-primary)', marginTop: '3px', fontSize: '0.75rem' }}>▸</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Supporting Technologies Stack */}
                  <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-hairline)' }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '10px'
                      }}
                    >
                      Technologies & Roles
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {group.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 10px',
                            background: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                            border: isSelected ? '1px solid var(--gold-border-subtle)' : '1px solid var(--border-hairline)',
                            borderRadius: 'var(--radius-xs)',
                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.25s ease'
                          }}
                        >
                          <span style={{ color: isSelected ? 'var(--gold-light)' : 'var(--text-primary)', fontWeight: 500 }}>
                            {tech.name}
                          </span>
                          <span style={{ color: 'var(--text-dim)', fontSize: '0.6875rem' }}>
                            • {tech.role}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Discipline Note */}
                    <div
                      style={{
                        marginTop: '16px',
                        padding: '10px 12px',
                        background: 'rgba(10, 10, 13, 0.5)',
                        borderLeft: '2px solid var(--gold-primary)',
                        borderRadius: '0 var(--radius-xs) var(--radius-xs) 0',
                        fontSize: '0.78125rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic'
                      }}
                    >
                      {group.architectureNote}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
