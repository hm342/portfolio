import React, { useState } from 'react';
import { KiboriLandingPage } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import { Sparkles, Maximize2, Minimize2, Flame, Compass, Box, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { BorderBeam } from '../components/ui/BorderBeam';

export function KiboriSceneSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section
      id="3d-craft-lab"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          category="THREE.JS 3D CINEMATIC WORKSHOP"
          title="Kibori 3D craft & shader experience."
          subtitle="An interactive cinematic Kyoto woodshop with eight 3D crafts, glowing fire transitions, Japanese typography, and real-time WebGL rendering."
        />

        {/* 3D Theater Stage Container */}
        <div
          style={{
            position: isFullscreen ? 'fixed' : 'relative',
            inset: isFullscreen ? 0 : 'auto',
            zIndex: isFullscreen ? 9999 : 10,
            width: '100%',
            maxWidth: isFullscreen ? '100vw' : '1140px',
            marginInline: 'auto',
            backgroundColor: '#0a0806',
            borderRadius: isFullscreen ? 0 : 'var(--radius-xl)',
            overflow: 'hidden',
            border: isFullscreen ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {/* Top HUD Control Bar in Black Glass */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              backgroundColor: 'rgba(14, 18, 28, 0.92)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              zIndex: 20,
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F59E0B'
                }}
              >
                <Flame size={15} />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78125rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    letterSpacing: '0.04em'
                  }}
                >
                  KIBORI // 木彫 WORKSHOP
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  THREE.JS & SHADER RUNTIME // 8_INTERACTIVE_CRAFTS
                </span>
              </div>
            </div>

            {/* Actions: Fullscreen & Link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a
                href="/landing-pages/kibori.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-charcoal"
                style={{
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                title="Open in new window"
              >
                <span>Standalone</span>
                <ExternalLink size={12} />
              </a>

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="btn-charcoal"
                style={{
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: isFullscreen ? '#00F2FE' : 'rgba(255, 255, 255, 0.12)'
                }}
                aria-label={isFullscreen ? 'Exit full screen' : 'Expand to full screen'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 size={13} color="#00F2FE" />
                    <span style={{ color: '#00F2FE' }}>Exit Theater</span>
                  </>
                ) : (
                  <>
                    <Maximize2 size={13} />
                    <span>Theater Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive ThreeUI Kibori Component */}
          <div
            className="shader-frame"
            style={{
              position: 'relative',
              width: '100%',
              height: isFullscreen ? 'calc(100vh - 57px)' : '680px',
              backgroundColor: '#0a0806'
            }}
          >
            {!isFullscreen && <BorderBeam size={280} duration={16} colorFrom="#F59E0B" colorTo="#00F2FE" />}
            <KiboriLandingPage
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
