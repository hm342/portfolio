import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/helpers';
import { SMOOTH_EASE } from '../utils/animations';

export const Hero = () => {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  // High-performance 60 FPS mouse parallax using requestAnimationFrame without React state re-renders
  const mousePos = useRef({ x: 0, y: 0, isHovering: false });
  const currentTransform = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const animFrameId = useRef(null);

  const handlePointerMove = useCallback((e) => {
    if (!heroRef.current || window.innerWidth < 768) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1

    mousePos.current.x = Math.max(-1, Math.min(1, x));
    mousePos.current.y = Math.max(-1, Math.min(1, y));
    mousePos.current.isHovering = true;
  }, []);

  const handlePointerLeave = useCallback(() => {
    mousePos.current.x = 0;
    mousePos.current.y = 0;
    mousePos.current.isHovering = false;
  }, []);

  useEffect(() => {
    const updatePhysics = () => {
      if (!visualRef.current) return;

      // Subtle target rotations: max 7 deg tilt
      const targetRy = mousePos.current.x * 7;
      const targetRx = -mousePos.current.y * 6;
      const targetTx = mousePos.current.x * 10;
      const targetTy = mousePos.current.y * 6;

      // Smooth lerp interpolation (factor: 0.08)
      const lerpFactor = 0.08;
      currentTransform.current.ry += (targetRy - currentTransform.current.ry) * lerpFactor;
      currentTransform.current.rx += (targetRx - currentTransform.current.rx) * lerpFactor;
      currentTransform.current.tx += (targetTx - currentTransform.current.tx) * lerpFactor;
      currentTransform.current.ty += (targetTy - currentTransform.current.ty) * lerpFactor;

      const { rx, ry, tx, ty } = currentTransform.current;

      // Update transform directly on DOM
      visualRef.current.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;

      // Subtle reactive dynamic shadow shift
      const shadowX = (-ry * 2.5).toFixed(1);
      const shadowY = (36 + rx * 2).toFixed(1);
      visualRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 80px -16px rgba(36, 33, 30, 0.14), 0 16px 36px -8px rgba(36, 33, 30, 0.08), inset 0 1.5px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 0 rgba(214, 199, 184, 0.35)`;

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Visual chips content specification
  const visualChips = [
    { id: 'react', name: 'React', category: 'Frontend', dot: 'var(--accent-sand)', gridArea: 'c-react', z: 32 },
    { id: 'laravel', name: 'Laravel', category: 'Backend', dot: 'var(--accent-copper)', gridArea: 'c-laravel', z: 38 },
    { id: 'php', name: 'PHP', category: 'Core', dot: 'var(--accent-copper)', gridArea: 'c-php', z: 30 },
    { id: 'node', name: 'Node.js', category: 'Runtime', dot: 'var(--accent-copper)', gridArea: 'c-node', z: 26 },
    { id: 'js', name: 'JavaScript', category: 'ES6+', dot: 'var(--accent-sand)', gridArea: 'c-js', z: 28 },
    { id: 'rn', name: 'React Native', category: 'Mobile', dot: '#6B9E82', gridArea: 'c-rn', z: 34 },
    { id: 'mysql', name: 'MySQL', category: 'Database', dot: 'var(--accent-copper)', gridArea: 'c-mysql', z: 30 },
    { id: 'git', name: 'Git', category: 'Tools', dot: '#5E8299', gridArea: 'c-git', z: 32 },
    { id: 'wp', name: 'WordPress', category: 'CMS', dot: '#A68A78', gridArea: 'c-wp', z: 26 }
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(28px, 5vh, 52px)'
      }}
    >
      {/* Upper Hero Area: Editorial Header, Oversized Display Typography & Subtitle */}
      <div className="container" style={{ textAlign: 'center', zIndex: 5 }}>
        
        {/* Eyebrow Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: SMOOTH_EASE }}
          style={{ marginBottom: '18px' }}
        >
          <span className="status-pill-warm" style={{ padding: '5px 14px', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
            <span className="status-dot-copper" />
            SOFTWARE DEVELOPER · WEB & MOBILE
          </span>
        </motion.div>

        {/* Refined Editorial Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: SMOOTH_EASE }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3.8vw, 3.15rem)',
            fontWeight: 800,
            lineHeight: 1.16,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            margin: '0 auto 18px auto',
            maxWidth: '820px'
          }}
        >
          Turning complex code into seamless user experiences.
        </motion.h1>

        {/* Supporting Technology Line & Product Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: SMOOTH_EASE }}
          style={{ maxWidth: '640px', marginInline: 'auto', marginBottom: 'clamp(28px, 4vh, 44px)' }}
        >
          {/* Tech Stack Strip with Terracotta Separators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.8125rem, 1.35vw, 0.9375rem)',
              fontWeight: 600,
              color: 'var(--accent-copper)',
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}
          >
            <span>Laravel</span>
            <span style={{ color: 'var(--accent-sand)', opacity: 0.8 }}>•</span>
            <span>React</span>
            <span style={{ color: 'var(--accent-sand)', opacity: 0.8 }}>•</span>
            <span>React Native</span>
            <span style={{ color: 'var(--accent-sand)', opacity: 0.8 }}>•</span>
            <span>PHP</span>
            <span style={{ color: 'var(--accent-sand)', opacity: 0.8 }}>•</span>
            <span>Node.js</span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            Architecting full-stack web applications, resilient API platforms, and tactile mobile experiences engineered for production reliability.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: SMOOTH_EASE }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: 'clamp(36px, 5vh, 56px)'
          }}
        >
          <button
            type="button"
            onClick={() => scrollToSection('work')}
            className="btn-copper"
            style={{ borderRadius: 'var(--radius-full)', padding: '12px 24px' }}
          >
            <span>View My Work</span>
            <span style={{ fontSize: '1rem', marginLeft: '2px' }}>↓</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="btn-secondary-warm"
            style={{ borderRadius: 'var(--radius-full)', padding: '12px 24px' }}
          >
            <span>Get in Touch</span>
            <span style={{ fontSize: '0.875rem' }}>→</span>
          </button>
        </motion.div>

      </div>

      {/* Centerpiece: The Large Curved Developer Workspace Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5, ease: SMOOTH_EASE }}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingInline: 'var(--container-padding)',
          zIndex: 8
        }}
      >
        {/* Physical Curved Developer Card / Slab */}
        <div
          ref={visualRef}
          className="hero-curved-visual-slab"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '860px',
            backgroundColor: '#FAF7F2',
            background: 'linear-gradient(168deg, #FFFFFF 0%, #FAF7F2 48%, #F3ECE1 100%)',
            border: '1.5px solid rgba(214, 199, 184, 0.85)',
            borderRadius: 'clamp(34px, 5.5vw, 48px)',
            boxShadow: '0 36px 90px -18px rgba(36, 33, 30, 0.14), 0 16px 36px -8px rgba(36, 33, 30, 0.08), inset 0 1.5px 0 rgba(255, 255, 255, 0.95), inset 0 -1.5px 0 rgba(214, 199, 184, 0.35)',
            padding: 'clamp(24px, 4.5vw, 40px)',
            transformStyle: 'preserve-3d',
            transition: 'box-shadow 0.2s ease',
            userSelect: 'none'
          }}
        >
          {/* Subtle Fine Engineering Matrix Grid Texture Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              backgroundImage: 'radial-gradient(rgba(36, 33, 30, 0.07) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.45,
              pointerEvents: 'none',
              transform: 'translateZ(1px)'
            }}
          />

          {/* Top Architectural Metallic Rivet / Header Notch */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '50%',
              transform: 'translateX(-50%) translateZ(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '2px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.625rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em'
            }}
          >
          </div>



          {/* Composition Interior: Floating Tactile Chips Orbiting the Central Core */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(14px, 2.5vw, 22px)',
              marginTop: '16px',
              position: 'relative',
              zIndex: 2,
              transform: 'translateZ(10px)'
            }}
          >
            {/* Upper Chips Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              {visualChips.slice(0, 4).map((chip) => (
                <div
                  key={chip.id}
                  className="hero-tactile-chip"
                  style={{
                    transform: `translateZ(${chip.z}px)`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 6px 18px rgba(36, 33, 30, 0.05)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: chip.dot }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {chip.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', marginLeft: '2px' }}>
                    {chip.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Tier: Tactile Core Plaque Flanked by Core Mobile & Script Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(12px, 3vw, 28px)',
                flexWrap: 'wrap'
              }}
            >
              {/* Left Flank Chip: JavaScript */}
              <div
                className="hero-tactile-chip"
                style={{
                  transform: 'translateZ(28px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 18px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 6px 18px rgba(36, 33, 30, 0.05)'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-sand)' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  JavaScript
                </span>
              </div>

              {/* Central Elevated Architectural Core Plaque */}
              <div
                style={{
                  transform: 'translateZ(44px)',
                  padding: 'clamp(16px, 2.5vw, 22px) clamp(22px, 3.5vw, 36px)',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(214, 199, 184, 0.9)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 16px 36px -6px rgba(36, 33, 30, 0.1), 0 4px 12px rgba(36, 33, 30, 0.04)',
                  textAlign: 'center',
                  minWidth: 'clamp(240px, 36vw, 320px)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--accent-copper)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    marginBottom: '4px'
                  }}
                >
                  <span className="status-dot-copper" style={{ width: '5px', height: '5px' }} />
                  <span>HARSHIT MISHRA</span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase'
                  }}
                >
                  Software Developer
                </div>

                <div
                  style={{
                    marginTop: '6px',
                    paddingTop: '6px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em'
                  }}
                >
                  SYS // FULL-STACK · PRODUCTION READY
                </div>
              </div>

              {/* Right Flank Chip: React Native */}
              <div
                className="hero-tactile-chip"
                style={{
                  transform: 'translateZ(32px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 18px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 6px 18px rgba(36, 33, 30, 0.05)'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6B9E82' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  React Native
                </span>
              </div>
            </div>

            {/* Lower Chips Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              {visualChips.slice(6, 9).map((chip) => (
                <div
                  key={chip.id}
                  className="hero-tactile-chip"
                  style={{
                    transform: `translateZ(${chip.z}px)`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 6px 18px rgba(36, 33, 30, 0.05)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: chip.dot }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.84375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {chip.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', marginLeft: '2px' }}>
                    {chip.category}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Edge Status Bar */}
          <div
            style={{
              marginTop: '16px',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              color: 'var(--text-muted)',
              transform: 'translateZ(4px)'
            }}
          >
            <span>PLATFORM: WEB · MOBILE · API</span>
            <span style={{ color: 'var(--accent-copper)' }}>STABLE RUNTIME</span>
          </div>
        </div>
      </motion.div>

      {/* Lower Hero Area: Dark Curved Transition Amphitheater & Scroll Indicator */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          marginTop: 'clamp(28px, 4.5vh, 48px)',
          zIndex: 6
        }}
      >
        {/* Sweeping Arched Convex Curve (Transition from Cream to Dark) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: 'clamp(50px, 6.5vw, 90px)',
              display: 'block'
            }}
          >
            <path
              d="M 0,90 Q 720,0 1440,90 L 1440,90 L 0,90 Z"
              fill="var(--dark-bg)"
            />
          </svg>
        </div>

        {/* Dark Amphitheater Body */}
        <div
          style={{
            backgroundColor: 'var(--dark-bg)',
            paddingTop: '6px',
            paddingBottom: 'clamp(28px, 4vh, 42px)',
            color: 'var(--dark-text)'
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px'
            }}
          >
            {/* Minimal Scroll Indicator */}
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(247, 243, 236, 0.06)',
                border: '1px solid var(--dark-border)',
                color: 'var(--dark-text)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              className="hero-scroll-btn"
              aria-label="Scroll to explore work"
            >
              <span style={{ color: 'var(--accent-sand)', fontSize: '0.625rem' }}>●</span>
              <span>Explore my work</span>
              <span className="scroll-arrow-anim">↓</span>
            </button>

            {/* Subtle Editorial Mark */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--dark-text-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: 0.8
              }}
            >
              SYSTEM_ID // HARSHIT_MISHRA · PRODUCTION RUNTIME READY
            </div>
          </div>
        </div>

        {/* Seamless Inverted Curve Transition into Next Section */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 50"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: 'clamp(30px, 4vw, 50px)',
              display: 'block'
            }}
          >
            <path
              d="M 0,0 Q 720,50 1440,0 L 1440,50 L 0,50 Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </div>

      <style>{`
        .hero-tactile-chip:hover {
          border-color: var(--accent-copper) !important;
          transform: translateZ(48px) scale(1.04) !important;
          box-shadow: 0 10px 24px rgba(183, 110, 76, 0.16) !important;
        }

        .hero-scroll-btn:hover {
          background-color: rgba(183, 110, 76, 0.14) !important;
          border-color: var(--accent-copper) !important;
          color: var(--dark-text) !important;
          transform: translateY(-2px);
        }

        .scroll-arrow-anim {
          display: inline-block;
          animation: subtleArrowBounce 2s ease-in-out infinite;
        }

        @keyframes subtleArrowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(3px);
          }
        }

        /* Mobile subtle ambient float when mouse parallax is disabled */
        @media (max-width: 767px) {
          .hero-curved-visual-slab {
            animation: heroMobileFloat 5s ease-in-out infinite alternate;
          }
        }

        @keyframes heroMobileFloat {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-5px) rotate(0.4deg);
          }
        }
      `}</style>
    </section>
  );
};
