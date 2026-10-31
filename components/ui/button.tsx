import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
  children: React.ReactNode;
};

type LinkButtonProps = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;
type NativeButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-automa-green px-6 py-3 text-sm font-semibold text-automa-bg transition hover:bg-automa-secondaryGreen active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-automa-green focus-visible:ring-offset-2 focus-visible:ring-offset-automa-bg",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(0,255,136,0.3)] bg-automa-secondaryBg px-6 py-3 text-sm font-semibold text-automa-text transition hover:border-automa-green active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-automa-green focus-visible:ring-offset-2 focus-visible:ring-offset-automa-bg",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-mono text-automa-green transition hover:underline active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-automa-green focus-visible:ring-offset-2 focus-visible:ring-offset-automa-bg",
};

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const { href, variant = "primary", className, arrow, children, ...linkProps } = props;
    return (
      <Link
        href={href}
        {...linkProps}
        className={cn(variantClasses[variant], arrow && "button-with-arrow", className)}
      >
        {children}
        {arrow && <ArrowRight aria-hidden="true" className="button-arrow h-4 w-4" />}
      </Link>
    );
  }

  const { variant = "primary", className, arrow, children, type = "button", ...buttonProps } = props;
  return (
    <button
      type={type}
      {...buttonProps}
      className={cn(variantClasses[variant], arrow && "button-with-arrow", className)}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="button-arrow h-4 w-4" />}
    </button>
  );
}
