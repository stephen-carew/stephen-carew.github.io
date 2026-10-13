"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode";
import { PlotPath, Annot, DimRule } from "@/components/drawing";
import TransferSwitch from "@/components/transfer-switch";
import { easeSmoothOut, settle } from "@/lib/motion";

const RESUME_HREF = "/Stephen_Carew_Instrumentation_Engineer.pdf";

const INK = "var(--color-ink)";
const PEN = "var(--color-accent)";

/**
 * INSTRUMENT mode: the career as a closed control loop.
 * Readable by anyone who knows loop diagrams; the plain
 * pipeline below replaces it for everyone else.
 */
function LoopDiagram({
  sp,
  controller,
  finalElement,
  process,
  output,
  feedback,
  tag,
}: {
  sp: string;
  controller: string;
  finalElement: string;
  process: string;
  output: string;
  feedback: string;
  tag: string;
}) {
  const [tagTop, tagBottom] = tag.split("-");

  const blockLabel =
    "font-mono text-[9px] uppercase tracking-[0.18em] fill-ink-faint";
  const blockValue =
    "font-sans text-[13px] font-bold tracking-[-0.01em] fill-ink";

  return (
    <svg
      viewBox="0 0 700 370"
      className="w-full"
      role="img"
      aria-label={`Control loop: ${sp} to ${controller} to ${finalElement} to ${process}, feedback via ${feedback}`}
    >
      <PlotPath d="M12 185 q7 -12 14 0 t14 0 t14 0 H54" stroke={PEN} strokeWidth={1.6} delay={0.1} duration={0.7} />
      <path d="M62 185 l-9 -4.5 v9 z" fill={INK} />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(0.6)}>
        <circle cx="78" cy="185" r="15" fill="var(--color-paper)" stroke={INK} strokeWidth="1.4" />
        <path d="M78 173 v24 M66 185 h24" stroke={INK} strokeWidth="1.1" />
      </motion.g>

      <AnnotText x={12} y={163} text={sp} />

      <PlotPath d="M93 185 H152" stroke={INK} delay={0.8} duration={0.4} />
      <path d="M160 185 l-9 -4.5 v9 z" fill={INK} />

      <PlotPath d="M160 145 h150 v80 h-150 z" stroke={INK} strokeWidth={1.4} delay={1.1} duration={0.9} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(1.8)}>
        <text x="235" y="167" textAnchor="middle" className={blockLabel}>
          CONTROLLER
        </text>
        <text x="235" y="192" textAnchor="middle" className={blockValue}>
          {controller}
        </text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(2.0)}>
        <line x1="235" y1="145" x2="235" y2="118" stroke={INK} strokeWidth="1.1" />
        <circle cx="235" cy="92" r="26" fill="var(--color-paper)" stroke={PEN} strokeWidth="1.5" />
        <line x1="210" y1="92" x2="260" y2="92" stroke={PEN} strokeWidth="0.9" />
        <text x="235" y="88" textAnchor="middle" className="font-mono text-[11px] fill-[var(--color-accent-deep)]" fontWeight={600}>
          {tagTop}
        </text>
        <text x="235" y="111" textAnchor="middle" className="font-mono text-[11px] fill-ink-soft">
          {tagBottom}
        </text>
      </motion.g>

      <PlotPath d="M310 185 H358" stroke={INK} delay={2.0} duration={0.4} />
      <path d="M366 185 l-9 -4.5 v9 z" fill={INK} />

      <PlotPath d="M366 145 h130 v80 h-130 z" stroke={INK} strokeWidth={1.4} delay={2.3} duration={0.8} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(2.9)}>
        <text x="431" y="167" textAnchor="middle" className={blockLabel}>
          FINAL ELEMENT
        </text>
        <text x="431" y="192" textAnchor="middle" className={blockValue}>
          {finalElement}
        </text>
      </motion.g>

      <PlotPath d="M496 185 H528" stroke={INK} delay={3.0} duration={0.3} />
      <path d="M536 185 l-9 -4.5 v9 z" fill={INK} />

      <PlotPath d="M536 145 h110 v80 h-110 z" stroke={INK} strokeWidth={1.4} delay={3.2} duration={0.7} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(3.7)}>
        <text x="591" y="167" textAnchor="middle" className={blockLabel}>
          PROCESS
        </text>
        <text x="591" y="192" textAnchor="middle" className={blockValue}>
          {process}
        </text>
      </motion.g>

      <PlotPath d="M646 185 H684" stroke={PEN} strokeWidth={1.8} delay={3.8} duration={0.4} />
      <path d="M688 185 l-9 -4.5 v9 z" fill={PEN} />
      <AnnotText x={632} y={212} text={output} accent />

      <PlotPath d="M667 185 V318 H78 V200" stroke={INK} strokeWidth={1.3} dashed delay={4.1} duration={1.5} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(5.2)}>
        <circle cx="667" cy="185" r="3.5" fill="var(--color-paper)" stroke={INK} strokeWidth="1.2" />
        <AnnotText x={300} y={310} text={feedback} />
      </motion.g>
    </svg>
  );
}

/**
 * PRODUCT mode: the same working method, in words anyone can
 * read. Problem → build → ship → it runs; feedback goes back
 * to the problem. The live product is named on the diagram.
 */
function PipelineDiagram({ liveHost }: { liveHost: string }) {
  const box = "font-sans text-[15px] font-extrabold tracking-[-0.01em] fill-ink";
  const step = "font-mono text-[9px] uppercase tracking-[0.18em] fill-ink-faint";

  const boxes: [number, number, number, string, string][] = [
    [20, 145, 150, "01", "A problem"],
    [210, 145, 150, "02", "I build it"],
    [400, 145, 130, "03", "It ships"],
    [570, 145, 110, "04", "It runs"],
  ];

  return (
    <svg
      viewBox="0 0 700 370"
      className="w-full"
      role="img"
      aria-label="How I work: find a problem, build it, ship it, run it. User feedback returns to the problem list."
    >
      {boxes.map(([x, y, w, num, label], i) => (
        <g key={label}>
          <PlotPath
            d={`M${x} ${y} h${w} v80 h-${w} z`}
            stroke={INK}
            strokeWidth={1.4}
            delay={0.2 + i * 0.55}
            duration={0.7}
          />
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={settle(0.55 + i * 0.55)}
          >
            <text x={x + w / 2} y={y + 26} textAnchor="middle" className={step}>
              STEP {num}
            </text>
            <text x={x + w / 2} y={y + 52} textAnchor="middle" className={box}>
              {label}
            </text>
          </motion.g>
          {i < 3 && (
            <>
              <PlotPath
                d={`M${x + w + 4} 185 H${boxes[i + 1][0] - 12}`}
                stroke={i === 2 ? PEN : INK}
                strokeWidth={i === 2 ? 1.8 : 1.3}
                delay={0.85 + i * 0.55}
                duration={0.25}
              />
              <path
                d={`M${boxes[i + 1][0] - 4} 185 l-9 -4.5 v9 z`}
                fill={i === 2 ? PEN : INK}
              />
            </>
          )}
        </g>
      ))}

      {/* what "it runs" means, named */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(2.6)}>
        <line x1="625" y1="225" x2="625" y2="252" stroke={PEN} strokeWidth="1.3" />
        <text x="625" y="268" textAnchor="middle" className="font-mono text-[10px] uppercase tracking-[0.14em] fill-[var(--color-accent-deep)]">
          {liveHost}
        </text>
      </motion.g>

      {/* feedback back to the problem */}
      <PlotPath d="M625 236 V318 H95 V232" stroke={INK} strokeWidth={1.3} dashed delay={2.9} duration={1.4} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={settle(4.1)}>
        <path d="M95 226 l-4.5 9 h9 z" fill={INK} />
        <text x="360" y="311" textAnchor="middle" className="font-mono text-[9px] uppercase tracking-[0.16em] fill-ink-faint">
          what breaks, what&apos;s wanted — back to the list
        </text>
      </motion.g>
    </svg>
  );
}

function AnnotText({
  x,
  y,
  text,
  accent = false,
}: {
  x: number;
  y: number;
  text: string;
  accent?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
        accent ? "fill-[var(--color-accent)]" : "fill-ink-faint"
      }`}
    >
      {text}
    </text>
  );
}

const Hero = () => {
  const { mode, copy } = useMode();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 md:pt-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Nameplate zone */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={settle(0.05)}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint"
          >
            <span>DWG SC-2026 · SHT 01</span>
            <span className="text-accent">REV E</span>
            <span>ISSUED FOR: {copy.issuedFor}</span>
          </motion.p>

          <h1 className="font-sans text-[clamp(3.4rem,9vw,6.8rem)] font-black uppercase leading-[0.92] tracking-[-0.035em] text-ink">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: easeSmoothOut }}
                className="block"
              >
                Stephen
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: easeSmoothOut }}
                className="block"
              >
                Carew
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeSmoothOut }}
            className="mt-4 h-[3px] w-40 origin-left bg-accent"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={settle(0.65)}
            className="mt-5 font-sans text-[15px] font-bold uppercase tracking-[0.08em] text-ink"
          >
            {copy.title}
          </motion.p>

          <motion.p
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-3 max-w-xl font-sans text-[clamp(1.25rem,2.6vw,1.6rem)] font-semibold leading-[1.25] tracking-[-0.015em] text-ink"
          >
            {copy.headline}
          </motion.p>
          <p className="mt-4 max-w-xl font-sans text-[16px] leading-7 font-medium text-ink-soft">
            {copy.sub}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={settle(0.5)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#case-study"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:bg-accent-deep"
            >
              See the case study
              <span className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px">
                ↗
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:border-accent hover:text-accent-deep"
            >
              Get in touch
            </a>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent-deep"
            >
              Résumé.pdf
            </a>
          </motion.div>

          {/* Mode discovery: make the transfer obvious in context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={settle(0.9)}
            className="mt-7 flex flex-wrap items-center gap-3 border-t border-dashed border-rule-strong pt-5"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
              {copy.switchHint}
            </span>
            <TransferSwitch compact />
          </motion.div>
        </div>

        {/* Working-method diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: easeSmoothOut }}
          className="lg:col-span-5"
        >
          <div className="relative border border-rule bg-paper p-4 sm:p-6">
            <span className="absolute -top-[9px] left-4 bg-paper px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
              How I work — not to scale
            </span>
            {mode === "instrument" ? (
              <LoopDiagram
                key="loop"
                sp="SETPOINT"
                controller="CONTROL SYSTEMS"
                finalElement="ACTUATION"
                process="PLANT"
                output="MEASURED OUTPUT"
                feedback="INSTRUMENTATION"
                tag={copy.tag}
              />
            ) : (
              <PipelineDiagram key="pipeline" liveHost="ebenor.co.uk" />
            )}
            <DimRule className="mt-3" />
            <div className="mt-2 flex justify-between">
              <Annot>{copy.figureLeft}</Annot>
              <Annot>{copy.figureRight}</Annot>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Title block strip */}
      <div className="mx-auto mt-14 max-w-[1240px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={settle(1.0)}
          className="grid grid-cols-2 border border-ink md:grid-cols-6"
        >
          {[
            ["DRAWN BY", "S. CAREW"],
            ["CHECKED BY", "—"],
            ["SCALE", "NTS"],
            ["SHEET", "1 OF 6"],
            ["DATE", "ISSUED 2026"],
            ["APPROVED", "sign →"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`border-ink px-4 py-3 ${
                i % 2 === 1 ? "border-l" : ""
              } md:border-l md:first:border-l-0 ${
                i < 4 ? "border-b" : ""
              } md:border-b-0`}
            >
              <Annot className="block">{label}</Annot>
              <p
                className={`mt-1 font-mono text-[13px] uppercase tracking-[0.12em] ${
                  value === "sign →"
                    ? "sign-line pb-1 text-ink-faint"
                    : "text-ink"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
