import React from "react";
import { SAMPLE_DOWNLOADS } from "@/lib/mock-data";
import { CyberCard, DemoDataBanner } from "@/components/ui/primitives";
import { DownloadAntivirusButton } from "@/components/ui/product-actions";

export default function MyDownloadsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-automa-text">My Downloads</h1>
          <p className="text-sm text-automa-muted">Official standalone Windows .exe builds and SHA-256 checksums.</p>
        </div>
        <DownloadAntivirusButton />
      </div>
      <CyberCard className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(0,255,136,0.15)] font-mono text-xs text-automa-green">
              <th className="py-3 pr-4">Product</th><th className="py-3 px-4">Version</th><th className="py-3 px-4">File Size</th><th className="py-3 px-4">Date</th><th className="py-3 pl-4">SHA-256</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,255,136,0.1)] text-xs">
            {SAMPLE_DOWNLOADS.map((d) => (
              <tr key={d.id}>
                <td className="py-3.5 pr-4 font-semibold text-automa-text">{d.productName}</td>
                <td className="py-3.5 px-4 font-mono text-automa-green">{d.version}</td>
                <td className="py-3.5 px-4 font-mono text-automa-muted">{d.fileSize}</td>
                <td className="py-3.5 px-4 font-mono text-automa-muted">{d.downloadDate}</td>
                <td className="py-3.5 pl-4 font-mono text-[11px] text-automa-muted max-w-xs truncate">{d.sha256}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CyberCard>
    </div>
  );
}
