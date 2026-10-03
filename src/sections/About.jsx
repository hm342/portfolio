import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { MagicCard } from '../components/ui/MagicCard';
import { Code, Server, Cpu, Database, Smartphone } from 'lucide-react';
import { SMOOTH_EASE } from '../utils/animations';

export const About = () => {
  const capabilities = [
    { icon: <Server size={18} />, title: 'Backend Systems', desc: 'Laravel, PHP MVC, RESTful APIs, Queue workers, and Microservices.' },
    { icon: <Database size={18} />, title: 'Database Architecture', desc: 'Relational schema design, MySQL query optimization, indexing, and data pipelines.' },
    { icon: <Code size={18} />, title: 'Modern Frontend', desc: 'React, modern ES6+, Three.js 3D WebGL interfaces, responsive layout engineering.' },
    { icon: <Smartphone size={18} />, title: 'Cross-Platform Mobile', desc: 'React Native iOS & Android development with tactile gesture ergonomics.' }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <SectionHeading
          theme="dark"
          category="ABOUT"
          title="Engineering software with clarity and intent."
          subtitle="A product-oriented mindset grounded in solid software engineering practices."
        />

        <div style={{ maxWidth: '980px', marginInline: 'auto' }}>
          <MagicCard
            style={{
              padding: 'clamp(28px, 5vw, 48px)',
              marginBottom: '32px'
            }}
          >
            {/* Editorial Statement */}
            <blockquote
              className="quote-statement"
              style={{
                paddingLeft: '24px',
                borderLeft: '3px solid #B7D63D',
                marginBottom: '28px',
                color: '#F3EFE6'
              }}
            >
              “I build web and mobile applications that turn real business requirements into usable, high-performance software.”
            </blockquote>

            {/* Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)' }}>
              <p className="body-lead" style={{ color: '#F3EFE6' }}>
                My work centers around architecting reliable backend services in <strong style={{ color: '#B7D63D', fontWeight: 600 }}>Laravel</strong> and <strong style={{ color: '#B7D63D', fontWeight: 600 }}>PHP</strong>, modeling structured relational databases in <strong style={{ color: '#B7D63D', fontWeight: 600 }}>MySQL</strong>, and creating high-performance client interfaces using <strong style={{ color: '#F3EFE6', fontWeight: 600 }}>React</strong>, <strong style={{ color: '#F3EFE6', fontWeight: 600 }}>JavaScript</strong>, and <strong style={{ color: '#B7D63D', fontWeight: 600 }}>React Native</strong>.
              </p>

              <p className="body-regular">
                Rather than accumulating superficial abstractions, I focus on building software that solves concrete operational challenges—from industrial product catalogs and international trade logistics to streamlined mobile workflows and tailored corporate implementations.
              </p>
            </div>
          </MagicCard>

          {/* 4 Obsidian Glass Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: SMOOTH_EASE }}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(183, 214, 61, 0.12)',
                    border: '1px solid rgba(183, 214, 61, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B7D63D'
                  }}
                >
                  {cap.icon}
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9375rem', fontWeight: 700, color: '#F3EFE6' }}>
                  {cap.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
