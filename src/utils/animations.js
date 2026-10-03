// Centralized Framer Motion variants and transitions adhering to the premium easing
export const SMOOTH_EASE = [0.22, 1, 0.36, 1];

export const transitionFast = {
  duration: 0.25,
  ease: SMOOTH_EASE
};

export const transitionMedium = {
  duration: 0.5,
  ease: SMOOTH_EASE
};

export const transitionSlow = {
  duration: 0.75,
  ease: SMOOTH_EASE
};

// Container with staggered children
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
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
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: SMOOTH_EASE
    }
  }
};

// Subtle Fade In
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: SMOOTH_EASE
    }
  }
};
