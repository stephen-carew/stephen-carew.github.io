"use client";

import { useMode, type Mode } from "@/lib/mode";
import { cn } from "@/lib/utils";

/**
 * The signature control: a two-position transfer switch.
 * Flips the entire drawing package between its instrument
 * and product annotations (and pen colour).
 */
export default function TransferSwitch({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const { mode, setMode } = useMode();

  const positions: { id: Mode; label: string }[] = [
    { id: "instrument", label: "INSTRUMENTATION & CONTROL" },
    { id: "product", label: "WEB DEVELOPMENT & PRODUCT ENGINEERING" },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5",
        className,
      )}
      role="group"
      aria-label="Control transfer"
    >
      {!compact && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
          CTRL XFER
        </span>
      )}
      <div className="relative grid grid-cols-2 border border-ink bg-sheet p-[3px]">
        {/* knob */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-y-[3px] w-[calc(50%-3px)] bg-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            mode === "instrument" ? "translate-x-0" : "translate-x-full",
          )}
          style={{ left: 3 }}
        />
        {positions.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setMode(p.id)}
            aria-pressed={mode === p.id}
            className={cn(
              "relative z-10 cursor-pointer font-mono uppercase transition-colors duration-300",
              compact
                ? "px-3 py-1.5 text-[10px] tracking-[0.14em]"
                : "px-4 py-1.5 text-[10px] tracking-[0.16em]",
              mode === p.id
                ? "text-paper"
                : "text-ink-soft hover:text-ink",
            )}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
