// Centralized Framer Motion variants and transitions adhering to the luxury aesthetic

export const LUXURY_EASE = [0.16, 1, 0.3, 1];

export const transitionFast = {
  duration: 0.3,
  ease: LUXURY_EASE
};

export const transitionMedium = {
  duration: 0.6,
  ease: LUXURY_EASE
};

export const transitionSlow = {
  duration: 0.9,
  ease: LUXURY_EASE
};

// Container with staggered children
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Editorial Fade Up
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE
    }
  }
};

// Subtle Fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE
    }
  }
};

// Editorial Mask / Clip Reveal (from bottom)
export const maskReveal = {
  hidden: {
    opacity: 0,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    y: 20
  },
  visible: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE
    }
  }
};

// Horizontal Line Drawing
export const lineDraw = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transformOrigin: "left",
    transition: {
      duration: 0.9,
      ease: LUXURY_EASE
    }
  }
};

// Card Reveal with slight scale
export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE
    }
  }
};
