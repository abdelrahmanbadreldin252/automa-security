"use client";
import React from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { isValidConfiguredUrl } from "@/lib/utils";
import { CyberCard } from "@/components/ui/primitives";

const field = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2 font-mono text-xs text-automa-green";
const label = "block font-mono text-xs text-automa-muted mb-1";

export default function AdminSettingsPage() {
  const { downloadUrl } = siteConfig.products.antivirus;
  const { externalUrl } = siteConfig.products.scanner;

  const verify = () => {
    const ok = isValidConfiguredUrl(downloadUrl) && isValidConfiguredUrl(externalUrl);
    if (ok) toast.success("Both endpoint URLs are configured");
    else toast.error("One or more endpoint URLs are missing", { description: "Edit .env.local and restart the dev server." });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="font-display text-2xl font-bold text-automa-text">Admin Platform & Integration Settings</h1>
      <CyberCard className="space-y-4">
        <h2 className="font-display text-lg font-bold text-automa-text">External Product Endpoints</h2>
        <div>
          <label htmlFor="av" className={label}>Antivirus .EXE Download URL (NEXT_PUBLIC_ANTIVIRUS_EXE_URL)</label>
          <input id="av" readOnly value={downloadUrl || "[Not Configured in Environment]"} className={field} />
        </div>
        <div>
          <label htmlFor="wvs" className={label}>Web Vulnerability Scanner URL (NEXT_PUBLIC_SCANNER_EXTERNAL_URL)</label>
          <input id="wvs" readOnly value={externalUrl || "[Not Configured in Environment]"} className={field} />
        </div>
        <button type="button" onClick={verify} className="rounded-lg bg-automa-green px-5 py-2.5 text-xs font-semibold text-automa-bg hover:bg-automa-secondaryGreen">
          Verify Integration Endpoints
        </button>
      </CyberCard>
    </div>
  );
}
