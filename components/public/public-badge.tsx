import React from "react";
import { cn } from "@/lib/utils";

export function PublicBadge({
  children,
  variant = "emerald",
  className,
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
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-sans tracking-normal", styles[variant], className)}>
      {children}
    </span>
  );
}
