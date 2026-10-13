"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as localProjects } from "@/data/projects";
import { useMode } from "@/lib/mode";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { easeSmoothOut } from "@/lib/motion";
import {
  Annot,
  SheetStamp,
  TagBubble,
  DimRule,
  SettleBlock,
} from "@/components/drawing";

const FLAGSHIP_ID = "ebenor";

const marks: Record<string, string> = {
  all: "All",
  saas: "SaaS",
  web: "Web",
  blockchain: "Web3",
  bot: "Bots",
};

const scheduleProjects = localProjects.filter((p) => p.id !== FLAGSHIP_ID);

const statusOf = (p: Project) => (p.liveUrl ? "LIVE" : "BUILT");

const Projects = () => {
  const [mark, setMark] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const rows =
    mark === "all"
      ? scheduleProjects
      : scheduleProjects.filter((p) => p.category === mark);

  return (
    <section id="work" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Header + filter legend */}
        <SettleBlock inView className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-4">
              <SheetStamp sheet="03" />
              <DimRule className="hidden w-40 md:flex" />
            </div>
            <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
              Selected work.
            </h2>
            <p className="mt-3 max-w-xl font-sans text-[16px] leading-7 font-medium text-ink-soft">
              Seven products built for specific problems: restaurants, car
              parts, NFT collections, Discord servers. Open a row for the
              problem and how it was solved.
            </p>
          </div>

          <div
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]"
            role="group"
            aria-label="Filter schedule"
          >
            <Annot>Filter:</Annot>
            {Object.entries(marks).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setMark(id)}
                aria-pressed={mark === id}
                className={cn(
                  "cursor-pointer pb-0.5 transition-colors",
                  mark === id
                    ? "border-b-2 border-accent text-accent-deep"
                    : "border-b-2 border-transparent text-ink-faint hover:text-ink",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </SettleBlock>

        {/* Schedule table */}
        <SettleBlock inView className="border border-ink">
          {/* column headers — desktop only */}
          <div className="hidden grid-cols-[76px_minmax(0,4fr)_minmax(0,3fr)_64px_120px_44px] items-center gap-4 border-b border-ink bg-sheet px-4 py-2 lg:grid">
            <Annot className="text-[9px]">Ref</Annot>
            <Annot className="text-[9px]">Project</Annot>
            <Annot className="text-[9px]">Stack</Annot>
            <Annot className="text-[9px]">Yr</Annot>
            <Annot className="text-[9px]">Status</Annot>
            <span />
          </div>

          {rows.map((p, i) => (
            <ScheduleRow
              key={p.id}
              project={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              last={i === rows.length - 1}
            />
          ))}
        </SettleBlock>
      </div>
    </section>
  );
};

function ScheduleRow({
  project: p,
  open,
  onToggle,
  last,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
  last: boolean;
}) {
  const { mode } = useMode();
  return (
    <div className={cn(!last && "border-b border-rule")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={cn(
          "group grid w-full cursor-pointer grid-cols-1 items-center gap-x-4 gap-y-2 px-4 py-4 text-left transition-colors duration-150 lg:grid-cols-[76px_minmax(0,4fr)_minmax(0,3fr)_64px_120px_44px]",
          open ? "bg-sheet" : "hover:bg-sheet",
        )}
      >
        <TagBubble
          tag={p.tag ?? "XX-000"}
          size={52}
          accent={open}
          className="justify-self-start lg:justify-self-center"
        />

        <span className="lg:col-start-2">
          <span className="block font-sans text-[19px] font-extrabold leading-tight tracking-[-0.015em] text-ink">
            {p.title.split("—")[0].trim()}
          </span>
          <Annot className="mt-1 block font-mono text-[10px] normal-case tracking-[0.08em] text-ink-faint lg:hidden">
            {p.service}
          </Annot>
          <span className="mt-1 hidden font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft lg:block">
            {p.service}
          </span>
        </span>

        <span className="flex flex-wrap gap-1 lg:col-start-3">
          {p.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="border border-rule bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-soft"
            >
              {t}
            </span>
          ))}
          {p.technologies.length > 3 && (
            <span className="px-1 font-mono text-[10px] text-ink-faint">
              +{p.technologies.length - 3}
            </span>
          )}
        </span>

        <span className="font-mono text-[12px] text-ink-faint lg:col-start-4">
          {p.year}
        </span>

        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.14em] lg:col-start-5",
            p.liveUrl ? "text-pass" : "text-ink-faint",
          )}
        >
          ● {statusOf(p)}
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "hidden justify-self-end font-mono text-[13px] text-ink-faint transition-transform duration-300 lg:block",
            open && "rotate-180 text-accent",
          )}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSmoothOut }}
            className="overflow-hidden border-t border-dashed border-rule-strong bg-paper"
          >
            <div className="grid grid-cols-1 gap-8 px-4 py-7 md:grid-cols-[76px_minmax(0,1fr)] lg:px-4">
              <div className="hidden md:block" aria-hidden="true">
                {/* leader line from the tag down the detail, like a drawing callout */}
                <div className="ml-[26px] h-full w-px border-l border-dashed border-accent/60" />
              </div>
              <div className="space-y-6">
                {mode === "instrument" && p.loopNote && (
                  <div>
                    <Annot className="mb-2 block text-accent-deep">
                      Loop reading
                    </Annot>
                    <p className="max-w-3xl font-sans text-[15px] leading-6 font-semibold text-ink">
                      {p.loopNote}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Annot className="mb-2 block text-ink">The problem</Annot>
                    <p className="max-w-xl font-sans text-[14px] leading-6 font-medium text-ink-soft">
                      {p.problem || p.description}
                    </p>
                  </div>
                  <div>
                    <Annot className="mb-2 block text-ink">How it was solved</Annot>
                    <p className="max-w-xl font-sans text-[14px] leading-6 font-medium text-ink-soft">
                      {p.solution || p.longDescription}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-deep hover:underline"
                    >
                      Visit site ↗
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faint hover:text-ink"
                    >
                      Source ↗
                    </a>
                  )}
                  <span className="text-ink-faint md:ml-auto">
                    {marks[p.category] ?? p.category} · {p.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
