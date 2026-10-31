"use client";
import React from "react";
import { toast } from "sonner";
import { SAMPLE_PRODUCTS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-automa-text">Products & Release Management</h1>
        <button
          type="button"
          onClick={() => toast.info("Not connected", { description: "Connect a backend release pipeline to publish new versions." })}
          className="rounded-lg bg-automa-green px-4 py-2 text-xs font-semibold text-automa-bg hover:bg-automa-secondaryGreen"
        >
          + Register Release Version
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {SAMPLE_PRODUCTS.map((p) => (
          <CyberCard key={p.id} className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="emerald">{p.category}</Badge>
                <span className="font-mono text-xs text-automa-green">{p.version}</span>
              </div>
              <h2 className="mt-2 font-display text-lg font-bold text-automa-text">{p.name}</h2>
              <p className="mt-1 text-xs text-automa-muted">{p.description}</p>
            </div>
            <div className="font-mono text-xs sm:text-right">
              <p className="text-automa-text">{p.price}</p>
              <p className="text-automa-muted">Released: {p.releaseDate}</p>
            </div>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
