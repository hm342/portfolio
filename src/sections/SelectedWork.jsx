import React from 'react';
import { selectedProjects } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';

export const SelectedWork = () => {
  return (
    <section
      id="work"
      className="section-padding"
      style={{
        backgroundColor: 'transparent',
        color: 'var(--dark-text)'
      }}
    >
      <div className="container">
        <SectionHeading
          theme="dark"
          category="SELECTED WORK"
          title="Things I've built."
          subtitle="Real-world web platforms, mobile applications, and hardware-software systems built for production."
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {selectedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isReversed={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
