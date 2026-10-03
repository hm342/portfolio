import React from 'react';
import { Server, Monitor, Smartphone, Layout, Wrench } from 'lucide-react';
import { skillCategories } from '../data/technologies';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const Skills = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'BACKEND':
        return <Server size={18} color="var(--accent-primary)" />;
      case 'FRONTEND':
        return <Monitor size={18} color="var(--accent-primary)" />;
      case 'MOBILE':
        return <Smartphone size={18} color="var(--accent-primary)" />;
      case 'CMS':
        return <Layout size={18} color="var(--accent-primary)" />;
      case 'TOOLS':
        return <Wrench size={18} color="var(--accent-primary)" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeading
          category="SKILLS & TECHNOLOGIES"
          title="Technologies & tools."
          subtitle="Grouped by engineering discipline without arbitrary percentage bars."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="card-modern"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--accent-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  {group.skills.length} TECHNOLOGIES
                </span>
              </div>

              {group.description && (
                <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                  {group.description}
                </p>
              )}

              {/* Skills List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
