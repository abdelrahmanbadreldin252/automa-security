import React from "react";
import { cn } from "@/lib/utils";

export function PublicSectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl mb-12", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-automa-darkGreen/40 border border-automa-green/25 text-automa-green text-xs font-sans uppercase tracking-wide mb-4">
        {eyebrow}
      </div>
      <Heading className="text-3xl md:text-4xl font-display font-bold text-automa-text tracking-tight">{title}</Heading>
      {description && <p className="mt-4 text-automa-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
