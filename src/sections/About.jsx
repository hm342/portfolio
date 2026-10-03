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
          title="Engineering software with clarity and purpose."
          subtitle="A practical approach to web and mobile product development."
        />

        <div
          style={{
            maxWidth: '760px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <p className="body-lead" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            I am a software developer focused on web and mobile application development. I build software that helps businesses operate efficiently, automate workflows, and deliver dependable user experiences.
          </p>

          <p className="body-regular">
            My work primarily centers around <strong style={{ color: 'var(--text-primary)' }}>Laravel</strong> and <strong style={{ color: 'var(--text-primary)' }}>PHP</strong> on the backend, designing relational schemas in <strong style={{ color: 'var(--text-primary)' }}>MySQL</strong> and architecting clean REST APIs. On the client side, I engineer responsive web interfaces with <strong style={{ color: 'var(--text-primary)' }}>React</strong> and <strong style={{ color: 'var(--text-primary)' }}>JavaScript</strong>, and develop cross-platform mobile apps using <strong style={{ color: 'var(--text-primary)' }}>React Native</strong>. I also create tailored content and corporate solutions on <strong style={{ color: 'var(--text-primary)' }}>WordPress</strong>.
          </p>

          <p className="body-regular">
            Rather than chasing unnecessary complexity, I value straightforward architecture, maintainable code, and reliable systems that solve real problems for real users.
          </p>

          {/* Core Technologies Badges */}
          <div
            style={{
              paddingTop: '16px',
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
                letterSpacing: '0.06em',
                marginBottom: '10px'
              }}
            >
              Core Technologies Mentioned:
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
