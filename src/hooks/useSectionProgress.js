import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Computes continuous, smooth interpolation weights for each section
 * and the continuous vertical rail line progress during scrolling.
 *
 * @param {string[]} sectionIds Array of section element IDs in DOM order
 * @returns {{ weights: number[], lineProgress: number, activeSectionId: string }}
 */
export const useSectionProgress = (sectionIds) => {
  const [weights, setWeights] = useState(() => sectionIds.map((_, i) => (i === 0 ? 1 : 0)));
  const [lineProgress, setLineProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] || 'hero');

  const focalPointsRef = useRef([]);
  const rafIdRef = useRef(null);

  // Measure all section DOM positions
  const measureSections = useCallback(() => {
    if (typeof window === 'undefined') return;

    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = Math.max(docHeight - winHeight, 1);

    const focalPoints = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) {
        focalPoints.push((index / (sectionIds.length - 1)) * maxScroll);
        return;
      }

      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;

      if (index === 0) {
        focalPoints.push(0);
      } else if (index === sectionIds.length - 1) {
        focalPoints.push(Math.min(top - 70, maxScroll));
      } else {
        const focal = Math.max(0, top - 75);
        focalPoints.push(focal);
      }
    });

    // Ensure strictly monotonically increasing focal points
    for (let i = 1; i < focalPoints.length; i++) {
      if (focalPoints[i] <= focalPoints[i - 1]) {
        focalPoints[i] = focalPoints[i - 1] + 20;
      }
    }

    focalPointsRef.current = focalPoints;
  }, [sectionIds]);

  useEffect(() => {
    measureSections();

    // Re-measure after layout updates, images, and resize
    const timer1 = setTimeout(measureSections, 200);
    const timer2 = setTimeout(measureSections, 800);
    window.addEventListener('resize', measureSections, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', measureSections);
    };
  }, [measureSections]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isTicking = false;

    const updateInterpolation = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const count = sectionIds.length;

      // 1. Continuous overall scroll progress (0.0 to 1.0)
      const rawScrollFraction = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;

      // 2. Calculate active weights for section dots
      const focalPoints = focalPointsRef.current;
      const newWeights = new Array(count).fill(0);
      let focusedId = sectionIds[0];

      if (focalPoints.length === count) {
        if (scrollY >= maxScroll - 35) {
          newWeights[count - 1] = 1;
          focusedId = sectionIds[count - 1];
        } else if (scrollY <= 10) {
          newWeights[0] = 1;
          focusedId = sectionIds[0];
        } else {
          let segmentIndex = 0;
          for (let i = 0; i < count - 1; i++) {
            if (scrollY >= focalPoints[i] && scrollY < focalPoints[i + 1]) {
              segmentIndex = i;
              break;
            }
            if (i === count - 2 && scrollY >= focalPoints[count - 1]) {
              segmentIndex = count - 2;
            }
          }

          const k = segmentIndex;
          const startFocal = focalPoints[k];
          const endFocal = focalPoints[k + 1];
          const range = endFocal - startFocal;

          const rawProgress = range > 0 ? Math.min(Math.max((scrollY - startFocal) / range, 0), 1) : 0;
          const smoothedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);

          newWeights[k] = 1 - smoothedProgress;
          newWeights[k + 1] = smoothedProgress;

          focusedId = smoothedProgress > 0.5 ? sectionIds[k + 1] : sectionIds[k];
        }
      } else {
        // Fallback before initial measurement completes
        const estimatedIndex = Math.min(Math.floor(rawScrollFraction * count), count - 1);
        newWeights[estimatedIndex] = 1;
        focusedId = sectionIds[estimatedIndex];
      }

      setWeights(newWeights);
      setLineProgress(rawScrollFraction);
      setActiveSectionId((prev) => (prev !== focusedId ? focusedId : prev));

      isTicking = false;
    };

    const onScroll = () => {
      if (!isTicking) {
        rafIdRef.current = window.requestAnimationFrame(updateInterpolation);
        isTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateInterpolation(); // Initial run

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [sectionIds]);

  return { weights, lineProgress, activeSectionId };
};
