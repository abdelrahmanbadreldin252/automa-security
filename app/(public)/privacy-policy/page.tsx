import type { Metadata } from "next";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Current privacy information for the AUTOMA SECURITY website and products in development.",
  openGraph: {
    title: "AUTOMA SECURITY Privacy Policy",
    description: "Current privacy information for the AUTOMA SECURITY website and products in development.",
    type: "website",
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
      <PublicSectionHeader as="h1" eyebrow="Privacy Information" title="Privacy Policy" align="left" />
      <CyberCard className="space-y-4 text-sm text-automa-muted leading-relaxed">
        <p className="text-automa-text font-semibold">This document is a draft and has not been reviewed by legal counsel.</p>
        <p className="text-automa-text font-semibold">This privacy policy is being prepared while AUTOMA SECURITY products are in development.</p>
        <p>Before any product is made available, this page will describe what information is collected, how it is used, and the choices available to users.</p>
      </CyberCard>
    </div>
  );
}
