"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MailCheck, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<"pending" | "verified" | "failed">("pending");

  return (
    <CyberCard className="p-8 space-y-6 text-center">
      {status === "pending" && (
        <>
          <MailCheck className="mx-auto h-10 w-10 text-automa-green" />
          <h1 className="font-display text-2xl font-bold text-automa-text">Verify Your Email Address</h1>
          <p className="text-sm text-automa-muted">Click the verification link sent to your inbox to activate your account.</p>
          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={() => toast.info("Verification Email Resent", { description: "Check your inbox and spam filter." })}
              className="w-full rounded-lg bg-automa-green py-2.5 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen"
            >
              Resend Verification Email
            </button>
            {/* Demo-only state switchers until a backend verifies tokens */}
            <div className="flex justify-center gap-3 pt-3 text-xs font-mono text-automa-muted">
              <button type="button" onClick={() => setStatus("verified")} className="hover:text-automa-green">[Demo: success]</button>
              <button type="button" onClick={() => setStatus("failed")} className="hover:text-red-400">[Demo: expired token]</button>
            </div>
          </div>
        </>
      )}
      {status === "verified" && (
        <>
          <CheckCircle2 className="mx-auto h-10 w-10 text-automa-green" />
          <h2 className="font-display text-2xl font-bold text-automa-text">Email Verified</h2>
          <p className="text-sm text-automa-muted">Your email address has been confirmed.</p>
          <Link href={ROUTES.dashboard} className="inline-block w-full rounded-lg bg-automa-green py-2.5 text-sm font-semibold text-automa-bg">Enter Dashboard</Link>
        </>
      )}
      {status === "failed" && (
        <>
          <AlertTriangle className="mx-auto h-10 w-10 text-amber-400" />
          <h2 className="font-display text-2xl font-bold text-automa-text">Verification Token Expired</h2>
          <p className="text-sm text-automa-muted">The verification link has expired. Request a new one below.</p>
          <button type="button" onClick={() => setStatus("pending")} className="w-full rounded-lg border border-automa-green py-2.5 text-sm font-semibold text-automa-green">Request New Token</button>
        </>
      )}
    </CyberCard>
  );
}
