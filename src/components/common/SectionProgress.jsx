import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '../../data/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useCursor } from '../../context/CursorContext';
import { scrollToSection } from '../../utils/helpers';
import { LUXURY_EASE } from '../../utils/animations';

export const SectionProgress = ({ activeSection }) => {
  const { scrollProgress } = useScrollProgress();
  const { setCursor, resetCursor } = useCursor();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <aside
      className="section-progress-rail"
      aria-label="Section Progress Navigation"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 8px'
      }}
    >
      {/* Background Track Line */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          width: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          zIndex: 1
        }}
      >
        {/* Dynamic Scroll Progress Fill Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${scrollProgress * 100}%`,
            background: 'linear-gradient(180deg, var(--gold-light), var(--gold-primary))',
            boxShadow: '0 0 8px var(--gold-glow)',
            transition: 'height 0.15s ease-out'
          }}
        />
      </div>

      {/* Section Nodes */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center'
        }}
      >
        {navigationLinks.map((section, idx) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={section.id}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setCursor('hover');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                resetCursor();
              }}
            >
              {/* Tooltip Label (Floats to the left) */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: LUXURY_EASE }}
                    style={{
                      position: 'absolute',
                      right: '24px',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(12, 12, 16, 0.92)',
                      border: isActive
                        ? '1px solid var(--gold-border)'
                        : '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xs)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)'
                      }}
                    >
                      {String(idx).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: '0.75rem',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'var(--gold-light)' : 'var(--text-secondary)',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {section.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Node Button Indicator */}
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-label={`Scroll to ${section.label}`}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  padding: 0
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: isActive ? '8px' : '5px',
                    height: isActive ? '8px' : '5px',
                    borderRadius: '50%',
                    backgroundColor: isActive
                      ? 'var(--gold-primary)'
                      : isHovered
                      ? 'var(--text-secondary)'
                      : 'rgba(255, 255, 255, 0.28)',
                    boxShadow: isActive
                      ? '0 0 10px var(--gold-primary), 0 0 0 3px rgba(212, 175, 55, 0.2)'
                      : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Hide on mobile & tablet via CSS */}
      <style>{`
        @media (max-width: 1023px) {
          .section-progress-rail {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};
