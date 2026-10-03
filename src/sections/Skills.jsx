import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { HangingSkillsBoard } from '../components/ui/HangingSkillsBoard';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          category="SKILLS & TECHNOLOGIES"
          title="Interactive skills installation."
          subtitle="A physical hanging display of my languages, frameworks, AI workflows, and developer tools. Grab, swing, or filter any capsule."
        />

        {/* Hanging Skills Interactive Physics Display */}
        <HangingSkillsBoard />
      </div>
    </section>
  );
};
