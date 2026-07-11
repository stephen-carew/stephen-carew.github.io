"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Database,
  CreditCard,
  Orbit,
  Bot,
} from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    category: "Frontend Architecture",
    items: [
      { name: "React / Next.js (App Router)", level: "Expert" },
      { name: "TypeScript (strict mode)", level: "Expert" },
      { name: "Tailwind CSS v4 + shadcn/ui", level: "Expert" },
      { name: "Framer Motion", level: "Expert" },
      { name: "TanStack Query v5", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    category: "Backend & Data",
    items: [
      { name: "PostgreSQL + Supabase", level: "Expert" },
      { name: "Prisma + Drizzle ORM", level: "Expert" },
      { name: "Express.js + Node.js", level: "Advanced" },
      { name: "Redis + Upstash", level: "Advanced" },
      { name: "Vercel Blob / Edge Storage", level: "Intermediate" },
    ],
  },
  {
    icon: CreditCard,
    category: "Payments & Real-time",
    items: [
      { name: "Stripe (subscriptions + payments)", level: "Advanced" },
      { name: "M-Pesa API Integration", level: "Advanced" },
      { name: "Plaid + TrueLayer (Open Banking)", level: "Advanced" },
      { name: "Server-Sent Events (SSE)", level: "Advanced" },
      { name: "OpenAI / DeepSeek API", level: "Advanced" },
    ],
  },
  {
    icon: Orbit,
    category: "Blockchain & Web3",
    items: [
      { name: "Solana (Web3.js / Anchor)", level: "Advanced" },
      { name: "Smart Contract Development", level: "Advanced" },
      { name: "Metaplex (Bubblegum / cNFTs)", level: "Advanced" },
      { name: "SPL Token Standards", level: "Advanced" },
      { name: "Wallet Adapter Integration", level: "Advanced" },
    ],
  },
  {
    icon: Bot,
    category: "Bot Development & Python",
    items: [
      { name: "Discord Bot Architecture", level: "Expert" },
      { name: "Python + interactions.py", level: "Advanced" },
      { name: "MySQL + SQLite Persistence", level: "Advanced" },
      { name: "BIP-39 Seed Management", level: "Intermediate" },
      { name: "GitHub Actions / CI/CD", level: "Intermediate" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: "bg-accent-sand/15 text-accent-sand",
  Advanced: "bg-accent-dust/15 text-accent-dust",
  Intermediate: "bg-white/[0.08] text-text-secondary",
};

const SkillsMatrix = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium text-accent-sand tracking-wide uppercase">
            Technical expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-cream-50">
            What I work with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary leading-relaxed">
            Tools and technologies I use to build and ship production
            applications, from database schema to deployed product — across
            web, mobile payments, blockchain, and bot ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="h-full rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl ">
                    <Icon className="h-5 w-5 text-accent-sand" />
                  </div>
                  <h3 className="text-lg font-semibold text-cream-50 mb-4">
                    {group.category}
                  </h3>
                  <div className="space-y-3">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-sm text-text-secondary group-hover:text-cream-50 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`shrink-0 ml-2 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                            levelColors[skill.level] || levelColors.Intermediate
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
