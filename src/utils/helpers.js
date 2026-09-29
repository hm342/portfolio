// Helper utility functions

export const scrollToSection = (id, offset = 60) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: id === "hero" ? 0 : offsetPosition,
    behavior: "smooth"
  });
};

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
  return false;
};
