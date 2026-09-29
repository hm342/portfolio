import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { LUXURY_EASE } from '../../utils/animations';

export const SectionHeading = ({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-header-wrap ${className}`}
      style={{
        marginBottom: 'clamp(40px, 7vw, 72px)',
        textAlign: isCentered ? 'center' : 'left'
      }}
    >
      <Reveal delay={0.05} yOffset={15}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
            justifyContent: isCentered ? 'center' : 'flex-start'
          }}
        >
          {number && (
            <span
              className="mono-num"
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.8125rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.12em',
                fontWeight: 600
              }}
            >
              [{number}]
            </span>
          )}
          {category && (
            <span className="label-overline">
              {category}
            </span>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.15} yOffset={24}>
        <h2
          className="heading-section"
          style={{
            maxWidth: isCentered ? '900px' : '820px',
            marginInline: isCentered ? 'auto' : '0',
            marginBottom: subtitle ? '20px' : '0'
          }}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.25} yOffset={20}>
          <p
            className="body-lead"
            style={{
              maxWidth: isCentered ? '680px' : '640px',
              marginInline: isCentered ? 'auto' : '0',
              color: 'var(--text-secondary)'
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}

      {/* Subtle thin hairline divider */}
      <Reveal delay={0.3} yOffset={10}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
          style={{
            width: isCentered ? '80px' : '60px',
            height: '1px',
            background: 'linear-gradient(90deg, var(--gold-primary), transparent)',
            marginInline: isCentered ? 'auto' : '0',
            marginTop: '28px',
            transformOrigin: isCentered ? 'center' : 'left'
          }}
        />
      </Reveal>
    </div>
  );
};
