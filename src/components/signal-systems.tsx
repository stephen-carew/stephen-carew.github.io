"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Annot,
  SheetStamp,
  DimRule,
  Field,
  PlotPath,
  SettleBlock,
} from "@/components/drawing";

const waveformPath =
  "M0 132 C32 132 48 122 72 122 S112 132 136 132 S176 98 208 104 S248 150 272 146 S312 88 344 92 S384 160 408 158 S448 104 472 100 S512 122 536 124 S576 150 600 148 S640 116 664 112 S704 100 728 104 S776 120 800 118";

const SignalSystems = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scopeRef, { once: true, margin: "-80px" });

  return (
    <section id="background" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SettleBlock inView className="mb-10">
          <div className="mb-3 flex items-center gap-4">
            <SheetStamp sheet="05" />
            <DimRule className="hidden w-40 md:flex" />
          </div>
          <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
            Background &amp; education.
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-[16px] leading-7 font-medium text-ink-soft">
            An MSc in control engineering on top of an electrical engineering
            degree. Both thesis projects share one habit: model the system,
            then measure what makes it drift.
          </p>
        </SettleBlock>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Strip chart: BSc thesis trace */}
          <SettleBlock inView className="lg:col-span-7">
            <div
              ref={scopeRef}
              className="relative overflow-hidden border border-ink bg-chart"
            >
              <div
                className="perf-edge absolute inset-y-0 left-0 z-10 w-[10px] bg-chart"
                aria-hidden="true"
              />
              <div
                className="perf-edge absolute inset-y-0 right-0 z-10 w-[10px] bg-chart"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between border-b border-rule px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                <span>Gait phase classification · IMU sample window</span>
                <span>BSc (Hons) thesis · Curtin</span>
              </div>

              <svg
                viewBox="0 0 800 220"
                preserveAspectRatio="none"
                className="block h-56 w-full sm:h-64"
                aria-hidden="true"
              >
                {[160, 320, 480, 640].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    x2={x}
                    y1="0"
                    y2="220"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.08"
                  />
                ))}
                <line
                  x1="0"
                  x2="800"
                  y1="110"
                  y2="110"
                  stroke="var(--color-ink)"
                  strokeOpacity="0.12"
                  strokeDasharray="2 6"
                />

                <PlotPath
                  d={waveformPath}
                  stroke="var(--color-accent)"
                  strokeWidth={2.4}
                  animate={inView}
                  duration={2.2}
                  delay={0.2}
                />

                {inView && (
                  <g>
                    <line
                      x1="408"
                      x2="408"
                      y1="30"
                      y2="220"
                      stroke="var(--color-ink)"
                      strokeOpacity="0.45"
                      strokeDasharray="3 5"
                    />
                    <circle cx="408" cy="158" r="4.5" fill="var(--color-ink)" />
                  </g>
                )}
              </svg>

              <div className="flex justify-between border-t border-rule px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                <span>0.00 s</span>
                <span className="text-accent-deep">t+0.62 s · stance detected</span>
                <span>1.20 s</span>
              </div>
            </div>
            <Annot className="mt-2 block">
              Fig. 5.1 — gait trace redrawn from undergraduate thesis sample
              data.
            </Annot>
          </SettleBlock>

          {/* Thesis cards + education */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <SettleBlock inView delay={0.05}>
              <div className="border border-ink bg-paper p-7">
                <Annot className="mb-3 block text-accent-deep">
                  MSc thesis — in progress, Teesside University
                </Annot>
                <h3 className="font-sans text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
                  PSO-optimised fuzzy self-tuning PID control.
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase leading-5 tracking-[0.08em] text-ink-faint">
                  Performance and robustness under dead time, nonlinearity and
                  parameter uncertainty
                </p>
                <p className="mt-4 font-sans text-[15px] leading-7 font-medium text-ink-soft">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-deep">
                    In plain terms: 
                  </span>
                  a controller that tunes itself. A particle swarm optimises
                  the fuzzy rules that adjust PID gains, and the thesis asks
                  what survives when the process lags, bends, and drifts away
                  from its tuning point. Hand-tuned loops fail this way; the
                  work measures whether this one doesn&apos;t.
                </p>
              </div>
            </SettleBlock>

            <SettleBlock inView delay={0.1}>
              <div className="border border-ink bg-paper p-7">
                <Annot className="mb-3 block text-accent-deep">
                  BSc (Hons) thesis — Curtin University
                </Annot>
                <h3 className="font-sans text-[20px] font-extrabold leading-[1.2] tracking-[-0.015em] text-ink">
                  Gait phase detection using inertial measurement units and
                  neural networks.
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-7 font-medium text-ink-soft">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-deep">
                    In plain terms: 
                  </span>
                  a sensor on the leg tells, in real time, which phase of
                  walking is happening, classified by a neural network on the
                  sampled signal. I worked sensor pipelines before software
                  ones.
                </p>
              </div>
            </SettleBlock>

            <SettleBlock inView delay={0.15}>
              <Field label="Current — postgraduate">
                Instrumentation &amp; Control, MSc · Teesside University, UK.
                Advanced control systems, industrial automation, distributed
                sensor networks.
              </Field>
            </SettleBlock>
            <SettleBlock inView delay={0.2}>
              <Field label="Previous — undergraduate">
                Electrical &amp; Electronics Engineering, BSc (Hons) · Curtin
                University, Australia. Circuit theory, digital electronics,
                signal processing.
              </Field>
            </SettleBlock>
            <SettleBlock inView delay={0.25}>
              <div className="border border-dashed border-rule-strong px-5 py-4">
                <Annot>Career route</Annot>
                <p className="mt-1.5 font-sans text-[14px] font-semibold text-ink">
                  Undergraduate in Australia, master&apos;s in the UK, software
                  shipped from both.
                </p>
              </div>
            </SettleBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalSystems;
