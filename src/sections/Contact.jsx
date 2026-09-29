import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { personalInfo } from '../data/personal';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';
import { copyToClipboard } from '../utils/helpers';

export const Contact = () => {
  const { setCursor, resetCursor } = useCursor();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.socials.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
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

        {/* Contact Composition Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Inquiries & Channels */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '0.6875rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                // Communication Channels
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3
                className="heading-sub"
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  marginBottom: '20px',
                  color: 'var(--text-primary)'
                }}
              >
                Start an engineering dialogue.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-lead" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Whether you have an ambitious platform to build, an engineering position to fill, or want to discuss agricultural robotics and autonomous AI systems, my inbox is open.
              </p>
            </Reveal>

            {/* Email Direct Copy Box */}
            <Reveal delay={0.25}>
              <div
                className="editorial-card"
                style={{
                  padding: '20px 24px',
                  background: 'rgba(18, 19, 26, 0.8)',
                  borderColor: 'var(--gold-border-subtle)',
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.6875rem', color: 'var(--gold-light)' }}>
                    DIRECT EMAIL ADDRESS
                  </div>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    style={{
                      fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginTop: '4px',
                      display: 'block'
                    }}
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="btn-luxury-secondary"
                    style={{ padding: '8px 14px', fontSize: '0.75rem' }}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="btn-luxury-primary"
                    style={{ padding: '8px 14px', fontSize: '0.75rem' }}
                  >
                    <span>Write</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Social Network Links */}
            <Reveal delay={0.3}>
              <div>
                <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  // Professional Profiles
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="btn-luxury-secondary"
                    style={{ padding: '10px 18px', fontSize: '0.8125rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Profile</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--gold-primary)' }} />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="btn-luxury-secondary"
                    style={{ padding: '10px 18px', fontSize: '0.8125rem' }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn Network</span>
                    <ArrowUpRight size={13} style={{ color: 'var(--gold-primary)' }} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct Message Terminal */}
          <Reveal delay={0.2} yOffset={30}>
            <div
              className="editorial-card"
              style={{
                background: 'rgba(16, 17, 24, 0.9)',
                borderColor: 'var(--border-subtle)',
                padding: 'clamp(28px, 4vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={16} color="var(--gold-primary)" />
                  <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: '0.75rem', color: 'var(--gold-light)' }}>
                    INIT_DISPATCH // MESSAGE_TERMINAL
                  </span>
                </div>
                <div className="status-dot" />
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '32px 20px',
                    textAlign: 'center',
                    background: 'rgba(212, 175, 55, 0.05)',
                    border: '1px solid var(--gold-border-subtle)',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <Check size={32} color="var(--gold-primary)" style={{ marginInline: 'auto', marginBottom: '12px' }} />
                  <h4 style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Message Dispatched Successfully
                  </h4>
                  <p style={{ fontSize: '0.84375rem', color: 'var(--text-muted)' }}>
                    Thank you for reaching out. Harshit will review your dispatch and reply promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: 'var(--gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px'
                      }}
                    >
                      Your Name / Organization
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan / Tech Team"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(10, 10, 13, 0.7)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--text-primary)',
                        fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: '0.875rem',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold-border)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: 'var(--gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px'
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(10, 10, 13, 0.7)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--text-primary)',
                        fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: '0.875rem',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold-border)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.6875rem',
                        color: 'var(--gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px'
                      }}
                    >
                      Project Details / Inquiry
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the software engineering challenge, role, or technical requirements..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(10, 10, 13, 0.7)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--text-primary)',
                        fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold-border)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="btn-luxury-primary"
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    <span>Send Message Dispatch</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
