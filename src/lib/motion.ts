import type { Transition } from "framer-motion";

// Shared motion tokens — single source of truth for timing/easing.
export const easeSmoothOut = [0.22, 1, 0.36, 1] as const;

export const sectionReveal: Transition = {
  duration: 0.6,
  ease: easeSmoothOut,
};

export const cardReveal = (delay = 0): Transition => ({
  duration: 0.5,
  delay,
  ease: easeSmoothOut,
});
