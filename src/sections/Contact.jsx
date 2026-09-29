import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/common/Icons';
import { personalInfo } from '../data/personal';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';
import { copyToClipboard } from '../utils/helpers';

export const Contact = () => {
  const { setCursor, resetCursor } = useCursor();
  const [copied, setCopied] = useState(false);

  const emailAddress = personalInfo.socials.email;
  const emailMailto = personalInfo.socials.emailMailto || `mailto:${emailAddress}?subject=Portfolio%20Inquiry`;
  const whatsappUrl = personalInfo.socials.whatsapp;

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(emailAddress);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Heading */}
        <SectionHeading
          number="09"
          category="DIRECT INITIATION"
          title="Have an idea? Let's turn it into something real."
          subtitle="Available for software engineering roles, full-stack product development, and technical collaboration."
        />

        {/* Two Direct Contact Methods: Email & WhatsApp */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 40px)',
            marginBottom: '48px'
          }}
          className="contact-cards-grid"
        >
          {/* Channel 1: Email Direct */}
          <Reveal delay={0.15}>
            <div
              className="editorial-card contact-channel-card"
              style={{
                height: '100%',
                padding: 'clamp(28px, 4vw, 40px)',
                background: 'linear-gradient(180deg, rgba(18, 19, 27, 0.95) 0%, rgba(13, 14, 20, 0.95) 100%)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Channel Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid var(--gold-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold-primary)'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: 'var(--gold-light)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}
                      >
                        // CHANNEL_01
                      </span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PRIMARY INBOX</div>
                    </div>
                  </div>
                  <div className="status-dot" title="Active channel" />
                </div>

                {/* Channel Heading */}
                <h3
                  className="heading-sub"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  Email Communication
                </h3>

                <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
                  Direct communication for software engineering positions, architecture discussions, and project inquiries.
                </p>

                {/* Email Address Pill */}
                <div
                  style={{
                    padding: '14px 18px',
                    background: 'rgba(10, 10, 14, 0.75)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '28px'
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.625rem', color: 'var(--gold-primary)', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    EMAIL ADDRESS
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      wordBreak: 'break-all'
                    }}
                  >
                    {emailAddress}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={emailMailto}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-primary"
                  style={{ padding: '12px 22px', fontSize: '0.8125rem', flex: '1 1 auto', justifyContent: 'center' }}
                >
                  <span>Send Email</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-secondary"
                  style={{ padding: '12px 18px', fontSize: '0.8125rem' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={15} style={{ color: 'var(--gold-primary)' }} />
                      <span style={{ color: 'var(--gold-primary)' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Channel 2: WhatsApp Direct */}
          <Reveal delay={0.25}>
            <div
              className="editorial-card contact-channel-card"
              style={{
                height: '100%',
                padding: 'clamp(28px, 4vw, 40px)',
                background: 'linear-gradient(180deg, rgba(18, 19, 27, 0.95) 0%, rgba(13, 14, 20, 0.95) 100%)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Channel Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(37, 211, 102, 0.12)',
                        border: '1px solid rgba(37, 211, 102, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#25D366'
                      }}
                    >
                      <WhatsappIcon size={20} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: '0.6875rem',
                          color: '#25D366',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}
                      >
                        // CHANNEL_02
                      </span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>INSTANT MESSAGING</div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#25D366',
                      boxShadow: '0 0 10px #25D366'
                    }}
                    title="Active chat"
                  />
                </div>

                {/* Channel Heading */}
                <h3
                  className="heading-sub"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  Direct WhatsApp Chat
                </h3>

                <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
                  Direct mobile chat for quick technical conversations, immediate responses, and agile project discussions.
                </p>

                {/* Pre-filled Message Display Pill */}
                <div
                  style={{
                    padding: '14px 18px',
                    background: 'rgba(10, 10, 14, 0.75)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '28px'
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.625rem', color: '#25D366', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    DIRECT CHAT TEMPLATE
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                      fontStyle: 'italic',
                      lineHeight: 1.5
                    }}
                  >
                    “Hello Harshit, I found your portfolio and would like to discuss a project.”
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="btn-luxury-primary"
                  style={{
                    padding: '12px 24px',
                    fontSize: '0.8125rem',
                    width: '100%',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #25D366 0%, #1ea952 100%)',
                    borderColor: '#25D366',
                    color: '#0a0d0a'
                  }}
                >
                  <WhatsappIcon size={17} />
                  <span style={{ fontWeight: 600 }}>Chat on WhatsApp</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Secondary Professional Networks Strip */}
        <Reveal delay={0.3}>
          <div
            style={{
              padding: '20px 28px',
              background: 'rgba(14, 15, 20, 0.6)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="status-dot" />
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                {personalInfo.status}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '8px 16px', fontSize: '0.78125rem' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={12} style={{ color: 'var(--gold-primary)' }} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="btn-luxury-secondary"
                style={{ padding: '8px 16px', fontSize: '0.78125rem' }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} style={{ color: 'var(--gold-primary)' }} />
              </a>
            </div>
          </div>
        </Reveal>

      </div>

      <style>{`
        .contact-channel-card:hover {
          border-color: var(--gold-border) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.08);
        }
      `}</style>
    </section>
  );
};
