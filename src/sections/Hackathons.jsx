import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { hackathonsData } from '../data/hackathons';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { Badge } from '../components/common/Badge';
import { useCursor } from '../context/CursorContext';
import { LUXURY_EASE } from '../utils/animations';

export const Hackathons = () => {
  const { setCursor, resetCursor } = useCursor();
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const selectedEvent = hackathonsData[selectedEventIndex];

  return (
    <section id="hackathons" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="07"
          category="COLLABORATIVE SPRINTS"
          title="Hackathons & technical build challenges."
          subtitle="Intensive prototyping environments centered on problem decomposition, team velocity, and rapid architectural delivery."
        />

        {/* Large Editorial Magazine Format */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
          className="hackathons-container"
        >
          {/* Left Column: Event Selector Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.6875rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}
            >
              // Hackathon Archive
            </div>

            {hackathonsData.map((event, idx) => {
              const isSelected = selectedEventIndex === idx;

              return (
                <Reveal key={event.id} delay={0.1 * idx}>
                  <div
                    onClick={() => setSelectedEventIndex(idx)}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="editorial-card"
                    style={{
                      cursor: 'pointer',
                      padding: '20px 24px',
                      background: isSelected ? 'rgba(21, 22, 30, 0.95)' : 'rgba(15, 16, 21, 0.6)',
                      borderColor: isSelected ? 'var(--gold-border)' : 'var(--border-subtle)',
                      boxShadow: isSelected ? '0 12px 30px -8px rgba(0, 0, 0, 0.7), 0 0 16px -4px var(--gold-glow)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span
                        className="mono-num"
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.75rem',
                          color: isSelected ? 'var(--gold-primary)' : 'var(--text-dim)',
                          fontWeight: 600
                        }}
                      >
                        [0{idx + 1}]
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: isSelected ? 'var(--gold-light)' : 'var(--text-dim)'
                        }}
                      >
                        {event.edition}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-primary)',
                        marginBottom: '4px'
                      }}
                    >
                      {event.title}
                    </h4>

                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      {event.theme}
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* Note on Experimentation */}
            <div
              style={{
                marginTop: 'auto',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)"
              }}
            >
              RECORD NOTE: Showcasing genuine hands-on participation, collaborative design sprints, and real technical learning.
            </div>
          </div>

          {/* Right Column: Active Event In-Depth Inspection Card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="editorial-card"
                style={{
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(19, 20, 27, 0.95) 0%, rgba(13, 14, 18, 0.98) 100%)',
                  borderColor: 'var(--gold-border-subtle)',
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Event Badging */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                    <div className="status-indicator">
                      <span className="status-dot" />
                      <span>{selectedEvent.edition}</span>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.75rem',
                        color: 'var(--gold-light)'
                      }}
                    >
                      THEME: {selectedEvent.focus}
                    </span>
                  </div>

                  <h3
                    className="heading-sub"
                    style={{
                      fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                      color: 'var(--text-primary)',
                      marginBottom: '8px'
                    }}
                  >
                    {selectedEvent.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                      fontSize: '1rem',
                      color: 'var(--gold-light)',
                      marginBottom: '20px'
                    }}
                  >
                    {selectedEvent.theme}
                  </p>

                  <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '28px' }}>
                    {selectedEvent.description}
                  </p>

                  {/* Ready Image / Blueprint Attachment Slot */}
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      background: 'rgba(10, 10, 13, 0.8)',
                      border: '1px dashed var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      marginBottom: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Architectural Grid Background */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        pointerEvents: 'none'
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <ImageIcon size={22} color="var(--gold-primary)" style={{ opacity: 0.7, marginBottom: '4px' }} />
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.75rem',
                          color: 'var(--gold-light)',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {selectedEvent.imagePlaceholder}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                        Ready for verified sprint photo / documentation asset
                      </span>
                    </div>
                  </div>

                  {/* Key Takeaways & Competencies Built */}
                  <div style={{ marginBottom: '24px' }}>
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
                      // Sprint Competencies & Collaboration
                    </div>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedEvent.learnings.map((lrn, lIdx) => (
                        <li
                          key={lIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.84375rem',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          <span style={{ color: 'var(--gold-primary)', marginTop: '2px' }}>▸</span>
                          <span>{lrn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Event Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '20px', borderTop: '1px solid var(--border-hairline)' }}>
                  {selectedEvent.tags.map((t) => (
                    <Badge key={t} variant="gold">
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hackathons-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
