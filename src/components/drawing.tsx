"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { plot, settle } from "@/lib/motion";

/* ──────────────────────────────────────────────────────────
   Drawing primitives shared by every sheet.
   ISA-5.1 bubbles, stamps, dimension rules, title blocks.
   ────────────────────────────────────────────────────────── */

/** Tiny uppercase annotation text (Martian Mono, tracked). */
export function Annot({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}) {
  return (
    <Tag
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** ISA-5.1 instrument bubble: service letter(s) over tag number. */
export function Bubble({
  top,
  bottom,
  size = 64,
  className,
  accent = false,
}: {
  top: string;
  bottom: string;
  size?: number;
  className?: string;
  accent?: boolean;
}) {
  const r = size / 2 - 1;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label={`${top} ${bottom}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="var(--color-paper)"
        stroke={accent ? "var(--color-accent)" : "var(--color-ink)"}
        strokeWidth="1.4"
      />
      <line
        x1={2.5}
        x2={size - 2.5}
        y1={size / 2}
        y2={size / 2}
        stroke={accent ? "var(--color-accent)" : "var(--color-ink)"}
        strokeWidth="0.8"
      />
      <text
        x="50%"
        y={size * 0.355}
        textAnchor="middle"
        className="font-mono"
        fontSize={size * 0.21}
        fontWeight={500}
        fill={accent ? "var(--color-accent-deep)" : "var(--color-ink)"}
      >
        {top}
      </text>
      <text
        x="50%"
        y={size * 0.755}
        textAnchor="middle"
        className="font-mono"
        fontSize={size * 0.19}
        fill="var(--color-ink-soft)"
      >
        {bottom}
      </text>
    </svg>
  );
}

/** Bubble split into tag letters / number: "TEN" over "101". */
export function TagBubble({
  tag,
  size = 52,
  accent = false,
  className,
}: {
  tag: string;
  size?: number;
  accent?: boolean;
  className?: string;
}) {
  const [top, bottom] = tag.split("-");
  return (
    <Bubble top={top} bottom={bottom} size={size} accent={accent} className={className} />
  );
}

/** Section corner stamp — sits in the zone, never above the heading. */
export function SheetStamp({
  sheet,
  rev = "E",
  className,
}: {
  sheet: string;
  rev?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-stretch border font-mono text-[11px] tracking-[0.16em] text-ink-soft",
        className,
      )}
    >
      <span className="border-r border-rule px-2.5 py-1.5">SHT {sheet}</span>
      <span className="bg-accent px-2.5 py-1.5 text-paper">{rev}</span>
    </span>
  );
}

/** Dimension-rule divider: line with arrowheads at each end. */
export function DimRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-hidden="true"
    >
      <svg width="14" height="10" viewBox="0 0 14 10" className="shrink-0">
        <path d="M13 1 L2 5 L13 9" fill="none" stroke="var(--color-rule-strong)" strokeWidth="1.1" />
      </svg>
      <div className="h-px flex-1 bg-rule-strong" />
      <svg width="14" height="10" viewBox="0 0 14 10" className="shrink-0">
        <path d="M1 1 L12 5 L1 9" fill="none" stroke="var(--color-rule-strong)" strokeWidth="1.1" />
      </svg>
    </div>
  );
}

/** Hairline table cell frame used in title blocks and schedules. */
export function Field({
  label,
  children,
  className,
  strong = false,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
}) {
  return (
    <div className={cn("border border-rule bg-paper", className)}>
      <Annot className="block border-b border-rule bg-sheet px-3 py-1">{label}</Annot>
      <div
        className={cn(
          "px-3 py-2 text-[15px] leading-6",
          strong ? "font-mono text-ink" : "font-sans font-medium text-ink-soft",
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Plotter-revealed SVG path: the line is drawn by a pen, not faded in. */
export function PlotPath({
  d,
  stroke = "var(--color-ink)",
  delay = 0,
  duration,
  className,
  strokeWidth = 1.6,
  dashed = false,
  animate = true,
}: {
  d: string;
  stroke?: string;
  delay?: number;
  duration?: number;
  className?: string;
  strokeWidth?: number;
  dashed?: boolean;
  animate?: boolean;
}) {
  const reduce = useReducedMotion();
  const on = animate && !reduce;
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? "5 5" : undefined}
      initial={on ? { pathLength: 0, opacity: 0 } : false}
      animate={on ? { pathLength: 1, opacity: 1 } : undefined}
      transition={plot(duration, delay)}
      className={className}
    />
  );
}

/** Block that settles onto the sheet (0.35s max, no bounce). */
export function SettleBlock({
  children,
  delay = 0,
  className,
  inView = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  if (inView) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={settle(delay)}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={settle(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Section heading pair: big Archivo title, stamp parked right. */
export function SheetHeader({
  sheet,
  title,
  note,
  className,
}: {
  sheet: string;
  title: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end",
        className,
      )}
    >
      <SettleBlock inView>
        <div className="mb-3 flex items-center gap-4">
          <SheetStamp sheet={sheet} />
          <DimRule className="hidden w-40 md:flex" />
        </div>
        <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
          {title}
        </h2>
        {note && (
          <p className="mt-4 max-w-xl font-sans text-[17px] leading-7 font-medium text-ink-soft">
            {note}
          </p>
        )}
      </SettleBlock>
    </div>
  );
}
