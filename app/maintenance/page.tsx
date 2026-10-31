import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import { ROUTES } from "@/config/routes";

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-automa-bg bg-cyber-grid px-4 text-center">
      <Cpu className="h-14 w-14 text-automa-green animate-pulse" />
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-automa-green">SCHEDULED INFRASTRUCTURE UPGRADE</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-automa-text">Maintenance in Progress</h1>
      <p className="mt-3 max-w-lg text-sm text-automa-muted">We are rolling out updates. Installed endpoint .exe software continues to operate normally.</p>
      <Link href={ROUTES.home} className="mt-8 rounded-lg border border-[rgba(0,255,136,0.3)] bg-automa-card px-6 py-3 text-xs font-mono text-automa-green">Back to Home →</Link>
    </div>
  );
}
