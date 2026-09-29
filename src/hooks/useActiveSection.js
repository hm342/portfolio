import { useState, useEffect } from 'react';

/**
 * Performantly tracks the active section using IntersectionObserver
 * @param {string[]} sectionIds Array of section element IDs
 * @param {object} options IntersectionObserver options
 * @returns {string} Currently active section ID
 */
export const useActiveSection = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '-20% 0px -40% 0px',
      threshold: options.threshold || 0.15
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeSection;
};
