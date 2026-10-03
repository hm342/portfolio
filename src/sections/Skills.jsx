import React from 'react';
import { motion } from 'framer-motion';
import { Server, Monitor, Smartphone, Layout, Wrench } from 'lucide-react';
import { skillCategories } from '../data/technologies';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { SMOOTH_EASE } from '../utils/animations';

export const Skills = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'BACKEND':
        return <Server size={18} color="var(--accent-copper)" />;
      case 'FRONTEND':
        return <Monitor size={18} color="var(--accent-copper)" />;
      case 'MOBILE':
        return <Smartphone size={18} color="var(--accent-copper)" />;
      case 'CMS':
        return <Layout size={18} color="var(--accent-copper)" />;
      case 'TOOLS':
        return <Wrench size={18} color="var(--accent-copper)" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <SectionHeading
          category="SKILLS & TECHNOLOGIES"
          title="Grouped technology competencies."
          subtitle="Direct technical proficiency organized by engineering discipline without arbitrary percentages."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: SMOOTH_EASE }}
              className="card-warm"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: 'var(--bg-warm-card)'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {group.skills.length} TECH
                </span>
              </div>

              {group.description && (
                <p className="body-small" style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                  {group.description}
                </p>
              )}

              {/* Interactive Skills Badges (shift and copper accent on hover) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
