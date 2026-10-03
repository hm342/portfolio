import React from 'react';
import { Briefcase, Globe, Smartphone, Layout } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export const WhatIBuild = () => {
  const categories = [
    {
      title: 'Business Applications',
      icon: <Briefcase size={20} color="var(--accent-primary)" />,
      description: 'Custom management tools, client portals, and administrative workflows tailored to streamline business operations.'
    },
    {
      title: 'Web Applications',
      icon: <Globe size={20} color="var(--accent-primary)" />,
      description: 'Responsive, high-performance web platforms built with structured backend logic and relational databases.'
    },
    {
      title: 'Mobile Applications',
      icon: <Smartphone size={20} color="var(--accent-primary)" />,
      description: 'Tactile, cross-platform mobile apps for iOS and Android engineered with React Native and modern ergonomics.'
    },
    {
      title: 'WordPress Websites',
      icon: <Layout size={20} color="var(--accent-primary)" />,
      description: 'Bespoke corporate themes, product showcases, and manageable CMS platforms designed for client independence.'
    }
  ];

  return (
    <section id="what-i-build" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <SectionHeading
          category="WHAT I BUILD"
          title="Specialized application domains."
          subtitle="Focused on delivering practical, maintainable solutions across four core areas."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {categories.map((item) => (
            <div
              key={item.title}
              className="card-modern"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className="heading-card"
                  style={{ marginBottom: '8px', fontSize: '1.0625rem' }}
                >
                  {item.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
