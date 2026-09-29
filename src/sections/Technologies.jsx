import React, { useState } from 'react';
import { technologyCategories } from '../data/technologies';
import { SectionHeading } from '../components/common/SectionHeading';
import { TechnologyItem } from '../components/ui/TechnologyItem';
import { Reveal } from '../components/common/Reveal';
import { useCursor } from '../context/CursorContext';

export const Technologies = () => {
  const { setCursor, resetCursor } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend-web', label: 'Web & Frontend' },
    { id: 'backend-systems', label: 'Backend & Systems' },
    { id: 'mobile-engineering', label: 'Mobile Engineering' },
    { id: 'cloud-data', label: 'Cloud & BaaS' },
    { id: 'tooling-workflows', label: 'Tooling & Git' },
    { id: 'ai-systems', label: 'AI & Workflows' }
  ];

  const displayedCategories = selectedCategory === 'all'
    ? technologyCategories
    : technologyCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="technologies" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <SectionHeading
          number="08"
          category="TECHNICAL INDEX"
          title="Technologies, languages & runtime environments."
          subtitle="Organized by systemic responsibility. Verified technical competencies without fabricated percentages or vanity bars."
        />

        {/* Filter Navigation Tabs */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '40px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-hairline)'
            }}
          >
            {filterOptions.map((tab) => {
              const isActive = selectedCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                    background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: isActive ? '1px solid var(--gold-border)' : '1px solid var(--border-subtle)',
                    color: isActive ? 'var(--gold-light)' : 'var(--text-muted)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Categorized Tech Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {displayedCategories.map((cat, cIdx) => (
            <div key={cat.id}>
              <Reveal delay={0.05 * cIdx}>
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: '0.75rem',
                        color: 'var(--gold-primary)',
                        fontWeight: 600
                      }}
                    >
                      // 0{cIdx + 1}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {cat.categoryName}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.84375rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {cat.description}
                  </p>
                </div>
              </Reveal>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '16px'
                }}
              >
                {cat.items.map((tech) => (
                  <TechnologyItem key={tech.name} item={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
