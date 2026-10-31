import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { SAMPLE_DOWNLOADS, SAMPLE_NOTIFICATIONS, SAMPLE_ORDERS, SAMPLE_PRODUCTS, SAMPLE_REPORTS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";
import { DownloadAntivirusButton, LaunchScannerButton } from "@/components/ui/product-actions";

export default function DashboardOverviewPage() {
  const stats = [
    { label: "PRODUCTS OWNED", value: SAMPLE_PRODUCTS.length, accent: true },
    { label: "RECENT DOWNLOADS", value: SAMPLE_DOWNLOADS.length },
    { label: "ORDERS ON FILE", value: SAMPLE_ORDERS.length },
    { label: "SECURITY REPORTS", value: SAMPLE_REPORTS.length },
  ];
  return (
    <div className="space-y-8">
      <DemoDataBanner />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-automa-text">Welcome back, Alex Mercer (Sample Account)</h1>
          <p className="text-sm text-automa-muted">Manage your AUTOMA Antivirus .exe downloads and external Web Vulnerability Scanner access.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <DownloadAntivirusButton label="Download Antivirus" />
          <LaunchScannerButton label="Launch Scanner" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <CyberCard key={s.label}>
            <p className="font-mono text-xs text-automa-muted">{s.label}</p>
            <p className={`mt-2 font-mono text-3xl font-bold ${s.accent ? "text-automa-green" : "text-automa-text"}`}>{s.value}</p>
          </CyberCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CyberCard className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-automa-text">Recent Downloads</h2>
            <Link href={ROUTES.dashboardDownloads} className="text-xs font-mono text-automa-green">View All →</Link>
          </div>
          {SAMPLE_DOWNLOADS.map((dl) => (
            <div key={dl.id} className="flex items-center justify-between gap-2 rounded-lg border border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg p-3 text-xs">
              <div className="min-w-0">
                <p className="truncate font-semibold text-automa-text">{dl.fileName}</p>
                <p className="font-mono text-automa-muted">{dl.version} • {dl.downloadDate}</p>
              </div>
              <Badge variant="emerald">{dl.fileSize}</Badge>
            </div>
          ))}
        </CyberCard>

        <CyberCard className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-automa-text">Recent Notifications</h2>
            <Link href={ROUTES.dashboardNotifications} className="text-xs font-mono text-automa-green">Manage →</Link>
          </div>
          {SAMPLE_NOTIFICATIONS.map((n) => (
            <div key={n.id} className="rounded-lg border border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg p-3 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-automa-text">{n.title}</span>
                <span className="font-mono text-automa-muted">{n.timestamp}</span>
              </div>
              <p className="mt-1 text-automa-muted">{n.message}</p>
            </div>
          ))}
        </CyberCard>
      </div>
    </div>
  );
}
