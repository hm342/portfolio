import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { HangingSkillsBoard } from '../components/ui/HangingSkillsBoard';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          category="SKILLS & TECHNOLOGIES"
          title="Interactive 3D physics installation."
          subtitle="A tactile black glass suspension display of languages, frameworks, AI workflows, and developer tools. Grab, drag, fling, or filter any capsule."
        />
      </div>

      {/* Hanging Skills Interactive Physics Display - Wide Rail Breakout */}
      <div
        style={{
          width: '100%',
          maxWidth: '1680px',
          marginInline: 'auto',
          paddingInline: 'clamp(16px, 3.5vw, 48px)',
          boxSizing: 'border-box'
        }}
      >
        <HangingSkillsBoard />
      </div>
    </section>
  );
};
