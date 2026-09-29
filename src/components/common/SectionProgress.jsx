import React, { useState, useRef, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation';
import { useSectionProgress } from '../../hooks/useSectionProgress';
import { useCursor } from '../../context/CursorContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { scrollToSection } from '../../utils/helpers';

export const SectionProgress = () => {
  const sectionIds = navigationLinks.map((item) => item.id);
  const { weights, lineProgress, activeSectionId } = useSectionProgress(sectionIds);
  const { setCursor, resetCursor } = useCursor();
  const prefersReduced = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const navRef = useRef(null);
  const [trackHeight, setTrackHeight] = useState(0);

  // Measure the exact pixel height between first and last dot centers
  useEffect(() => {
    const updateTrackDimensions = () => {
      if (navRef.current) {
        // Total nav height minus 24px (12px offset from top dot center, 12px from bottom dot center)
        const totalHeight = navRef.current.offsetHeight;
        setTrackHeight(Math.max(totalHeight - 24, 40));
      }
    };

    updateTrackDimensions();
    const timer = setTimeout(updateTrackDimensions, 300);
    window.addEventListener('resize', updateTrackDimensions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateTrackDimensions);
    };
  }, []);

  const getSectionEditorialLabel = (section, _idx) => {
    switch (section.id) {
      case 'hero':
        return 'OVERVIEW';
      case 'about':
        return 'ABOUT';
      case 'expertise':
        return 'EXPERTISE';
      case 'work':
        return 'SELECTED WORK';
      case 'terrarover':
        return 'TERRAROVER';
      case 'ai':
        return 'AI & SYSTEMS';
      case 'experience':
        return 'EXPERIENCE';
      case 'hackathons':
        return 'HACKATHONS';
      case 'technologies':
        return 'TECHNOLOGIES';
      case 'contact':
        return 'CONTACT';
      default:
        return section.shortLabel.toUpperCase();
    }
  };

  return (
    <aside
      className="section-nav-rail"
      aria-label="Section Navigation"
      style={{
        position: 'fixed',
        left: 'clamp(20px, 2.8vw, 42px)',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px 0',
        userSelect: 'none'
      }}
    >
      {/* Container holding track and points */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        
        {/* Background Base Muted Track Line (Thicker 3px width) */}
        <div
          style={{
            position: 'absolute',
            left: '11px',
            top: '12px',
            width: '3px',
            height: trackHeight > 0 ? `${trackHeight}px` : 'calc(100% - 24px)',
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            borderRadius: '99px',
            zIndex: 1,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        >
          {/* Continuous Traveling Gold Progress Line (Prominent 3px width with glow) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${Math.min(Math.max(lineProgress * 100, 2), 100)}%`,
              background: 'linear-gradient(180deg, #f4e5b8 0%, #d4af37 60%, #b89327 100%)',
              borderRadius: '99px',
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.8), 0 0 4px #d4af37',
              transition: prefersReduced ? 'none' : 'height 0.12s linear'
            }}
          />
        </div>

        {/* Section Navigation Items */}
        <nav
          ref={navRef}
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
          aria-label="Section Indicator"
        >
          {navigationLinks.map((section, idx) => {
            const rawWeight = weights[idx] ?? 0;
            const isHovered = hoveredIdx === idx;
            const weight = isHovered && rawWeight < 0.4 ? 0.45 : rawWeight;
            const isFocused = activeSectionId === section.id;
            const isActive = weight > 0.4 || isFocused;
            const displayLabel = getSectionEditorialLabel(section, idx);

            // Interpolated visual values:
            // 1. Soft circular radial background glow behind the dot
            const glowOpacity = prefersReduced ? (isActive ? 0.95 : 0.08) : 0.06 + 0.94 * weight;
            const glowScale = prefersReduced ? (isActive ? 1.2 : 0.75) : 0.72 + 0.52 * weight;

            // 2. Central dot dimensions & colors
            const dotSize = prefersReduced ? (isActive ? 8.5 : 5) : 5 + 3.5 * weight;
            const dotOpacity = prefersReduced ? (isActive ? 1 : 0.4) : 0.35 + 0.65 * weight;
            const dotShadow = prefersReduced
              ? (isActive ? '0 0 10px var(--gold-primary)' : 'none')
              : `0 0 ${4 + 8 * weight}px rgba(212, 175, 55, ${0.3 + 0.7 * weight})`;

            // 3. Label size, emphasis & opacity (Increased size for active page name)
            const labelOpacity = prefersReduced ? (isActive ? 1 : 0.45) : 0.42 + 0.58 * weight;
            const labelColor = isActive ? '#f4e5b8' : 'var(--text-muted)';
            const labelFontSize = isActive ? '0.84375rem' : '0.6875rem'; // Increased size for active page name!
            const labelFontWeight = isActive ? 700 : 500;
            const indexFontSize = isActive ? '0.71875rem' : '0.625rem';
            const labelTranslate = prefersReduced ? 0 : (isActive ? 5 : 0);

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setCursor('hover');
                }}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                  resetCursor();
                }}
                aria-label={`Navigate to ${section.label} section`}
                aria-current={isActive ? 'true' : undefined}
                className="section-rail-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'transparent',
                  padding: '4px 8px 4px 0',
                  margin: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                  textDecoration: 'none',
                  outline: 'none'
                }}
              >
                {/* Node Target with Center Dot & Soft Radial Glow */}
                <div
                  style={{
                    position: 'relative',
                    width: '25px',
                    height: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {/* Soft Circular Radial Background Glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.48) 0%, rgba(212, 175, 55, 0.18) 46%, transparent 74%)',
                      opacity: glowOpacity,
                      transform: `scale(${glowScale})`,
                      pointerEvents: 'none',
                      transition: prefersReduced ? 'none' : 'opacity 0.12s ease-out, transform 0.12s ease-out'
                    }}
                    aria-hidden="true"
                  />

                  {/* Central Dot */}
                  <div
                    style={{
                      width: `${dotSize}px`,
                      height: `${dotSize}px`,
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#f4e5b8' : 'rgba(255, 255, 255, 0.45)',
                      opacity: dotOpacity,
                      boxShadow: dotShadow,
                      zIndex: 4,
                      transition: prefersReduced ? 'none' : 'all 0.12s ease-out'
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Permanently Visible Section Label with Increased Active Size */}
                <div
                  className="section-rail-label-box"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: labelOpacity,
                    transform: `translateX(${labelTranslate}px)`,
                    transition: prefersReduced ? 'none' : 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {/* Section Index */}
                  <span
                    className="mono-num rail-idx"
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: indexFontSize,
                      color: isActive ? 'var(--gold-primary)' : 'var(--text-dim)',
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: '0.08em',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {String(idx).padStart(2, '0')}
                  </span>

                  {/* Section Name (Increases size when active!) */}
                  <span
                    className="rail-name"
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: labelFontSize,
                      fontWeight: labelFontWeight,
                      color: labelColor,
                      letterSpacing: isActive ? '0.14em' : '0.1em',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {displayLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Responsive & Accessibility Styles */}
      <style>{`
        /* Focus styles for keyboard accessibility */
        .section-rail-btn:focus-visible {
          outline: 1.5px solid var(--gold-primary) !important;
          outline-offset: 4px !important;
          border-radius: var(--radius-xs) !important;
        }

        /* Tablet scaling: compact rail */
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-nav-rail {
            left: 14px !important;
          }
          .section-rail-btn {
            gap: 8px !important;
          }
          .rail-name {
            font-size: 0.625rem !important;
            letter-spacing: 0.08em !important;
          }
          .rail-idx {
            font-size: 0.5625rem !important;
          }
        }

        /* Mobile & Touch Devices: hide the desktop vertical rail */
        @media (max-width: 767px), (hover: none) and (max-width: 1023px) {
          .section-nav-rail {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};
