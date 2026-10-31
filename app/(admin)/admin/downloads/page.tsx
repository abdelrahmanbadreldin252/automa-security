import React from "react";
import { SAMPLE_DOWNLOADS } from "@/lib/mock-data";
import { CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminDownloadsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Downloads & Binary Distribution</h1>
      <CyberCard className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[rgba(0,255,136,0.15)] font-mono text-automa-green">
              <th className="py-3 pr-4">Log ID</th><th className="py-3 px-4">Executable File</th><th className="py-3 px-4">Version</th><th className="py-3 px-4">Timestamp</th><th className="py-3 pl-4">Client IP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,255,136,0.1)] font-mono">
            {SAMPLE_DOWNLOADS.map((d) => (
              <tr key={d.id}>
                <td className="py-3.5 pr-4 text-automa-green">{d.id}</td>
                <td className="py-3.5 px-4 text-automa-text">{d.fileName}</td>
                <td className="py-3.5 px-4 text-automa-muted">{d.version}</td>
                <td className="py-3.5 px-4 text-automa-muted">{d.downloadDate}</td>
                <td className="py-3.5 pl-4 text-automa-muted">{d.ipAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CyberCard>
    </div>
  );
}
