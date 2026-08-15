"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSmoothOut } from "@/lib/motion";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-24 pb-16 md:pb-0">
      {/* Technical grid + restrained tonal wash */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(185,145,120,0.14),transparent_42%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Side rail annotation — second-read moment */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-accent-sand/45" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-cream-50/35 [writing-mode:vertical-rl] rotate-180">
            SIGNAL → PRODUCT
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 lg:pl-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeSmoothOut }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 font-mono text-sm sm:text-[15px] tracking-[0.22em] text-accent-sand">
            FULL-STACK PRODUCT ENGINEER
          </p>

          <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.02em] text-cream-50 sm:text-6xl md:text-7xl lg:text-[86px]">
            Full-stack products,
            <br />
            <span className="text-accent-sand">engineered as systems.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl font-mono text-base leading-7 text-text-secondary md:text-[19px]">
            Database → API → UI → payments → ship. Built end-to-end, mostly
            solo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[4px] bg-cream-50 px-6 py-3 font-mono text-sm text-ink-950 transition-colors hover:bg-cream-100"
            >
              View case studies
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.35] px-6 py-3 font-mono text-sm text-cream-50 transition-colors hover:border-white/[0.6]"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Bottom hairline + meta */}
        <div className="mx-auto mt-16 flex max-w-[1180px] flex-col items-center justify-between gap-4 border-t border-white/[0.14] pt-6 font-mono text-[13px] tracking-[0.14em] text-text-muted md:flex-row">
          <span>
            UK · SOLO-SHIPPED SAAS · SOLANA · CONTROL-SYSTEMS BACKGROUND
          </span>
          <span className="text-accent-sand">SCROLL ↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
