import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Send, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/common/Icons';
import { personalInfo } from '../data/personal';
import { copyToClipboard } from '../utils/helpers';
import { SMOOTH_EASE } from '../utils/animations';

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
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

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
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--dark-text)',
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
            <span className="status-dot-copper" style={{ width: '5px', height: '5px' }} />
            <span className="label-overline">
              LET'S WORK TOGETHER
            </span>
          </div>

          <h2
            className="heading-section"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              color: 'var(--dark-text)',
              marginBottom: '16px'
            }}
          >
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          <p
            className="body-lead"
            style={{
              maxWidth: '640px',
              color: 'var(--dark-text-secondary)'
            }}
          >
            Have a project, engineering opportunity, or technical question? Reach out through any channel below or submit a direct message.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            maxWidth: '1040px'
          }}
        >
          {/* Left Column: Direct Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div
              className="card-dark"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(183, 110, 76, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Mail size={18} color="var(--accent-sand)" />
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--dark-text)' }}>
                      Email Inbox
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--dark-text-secondary)', display: 'block' }}>
                      Primary Channel
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-dark-outline"
                  style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={12} color="var(--accent-sand)" />
                      <span style={{ color: 'var(--accent-sand)' }}>Copied</span>
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
                  fontSize: '1rem',
                  color: 'var(--dark-text)',
                  fontWeight: 600,
                  wordBreak: 'break-all',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(247, 243, 236, 0.04)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                {emailAddress}
              </div>

              <p className="body-small" style={{ color: 'var(--dark-text-secondary)' }}>
                Preferred for full-stack software positions, technical inquiries, and project scopes.
              </p>

              <div style={{ marginTop: '6px' }}>
                <a
                  href={emailMailto}
                  className="btn-copper"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Send Direct Email</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </a>
              </div>
            </div>

            {/* Quick Professional Links */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark"
                style={{
                  padding: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <LinkedinIcon size={18} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark-text)' }}>
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight size={14} color="var(--accent-sand)" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark"
                style={{
                  padding: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <GithubIcon size={18} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark-text)' }}>
                    GitHub
                  </span>
                </div>
                <ArrowUpRight size={14} color="var(--accent-sand)" />
              </a>
            </div>

            {/* Direct WhatsApp Option */}
            {personalInfo.socials.whatsapp && (
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <WhatsappIcon size={20} />
                  <div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark-text)', display: 'block' }}>
                      Direct WhatsApp
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--dark-text-secondary)' }}>
                      Quick questions and agile project messaging
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={14} color="var(--accent-sand)" />
              </a>
            )}
          </div>

          {/* Right Column: Functional Dark Message Form */}
          <div
            className="card-dark"
            style={{
              padding: 'clamp(28px, 4vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 className="heading-sub" style={{ fontSize: '1.25rem', color: 'var(--dark-text)', marginBottom: '4px' }}>
                Send a Message
              </h3>
              <p className="body-small" style={{ color: 'var(--dark-text-secondary)', marginBottom: '22px' }}>
                Fill out the form below to initiate a discussion.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '24px',
                    backgroundColor: 'rgba(183, 110, 76, 0.1)',
                    border: '1px solid var(--accent-copper)',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}
                >
                  <Check size={26} color="var(--accent-sand)" style={{ margin: '0 auto 10px' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--dark-text)', marginBottom: '4px' }}>
                    Email client initiated!
                  </div>
                  <p style={{ fontSize: '0.84375rem', color: 'var(--dark-text-secondary)', lineHeight: 1.5 }}>
                    If your email client didn't open automatically, please send directly to <strong>{emailAddress}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--dark-text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '6px'
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--dark-text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '6px'
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--dark-text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '6px'
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Briefly describe your project, opportunity, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-dark"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-copper"
                    style={{ marginTop: '8px', justifyContent: 'center' }}
                  >
                    <span>Send Message</span>
                    <Send size={14} className="btn-arrow" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
