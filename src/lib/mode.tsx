"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Mode = "product" | "instrument";

const STORAGE_KEY = "sc-drawing-transfer";

/**
 * Two reading levels of the same page. PRODUCT mode is plain
 * enough for any recruiter; INSTRUMENT mode unlocks the
 * control-engineering annotations for the audience that
 * speaks the language. The drawing aesthetic is shared.
 */
export const modeCopy = {
  product: {
    tag: "PEC-101",
    title: "Product Engineer",
    headline: "Products built solo, running in production.",
    sub: "I design and build whole products: databases, APIs, interfaces, payments. Ebenor, a UK property platform I built alone, is live at ebenor.co.uk.",
    issuedFor: "EMPLOYMENT REVIEW",
    figureLeft: "BUILT SOLO",
    figureRight: "IN PRODUCTION",
    switchHint: "Hiring for a different role?",
  },
  instrument: {
    tag: "TIC-101",
    title: "Instrumentation & Control Engineer",
    headline: "Measure the loop before you tune the system.",
    sub: "MSc Instrumentation & Control at Teesside, thesis on PSO-optimised self-tuning PID control. I apply the same control-systems thinking to every product I build.",
    issuedFor: "EMPLOYMENT REVIEW",
    figureLeft: "ONE ENGINEER",
    figureRight: "TWO PLANTS",
    switchHint: "Hiring for a different role?",
  },
} as const;

type ModeContextValue = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggle: () => void;
  copy: (typeof modeCopy)[Mode];
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  // Always hydrate as "product"; the stored transfer position is applied
  // client-side after mount so server and client markup never disagree.
  const [mode, setModeState] = useState<Mode>("product");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "instrument" || stored === "product") {
        setModeState(stored);
      }
    } catch {
      /* private mode storage failures are non-fatal */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const setMode = useCallback((next: Mode) => setModeState(next), []);
  const toggle = useCallback(
    () => setModeState((m) => (m === "product" ? "instrument" : "product")),
    [],
  );

  return (
    <ModeContext.Provider
      value={{ mode, setMode, toggle, copy: modeCopy[mode] }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
}
