"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { forgotPasswordSchema } from "@/lib/validations";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";

type ForgotValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } =
    useForm<ForgotValues>({ resolver: zodResolver(forgotPasswordSchema) });

  return (
    <CyberCard className="p-8 space-y-6">
      <h1 className="font-display text-2xl font-bold text-automa-text">Reset Password Recovery</h1>
      {submittedEmail ? (
        <div className="space-y-4 text-sm text-automa-muted">
          <div className="flex items-center gap-2 text-automa-green">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-semibold">Recovery Link Sent</span>
          </div>
          <p>If an account matches <strong className="text-automa-text">{submittedEmail}</strong>, a time-limited password reset link has been sent.</p>
          <Link href={ROUTES.resetPassword} className="inline-block text-xs font-mono text-automa-green underline">
            Proceed to Reset Password Form →
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit((d) => setSubmittedEmail(d.email))} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase text-automa-muted mb-1.5">Account Email</label>
            <input id="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className="w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2.5 text-sm text-automa-text focus:border-automa-green focus:outline-none" placeholder="operator@company.com" />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <button type="submit" className="w-full rounded-lg bg-automa-green py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen">Send Reset Link</button>
        </form>
      )}
      <Link href={ROUTES.login} className="block text-center text-xs text-automa-muted hover:text-automa-green">← Return to Login</Link>
    </CyberCard>
  );
}
