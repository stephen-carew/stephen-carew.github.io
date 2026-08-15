"use client";

import { motion } from "framer-motion";
import { sectionReveal, cardReveal } from "@/lib/motion";

const capabilities = [
  {
    index: "01",
    name: "Frontend architecture",
    stack: "React · Next.js · TypeScript · Tailwind · Framer Motion",
    proof: "Shipped production UI across 6 products.",
  },
  {
    index: "02",
    name: "Backend & data",
    stack: "PostgreSQL · Supabase · Prisma · Drizzle · Node · Redis",
    proof: "RLS, migrations, and API design at product scale.",
  },
  {
    index: "03",
    name: "Payments & realtime",
    stack: "Stripe · Plaid · TrueLayer · M-Pesa · SSE",
    proof: "Rent collection and live order sync in production.",
  },
  {
    index: "04",
    name: "Blockchain & Web3",
    stack: "Solana · Anchor · Rust · Metaplex · SPL tokens",
    proof: "On-chain programs and marketplaces deployed.",
  },
  {
    index: "05",
    name: "Automation & bots",
    stack: "Python · interactions.py · MySQL · Redis",
    proof: "Bots running across 50+ servers.",
  },
  {
    index: "06",
    name: "AI integration",
    stack: "OpenAI · DeepSeek · structured JSON output",
    proof: "Intent parsing in production tenant messaging.",
  },
];

const SkillsMatrix = () => {
  return (
    <section id="skills" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionReveal}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.22em] text-accent-sand">
            SYS.04 — CAPABILITIES
          </p>
          <h2 className="font-serif text-5xl tracking-[-0.02em] text-cream-50 md:text-[60px]">
            What I actually use.
          </h2>
          <p className="mt-4 font-mono text-base leading-7 text-text-secondary">
            No self-ratings. Proof by application.
          </p>
        </motion.div>

        <div>
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={cardReveal(index * 0.05)}
              className="grid grid-cols-1 gap-3 border-t border-white/[0.12] py-6 md:grid-cols-12 md:items-baseline"
            >
              <span className="font-mono text-[13px] text-accent-sand md:col-span-1">
                {capability.index}
              </span>
              <h3 className="font-serif text-xl text-cream-50 md:col-span-4">
                {capability.name}
              </h3>
              <p className="font-mono text-sm leading-6 text-text-secondary md:col-span-4">
                {capability.stack}
              </p>
              <p className="font-mono text-sm leading-6 text-text-muted md:col-span-3 md:text-right">
                {capability.proof}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.12]" />
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
