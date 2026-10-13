"use client";

import { useMode } from "@/lib/mode";
import { Annot, SheetStamp, DimRule, SettleBlock } from "@/components/drawing";
import { cn } from "@/lib/utils";

type Instrument = {
  tag: string;
  group: "FIELD" | "SOFTWARE";
  fn: string;
  range: string;
  remark: string;
};

const fieldInstruments: Instrument[] = [
  {
    tag: "CTRL-01",
    group: "FIELD",
    fn: "Control theory & loop design",
    range: "PID, gain scheduling, stability, industrial automation",
    remark: "MSc thesis: PSO-optimised self-tuning PID",
  },
  {
    tag: "SIG-02",
    group: "FIELD",
    fn: "Signal processing",
    range: "Sampling, filtering, feature extraction, classification",
    remark: "BSc thesis: gait phase detection, IMUs + NN",
  },
  {
    tag: "SENS-03",
    group: "FIELD",
    fn: "Sensors & data acquisition",
    range: "IMU arrays, distributed sensor networks, hardware-in-the-loop",
    remark: "Real-time pipeline, 1.2 s sample windows",
  },
];

const softwareInstruments: Instrument[] = [
  {
    tag: "FE-101",
    group: "SOFTWARE",
    fn: "Frontend architecture",
    range: "React, Next.js, TypeScript, Tailwind, Framer Motion",
    remark: "Production UI across six products",
  },
  {
    tag: "BE-102",
    group: "SOFTWARE",
    fn: "Backend & data",
    range: "PostgreSQL, Supabase, Prisma, Drizzle, Node, Redis",
    remark: "55+ migrations and Row Level Security on Ebenor",
  },
  {
    tag: "PAY-103",
    group: "SOFTWARE",
    fn: "Payments & realtime",
    range: "Stripe, Plaid, TrueLayer, M-Pesa, SSE",
    remark: "Rent collection live; M-Pesa + SSE in Restauranter",
  },
  {
    tag: "W3-104",
    group: "SOFTWARE",
    fn: "Blockchain",
    range: "Solana, Anchor, Rust, Metaplex, SPL tokens",
    remark: "Programs deployed to mainnet",
  },
  {
    tag: "AUT-105",
    group: "SOFTWARE",
    fn: "Automation",
    range: "Python, interactions.py, MySQL, Redis",
    remark: "Bots running across 50+ servers",
  },
  {
    tag: "AI-106",
    group: "SOFTWARE",
    fn: "AI integration",
    range: "OpenAI, DeepSeek, structured JSON output",
    remark: "Intent parsing in production tenant messaging",
  },
];

const SkillsMatrix = () => {
  const { mode } = useMode();

  const groups =
    mode === "instrument"
      ? [
          { id: "FIELD", label: "Instrumentation & control", items: fieldInstruments },
          { id: "SOFTWARE", label: "Software", items: softwareInstruments },
        ]
      : [
          { id: "SOFTWARE", label: "Software", items: softwareInstruments },
          { id: "FIELD", label: "Instrumentation & control", items: fieldInstruments },
        ];

  return (
    <section id="skills" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SettleBlock inView className="mb-10">
          <div className="mb-3 flex items-center gap-4">
            <SheetStamp sheet="04" />
            <DimRule className="hidden w-40 md:flex" />
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-sans text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink">
              Skills &amp; tools.
            </h2>
            <p className="max-w-md font-sans text-[15px] leading-6 font-medium text-ink-soft">
              Each row lists what I work with and where it has been used in
              production. No self-rated skill bars anywhere on this page.
            </p>
          </div>
        </SettleBlock>

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <SettleBlock key={group.id} inView delay={gi * 0.08}>
              <div className="mb-3 flex items-baseline justify-between">
                <Annot className="text-ink">{group.label}</Annot>
                <Annot className="text-[9px]">{group.items.length} listed</Annot>
              </div>
              <div className="border-x border-t border-ink">
                <div className="hidden grid-cols-[110px_minmax(0,2.2fr)_minmax(0,3fr)_minmax(0,2.4fr)] gap-4 border-b border-rule bg-sheet px-5 py-2 md:grid">
                  <Annot className="text-[9px]">Ref</Annot>
                  <Annot className="text-[9px]">Skill</Annot>
                  <Annot className="text-[9px]">Tools</Annot>
                  <Annot className="text-[9px]">Used in</Annot>
                </div>
                {group.items.map((ins, i) => (
                  <div
                    key={ins.tag}
                    className={cn(
                      "group grid grid-cols-1 gap-x-4 gap-y-1.5 px-5 py-4 transition-colors hover:bg-sheet md:grid-cols-[110px_minmax(0,2.2fr)_minmax(0,3fr)_minmax(0,2.4fr)]",
                      i < group.items.length - 1 && "border-b border-rule",
                    )}
                  >
                    <span className="font-mono text-[11px] tracking-[0.12em] text-accent-deep">
                      {ins.tag}
                    </span>
                    <span className="font-sans text-[16px] font-bold tracking-[-0.01em] text-ink">
                      {ins.fn}
                    </span>
                    <span className="font-sans text-[13.5px] leading-5 font-medium text-ink-soft">
                      {ins.range}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint transition-colors group-hover:text-ink-soft md:text-right">
                      {ins.remark}
                    </span>
                  </div>
                ))}
                <div className="border-b border-ink" />
              </div>
            </SettleBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
