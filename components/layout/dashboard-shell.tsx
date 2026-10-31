"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield, LayoutDashboard, Download, CreditCard, FileCheck, Bell, User,
  Settings, LogOut, PanelLeftClose, PanelLeftOpen,
} from "lucide-react";
import { ROUTES, USER_DASHBOARD_NAV } from "@/config/routes";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard, Shield, Download, CreditCard, FileCheck, Bell, User, Settings,
};

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-automa-bg text-automa-text">
      <aside
        className={cn(
          "flex-col border-r border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg transition-all duration-200 hidden md:flex",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-[rgba(0,255,136,0.15)] px-4">
          {!collapsed && (
            <Link href={ROUTES.home} className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="Automa Security" width={112} height={56} className="h-10 w-28 object-contain" />
            </Link>
          )}
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-1.5 text-automa-muted hover:bg-automa-card hover:text-automa-green"
            aria-label="Toggle Sidebar"
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-3" aria-label="User Dashboard Navigation">
          {USER_DASHBOARD_NAV.map((item) => {
            const Icon = ICON_MAP[item.icon] || Shield;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "bg-automa-darkGreen/60 text-automa-green border border-automa-green/30"
                    : "text-automa-muted hover:bg-automa-card hover:text-automa-text"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[rgba(0,255,136,0.15)] p-3">
          <Link href={ROUTES.login} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-automa-muted hover:bg-automa-card hover:text-red-400">
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg/80 px-6 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-mono text-automa-muted">
            <span>PORTAL</span>
            <span>/</span>
            <span className="text-automa-green uppercase">{pathname.replace("/dashboard", "") || "OVERVIEW"}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.dashboardNotifications} className="relative rounded-lg border border-[rgba(0,255,136,0.15)] bg-automa-card p-2 text-automa-muted hover:text-automa-green" aria-label="Notifications">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-automa-green" />
            </Link>
            <Link href={ROUTES.dashboardProfile} className="flex items-center gap-2.5 rounded-lg border border-[rgba(0,255,136,0.15)] bg-automa-card px-3 py-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-automa-green" />
              <span className="font-medium text-automa-text">Alex Mercer (Sample)</span>
            </Link>
          </div>
        </header>

        <div className="flex md:hidden overflow-x-auto border-b border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg px-4 py-2 gap-2">
          {USER_DASHBOARD_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium",
                pathname === item.href ? "bg-automa-darkGreen text-automa-green" : "text-automa-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
