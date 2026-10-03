import React from 'react';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { scrollToSection } from '../utils/helpers';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(56px, 10vh, 110px)',
        paddingBottom: 'clamp(48px, 8vh, 88px)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '820px' }}>
          
          {/* Overline Badge */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase'
              }}
            >
              <span className="status-dot" style={{ backgroundColor: 'var(--accent-primary)' }} />
              SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display-hero"
            style={{
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}
          >
            I build web and mobile applications that solve real business problems.
          </h1>

          {/* Concise Narrative */}
          <p
            className="body-lead"
            style={{
              marginBottom: '28px',
              maxWidth: '680px',
              color: 'var(--text-secondary)'
            }}
          >
            Hi, I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{personalInfo.name}</strong>. I specialize in full-stack web platforms, API development, and cross-platform mobile apps with an emphasis on clean architecture, maintainability, and practical business value.
          </p>

          {/* Technologies Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '36px',
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              width: 'fit-content'
            }}
          >
            <span
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                fontWeight: 500
              }}
            >
              Technologies:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {personalInfo.heroTechnologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {tech}
                  </span>
                  {idx < personalInfo.heroTechnologies.length - 1 && (
                    <span style={{ color: 'var(--border-medium)', fontSize: '0.75rem' }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="btn-primary"
            >
              <span>View My Work</span>
              <ArrowDown size={15} />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn-secondary"
            >
              <FileText size={15} />
              <span>Get in Touch / Resume</span>
            </a>
          </div>

          {/* Secondary Social Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Connect:
            </span>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
