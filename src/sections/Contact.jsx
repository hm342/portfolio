import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/common/Icons';
import { personalInfo } from '../data/personal';
import { SectionHeading } from '../components/common/SectionHeading';
import { copyToClipboard } from '../utils/helpers';

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

    // Direct mailto with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <SectionHeading
          category="CONTACT"
          title="Let's work together."
          subtitle="Have a project, opportunity, or idea? Get in touch directly."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            maxWidth: '1000px'
          }}
        >
          {/* Left: Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div
              className="card-modern"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={18} color="var(--accent-primary)" />
                  <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    Email
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="action-link"
                  style={{ fontSize: '0.75rem', cursor: 'pointer' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} color="var(--accent-primary)" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  wordBreak: 'break-all'
                }}
              >
                {emailAddress}
              </div>

              <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                Preferred for job inquiries, project scopes, and engineering discussions.
              </p>

              <div style={{ marginTop: '4px' }}>
                <a
                  href={emailMailto}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Send Email</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-modern"
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LinkedinIcon size={18} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-modern"
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GithubIcon size={18} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    GitHub
                  </span>
                </div>
                <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>
            </div>

            {/* WhatsApp Direct Option */}
            {personalInfo.socials.whatsapp && (
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card-modern"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <WhatsappIcon size={18} />
                  <div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                      Direct WhatsApp
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Quick messaging and agile project discussions
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>
            )}
          </div>

          {/* Right: Clean Functional Message Form */}
          <div
            className="card-modern"
            style={{
              padding: 'clamp(24px, 4vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 className="heading-sub" style={{ fontSize: '1.125rem', marginBottom: '4px' }}>
                Send a Message
              </h3>
              <p className="body-small" style={{ marginBottom: '20px' }}>
                Fill out the details below to start a conversation.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}
                >
                  <Check size={24} color="#16A34A" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#166534', marginBottom: '4px' }}>
                    Email client initiated!
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#15803D' }}>
                    If your email client didn't open automatically, please send directly to <strong>{emailAddress}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px'
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-modern"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px'
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-modern"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px'
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Describe your project, question, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-modern"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-accent"
                    style={{ marginTop: '8px', justifyContent: 'center' }}
                  >
                    <span>Send Message</span>
                    <Send size={14} />
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
