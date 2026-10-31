import React from "react";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { ROUTES } from "@/config/routes";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-automa-bg bg-cyber-grid px-4 text-center">
      <LockKeyhole className="h-14 w-14 text-red-400" />
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-red-400">HTTP 403 // ACCESS DENIED</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-automa-text">Unauthorized Clearance Level</h1>
      <p className="mt-3 max-w-md text-sm text-automa-muted">Your current session lacks the permissions required to access this area.</p>
      <div className="mt-8 flex gap-4">
        <Link href={ROUTES.login} className="rounded-lg bg-automa-green px-6 py-3 text-sm font-semibold text-automa-bg">Authenticate Session</Link>
        <Link href={ROUTES.home} className="rounded-lg border border-[rgba(0,255,136,0.25)] px-6 py-3 text-sm font-semibold text-automa-text">Public Home</Link>
      </div>
    </div>
  );
}
