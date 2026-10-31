"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children, variant = "emerald", className,
}: {
  children: React.ReactNode;
  variant?: "emerald" | "neutral" | "amber" | "danger";
  className?: string;
}) {
  const styles = {
    emerald: "bg-automa-darkGreen/60 text-automa-green border border-automa-green/30",
    neutral: "bg-automa-secondaryBg text-automa-muted border border-[rgba(0,255,136,0.15)]",
    amber: "bg-amber-950/50 text-amber-300 border border-amber-500/30",
    danger: "bg-red-950/50 text-red-300 border border-red-500/30",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wide", styles[variant], className)}>
      {children}
    </span>
  );
}

export function CyberCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const updateSpotlight = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      className={cn("cyber-card rounded-xl p-6", className)}
      onMouseMove={updateSpotlight}
      onMouseLeave={(event) => {
        event.currentTarget.style.removeProperty("--mx");
        event.currentTarget.style.removeProperty("--my");
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow, title, description, align = "center",
}: {
  eyebrow: string; title: string; description?: string; align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl mb-12", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-automa-darkGreen/40 border border-automa-green/25 text-automa-green text-xs font-mono uppercase tracking-widest mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-automa-green animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-automa-text tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-automa-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}

export function DemoDataBanner({ label = "Sample / Placeholder Data Mode" }: { label?: string }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4 rounded-lg bg-automa-secondaryBg border border-automa-green/20 px-4 py-2.5 text-xs font-mono text-automa-muted">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-automa-green" />
        <span className="text-automa-text font-semibold">{label}:</span>
        <span>Records and charts displayed below are structured frontend sample data ready for backend API binding.</span>
      </div>
    </div>
  );
}
