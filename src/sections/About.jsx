import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const About = () => {
  const coreTech = [
    'Laravel',
    'PHP',
    'React',
    'React Native',
    'JavaScript',
    'MySQL',
    'WordPress'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeading
          category="ABOUT"
          title="Engineering software with clarity and intent."
          subtitle="A product-oriented mindset grounded in solid software engineering practices."
        />

        <div
          style={{
            maxWidth: '820px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Large Editorial Statement */}
          <blockquote
            className="quote-statement"
            style={{
              paddingLeft: '24px',
              borderLeft: '3px solid var(--accent-copper)',
              margin: 0
            }}
          >
            “I build web and mobile applications that turn real business requirements into usable software.”
          </blockquote>

          {/* Supporting Narrative with Copper Highlights */}
          <p className="body-lead" style={{ color: 'var(--text-secondary)' }}>
            My work centers around architecting reliable backend services in <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>Laravel</strong> and <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>PHP</strong>, modeling structured relational databases in <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>MySQL</strong>, and creating high-performance client interfaces using <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>React</strong>, <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>JavaScript</strong>, and <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>React Native</strong>.
          </p>

          <p className="body-regular">
            Rather than accumulating superficial abstractions, I focus on building software that solves concrete operational challenges—from industrial product catalogs and international trade logistics to streamlined mobile workflows and tailored <strong style={{ color: 'var(--accent-copper)', fontWeight: 600 }}>WordPress</strong> corporate implementations.
          </p>

          {/* Core Technologies Badges */}
          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '8px'
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}
            >
              // Primary Technologies Mentioned:
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {coreTech.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
