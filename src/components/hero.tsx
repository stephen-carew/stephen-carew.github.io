"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const sidebarItems = [
  "Overview",
  "Projects",
  "Architecture",
  "Payments",
  "Blockchain",
  "Infrastructure",
];

const statCards = [
  { label: "Projects shipped", value: "7+" },
  { label: "Lines of TypeScript", value: "30k+" },
  { label: "Smart contracts", value: "3" },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  const bgY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : 100]);
  const mockupY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -50]);
  const floatingCardY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -120]);
  const floatingCard2Y = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -80]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Parallax atmospheric layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(185,145,120,0.28),transparent_34%),radial-gradient(circle_at_80%_65%,rgba(42,49,36,0.30),transparent_40%)]" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-sm font-medium text-text-muted tracking-wide uppercase">
            Full-stack product engineer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] leading-[1.08] text-cream-50">
            I build SaaS products
            <br />
            <span className="text-accent-sand">
              from zero to production
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-8 text-text-secondary">
            Database design, API architecture, UI components, payment
            integrations, and AI features — built end-to-end and shipped.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-cream-100 hover:-translate-y-0.5"
            >
              View case studies
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.10] bg-white/[0.06] px-6 py-3 text-sm font-medium text-cream-50 backdrop-blur-xl transition-all duration-200 hover:bg-white/[0.10] hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          style={{ y: mockupY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 overflow-hidden rounded-[32px] border border-white/[0.10] shadow-cinematic bg-[rgba(20,22,21,0.82)] backdrop-blur-[30px]"
        >
          <div className="grid min-h-[540px] grid-cols-[200px_1fr] bg-black/25">
            {/* Sidebar */}
            <aside className="border-r border-white/[0.08] p-4">
              <div className="mb-8 flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-accent-sand/30" />
                <div className="h-3 w-16 rounded-full bg-white/[0.12]" />
              </div>
              <nav className="space-y-1">
                {sidebarItems.map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      i === 0
                        ? "bg-white/[0.10] text-cream-50 font-medium"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main dashboard area */}
            <main className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-text-muted">
                    Engineering portfolio
                  </p>
                  <h2 className="text-xl font-semibold text-cream-50 mt-0.5">
                    Stephen Carew
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/stephen-carew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-2 text-xs text-text-secondary hover:text-cream-50 hover:bg-white/[0.10] transition-colors border border-white/[0.06]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/stephen-carew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-2 text-xs text-text-secondary hover:text-cream-50 hover:bg-white/[0.10] transition-colors border border-white/[0.06]"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {statCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4"
                  >
                    <p className="text-xs text-text-muted">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-cream-50">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom row: skills + tech */}
              <div className="grid grid-cols-[1.3fr_0.7fr] gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <h3 className="text-sm font-semibold text-cream-50 mb-3">
                    Core stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Next.js",
                      "TypeScript",
                      "PostgreSQL",
                      "Supabase",
                      "Stripe",
                      "Solana",
                      "Rust",
                      "Tailwind",
                      "OpenAI",
                      "Redis",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <h3 className="text-sm font-semibold text-cream-50 mb-3">
                    Recent
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { name: "Tenora SaaS", status: "Active" },
                      { name: "Car Parts Finder", status: "Complete" },
                      { name: "Staking Protocol", status: "Live" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-xs text-text-secondary">
                          {item.name}
                        </span>
                        <span className="rounded-full bg-status-success/15 px-2 py-0.5 text-[10px] text-status-success font-medium">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>

        {/* Floating stat card 1 */}
        <motion.div
          style={{ y: floatingCardY }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="absolute -right-4 top-[45%] hidden lg:block rounded-2xl border border-white/[0.10] bg-white/[0.08] p-4 shadow-glass backdrop-blur-2xl"
        >
          <p className="text-xs text-text-muted">Stack depth</p>
          <p className="mt-1.5 text-sm font-semibold text-cream-50">
            Full-stack + Web3
          </p>
          <div className="mt-3 flex gap-1.5">
            <div className="h-1.5 w-8 rounded-full bg-accent-sand" />
            <div className="h-1.5 w-6 rounded-full bg-accent-sand/60" />
            <div className="h-1.5 w-4 rounded-full bg-accent-sand/30" />
          </div>
        </motion.div>

        {/* Floating stat card 2 */}
        <motion.div
          style={{ y: floatingCard2Y }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute -left-4 top-[58%] hidden lg:block rounded-2xl border border-white/[0.10] bg-white/[0.08] p-4 shadow-glass backdrop-blur-2xl"
        >
          <p className="text-xs text-text-muted">Recent deploy</p>
          <p className="mt-1.5 font-mono text-xs text-accent-sand">
            Tenora v2.4 — 12h ago
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
