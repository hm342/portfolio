import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Send, ArrowRight, MessageSquare, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/common/Icons';
import { personalInfo } from '../data/personal';
import { copyToClipboard } from '../utils/helpers';
import { SMOOTH_EASE } from '../utils/animations';
import { MagicCard } from '../components/ui/MagicCard';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = personalInfo.socials.email;
  const emailMailto = personalInfo.socials.emailMailto || `mailto:${emailAddress}?subject=Portfolio%20Inquiry`;

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(emailAddress);
    if (success) {
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00F2FE', '#A855F7', '#38BDF8']
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#00F2FE', '#A855F7', '#10B981']
    });

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: '#F8FAFC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="status-beacon" />
            <span className="label-overline">
              LET'S WORK TOGETHER
            </span>
          </div>

          <h2
            className="heading-section"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              color: '#F8FAFC',
              marginBottom: '16px'
            }}
          >
            LET'S BUILD SOMETHING EXTRAORDINARY.
          </h2>

          <p
            className="body-lead"
            style={{
              maxWidth: '680px',
              color: 'var(--text-secondary)'
            }}
          >
            Have an engineering role, web/mobile architecture project, or technical consultation in mind? Connect through any channel below or dispatch a direct transmission.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            maxWidth: '1080px',
            marginInline: 'auto'
          }}
        >
          {/* Left Column: Direct Channels in Black Glass */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Glass Card */}
            <MagicCard
              spotlightColor="rgba(0, 242, 254, 0.15)"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 242, 254, 0.12)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00F2FE'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#F8FAFC' }}>
                      Email Transmission
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                      Primary Direct Channel
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-charcoal"
                  style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={12} color="#00F2FE" />
                      <span style={{ color: '#00F2FE' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9375rem',
                  color: '#00F2FE',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(0, 242, 254, 0.04)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                {emailAddress}
              </div>

              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Preferred for full-stack software positions, enterprise contracts, and architectural scopes.
              </p>

              <div>
                <a
                  href={emailMailto}
                  className="btn-copper"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Send Direct Email</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </a>
              </div>
            </MagicCard>

            {/* Quick Links Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px'
              }}
            >
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '16px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                  color: '#F8FAFC'
                }}
              >
                <GithubIcon size={20} />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '16px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                  color: '#F8FAFC'
                }}
              >
                <LinkedinIcon size={20} />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '16px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center',
                  color: '#F8FAFC'
                }}
              >
                <WhatsappIcon size={20} />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form in Black Glass */}
          <div>
            <MagicCard
              spotlightColor="rgba(168, 85, 247, 0.15)"
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={18} color="#C084FC" />
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#F8FAFC' }}>
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#F8FAFC',
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00F2FE')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#F8FAFC',
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00F2FE')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px'
                    }}
                  >
                    PROJECT OR INQUIRY DETAILS
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about your timeline, tech stack, or engineering requirements..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#F8FAFC',
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00F2FE')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-copper"
                  style={{
                    padding: '14px 28px',
                    fontSize: '0.9375rem',
                    justifyContent: 'center'
                  }}
                >
                  <Send size={15} />
                  <span>Transmit Message</span>
                </button>
              </form>
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  );
};
