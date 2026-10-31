"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity, Users, Package, ShoppingCart, HardDriveDownload,
  MessageSquare, FileText, BarChart3, Sliders, ArrowLeft,
} from "lucide-react";
import { ADMIN_DASHBOARD_NAV, ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

const ADMIN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity, Users, Package, ShoppingCart, HardDriveDownload, MessageSquare, FileText, BarChart3, Sliders,
};

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-automa-bg text-automa-text">
      <aside className="hidden lg:flex w-64 flex-col border-r border-[rgba(0,255,136,0.2)] bg-automa-secondaryBg">
        <div className="flex h-16 items-center justify-between border-b border-[rgba(0,255,136,0.2)] px-5">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="AUTOMA SECURITY" width={224} height={126} className="h-10 w-28 object-contain" />
            <span className="font-mono text-xs font-bold tracking-widest text-automa-text">
              <span className="text-automa-green">ADMIN SOC</span>
            </span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Admin Navigation">
          {ADMIN_DASHBOARD_NAV.map((item) => {
            const Icon = ADMIN_ICONS[item.icon] || Activity;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-mono transition",
                  active
                    ? "bg-automa-darkGreen/70 text-automa-green border border-automa-green/30"
                    : "text-automa-muted hover:bg-automa-card hover:text-automa-text"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-[rgba(0,255,136,0.2)] p-4">
          <Link href={ROUTES.home} className="flex items-center gap-2 text-xs font-mono text-automa-muted hover:text-automa-green">
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to Public Site
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-[rgba(0,255,136,0.2)] bg-automa-secondaryBg px-6">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="rounded bg-automa-darkGreen px-2 py-0.5 text-automa-green">PRIVILEGED CONSOLE</span>
            <span className="text-automa-muted">{pathname}</span>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-automa-muted">
            RBAC Note: Enforce server-side session checks in production
          </span>
        </header>

        <div className="flex lg:hidden overflow-x-auto border-b border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg px-4 py-2 gap-2">
          {ADMIN_DASHBOARD_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded px-2.5 py-1 text-xs font-mono",
                pathname === item.href ? "bg-automa-darkGreen text-automa-green" : "text-automa-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
