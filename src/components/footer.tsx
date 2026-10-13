"use client";

import { Annot, DimRule } from "@/components/drawing";

const revisions = [
  ["A", "2023", "First issue — Discord automation suite"],
  ["B", "2024", "Solana staking and trait marketplaces added"],
  ["C", "2025", "Restaurant and car-parts platforms added"],
  ["D", "2026", "Ebenor went live at ebenor.co.uk"],
  ["E", "2026", "Site re-drawn from scratch for hiring"],
];

const index = [
  ["01", "Cover", "#top"],
  ["02", "Case study — Ebenor", "#case-study"],
  ["03", "Selected work", "#work"],
  ["04", "Skills & tools", "#skills"],
  ["05", "Background", "#background"],
  ["06", "Contact", "#contact"],
];

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-ink bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Mark */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="border border-ink px-2 py-1 font-mono text-[10px] tracking-[0.16em]">
                SC-2026
              </span>
              <span className="font-sans text-[15px] font-extrabold uppercase tracking-[-0.01em]">
                Stephen Carew
              </span>
            </div>
            <p className="mt-4 max-w-xs font-sans text-[14px] leading-6 font-medium text-ink-soft">
              Instrumentation &amp; control engineer (MSc) who builds
              production software solo. The switch at the top shows the page
              for either role.
            </p>
            <div className="mt-5 flex gap-5 font-mono text-[10px] uppercase tracking-[0.16em]">
              <a href="https://github.com/stephen-carew" className="text-ink-faint hover:text-accent-deep" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/stephen-carew" className="text-ink-faint hover:text-accent-deep" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:hi@stephencarew.dev" className="text-ink-faint hover:text-accent-deep">
                Email ↗
              </a>
            </div>
          </div>

          {/* Sheet index */}
          <div className="md:col-span-3">
            <Annot className="mb-4 block">Page index</Annot>
            <ul className="space-y-2">
              {index.map(([num, title, href]) => (
                <li key={num}>
                  <a
                    href={href}
                    className="group flex items-baseline gap-3 font-sans text-[14px] font-semibold text-ink-soft transition-colors hover:text-ink"
                  >
                    <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                      {num}
                    </span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Revision history */}
          <div className="md:col-span-5">
            <Annot className="mb-4 block">Revision history</Annot>
            <div className="border-x border-t border-ink">
              {revisions.map(([rev, date, desc], i) => (
                <div
                  key={rev}
                  className={`grid grid-cols-[48px_64px_minmax(0,1fr)] gap-3 px-4 py-2.5 ${
                    i < revisions.length - 1 ? "border-b border-rule" : ""
                  }`}
                >
                  <span className="font-mono text-[11px] text-accent-deep">
                    REV {rev}
                  </span>
                  <span className="font-mono text-[11px] text-ink-faint">
                    {date}
                  </span>
                  <span className="font-sans text-[13px] font-medium text-ink-soft">
                    {desc}
                  </span>
                </div>
              ))}
              <div className="border-b border-ink" />
            </div>
          </div>
        </div>

        <DimRule className="mt-12" />

        <div className="mt-5 flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint md:flex-row md:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
            © 2026 Stephen Carew — hand-drawn interface, no templates used.
          </span>
          <a href="#top" className="hover:text-accent-deep">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
