import React from "react";
import { SAMPLE_REPORTS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";
import { LaunchScannerButton } from "@/components/ui/product-actions";

export default function SecurityReportsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-automa-text">Security Reports</h1>
          <p className="text-sm text-automa-muted">Archived advisory summaries. Live scanning runs exclusively on the external scanner portal.</p>
        </div>
        <LaunchScannerButton />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {SAMPLE_REPORTS.map((r) => (
          <CyberCard key={r.id} className="flex items-center justify-between gap-4">
            <div>
              <Badge variant="neutral">{r.scope}</Badge>
              <h2 className="mt-2 font-display text-lg font-bold text-automa-text">{r.title}</h2>
              <p className="mt-1 font-mono text-xs text-automa-muted">ID: {r.id} • Generated: {r.generatedAt} • {r.severitySummary}</p>
            </div>
            <Badge variant="emerald">{r.status}</Badge>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
