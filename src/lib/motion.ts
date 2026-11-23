export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
