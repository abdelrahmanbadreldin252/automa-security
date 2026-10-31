"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import { toast } from "sonner";
import { loginSchema } from "@/lib/validations";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";

type LoginValues = z.infer<typeof loginSchema>;
const input = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2.5 text-sm text-automa-text focus:border-automa-green focus:outline-none";
const label = "block text-xs font-mono uppercase text-automa-muted mb-1.5";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginValues) => {
    await new Promise((r) => setTimeout(r, 400)); // TODO: replace with real auth call
    toast.success("Session Authenticated", { description: `Welcome back, ${data.email}` });
    router.push(ROUTES.dashboard);
  };

  return (
    <CyberCard className="p-8 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-automa-text">Operator Sign In</h1>
        <p className="mt-1 text-xs font-mono text-automa-muted">Access your AUTOMA SECURITY licenses & downloads</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className={label}>Email Address</label>
          <input id="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className={input} placeholder="operator@company.com" />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className={label}>Password</label>
          <div className="relative">
            <input id="password" type={showPassword ? "text" : "password"} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} {...register("password")} className={`${input} pr-10`} placeholder="••••••••••••" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-automa-muted hover:text-automa-green" aria-label="Toggle Password Visibility">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p id="password-error" className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-automa-muted">
            <input type="checkbox" {...register("rememberMe")} className="accent-automa-green" />
            <span>Remember me</span>
          </label>
          <Link href={ROUTES.forgotPassword} className="text-automa-green hover:underline">Forgot password?</Link>
        </div>
        <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-automa-green py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen disabled:opacity-50">
          <Lock className="h-4 w-4" />
          <span>{isSubmitting ? "Verifying..." : "Login to Portal"}</span>
        </button>
      </form>
      <p className="text-center text-xs text-automa-muted">
        New to AUTOMA SECURITY?{" "}
        <Link href={ROUTES.register} className="text-automa-green hover:underline">Create an account</Link>
      </p>
    </CyberCard>
  );
}
