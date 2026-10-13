"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { useMode } from "@/lib/mode";
import {
  Annot,
  SheetStamp,
  TagBubble,
  DimRule,
  SettleBlock,
} from "@/components/drawing";
import { easeSmoothOut } from "@/lib/motion";

const ratings = [
  ["110+", "SHIPPED FEATURES"],
  ["55+", "DB MIGRATIONS"],
  ["5", "BILLING TIERS"],
  ["30+", "API ROUTE GROUPS"],
];

const FeaturedCaseStudy = () => {
  const ebenor = projects.find((p) => p.id === "ebenor");
  const [detailOpen, setDetailOpen] = useState(false);
  const { mode } = useMode();

  if (!ebenor) return null;

  return (
    <section id="case-study" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SheetHeader />

        <SettleBlock inView className="border border-ink bg-paper">
          {/* Header band */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-ink p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <TagBubble tag={ebenor.tag ?? "EBN-101"} accent size={64} />
              <div>
                <h3 className="font-sans text-[clamp(2.2rem,4.5vw,3.4rem)] font-black uppercase leading-none tracking-[-0.03em] text-ink">
                  Ebenor
                </h3>
                <Annot className="mt-2 block">
                  {ebenor.service} — since {ebenor.year}
                </Annot>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <SheetStamp sheet="02" />
              <a
                href={ebenor.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:bg-accent hover:text-paper"
              >
                Open live site ↗
              </a>
            </div>
          </div>

          {/* Spec table */}
          <dl className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            <SpecRow label="Live now">
              <span className="text-pass">●</span> UK property platform, in
              production at{" "}
              <a
                href={ebenor.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-accent underline-offset-4 hover:text-accent-deep"
              >
                ebenor.co.uk
              </a>
            </SpecRow>
            <SpecRow label="Built by">
              Stephen Carew, solo, from database schema to user interface.
            </SpecRow>
            <SpecRow label="What it does">
              Listings, tenant screening, clause-by-clause contracts, digital
              signatures, rent collection, maintenance tickets, and reporting,
              in one place instead of five apps.
            </SpecRow>
            <SpecRow label="Stack">
              <ul className="flex flex-wrap gap-1.5">
                {ebenor.technologies.map((t) => (
                  <li
                    key={t}
                    className="border border-rule bg-sheet px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </SpecRow>
            <SpecRow label="How plans work">
              Five subscription tiers, enforced at three layers: server
              middleware, client hooks, and database functions. Nobody can
              reach a feature they haven&apos;t paid for.
            </SpecRow>
            <SpecRow label="Security">
              Row Level Security on every table. Tenants see their own data;
              landlords see their own properties.
            </SpecRow>
            <SpecRow label="Scale" last>
              <dt>Scale</dt>
              <dd>
                <div className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-4">
                  {ratings.map(([value, label]) => (
                    <div key={label} className="bg-paper px-3 py-3">
                      <p className="font-sans text-3xl font-extrabold tracking-[-0.02em] text-ink">
                        {value}
                      </p>
                      <Annot className="mt-1 block text-[9px]">{label}</Annot>
                    </div>
                  ))}
                </div>
              </dd>
            </SpecRow>
          </dl>

          {/* Mode-gated engineering note */}
          <div
            className={`border-t px-6 py-5 sm:px-8 ${
              mode === "instrument" ? "border-accent bg-accent/[0.06]" : "border-rule"
            }`}
          >
            <Annot className="mb-1.5 block text-accent-deep">
              {mode === "instrument" ? "Loop reading" : "Notable decision"}
            </Annot>
            <p className="max-w-3xl font-sans text-[16px] leading-6 font-semibold text-ink">
              {mode === "instrument" ? (
                <>
                  {ebenor.loopNote} The contract engine is a JSON clause state
                  machine; the AI pipeline parses tenant intent into structured
                  JSON before anything reaches a human queue.
                </>
              ) : (
                <>
                  Tenants and landlords negotiate contracts clause by clause,
                  and signing stays locked until both sides agree on every
                  single one. Tenant messages are sorted by AI into maintenance
                  needs, rent enquiries, and renewal signals before a human
                  reads them.
                </>
              )}
            </p>
          </div>

          {/* Detail expansion */}
          <div className="border-t border-ink px-6 py-5 sm:px-8">
            <button
              type="button"
              onClick={() => setDetailOpen((o) => !o)}
              aria-expanded={detailOpen}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 text-left"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                <span className="text-accent-deep">
                  {mode === "instrument" ? "SECTION A–A" : "READ MORE"}
                </span>{" "}
                {detailOpen
                  ? "— close"
                  : mode === "instrument"
                    ? "— problem / approach"
                    : "— the problem and how I solved it"}
              </span>
              <span
                className={`font-mono text-[11px] text-ink-faint transition-transform duration-300 ${
                  detailOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <AnimatePresence initial={false}>
              {detailOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: easeSmoothOut }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-8 pt-7 md:grid-cols-2">
                    <div>
                      <Annot className="mb-3 block text-ink">The problem</Annot>
                      <p className="font-sans text-[15px] leading-7 font-medium text-ink-soft">
                        {ebenor.problem}
                      </p>
                    </div>
                    <div>
                      <Annot className="mb-3 block text-ink">The approach</Annot>
                      <p className="font-sans text-[15px] leading-7 font-medium text-ink-soft">
                        {ebenor.solution}
                      </p>
                    </div>
                  </div>
                  <DimRule className="mt-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SettleBlock>
      </div>
    </section>
  );
};

function SpecRow({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <>
      <dt className="border-b border-rule bg-sheet px-6 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint md:border-r md:border-ink md:px-8 md:py-0 md:pt-4">
        {label}
      </dt>
      <dd
        className={`border-b border-ink px-6 py-4 font-sans text-[15px] leading-7 font-medium text-ink-soft md:px-8 ${
          last ? "md:border-b-0" : ""
        }`}
      >
        {children}
      </dd>
    </>
  );
}

/** Header for sheet 02 with the stamp parked in the corner zone. */
function SheetHeader() {
  return (
    <SettleBlock inView className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <div className="mb-3 flex items-center gap-4">
          <SheetStamp sheet="02" />
          <DimRule className="hidden w-40 md:flex" />
        </div>
        <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
          The flagship: Ebenor.
        </h2>
        <p className="mt-3 max-w-xl font-sans text-[16px] leading-7 font-medium text-ink-soft">
          A UK property platform built by one person and live at
          ebenor.co.uk.
        </p>
      </div>
      <Annot className="md:pb-2">03 — seven more projects below ↓</Annot>
    </SettleBlock>
  );
}

export default FeaturedCaseStudy;
