import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { HangingSkillsBoard } from '../components/ui/HangingSkillsBoard';
import { skillCategories } from '../data/technologies';
import { Badge } from '../components/common/Badge';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          category="SKILLS & TECHNOLOGIES"
          title="Interactive skills installation."
          subtitle="A physical hanging display of the languages, frameworks, and tools I use to build web and application experiences. Grab and swing any capsule."
        />

        {/* Hanging Skills Interactive Physics Display */}
        <div style={{ marginBottom: '48px' }}>
          <HangingSkillsBoard />
        </div>

        {/* Grouped Category Index for Fast Reading */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}
        >
          {skillCategories.map((group) => (
            <div key={group.category} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="status-dot-copper" style={{ width: '4px', height: '4px' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-copper)',
                    letterSpacing: '0.06em'
                  }}
                >
                  {group.category}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="default" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
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
