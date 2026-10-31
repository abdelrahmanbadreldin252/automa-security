import type { Metadata } from "next";
import Link from "next/link";
import { Shield, GlobeLock, Check } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";
import { PublicBadge } from "@/components/public/public-badge";
import { PublicSectionHeader } from "@/components/public/public-section-header";
import { DownloadAntivirusButton, LaunchScannerButton } from "@/components/ui/product-actions";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore AUTOMA SECURITY's two planned products, both currently in development.",
  openGraph: {
    title: "AUTOMA SECURITY Services",
    description: "Explore AUTOMA SECURITY's two planned products, both currently in development.",
    type: "website",
  },
  alternates: { canonical: "/services" },
};

const AV_FEATURES = [
  "Windows endpoint protection is the planned focus",
  "Platform requirements have not been announced",
  "Release and distribution details are still being determined",
  "No installer is currently available",
];
const WVS_FEATURES = [
  "Web vulnerability scanning is the planned focus",
  "Potential scanning categories are still being evaluated",
  "The cloud service is not currently available",
  "Product details will be shared as development progresses",
];

function Features({ items }: { items: string[] }) {
  return (
    <div className="space-y-2.5 pt-2 text-sm">
      {items.map((feat) => (
        <div key={feat} className="flex items-center gap-2.5 text-automa-text">
          <Check className="h-4 w-4 shrink-0 text-automa-green" />
          <span>{feat}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      <PublicSectionHeader
        as="h1"
        eyebrow="AUTOMA SECURITY Services"
        title="Two Products in Development"
        description="AUTOMA SECURITY is exploring a Windows desktop application and a separate cloud web vulnerability scanner. Both products are in development."
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CyberCard className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <PublicBadge variant="emerald">PRODUCT 01 // IN DEVELOPMENT</PublicBadge>
            <Shield className="h-7 w-7 text-automa-green" />
          </div>
          <h2 className="font-display text-3xl font-bold text-automa-text">Antivirus Protection (.EXE)</h2>
          <p className="text-sm text-automa-muted leading-relaxed">
            AUTOMA Antivirus is a planned Windows desktop product. It is in development; its final features, requirements,
            and release timing have not been announced.
          </p>
          <Features items={AV_FEATURES} />
          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[rgba(0,255,136,0.15)]">
            <DownloadAntivirusButton label="AUTOMA Antivirus — in development" />
            <Link href={ROUTES.antivirus} className="rounded-lg border border-[rgba(0,255,136,0.25)] px-4 py-3 text-xs font-mono text-automa-text hover:border-automa-green">
              Product Details →
            </Link>
          </div>
        </CyberCard>

        <CyberCard className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <PublicBadge variant="emerald">PRODUCT 02 // IN DEVELOPMENT</PublicBadge>
            <GlobeLock className="h-7 w-7 text-automa-green" />
          </div>
          <h2 className="font-display text-3xl font-bold text-automa-text">Web Vulnerability Scanning</h2>
          <p className="text-sm text-automa-muted leading-relaxed">
            The web vulnerability scanner is planned as a separate cloud product. It is in development and cannot
            currently evaluate websites.
          </p>
          <Features items={WVS_FEATURES} />
          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[rgba(0,255,136,0.15)]">
            <LaunchScannerButton label="Web scanner — in development" />
            <Link href={ROUTES.scanner} className="rounded-lg border border-[rgba(0,255,136,0.25)] px-4 py-3 text-xs font-mono text-automa-text hover:border-automa-green">
              Scanner Overview →
            </Link>
          </div>
        </CyberCard>
      </div>

      <CyberCard className="overflow-x-auto">
        <h2 className="font-display text-xl font-bold text-automa-text mb-4">Product Development Direction</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(0,255,136,0.15)] font-mono text-xs text-automa-green">
              <th className="py-3 pr-4">Attribute</th>
              <th className="py-3 px-4">AUTOMA Antivirus</th>
              <th className="py-3 pl-4">AUTOMA Web Vulnerability Scanner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,255,136,0.1)] text-automa-muted">
            <tr><td className="py-3 pr-4 font-medium text-automa-text">Product direction</td><td className="py-3 px-4 font-mono">Windows desktop application</td><td className="py-3 pl-4 font-mono">Cloud web vulnerability scanner</td></tr>
            <tr><td className="py-3 pr-4 font-medium text-automa-text">Current status</td><td className="py-3 px-4">In development</td><td className="py-3 pl-4">In development</td></tr>
            <tr><td className="py-3 pr-4 font-medium text-automa-text">Availability</td><td className="py-3 px-4">Not yet available</td><td className="py-3 pl-4">Not yet available</td></tr>
            <tr><td className="py-3 pr-4 font-medium text-automa-text">Release details</td><td className="py-3 px-4 text-automa-green">To be announced</td><td className="py-3 pl-4 text-automa-green">To be announced</td></tr>
          </tbody>
        </table>
      </CyberCard>
    </div>
  );
}
