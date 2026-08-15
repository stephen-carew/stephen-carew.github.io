"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { sectionReveal, cardReveal } from "@/lib/motion";

const metrics = [
  { value: "110+", label: "SHIPPED FEATURES" },
  { value: "55+", label: "DB MIGRATIONS" },
  { value: "5", label: "BILLING TIERS" },
  { value: "30+", label: "ROUTE GROUPS" },
];

const recentWork = [
  { index: "01", name: "Plume — Trait Marketplace", tag: "SOLANA" },
  { index: "02", name: "Restauranter", tag: "MPESA" },
  { index: "03", name: "Car Parts Finder", tag: "B2B" },
  { index: "04", name: "Dummified Labs", tag: "STAKING" },
  { index: "05", name: "Discord Bot Ecosystem", tag: "PYTHON" },
];

const FeaturedCaseStudy = () => {
  const tenora = projects.find((project) => project.id === "tenora");

  if (!tenora) return null;

  return (
    <section id="case-studies" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionReveal}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-sm tracking-[0.22em] text-accent-sand">
              SYS.02 — SELECTED WORK
            </p>
            <h2 className="font-serif text-5xl tracking-[-0.02em] text-cream-50 md:text-[60px]">
              Work that shipped.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-base leading-6 text-text-muted">
            Eight projects. Seven built alone. One currently in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Featured case study */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={sectionReveal}
            className="lg:col-span-8"
          >
            <div className="relative h-full overflow-hidden rounded-[4px] border border-white/[0.12] bg-ink-900">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-accent-sand" />

              <div className="flex flex-col p-7 sm:p-9">
                <div className="mb-4 flex items-center justify-between font-mono text-[13px] tracking-[0.14em]">
                  <span className="text-accent-sand">FEATURED — {tenora.year}</span>
                  {tenora.liveUrl && (
                    <a
                      href={tenora.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted transition-colors hover:text-cream-50"
                    >
                      LIVE ↗
                    </a>
                  )}
                </div>

                <h3 className="font-serif text-5xl tracking-[-0.01em] text-cream-50">
                  {tenora.title.split("—")[0].trim()}
                </h3>
                <p className="mt-3 font-mono text-[15px] text-text-secondary">
                  {tenora.title.split("—")[1]?.trim() || "Product case study"}.{" "}
                  110+ features. Solo-built.
                </p>

                <p className="mt-7 max-w-xl font-mono text-[15px] leading-7 text-text-secondary">
                  {tenora.description}
                </p>

                <div className="mt-8 border-t border-white/[0.12] pt-7">
                  <p className="mb-3 font-mono text-[13px] tracking-[0.18em] text-cream-50/55">
                    KEY DECISION
                  </p>
                  <p className="font-serif text-[22px] leading-snug text-cream-50">
                    Contract engine as a JSON state machine —
                  </p>
                  <p className="mt-1 font-serif text-[22px] leading-snug text-text-muted">
                    both parties must agree 100% before signing.
                  </p>
                </div>

                {tenora.liveUrl && (
                  <div className="mt-8">
                    <a
                      href={tenora.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm tracking-[0.06em] text-accent-sand transition-colors hover:text-cream-50"
                    >
                      OPEN CASE STUDY ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Index rail + metrics */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={cardReveal(0.08)}
            >
              <p className="mb-5 font-mono text-[13px] tracking-[0.18em] text-cream-50/55">
                INDEX
              </p>
              <ul className="space-y-4">
                {recentWork.map((item) => (
                  <li
                    key={item.index}
                    className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-3 font-mono"
                  >
                    <span className="text-[13px] text-text-muted">
                      {item.index}
                    </span>
                    <span className="flex-1 text-[17px] text-cream-50">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-accent-sand">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={cardReveal(0.16)}
              className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/[0.12] bg-white/[0.08]"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-ink-950 p-5">
                  <p className="font-serif text-5xl tracking-[-0.02em] text-cream-50">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-accent-sand">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
