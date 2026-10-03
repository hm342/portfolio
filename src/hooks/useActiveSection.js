import { useState, useEffect } from 'react';

/**
 * Accurately tracks the active section during scroll.
 * Handles sections of varying heights (including very tall project showcases)
 * and reliably highlights the section currently in the user's viewport.
 * 
 * @param {string[]} sectionIds Array of section element IDs
 * @returns {string} Currently active section ID
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    let ticking = false;

    const calculateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If reached the bottom of the page, activate the last section (Contact)
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        ticking = false;
        return;
      }

      // 2. If at the very top (Hero section), no section in navbar is active
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        if (heroBottom > windowHeight * 0.45) {
          setActiveSection('');
          ticking = false;
          return;
        }
      }

      // Target reading line (typically ~180px from top or ~28% of viewport height)
      const offset = Math.max(160, Math.min(240, windowHeight * 0.28));

      let matchedSection = '';

      // Check each section in order
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // An element is active if its top is above or near the reading line
        // and its bottom extends below the reading line
        if (rect.top <= offset && rect.bottom > offset) {
          matchedSection = id;
          break;
        }
      }

      // If in what-i-build, maintain 'about' as active section
      if (!matchedSection) {
        const whatIBuild = document.getElementById('what-i-build');
        if (whatIBuild) {
          const wRect = whatIBuild.getBoundingClientRect();
          if (wRect.top <= offset && wRect.bottom > offset) {
            matchedSection = 'about';
          }
        }
      }

      // Fallback: find the section that has most recently passed the top offset
      if (!matchedSection) {
        let maxPassedTop = -Infinity;
        for (let i = 0; i < sectionIds.length; i++) {
          const id = sectionIds[i];
          const element = document.getElementById(id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.top > maxPassedTop) {
            maxPassedTop = rect.top;
            matchedSection = id;
          }
        }
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateActiveSection);
        ticking = true;
      }
    };

    // Calculate immediately on mount
    calculateActiveSection();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};
