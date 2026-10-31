"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { PUBLIC_NAV_ITEMS, ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,255,136,0.15)] bg-automa-bg/85 backdrop-blur-md">
      <motion.div
        aria-hidden="true"
        className="public-scroll-progress absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-automa-green"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex w-full items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.home}
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-automa-green focus-visible:ring-offset-2 focus-visible:ring-offset-automa-bg"
        >
          <Image
            src="/logo.png"
            alt="AUTOMA SECURITY"
            width={224}
            height={126}
            priority
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 160px, 112px"
            className={cn(
              "object-contain transition-[height,width] duration-300",
              scrolled ? "h-14 w-28 sm:h-20 sm:w-40 lg:h-16 lg:w-32" : "h-14 w-28 sm:h-20 sm:w-40 lg:h-28 lg:w-56"
            )}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
          {PUBLIC_NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  active ? "bg-automa-darkGreen/50 text-automa-green" : "text-automa-muted hover:bg-automa-secondaryBg hover:text-automa-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href={ROUTES.login} className="rounded-lg px-4 py-2 text-sm font-medium text-automa-text hover:text-automa-green transition">
            Login
          </Link>
          <Link href={ROUTES.register} className="inline-flex items-center gap-1.5 rounded-lg bg-automa-green px-4 py-2 text-sm font-semibold text-automa-bg transition hover:bg-automa-secondaryGreen">
            <span>Get Started</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-[rgba(0,255,136,0.2)] p-2.5 text-automa-text lg:hidden"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg px-4 pt-3 pb-6 lg:hidden">
          <div className="flex flex-col space-y-1">
            {PUBLIC_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-automa-text hover:bg-automa-card hover:text-automa-green"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-[rgba(0,255,136,0.15)] pt-4">
            <Link href={ROUTES.login} onClick={() => setMobileOpen(false)} className="w-full rounded-lg border border-[rgba(0,255,136,0.25)] py-2.5 text-center text-sm font-medium text-automa-text">
              Login
            </Link>
            <Link href={ROUTES.register} onClick={() => setMobileOpen(false)} className="w-full rounded-lg bg-automa-green py-2.5 text-center text-sm font-semibold text-automa-bg">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
