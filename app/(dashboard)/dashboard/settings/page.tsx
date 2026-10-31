"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { CyberCard } from "@/components/ui/primitives";

export default function AccountSettingsPage() {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [releaseAlerts, setReleaseAlerts] = useState(true);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-automa-text">Account Settings</h1>
      <CyberCard className="space-y-4">
        <h2 className="font-display text-lg font-bold text-automa-text">Security Preferences</h2>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-automa-text">Multi-Factor Authentication</p>
            <p className="text-xs text-automa-muted">Require MFA verification before downloading .exe installers.</p>
          </div>
          <input
            type="checkbox"
            checked={mfaEnabled}
            aria-label="Multi-factor authentication"
            onChange={(e) => { setMfaEnabled(e.target.checked); toast.info("MFA Preference Updated"); }}
            className="h-4 w-4 accent-automa-green"
          />
        </div>
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[rgba(0,255,136,0.15)]">
          <div>
            <p className="text-sm font-semibold text-automa-text">Release Advisory Emails</p>
            <p className="text-xs text-automa-muted">Receive notifications when new Antivirus builds publish.</p>
          </div>
          <input type="checkbox" checked={releaseAlerts} aria-label="Release advisory emails" onChange={(e) => setReleaseAlerts(e.target.checked)} className="h-4 w-4 accent-automa-green" />
        </div>
      </CyberCard>
    </div>
  );
}
