"use client";
import { useEffect, useState } from "react";
import { Terminal, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const TERMINAL_LINES: readonly string[] = [
  "[AUTOMA] Building native endpoint protection for Windows...",
  "[AUTOMA] Designing a cloud web vulnerability scanner...",
  "[DESIGN] Two products, kept separate: desktop app and cloud scanner.",
  "[STATUS] Early stage. Follow the roadmap for progress.",
];

export function CyberTerminal() {
  const reducedMotion = useReducedMotion();
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    if (reducedMotion) {
      setCurrentLine(TERMINAL_LINES[0]);
      return;
    }

    let activeLine = 0;
    let charIndex = 0;
    let phase: "typing" | "holding" | "clearing" = "typing";
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const line = TERMINAL_LINES[activeLine];
      if (phase === "typing") {
        charIndex += 1;
        setCurrentLine(line.slice(0, charIndex));
        if (charIndex >= line.length) {
          phase = "holding";
          timer = setTimeout(tick, 1100);
          return;
        }
        timer = setTimeout(tick, 24);
      } else if (phase === "holding") {
        phase = "clearing";
        timer = setTimeout(tick, 250);
      } else {
        charIndex -= 1;
        setCurrentLine(line.slice(0, charIndex));
        if (charIndex <= 0) {
          activeLine = (activeLine + 1) % TERMINAL_LINES.length;
          phase = "typing";
          timer = setTimeout(tick, 180);
          return;
        }
        timer = setTimeout(tick, 8);
      }
    };

    timer = setTimeout(tick, 24);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div className="cyber-card relative overflow-hidden rounded-xl border border-automa-green/25 bg-automa-secondaryBg/95 p-5 font-mono text-xs shadow-cyber-md">
      <div className="flex items-center justify-between border-b border-[rgba(0,255,136,0.15)] pb-3 mb-4">
        <div className="flex items-center gap-2 text-automa-green">
          <Terminal className="h-4 w-4" />
          <span className="font-semibold tracking-wider">&gt;_ AUTOMA-CONSOLE</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-automa-muted">
          <span className="h-2 w-2 rounded-full bg-automa-green animate-pulse" />
          IN DEVELOPMENT
        </div>
      </div>
      <div className="space-y-2.5 text-automa-text/90">
        <div className="flex items-start gap-2 leading-relaxed">
          <span className="text-automa-green select-none">&gt;</span>
          <span aria-live="polite">
            {currentLine}
            <span className="public-terminal-cursor ml-0.5 animate-pulse text-automa-green">▋</span>
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-lg bg-automa-bg px-3.5 py-2.5 border border-[rgba(0,255,136,0.15)]">
        <span className="text-automa-muted">Architecture Separation:</span>
        <span className="inline-flex items-center gap-1.5 text-automa-green">
          <ShieldCheck className="h-4 w-4" />
          Native .EXE + External Cloud Scanner
        </span>
      </div>
    </div>
  );
}
