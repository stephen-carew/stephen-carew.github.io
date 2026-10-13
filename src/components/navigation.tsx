"use client";

import { useEffect, useState } from "react";
import TransferSwitch from "@/components/transfer-switch";
import { Annot } from "@/components/drawing";
import { cn } from "@/lib/utils";

const sheets = [
  { href: "#case-study", num: "02", label: "Impact" },
  { href: "#work", num: "03", label: "Work" },
  { href: "#skills", num: "04", label: "Skills" },
  { href: "#background", num: "05", label: "Background" },
  { href: "#contact", num: "06", label: "Contact" },
];

const socials = [
  { href: "https://github.com/stephen-carew", label: "GitHub" },
  { href: "https://linkedin.com/in/stephen-carew", label: "LinkedIn" },
  { href: "mailto:hi@stephencarew.dev", label: "hi@stephencarew.dev" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-200",
        isScrolled
          ? "border-b border-ink bg-paper/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 md:px-8">
        {/* Mark */}
        <a href="#top" className="flex items-center gap-3">

          <span className="font-sans text-[15px] font-extrabold uppercase tracking-[-0.01em] text-ink">
            Stephen&nbsp;Carew
          </span>
        </a>

        {/* Desktop sheet index */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sheets">
          {sheets.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group flex items-baseline gap-1.5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              <span className="text-accent transition-transform duration-200 group-hover:-translate-y-px">
                {s.num}
              </span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <TransferSwitch className="hidden md:inline-flex" compact />
          {/* Mobile index toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close sheet index" : "Open sheet index"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-ink lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-4 bg-ink transition-transform duration-200",
                menuOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-ink transition-transform duration-200",
                menuOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer: paper overlay, sheet index */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-paper transition-opacity duration-200 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <Annot className="mb-4">Page index — SC-2026</Annot>
          <nav className="flex flex-col" aria-label="Sheets (mobile)">
            {sheets.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-rule py-5 font-sans text-3xl font-extrabold tracking-[-0.02em] text-ink"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  {s.num}
                </span>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="mb-5 flex justify-center">
              <TransferSwitch compact />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navigation;
