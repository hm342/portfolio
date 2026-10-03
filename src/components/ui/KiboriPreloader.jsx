import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { KiboriLandingPage } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import { Flame, ArrowRight, Sparkles, Terminal } from 'lucide-react';

export const KiboriPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('LOADING THREE.JS WEBGL CORE...');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fast, smooth counter simulation up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          setStatusText('ALL SYSTEMS OPERATIONAL // READY');
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next < 35) {
          setStatusText('INITIALIZING THREE.JS 3D RUNTIME...');
        } else if (next < 70) {
          setStatusText('COMPILING KIBORI SHADERS & ASSETS...');
        } else if (next < 95) {
          setStatusText('CALIBRATING BLACK GLASS & PHYSICS MATRIX...');
        } else {
          setStatusText('ALL SYSTEMS OPERATIONAL // READY');
        }

        return Math.min(100, next);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0a0806',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      {/* 1. Underlying ThreeUI Kibori 3D Craft & Shader Scene */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: isReady ? 'none' : 'auto',
          opacity: 0.75,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      >
        <KiboriLandingPage style={{ width: '100%', height: '100%' }} />
      </div>

      {/* 2. Vignette & Radial Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(10, 8, 6, 0.4) 0%, rgba(4, 5, 8, 0.85) 75%, #040508 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* 3. Floating Black Glass Preloader HUD Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: 'min(90vw, 460px)',
          padding: 'clamp(24px, 4vw, 36px)',
          backgroundColor: 'rgba(12, 16, 26, 0.82)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 35px -5px rgba(0, 242, 254, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px'
        }}
      >
        {/* Top Operational Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-mono)',
            color: '#00F2FE'
          }}
        >
          <Flame size={12} color="#F59E0B" />
          <span>KIBORI // 3D_PRELOADER</span>
        </div>

        {/* Brand & Name */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
              marginBottom: '6px'
            }}
          >
            HARSHIT MISHRA
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em'
            }}
          >
            SOFTWARE DEVELOPER & 3D ARCHITECT
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em'
              }}
            >
              {statusText}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#00F2FE'
              }}
            >
              {progress}%
            </span>
          </div>

          {/* Progress Track */}
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <motion.div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #F59E0B, #00F2FE, #A855F7)',
                boxShadow: '0 0 10px #00F2FE',
                borderRadius: '999px',
                transition: 'width 0.15s ease-out'
              }}
            />
          </div>
        </div>

        {/* Action Button: Enter / Skip */}
        <button
          type="button"
          onClick={handleEnter}
          className="btn-copper"
          style={{
            width: '100%',
            padding: '12px 24px',
            fontSize: '0.875rem',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <span>{isReady ? 'Enter 3D Portfolio' : 'Skip to Portfolio'}</span>
          <ArrowRight size={15} className="btn-arrow" />
        </button>
      </motion.div>
    </motion.div>
  );
};
