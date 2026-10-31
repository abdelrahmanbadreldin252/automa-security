import type { Metadata } from "next";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms information for AUTOMA SECURITY products, which are currently in development.",
  openGraph: {
    title: "AUTOMA SECURITY Terms & Conditions",
    description: "Terms information for AUTOMA SECURITY products, which are currently in development.",
    type: "website",
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
      <PublicSectionHeader as="h1" eyebrow="Licensing & Acceptable Use" title="Terms & Conditions" align="left" />
      <CyberCard className="space-y-4 text-sm text-automa-muted leading-relaxed">
        <p className="text-automa-text font-semibold">This document is a draft and has not been reviewed by legal counsel.</p>
        <h2 className="font-display text-lg font-bold text-automa-text">Products in development</h2>
        <p>AUTOMA SECURITY products are not currently available for download, purchase, or use. Applicable terms will be published before any product is released.</p>
      </CyberCard>
    </div>
  );
}
