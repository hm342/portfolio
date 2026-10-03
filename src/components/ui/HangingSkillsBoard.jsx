import React, { useState, useEffect, useRef, useCallback } from 'react';
import { hangingSkillsData, skillCategoriesMeta } from '../../data/hangingSkills';

export const HangingSkillsBoard = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dimensions, setDimensions] = useState({ width: 1000, height: 520, isMobile: false, isTablet: false });

  // Physics simulation data stored outside React state for 60 FPS performance
  const physicsDataRef = useRef([]);
  const animFrameIdRef = useRef(null);
  const isRunningRef = useRef(false);
  const activeDragRef = useRef(null); // { id, pointerId, lastX, lastY, lastTime }

  // Check reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // Compute anchor positions and rope lengths based on container dimensions
  const computeAnchors = useCallback((width, isMobile) => {
    const total = hangingSkillsData.length;

    if (isMobile) {
      // Mobile: 6 staggered tiers of 4 capsules each
      const tiers = 6;
      const perTier = Math.ceil(total / tiers);
      const tierYOffsets = [24, 155, 290, 425, 560, 695];

      return hangingSkillsData.map((item, idx) => {
        const tier = Math.min(tiers - 1, Math.floor(idx / perTier));
        const indexInTier = idx % perTier;
        const tierItems = Math.min(perTier, total - tier * perTier);

        // Distribute horizontally in this tier
        const padding = 34;
        const usableWidth = Math.max(250, width - padding * 2);
        const anchorX = padding + (indexInTier / Math.max(1, tierItems - 1)) * usableWidth;
        const anchorY = tierYOffsets[tier];

        // Slightly shorter rope for mobile
        const length = Math.max(48, Math.min(85, item.desktopLength * 0.36));

        return {
          ...item,
          anchorX,
          anchorY,
          length,
          angle: 0,
          velocity: 0,
          isHovered: false,
          isDragging: false
        };
      });
    } else {
      const isTablet = width < 900;

      if (isTablet) {
        // Tablet: 3 staggered tiers of 8 capsules each
        const tiers = 3;
        const perTier = 8;
        const tierYOffsets = [24, 195, 365];

        return hangingSkillsData.map((item, idx) => {
          const tier = Math.min(tiers - 1, Math.floor(idx / perTier));
          const indexInTier = idx % perTier;
          const tierItems = Math.min(perTier, total - tier * perTier);

          const padding = 42;
          const usableWidth = Math.max(440, width - padding * 2);
          const anchorX = padding + (indexInTier / Math.max(1, tierItems - 1)) * usableWidth;
          const anchorY = tierYOffsets[tier] + (indexInTier % 2 === 0 ? 0 : 8);

          const length = Math.max(55, Math.min(125, item.desktopLength * 0.52));

          return {
            ...item,
            anchorX,
            anchorY,
            length,
            angle: 0,
            velocity: 0,
            isHovered: false,
            isDragging: false
          };
        });
      }

      // Desktop: Single top architectural mounting rail area
      const padding = 46;
      const usableWidth = Math.max(860, width - padding * 2);

      return hangingSkillsData.map((item, idx) => {
        // Horizontal distribution across the top
        const anchorX = padding + (idx / (total - 1)) * usableWidth;

        // Subtle 3-point alternating anchor depth on the mounting rail
        const anchorY = 18 + (idx % 3) * 6;

        // Controlled staggered length
        const length = item.desktopLength;

        return {
          ...item,
          anchorX,
          anchorY,
          length,
          angle: 0,
          velocity: 0,
          isHovered: false,
          isDragging: false
        };
      });
    }
  }, []);

  const [layoutItems, setLayoutItems] = useState(() => computeAnchors(1000, false));

  // Update DOM directly for max performance (no React state re-renders)
  const updateDOM = useCallback((item) => {
    const capsuleEl = document.getElementById(`capsule-${item.id}`);
    const ropeEl = document.getElementById(`rope-${item.id}`);
    if (!capsuleEl || !ropeEl) return;

    const angle = item.angle;
    const len = item.length;
    const x = item.anchorX + len * Math.sin(angle);
    const y = item.anchorY + len * Math.cos(angle);
    const deg = (angle * 180) / Math.PI;

    // Apply transform to capsule
    const scale = item.isHovered || item.isDragging ? 1.05 : 1;
    capsuleEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, 0) rotate(${deg}deg) scale(${scale})`;

    // Subtle curved organic rope via quadratic bezier
    const bend = item.velocity * -18;
    const cx = (item.anchorX + x) / 2 + bend;
    const cy = (item.anchorY + y) / 2;

    ropeEl.setAttribute('d', `M ${item.anchorX} ${item.anchorY} Q ${cx} ${cy} ${x} ${y}`);
  }, []);

  // Main physics loop
  const stepPhysics = useCallback(
    function runPhysics() {
      if (prefersReducedMotion) return;

      const gravity = 1400; // gravity constant in px/s^2
      const dt = 1 / 60; // 60 FPS fixed step
      const damping = 0.986; // friction damping
      let hasMotion = false;

      physicsDataRef.current.forEach((item) => {
        if (item.isDragging) {
          hasMotion = true;
          updateDOM(item);
          return;
        }

        // Pendulum angular acceleration: alpha = -(g / L) * sin(theta)
        const alpha = -(gravity / item.length) * Math.sin(item.angle);
        item.velocity = (item.velocity + alpha * dt) * damping;
        item.angle += item.velocity * dt;

        // Check if still moving
        if (Math.abs(item.angle) > 0.0015 || Math.abs(item.velocity) > 0.0015) {
          hasMotion = true;
        } else {
          item.angle = 0;
          item.velocity = 0;
        }

        updateDOM(item);
      });

      if (hasMotion || activeDragRef.current) {
        animFrameIdRef.current = requestAnimationFrame(runPhysics);
        isRunningRef.current = true;
      } else {
        isRunningRef.current = false;
      }
    },
    [prefersReducedMotion, updateDOM]
  );

  // Start physics loop if not already running
  const wakePhysics = useCallback(() => {
    if (prefersReducedMotion) return;
    if (!isRunningRef.current) {
      isRunningRef.current = true;
      animFrameIdRef.current = requestAnimationFrame(stepPhysics);
    }
  }, [prefersReducedMotion, stepPhysics]);

  // Give a capsule a physical impulse
  const nudgeCapsule = useCallback((id, impulse = 0.18) => {
    const item = physicsDataRef.current.find((p) => p.id === id);
    if (item && !item.isDragging) {
      item.velocity += impulse;
      wakePhysics();
    }
  }, [wakePhysics]);

  // Nudge all capsules (entrance / button effect)
  const nudgeAll = useCallback(() => {
    physicsDataRef.current.forEach((item, i) => {
      // Staggered alternating impulse
      setTimeout(() => {
        item.velocity = (i % 2 === 0 ? 0.22 : -0.22);
        wakePhysics();
      }, i * 35);
    });
  }, [wakePhysics]);

  // Resize Observer to keep anchors responsive
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleResize = (entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const isMobile = width < 560;
        const isTablet = width >= 560 && width < 900;
        const height = isMobile ? 820 : isTablet ? 560 : 520;

        setDimensions({ width, height, isMobile, isTablet });

        // Recompute anchors
        const newPhysics = computeAnchors(width, isMobile);
        physicsDataRef.current = newPhysics;
        setLayoutItems(newPhysics);

        // Update positions immediately
        newPhysics.forEach((item) => updateDOM(item));
        wakePhysics();
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [computeAnchors, updateDOM, wakePhysics]);

  // Staggered Entrance Animation when entering viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    let hasTriggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            hasTriggered = true;
            setTimeout(() => {
              nudgeAll();
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [nudgeAll, prefersReducedMotion]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Pointer interaction handlers
  const handlePointerDown = useCallback((e, itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (!item || !containerRef.current) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    e.stopPropagation();

    const rect = containerRef.current.getBoundingClientRect();
    const ptrX = e.clientX - rect.left;
    const ptrY = e.clientY - rect.top;

    item.isDragging = true;
    activeDragRef.current = {
      id: item.id,
      pointerId: e.pointerId,
      lastX: ptrX,
      lastY: ptrY,
      lastTime: performance.now(),
      recentVelocities: []
    };

    wakePhysics();
  }, [wakePhysics]);

  const handlePointerMove = useCallback((e, itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (!item || !item.isDragging || !activeDragRef.current || activeDragRef.current.id !== item.id) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const ptrX = e.clientX - rect.left;
    const ptrY = e.clientY - rect.top;
    const now = performance.now();

    // Vector from anchor to pointer
    const dx = ptrX - item.anchorX;
    const dy = Math.max(25, ptrY - item.anchorY); // Keep capsule below anchor
    const maxAngle = 1.05; // ~60 degrees max angle constraint

    const targetAngle = Math.max(-maxAngle, Math.min(maxAngle, Math.atan2(dx, dy)));
    const dt = Math.max(0.001, (now - activeDragRef.current.lastTime) / 1000);
    const dTheta = targetAngle - item.angle;

    // Track pointer velocity for fling release
    const instVelocity = Math.max(-6, Math.min(6, dTheta / dt));
    activeDragRef.current.recentVelocities.push(instVelocity);
    if (activeDragRef.current.recentVelocities.length > 4) {
      activeDragRef.current.recentVelocities.shift();
    }

    item.angle = targetAngle;
    activeDragRef.current.lastX = ptrX;
    activeDragRef.current.lastY = ptrY;
    activeDragRef.current.lastTime = now;

    wakePhysics();
  }, [wakePhysics]);

  const handlePointerUp = useCallback((e, itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (!item) return;

    if (item.isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}

      // Calculate release fling velocity from recent history
      let releaseVelocity = 0;
      if (activeDragRef.current && activeDragRef.current.recentVelocities.length > 0) {
        const vels = activeDragRef.current.recentVelocities;
        releaseVelocity = vels.reduce((a, b) => a + b, 0) / vels.length;
      }

      item.isDragging = false;
      item.velocity = Math.max(-5, Math.min(5, releaseVelocity * 0.45));
      activeDragRef.current = null;

      wakePhysics();
    }
  }, [wakePhysics]);

  const handleMouseEnter = useCallback((itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (item) {
      item.isHovered = true;
      updateDOM(item);
      nudgeCapsule(itemId, 0.08);
    }
  }, [nudgeCapsule, updateDOM]);

  const handleMouseLeave = useCallback((itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (item) {
      item.isHovered = false;
      updateDOM(item);
    }
  }, [updateDOM]);

  // Keyboard navigation interaction
  const handleKeyDown = useCallback((e, itemId) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nudgeCapsule(itemId, -0.25);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nudgeCapsule(itemId, 0.25);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nudgeCapsule(itemId, 0.2);
    }
  }, [nudgeCapsule]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Installation Control Bar: Category Tabs & Physics Action */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {skillCategoriesMeta.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  // Highlight nudge matching capsules
                  physicsDataRef.current.forEach((p, idx) => {
                    const match = cat.id === 'all' || p.categoryId === cat.id || p.category.toLowerCase() === cat.id;
                    if (match) {
                      setTimeout(() => nudgeCapsule(p.id, (idx % 2 === 0 ? 0.16 : -0.16)), idx * 25);
                    }
                  });
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--accent-copper)' : 'var(--bg-surface)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--accent-copper)' : 'var(--border-subtle)'}`,
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    marginLeft: '4px',
                    opacity: isActive ? 0.9 : 0.6,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Nudge / Interactive Hint */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--accent-sand)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span className="status-dot-copper" style={{ width: '5px', height: '5px' }} />
            DRAG TO SWING
          </span>

          <button
            type="button"
            onClick={nudgeAll}
            className="btn-secondary-warm"
            style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}
            title="Gently swing all capsules"
            aria-label="Swing all capsules"
          >
            Swing All
          </button>
        </div>
      </div>

      {/* Main Hanging Skills Canvas Container */}
      <div
        ref={containerRef}
        className="card-warm"
        style={{
          position: 'relative',
          width: '100%',
          height: `${dimensions.height}px`,
          backgroundColor: '#FAF7F2',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 8px 30px rgba(36, 33, 30, 0.04), 0 1px 3px rgba(36, 33, 30, 0.02)',
          overflow: 'hidden',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'pan-y'
        }}
        aria-label="Interactive hanging skills display"
        role="region"
      >
        {/* Top Architectural Mounting Rail / Beam */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '10px',
            background: 'linear-gradient(180deg, #E8DFD3 0%, #DED6CC 100%)',
            borderBottom: '1px solid var(--border-subtle)',
            zIndex: 10
          }}
        />

        {/* Mobile Tier Rails */}
        {dimensions.isMobile && (
          <>
            <div style={{ position: 'absolute', top: '155px', left: '16px', right: '16px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '290px', left: '16px', right: '16px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '425px', left: '16px', right: '16px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '560px', left: '16px', right: '16px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '695px', left: '16px', right: '16px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
          </>
        )}

        {/* Tablet Tier Rails */}
        {dimensions.isTablet && (
          <>
            <div style={{ position: 'absolute', top: '195px', left: '20px', right: '20px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '365px', left: '20px', right: '20px', height: '1.5px', backgroundColor: 'var(--border-subtle)', zIndex: 1 }} />
          </>
        )}

        {/* SVG Layer for Ropes and Anchor Pegs */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          {layoutItems.map((item) => {
            const isMatch = selectedCategory === 'all' || item.categoryId === selectedCategory || item.category.toLowerCase() === selectedCategory;

            return (
              <g key={`svg-${item.id}`} opacity={isMatch ? 1 : 0.28} style={{ transition: 'opacity var(--transition-normal)' }}>
                {/* Organic Rope Path */}
                <path
                  id={`rope-${item.id}`}
                  d=""
                  fill="none"
                  stroke="#C2B7A8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Metallic Anchor Peg / Rivet */}
                <circle
                  cx={item.anchorX}
                  cy={item.anchorY}
                  r="3.5"
                  fill="var(--accent-copper)"
                  stroke="#FAF7F2"
                  strokeWidth="1"
                  id={`anchor-${item.id}`}
                />
              </g>
            );
          })}
        </svg>

        {/* Hanging Capsules Layer */}
        {layoutItems.map((item) => {
          const isMatch = selectedCategory === 'all' || item.categoryId === selectedCategory || item.category.toLowerCase() === selectedCategory;

          return (
            <div
              key={item.id}
              id={`capsule-${item.id}`}
              tabIndex={0}
              role="button"
              aria-label={`${item.name} skill, ${item.category}. Press Arrow keys to swing.`}
              onPointerDown={(e) => handlePointerDown(e, item.id)}
              onPointerMove={(e) => handlePointerMove(e, item.id)}
              onPointerUp={(e) => handlePointerUp(e, item.id)}
              onPointerCancel={(e) => handlePointerUp(e, item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 20,
                cursor: 'grab',
                touchAction: 'none',
                opacity: isMatch ? 1 : 0.35,
                transition: 'opacity var(--transition-normal), border-color var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="hanging-skill-capsule"
            >
              <div
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: dimensions.isMobile ? '5px 10px' : dimensions.isTablet ? '6px 12px' : '6px 14px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 12px rgba(36, 33, 30, 0.05), 0 1px 2px rgba(36, 33, 30, 0.03)',
                  whiteSpace: 'nowrap'
                }}
              >
                {/* Physical Top Metallic Eyelet Ring for Rope Attachment */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#DED6CC',
                    border: '1.5px solid var(--accent-copper)'
                  }}
                />

                {/* Category Indicator Dot */}
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor:
                      item.categoryId === 'ai'
                        ? '#8A67B2'
                        : item.categoryId === 'backend'
                        ? 'var(--accent-copper)'
                        : item.categoryId === 'frontend'
                        ? 'var(--accent-sand)'
                        : item.categoryId === 'mobile'
                        ? '#6B9E82'
                        : item.categoryId === 'tools'
                        ? '#5E8299'
                        : '#A68A78',
                    flexShrink: 0
                  }}
                />

                {/* Skill Name */}
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: dimensions.isMobile ? '0.75rem' : dimensions.isTablet ? '0.78125rem' : '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Subtle Watermark in Bottom Corner */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            color: 'var(--border-medium)',
            letterSpacing: '0.08em',
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          SPRING_PENDULUM // 24_SKILLS
        </div>
      </div>

      <style>{`
        .hanging-skill-capsule:focus-visible {
          outline: none;
        }
        .hanging-skill-capsule:focus-visible > div {
          border-color: var(--accent-copper) !important;
          box-shadow: 0 0 0 3px var(--accent-tint) !important;
        }
        .hanging-skill-capsule:hover > div {
          border-color: var(--accent-copper) !important;
          box-shadow: 0 8px 20px rgba(183, 110, 76, 0.16), 0 2px 4px rgba(36, 33, 30, 0.04) !important;
        }
        .hanging-skill-capsule:active {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  );
};
