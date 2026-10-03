import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { HangingSkillsBoard } from '../components/ui/HangingSkillsBoard';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          category="SKILLS & TECHNOLOGIES"
          title="Interactive 3D physics installation."
          subtitle="A tactile black glass suspension display of languages, frameworks, AI workflows, and developer tools. Grab, drag, fling, or filter any capsule."
        />

        {/* Hanging Skills Interactive Physics Display */}
        <HangingSkillsBoard />
      </div>
    </section>
  );
};
