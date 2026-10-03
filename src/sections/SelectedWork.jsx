import React from 'react';
import { selectedProjects } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';

export const SelectedWork = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <SectionHeading
          category="SELECTED WORK"
          title="Featured software projects."
          subtitle="Real-world web platforms, mobile applications, and hardware-software systems built for production."
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {selectedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
