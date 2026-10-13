import type { Transition } from "framer-motion";

// Shared motion tokens — single source of truth for timing/easing.
export const easeSmoothOut = [0.22, 1, 0.36, 1] as const;

/** Plotter reveal: a pen draws the line, easing out hard. */
export const plot = (duration = 1.4, delay = 0): Transition => ({
  duration,
  delay,
  ease: easeSmoothOut,
});

/** Blocks settle onto the sheet. Short, no bounce. */
export const settle = (delay = 0): Transition => ({
  duration: 0.35,
  delay,
  ease: easeSmoothOut,
});

export const sectionReveal: Transition = settle(0);

export const cardReveal = (delay = 0): Transition => settle(delay);
