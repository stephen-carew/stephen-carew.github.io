"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { sectionReveal, cardReveal } from "@/lib/motion";

const education = [
  {
    degree: "Instrumentation & Control, MSc",
    institution: "Teesside University — UK",
    year: "Current",
    detail:
      "Advanced control systems, industrial automation, and distributed sensor networks.",
  },
  {
    degree: "Electrical & Electronics Engineering, BSc (Hons)",
    institution: "Curtin University — Australia",
    year: "Graduated",
    detail:
      "Circuit theory, digital electronics, signal processing, and hardware-software integration.",
  },
];

const waveformPath =
  "M0 132 C32 132 48 122 72 122 S112 132 136 132 S176 98 208 104 S248 150 272 146 S312 88 344 92 S384 160 408 158 S448 104 472 100 S512 122 536 124 S576 150 600 148 S640 116 664 112 S704 100 728 104 S776 120 800 118";

const SignalSystems = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scopeRef, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionReveal}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.22em] text-accent-sand">
            SYS.05 — SIGNAL &amp; SYSTEMS
          </p>
          <h2 className="max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.02em] text-cream-50 md:text-[72px]">
            I think in signals
            <br />
            and systems.
          </h2>
          <p className="mt-6 max-w-xl font-mono text-base leading-7 text-text-secondary">
            Most developers start at the UI. I start at the loop. That changes
            how I design databases, APIs, and products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Thesis card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={cardReveal(0)}
            className="lg:col-span-7"
          >
            <div ref={scopeRef} className="h-full overflow-hidden rounded-[4px] border border-white/[0.12] bg-ink-900">
              {/* Signal analyzer instrument */}
              <div className="relative h-56 sm:h-64 overflow-hidden border-b border-white/[0.08]">
                <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.16em]">
                  <span className="text-cream-50/70">REAL-TIME CLASSIFICATION</span>
                  <span className="hidden text-text-muted sm:inline">GPH-04 · IMU SAMPLE WINDOW</span>
                </div>

                <svg
                  viewBox="0 0 800 220"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#C8A184" stopOpacity="0.35" />
                      <stop offset="0.5" stopColor="#C8A184" stopOpacity="1" />
                      <stop offset="1" stopColor="#C8A184" stopOpacity="0.55" />
                    </linearGradient>
                    <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#C8A184" stopOpacity="0.18" />
                      <stop offset="1" stopColor="#C8A184" stopOpacity="0" />
                    </linearGradient>
                    <filter id="waveGlow" x="-20%" y="-40%" width="140%" height="180%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <pattern id="analyzerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0H0V40" fill="none" stroke="#F3EFE6" strokeOpacity="0.05" />
                    </pattern>
                  </defs>

                  <rect x="0" y="0" width="800" height="220" fill="url(#analyzerGrid)" />

                  {/* horizontal scale lines */}
                  {[0.25, 0.5, 0.75].map((ratio) => (
                    <line
                      key={ratio}
                      x1="0"
                      x2="800"
                      y1={220 * ratio}
                      y2={220 * ratio}
                      stroke="#F3EFE6"
                      strokeOpacity="0.07"
                    />
                  ))}

                  {/* vertical time divisions */}
                  {[160, 320, 480, 640].map((x) => (
                    <line
                      key={x}
                      x1={x}
                      x2={x}
                      y1="30"
                      y2="220"
                      stroke="#F3EFE6"
                      strokeOpacity="0.05"
                    />
                  ))}

                  {/* area fill under the waveform */}
                  <path
                    d={`${waveformPath} L800 220 L0 220 Z`}
                    fill="url(#waveFill)"
                  />

                  {/* reference trace */}
                  <path
                    d={waveformPath}
                    fill="none"
                    stroke="#F3EFE6"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    transform="translate(0 8)"
                  />

                  {/* main waveform — draws in on scroll */}
                  <motion.path
                    d={waveformPath}
                    fill="none"
                    stroke="url(#waveStroke)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    filter="url(#waveGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                  />

                  {/* detection marker */}
                  <line
                    x1="408"
                    x2="408"
                    y1="30"
                    y2="220"
                    stroke="#C8A184"
                    strokeOpacity="0.35"
                    strokeDasharray="3 5"
                  />
                  <motion.circle
                    cx="408"
                    cy="158"
                    r="5"
                    fill="#C8A184"
                    filter="url(#waveGlow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.1, duration: 0.4, ease: "easeOut" }}
                  />
                  <circle
                    cx="408"
                    cy="158"
                    r="12"
                    fill="none"
                    stroke="#C8A184"
                    strokeOpacity="0.4"
                  />
                </svg>

                {/* scale labels */}
                <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between font-mono text-[10px] tracking-[0.14em] text-text-muted">
                  <span>0s</span>
                  <span className="text-accent-sand">t+0.62s · STANCE PHASE</span>
                  <span>1.2s</span>
                </div>
              </div>

              <div className="p-8">
                <p className="mb-4 font-mono text-[13px] tracking-[0.18em] text-accent-sand">
                  THESIS
                </p>
                <h3 className="font-serif text-3xl leading-snug text-cream-50">
                  Gait phase detection using IMUs + neural networks.
                </h3>
                <p className="mt-5 max-w-xl font-mono text-[15px] leading-7 text-text-secondary">
                  Real-time classification of human movement — the same loop as
                  any production system.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education facts */}
          <div className="space-y-4 lg:col-span-5">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={cardReveal(0.08 + index * 0.08)}
                className="rounded-[4px] border border-white/[0.12] bg-ink-900 p-7"
              >
                <p className="mb-3 font-mono text-[13px] tracking-[0.14em] text-text-muted">
                  {item.year}
                </p>
                <h3 className="font-serif text-2xl text-cream-50">
                  {item.degree}
                </h3>
                <p className="mt-1 font-mono text-sm text-accent-sand">
                  {item.institution}
                </p>
                <p className="mt-4 font-mono text-sm leading-6 text-text-secondary">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalSystems;
