import React, { useState } from 'react';
import { ArrowRight, Briefcase, Globe, Smartphone, Layout } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export const WhatIBuild = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const categories = [
    {
      num: '01',
      title: 'Business Applications',
      icon: <Briefcase size={18} />,
      description: 'Custom management portals, client RFQ workflows, and administrative tools tailored to streamline business operations.'
    },
    {
      num: '02',
      title: 'Web Applications',
      icon: <Globe size={18} />,
      description: 'Responsive, high-performance web platforms built with structured backend architectures, Laravel APIs, and relational databases.'
    },
    {
      num: '03',
      title: 'Mobile Applications',
      icon: <Smartphone size={18} />,
      description: 'Tactile, cross-platform mobile apps for iOS and Android engineered with React Native and modern ergonomics.'
    },
    {
      num: '04',
      title: 'WordPress Websites',
      icon: <Layout size={18} />,
      description: 'Bespoke corporate themes, product showcases, and manageable CMS platforms tailored for client delivery.'
    }
  ];

  return (
    <section id="what-i-build" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          category="WHAT I BUILD"
          title="Four core application domains."
          subtitle="Delivering purpose-built software with tailored architecture for businesses and end-users."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {categories.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="card-warm"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  cursor: 'default',
                  borderColor: isHovered ? 'var(--accent-copper)' : 'var(--border-subtle)',
                  transform: isHovered ? 'translateY(-3px)' : 'none',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Header: Number and Arrow */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: isHovered ? 'var(--accent-copper)' : 'var(--text-muted)',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    {item.num}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isHovered ? 'var(--accent-tint)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isHovered ? 'var(--accent-copper)' : 'var(--border-subtle)',
                      transform: isHovered ? 'translateX(2px)' : 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div>
                  <h3
                    className="heading-card"
                    style={{
                      marginBottom: '8px',
                      fontSize: '1.125rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="body-small"
                    style={{
                      color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
