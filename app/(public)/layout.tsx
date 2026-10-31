import React from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pub-root flex min-h-screen flex-col bg-automa-bg">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-automa-green px-4 py-2 font-semibold text-automa-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <PublicNavbar />
      <main id="main-content" className="flex-1">{children}</main>
      <PublicFooter />
    </div>
  );
}
