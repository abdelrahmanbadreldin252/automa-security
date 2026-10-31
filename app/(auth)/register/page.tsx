"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { registerSchema } from "@/lib/validations";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";

type RegisterValues = z.infer<typeof registerSchema>;
const input = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2 text-sm text-automa-text focus:border-automa-green focus:outline-none";
const label = "block text-xs font-mono uppercase text-automa-muted mb-1";

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<RegisterValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterValues) => {
    await new Promise((r) => setTimeout(r, 400)); // TODO: replace with real registration call
    toast.success("Account Created", { description: `Verification link sent to ${data.email}` });
    router.push(ROUTES.verifyEmail);
  };

  return (
    <CyberCard className="p-8 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-automa-text">Create Security Account</h1>
        <p className="mt-1 text-xs font-mono text-automa-muted">Manage endpoint licenses and external scanner workspaces</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="fullName" className={label}>Full Name</label>
          <input id="fullName" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} className={input} />
          {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className={input} />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className={label}>Password</label>
          <input id="password" type="password" aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} {...register("password")} className={input} />
          {errors.password && <p id="password-error" className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword" className={label}>Confirm Password</label>
          <input id="confirmPassword" type="password" aria-invalid={Boolean(errors.confirmPassword)} aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined} {...register("confirmPassword")} className={input} />
          {errors.confirmPassword && <p id="confirmPassword-error" className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <label className="flex items-start gap-2 text-xs text-automa-muted">
            <input type="checkbox" aria-invalid={Boolean(errors.acceptTerms)} aria-describedby={errors.acceptTerms ? "acceptTerms-error" : undefined} {...register("acceptTerms")} className="mt-0.5 accent-automa-green" />
            <span>
              I accept the <Link href={ROUTES.terms} className="text-automa-green underline">Terms & Conditions</Link> and{" "}
              <Link href={ROUTES.privacy} className="text-automa-green underline">Privacy Policy</Link>.
            </span>
          </label>
          {errors.acceptTerms && <p id="acceptTerms-error" className="mt-1 text-xs text-red-400">{errors.acceptTerms.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-automa-green py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen disabled:opacity-50">
          {isSubmitting ? "Creating Account..." : "Register Account"}
        </button>
      </form>
      <p className="text-center text-xs text-automa-muted">
        Already registered? <Link href={ROUTES.login} className="text-automa-green hover:underline">Login</Link>
      </p>
    </CyberCard>
  );
}
