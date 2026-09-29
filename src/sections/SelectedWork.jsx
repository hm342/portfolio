import React from 'react';
import { selectedProjects } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectShowcase } from '../components/ui/ProjectShowcase';

export const SelectedWork = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="03"
          category="SELECTED WORK"
          title="Case studies in commercial software & product design."
          subtitle="Delivering production web platforms, business solutions, and tactile mobile products engineered for clarity and performance."
        />

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {selectedProjects.map((project, idx) => (
            <ProjectShowcase
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
