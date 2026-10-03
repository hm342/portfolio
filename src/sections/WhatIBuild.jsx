import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Globe, Smartphone, Layout, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { MagicCard } from '../components/ui/MagicCard';
import { SMOOTH_EASE } from '../utils/animations';

export const WhatIBuild = () => {
  const domains = [
    {
      num: '01',
      title: 'Commercial Web Platforms & Portals',
      icon: <Briefcase size={20} />,
      tag: 'ENTERPRISE // B2B',
      accent: '#00F2FE',
      description: 'Industrial manufacturing portals, client quotation pipelines (RFQ), dynamic technical product catalogs, and administrative dashboards designed for high operational throughput.',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript']
    },
    {
      num: '02',
      title: 'Full-Stack Web Applications',
      icon: <Globe size={20} />,
      tag: 'SCALABLE // REACTIVE',
      accent: '#38BDF8',
      description: 'High-clarity web apps with structured relational backend schemas, RESTful APIs, optimized query performance, and reactive React user interfaces.',
      tech: ['React', 'REST APIs', 'Node.js', 'PostgreSQL']
    },
    {
      num: '03',
      title: 'Tactile Mobile Applications',
      icon: <Smartphone size={20} />,
      tag: 'CROSS-PLATFORM // ERGONOMIC',
      accent: '#34D399',
      description: 'Smooth, cross-platform mobile apps for iOS and Android built with React Native. Prioritizing instant tactile feedback, local caching, and gesture ergonomics.',
      tech: ['React Native', 'Supabase', 'Mobile UX', 'State Sync']
    },
    {
      num: '04',
      title: 'Autonomous Robotics & Computer Vision',
      icon: <Terminal size={20} />,
      tag: 'HARDWARE // EMBEDDED AI',
      accent: '#C084FC',
      description: 'Integration of physical microcontrollers, closed-loop telemetry, edge AI models for real-time plant pathology recognition, and live mobile operator dashboards.',
      tech: ['Edge AI', 'Computer Vision', 'Microcontrollers', 'Sensors']
    }
  ];

  return (
    <section id="what-i-build" className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <SectionHeading
          theme="dark"
          category="WHAT I BUILD"
          title="Four core engineering domains."
          subtitle="Delivering purpose-built software with tailored architecture for businesses, mobile users, and hardware systems."
        />

        {/* High-Tech Black Glass Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {domains.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: SMOOTH_EASE }}
            >
              <MagicCard
                spotlightColor={`${item.accent}1F`}
                borderColor={`${item.accent}4D`}
                style={{
                  height: '100%',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px'
                }}
              >
                <div>
                  {/* Top Bar: Icon, Tag & Number */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: `${item.accent}15`,
                        border: `1px solid ${item.accent}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.accent,
                        boxShadow: `0 0 16px -2px ${item.accent}33`
                      }}
                    >
                      {item.icon}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: item.accent,
                          letterSpacing: '0.08em'
                        }}
                      >
                        {item.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          color: 'var(--text-muted)'
                        }}
                      >
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="heading-card"
                    style={{
                      color: '#F8FAFC',
                      fontSize: '1.25rem',
                      marginBottom: '10px'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="body-small"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
