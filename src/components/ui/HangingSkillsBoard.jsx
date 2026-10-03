import React, { useState, useEffect, useRef, useCallback } from 'react';
import { hangingSkillsData, skillCategoriesMeta } from '../../data/hangingSkills';
import { Sparkles, Move, Zap } from 'lucide-react';

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

  // Category Color Map for Electric Lime Palette (#B7D63D)
  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case 'ai':
        return '#D4E968';
      case 'backend':
        return '#B7D63D';
      case 'frontend':
        return '#E2ED94';
      case 'mobile':
        return '#B7D63D';
      case 'tools':
        return '#C6E44A';
      case 'database':
        return '#9EB832';
      default:
        return '#B7D63D';
    }
  };

  // Compute anchor positions and rope lengths based on container dimensions
  const computeAnchors = useCallback((width, isMobile) => {
    const total = hangingSkillsData.length;

    if (isMobile) {
      const tiers = 6;
      const perTier = Math.ceil(total / tiers);
      const tierYOffsets = [28, 160, 295, 430, 565, 700];

      return hangingSkillsData.map((item, idx) => {
        const tier = Math.min(tiers - 1, Math.floor(idx / perTier));
        const indexInTier = idx % perTier;
        const tierItems = Math.min(perTier, total - tier * perTier);

        const padding = 34;
        const usableWidth = Math.max(250, width - padding * 2);
        const anchorX = padding + (indexInTier / Math.max(1, tierItems - 1)) * usableWidth;
        const anchorY = tierYOffsets[tier];

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
        const tiers = 3;
        const perTier = 8;
        const tierYOffsets = [28, 200, 370];

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

      // Desktop: Architectural beam across the top
      const padding = 48;
      const usableWidth = Math.max(860, width - padding * 2);

      return hangingSkillsData.map((item, idx) => {
        const anchorX = padding + (idx / (total - 1)) * usableWidth;
        const anchorY = 22 + (idx % 3) * 6;
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
    const scale = item.isHovered || item.isDragging ? 1.08 : 1;
    capsuleEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, 0) rotate(${deg}deg) scale(${scale})`;

    // Subtle curved organic rope via quadratic bezier
    const bend = item.velocity * -20;
    const cx = (item.anchorX + x) / 2 + bend;
    const cy = (item.anchorY + y) / 2;

    ropeEl.setAttribute('d', `M ${item.anchorX} ${item.anchorY} Q ${cx} ${cy} ${x} ${y}`);
  }, []);

  // Main physics loop
  const stepPhysics = useCallback(
    function runPhysics() {
      if (prefersReducedMotion) return;

      const gravity = 1450; // gravity constant in px/s^2
      const dt = 1 / 60; // 60 FPS fixed step
      const damping = 0.985; // friction damping
      let hasMotion = false;

      physicsDataRef.current.forEach((item) => {
        if (item.isDragging) {
          hasMotion = true;
          updateDOM(item);
          return;
        }

        const alpha = -(gravity / item.length) * Math.sin(item.angle);
        item.velocity = (item.velocity + alpha * dt) * damping;
        item.angle += item.velocity * dt;

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

  const wakePhysics = useCallback(() => {
    if (prefersReducedMotion) return;
    if (!isRunningRef.current) {
      isRunningRef.current = true;
      animFrameIdRef.current = requestAnimationFrame(stepPhysics);
    }
  }, [prefersReducedMotion, stepPhysics]);

  const nudgeCapsule = useCallback((id, impulse = 0.18) => {
    const item = physicsDataRef.current.find((p) => p.id === id);
    if (item && !item.isDragging) {
      item.velocity += impulse;
      wakePhysics();
    }
  }, [wakePhysics]);

  const nudgeAll = useCallback(() => {
    physicsDataRef.current.forEach((item, i) => {
      setTimeout(() => {
        item.velocity = i % 2 === 0 ? 0.24 : -0.24;
        wakePhysics();
      }, i * 35);
    });
  }, [wakePhysics]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleResize = (entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const isMobile = width < 560;
        const isTablet = width >= 560 && width < 900;
        const height = isMobile ? 840 : isTablet ? 580 : 540;

        setDimensions({ width, height, isMobile, isTablet });

        const newPhysics = computeAnchors(width, isMobile);
        physicsDataRef.current = newPhysics;
        setLayoutItems(newPhysics);

        newPhysics.forEach((item) => updateDOM(item));
        wakePhysics();
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(el);

    return () => observer.disconnect();
  }, [computeAnchors, updateDOM, wakePhysics]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    let hasTriggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            hasTriggered = true;
            setTimeout(() => nudgeAll(), 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [nudgeAll, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

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

    const dx = ptrX - item.anchorX;
    const dy = Math.max(25, ptrY - item.anchorY);
    const maxAngle = 1.05;

    const targetAngle = Math.max(-maxAngle, Math.min(maxAngle, Math.atan2(dx, dy)));
    const dt = Math.max(0.001, (now - activeDragRef.current.lastTime) / 1000);
    const dTheta = targetAngle - item.angle;

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
      nudgeCapsule(itemId, 0.09);
    }
  }, [nudgeCapsule, updateDOM]);

  const handleMouseLeave = useCallback((itemId) => {
    const item = physicsDataRef.current.find((p) => p.id === itemId);
    if (item) {
      item.isHovered = false;
      updateDOM(item);
    }
  }, [updateDOM]);

  const handleKeyDown = useCallback((e, itemId) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nudgeCapsule(itemId, -0.28);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nudgeCapsule(itemId, 0.28);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nudgeCapsule(itemId, 0.22);
    }
  }, [nudgeCapsule]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Category Tabs & Interactive Controls in Black Translucent */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          padding: '12px 18px',
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(243, 239, 230, 0.08)'
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {skillCategoriesMeta.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  physicsDataRef.current.forEach((p, idx) => {
                    const match = cat.id === 'all' || p.categoryId === cat.id || p.category.toLowerCase() === cat.id;
                    if (match) {
                      setTimeout(() => nudgeCapsule(p.id, idx % 2 === 0 ? 0.18 : -0.18), idx * 25);
                    }
                  });
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'rgba(183, 214, 61, 0.2)' : 'rgba(243, 239, 230, 0.04)',
                  color: isActive ? '#B7D63D' : 'rgba(243, 239, 230, 0.72)',
                  border: `1px solid ${isActive ? '#B7D63D' : 'rgba(243, 239, 230, 0.1)'}`,
                  boxShadow: isActive ? '0 0 16px -2px rgba(183, 214, 61, 0.35)' : 'none',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    marginLeft: '5px',
                    opacity: isActive ? 1 : 0.6,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Button & Telemetry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#B7D63D',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span className="status-beacon" />
            DRAG_TO_SWING
          </span>

          <button
            type="button"
            onClick={nudgeAll}
            className="btn-charcoal"
            style={{
              padding: '7px 16px',
              fontSize: '0.78125rem',
              borderColor: 'rgba(183, 214, 61, 0.4)',
              background: 'rgba(183, 214, 61, 0.1)'
            }}
            title="Swing all capsules"
            aria-label="Swing all capsules"
          >
            <Sparkles size={13} style={{ color: '#B7D63D' }} />
            <span>Swing All</span>
          </button>
        </div>
      </div>

      {/* Main Hanging Board Container in Black Translucent */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: `${dimensions.height}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.78)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(243, 239, 230, 0.1)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(243, 239, 230, 0.08)',
          overflow: 'hidden',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'pan-y'
        }}
        aria-label="Interactive hanging skills display"
        role="region"
      >
        {/* Subtle Cyber Grid in Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(243, 239, 230, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 239, 230, 0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Ambient Top Light Beam */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(183, 214, 61, 0.85), rgba(212, 233, 104, 0.85), transparent)',
            boxShadow: '0 0 20px rgba(183, 214, 61, 0.5)',
            zIndex: 15
          }}
        />

        {/* Architectural Top Beam */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '12px',
            background: 'linear-gradient(180deg, #333333 0%, #1F1F1F 100%)',
            borderBottom: '1px solid rgba(183, 214, 61, 0.35)',
            zIndex: 10
          }}
        />

        {/* Mobile Tier Rails */}
        {dimensions.isMobile && (
          <>
            <div style={{ position: 'absolute', top: '160px', left: '16px', right: '16px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '295px', left: '16px', right: '16px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '430px', left: '16px', right: '16px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '565px', left: '16px', right: '16px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '700px', left: '16px', right: '16px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
          </>
        )}

        {/* Tablet Tier Rails */}
        {dimensions.isTablet && (
          <>
            <div style={{ position: 'absolute', top: '200px', left: '20px', right: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: '370px', left: '20px', right: '20px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', zIndex: 2 }} />
          </>
        )}

        {/* SVG Layer for Fiber-Optic Neon Ropes & Glowing Pegs */}
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
          <defs>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {layoutItems.map((item) => {
            const isMatch = selectedCategory === 'all' || item.categoryId === selectedCategory || item.category.toLowerCase() === selectedCategory;
            const categoryColor = getCategoryColor(item.categoryId);

            return (
              <g key={`svg-${item.id}`} opacity={isMatch ? 1 : 0.18} style={{ transition: 'opacity var(--transition-normal)' }}>
                {/* Glowing Laser Rope Path */}
                <path
                  id={`rope-${item.id}`}
                  d=""
                  fill="none"
                  stroke={categoryColor}
                  strokeWidth="1.7"
                  strokeOpacity="0.75"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Glowing Metallic Rivet Anchor */}
                <circle
                  cx={item.anchorX}
                  cy={item.anchorY}
                  r="4"
                  fill={categoryColor}
                  stroke="#040812"
                  strokeWidth="1.5"
                  id={`anchor-${item.id}`}
                />
              </g>
            );
          })}
        </svg>

        {/* Hanging Obsidian Glass Capsules */}
        {layoutItems.map((item) => {
          const isMatch = selectedCategory === 'all' || item.categoryId === selectedCategory || item.category.toLowerCase() === selectedCategory;
          const categoryColor = getCategoryColor(item.categoryId);

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
                opacity: isMatch ? 1 : 0.25,
                transition: 'opacity var(--transition-normal)'
              }}
              className="hanging-skill-capsule"
            >
              <div
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: dimensions.isMobile ? '6px 12px' : dimensions.isTablet ? '7px 14px' : '7px 16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.86)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(243, 239, 230, 0.12)',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(243, 239, 230, 0.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                {/* Physical Top Metallic Eyelet Ring for Cable Attachment */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    border: `1.5px solid ${categoryColor}`,
                    boxShadow: `0 0 6px ${categoryColor}`
                  }}
                />

                {/* Glowing Category Indicator Dot */}
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: categoryColor,
                    boxShadow: `0 0 8px ${categoryColor}`,
                    flexShrink: 0
                  }}
                />

                {/* Skill Name */}
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: dimensions.isMobile ? '0.78125rem' : '0.84375rem',
                    fontWeight: 700,
                    color: '#F3EFE6',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.name}
                </span>

                {/* Micro Category Tag */}
                {item.tag && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      color: 'var(--text-muted)',
                      paddingLeft: '4px',
                      borderLeft: '1px solid rgba(243, 239, 230, 0.15)'
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* HUD Telemetry Watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '18px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            color: 'rgba(183, 214, 61, 0.8)',
            letterSpacing: '0.1em',
            pointerEvents: 'none',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Zap size={11} />
          QUANTUM_PENDULUM // 24_PHYSICS_NODES // 60_FPS
        </div>
      </div>

      <style>{`
        .hanging-skill-capsule:focus-visible {
          outline: none;
        }
        .hanging-skill-capsule:focus-visible > div {
          border-color: #B7D63D !important;
          box-shadow: 0 0 0 3px rgba(183, 214, 61, 0.3), 0 0 20px rgba(183, 214, 61, 0.5) !important;
        }
        .hanging-skill-capsule:hover > div {
          border-color: #B7D63D !important;
          box-shadow: 0 10px 28px rgba(183, 214, 61, 0.28), 0 0 15px rgba(183, 214, 61, 0.4) !important;
        }
        .hanging-skill-capsule:active {
          cursor: grabbing !important;
        }
      `}</style>
    </div>
  );
};
