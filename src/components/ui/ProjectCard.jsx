import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, Sparkles, Terminal, Activity, Eye } from 'lucide-react';
import { Badge } from '../common/Badge';
import { TiltCard3D } from './TiltCard3D';

export const ProjectCard = ({ project, index = 0, isReversed = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectNumber = String(index + 1).padStart(2, '0');

  // Map 3D images based on project ID
  const get3DImage = (id) => {
    switch (id) {
      case 'ma-engineering':
        return '/images/maeind_3d.jpg';
      case 'universal-exports':
        return '/images/universal_3d.jpg';
      case 'simplifyte':
        return '/images/simplifyte_3d.jpg';
      case 'terrarover':
        return '/images/terrarover_3d.jpg';
      default:
        return '/images/maeind_3d.jpg';
    }
  };

  const project3DImage = get3DImage(project.id);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-row"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(36px, 6vw, 64px)',
        alignItems: 'center',
        paddingBlock: 'clamp(48px, 8vw, 84px)',
        borderBottom: '1px solid rgba(243, 239, 230, 0.08)'
      }}
    >
      {/* Information Column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          order: isReversed ? 2 : 1
        }}
      >
        {/* Project Number & Category Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#B7D63D',
              letterSpacing: '0.04em'
            }}
          >
            {projectNumber}
          </span>
          <span style={{ color: 'rgba(243, 239, 230, 0.25)', fontSize: '0.75rem' }}>//</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#F3EFE6'
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3
          className="heading-sub"
          style={{
            fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
            color: '#F3EFE6',
            transform: isHovered ? 'translateX(4px)' : 'none',
            transition: 'transform var(--transition-fast)'
          }}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p
          className="body-lead"
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65
          }}
        >
          {project.summary}
        </p>

        {/* Deliverables / Features List */}
        {project.features && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBlock: '4px' }}>
            {project.features.map((feat, fIdx) => (
              <li
                key={fIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Check size={14} color="#B7D63D" style={{ marginTop: '4px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
              style={{
                borderColor: 'rgba(243, 239, 230, 0.12)',
                backgroundColor: '#292929',
                color: '#F3EFE6'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        {project.link && (
          <div style={{ paddingTop: '10px' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper"
              style={{ width: 'fit-content' }}
            >
              <span>{project.linkText || 'View Live Project'}</span>
              <ArrowRight size={15} className="btn-arrow" />
            </a>
          </div>
        )}
      </div>

      {/* 3D Visual Mockup Presentation Column */}
      <div
        style={{
          order: isReversed ? 1 : 2
        }}
      >
        <TiltCard3D maxTilt={9}>
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: isHovered ? '1px solid rgba(183, 214, 61, 0.5)' : '1px solid rgba(243, 239, 230, 0.12)',
              backgroundColor: '#292929',
              boxShadow: isHovered
                ? '0 24px 50px -10px rgba(183, 214, 61, 0.22), 0 0 30px rgba(183, 214, 61, 0.12)'
                : '0 16px 36px -6px rgba(0, 0, 0, 0.7)',
              transition: 'all var(--transition-normal)'
            }}
          >
            {/* Window Chrome Header in Black Glass */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                backgroundColor: '#292929',
                borderBottom: '1px solid rgba(243, 239, 230, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#B7D63D' }} />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.71875rem',
                  color: '#B7D63D',
                  backgroundColor: 'rgba(183, 214, 61, 0.1)',
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(183, 214, 61, 0.3)'
                }}
              >
                {project.displayUrl}
              </div>

              <div
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Sparkles size={11} color="#B7D63D" />
                3D_RENDER
              </div>
            </div>

            {/* 3D Visual Render Image with Smooth Parallax & Glass Reflection */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                overflow: 'hidden',
                backgroundColor: '#171717'
              }}
            >
              <img
                src={project3DImage}
                alt={`${project.title} 3D render preview`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                  filter: 'contrast(1.05) brightness(1.02)'
                }}
              />

              {/* Glass Sheen Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(23, 23, 23, 0.8) 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Micro Status Chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(41, 41, 41, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(243, 239, 230, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: '#F3EFE6'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#B7D63D',
                    boxShadow: '0 0 6px #B7D63D'
                  }}
                />
                <span>{project.type}</span>
              </div>
            </div>
          </div>
        </TiltCard3D>
      </div>
    </article>
  );
};
