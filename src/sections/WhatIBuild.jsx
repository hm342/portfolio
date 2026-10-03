import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Globe, Smartphone, Layout, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { MagicCard } from '../components/ui/MagicCard';
import { SMOOTH_EASE } from '../utils/animations';

export const WhatIBuild = () => {
  const domains = [
    {
      id: 'b2b-platforms',
      title: 'Commercial Web Platforms & Portals',
      icon: <Briefcase size={22} />,
      description: 'Industrial manufacturing portals, client quotation pipelines (RFQ), dynamic technical product catalogs, and administrative dashboards designed for high operational throughput.',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript']
    },
    {
      id: 'fullstack-apps',
      title: 'Full-Stack Web Applications',
      icon: <Globe size={22} />,
      description: 'High-clarity web apps with structured relational backend schemas, RESTful APIs, optimized query performance, and reactive React user interfaces.',
      tech: ['React', 'REST APIs', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'mobile-apps',
      title: 'Tactile Mobile Applications',
      icon: <Smartphone size={22} />,
      description: 'Smooth, cross-platform mobile apps for iOS and Android built with React Native. Prioritizing instant tactile feedback, local caching, and gesture ergonomics.',
      tech: ['React Native', 'Supabase', 'Mobile UX', 'State Sync']
    },
    {
      id: 'ai-robotics',
      title: 'Autonomous Robotics & Computer Vision',
      icon: <Terminal size={22} />,
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

        {/* Clean Modern Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {domains.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: SMOOTH_EASE }}
            >
              <MagicCard
                spotlightColor="rgba(183, 214, 61, 0.12)"
                borderColor="rgba(183, 214, 61, 0.35)"
                style={{
                  height: '100%',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                  backgroundColor: 'rgba(0, 0, 0, 0.78)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* 1. Icon */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(183, 214, 61, 0.12)',
                      border: '1px solid rgba(183, 214, 61, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#B7D63D',
                      boxShadow: '0 0 16px -2px rgba(183, 214, 61, 0.3)'
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* 2. Title */}
                  <h3
                    className="heading-card"
                    style={{
                      color: '#F3EFE6',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* 3. Sub data / Description */}
                  <p
                    className="body-small"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      fontSize: '0.875rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* 4. Tech stack tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(243, 239, 230, 0.08)'
                  }}
                >
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.71875rem',
                        color: '#F3EFE6',
                        backgroundColor: 'rgba(23, 23, 23, 0.6)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        border: '1px solid rgba(243, 239, 230, 0.1)'
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
