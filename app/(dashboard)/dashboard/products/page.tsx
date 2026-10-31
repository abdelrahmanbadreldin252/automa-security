import React from "react";
import { SAMPLE_PRODUCTS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";
import { DownloadAntivirusButton, LaunchScannerButton } from "@/components/ui/product-actions";

export default function MyProductsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">My Products</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SAMPLE_PRODUCTS.map((p) => (
          <CyberCard key={p.id} className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <Badge variant="emerald">{p.category}</Badge>
                <span className="font-mono text-xs text-automa-muted">{p.version}</span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-automa-text">{p.name}</h2>
              <p className="mt-2 text-sm text-automa-muted">{p.description}</p>
            </div>
            <div className="border-t border-[rgba(0,255,136,0.15)] pt-4">
              {p.slug === "antivirus" ? <DownloadAntivirusButton /> : <LaunchScannerButton />}
            </div>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
