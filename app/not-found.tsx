import React from "react";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { ROUTES } from "@/config/routes";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-automa-bg bg-cyber-grid px-4 text-center">
      <ShieldAlert className="h-14 w-14 text-automa-green" />
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-automa-green">ERROR 404 // ROUTE UNMAPPED</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-automa-text">Sector Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-automa-muted">The requested URI does not match any active node inside the AUTOMA SECURITY routing table.</p>
      <Link href={ROUTES.home} className="mt-8 rounded-lg bg-automa-green px-6 py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen">Return to Command Center</Link>
    </div>
  );
}
