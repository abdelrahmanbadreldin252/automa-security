"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { resetPasswordSchema } from "@/lib/validations";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";

type ResetValues = z.infer<typeof resetPasswordSchema>;
const input = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2.5 text-sm text-automa-text focus:border-automa-green focus:outline-none";
const label = "block text-xs font-mono uppercase text-automa-muted mb-1";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { register, watch, handleSubmit, formState: { errors } } =
    useForm<ResetValues>({ resolver: zodResolver(resetPasswordSchema) });

  const pwd = watch("password") || "";
  const strength =
    (pwd.length >= 10 ? 1 : 0) + (/[A-Z]/.test(pwd) ? 1 : 0) + (/[0-9]/.test(pwd) ? 1 : 0) + (/[^A-Za-z0-9]/.test(pwd) ? 1 : 0);

  const onSubmit = () => {
    toast.success("Password Updated Successfully");
    router.push(ROUTES.login);
  };

  return (
    <CyberCard className="p-8 space-y-6">
      <h1 className="font-display text-2xl font-bold text-automa-text">Configure New Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="password" className={label}>New Password</label>
          <input id="password" type="password" aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} {...register("password")} className={input} />
          <div className="mt-2 flex gap-1.5">
            {[1, 2, 3, 4].map((lvl) => (
              <div key={lvl} className={`h-1.5 flex-1 rounded-full ${strength >= lvl ? "bg-automa-green" : "bg-automa-secondaryBg"}`} />
            ))}
          </div>
          <p className="mt-1 font-mono text-[11px] text-automa-muted">Strength: {strength}/4</p>
          {errors.password && <p id="password-error" className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword" className={label}>Confirm Password</label>
          <input id="confirmPassword" type="password" aria-invalid={Boolean(errors.confirmPassword)} aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined} {...register("confirmPassword")} className={input} />
          {errors.confirmPassword && <p id="confirmPassword-error" className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="w-full rounded-lg bg-automa-green py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen">Reset Password</button>
      </form>
    </CyberCard>
  );
}
