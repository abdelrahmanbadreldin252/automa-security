import type { Metadata } from "next";
import { Target, Cpu } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AUTOMA SECURITY, an early-stage project developing two cybersecurity products.",
  openGraph: {
    title: "About AUTOMA SECURITY",
    description: "Learn about AUTOMA SECURITY, an early-stage project developing two cybersecurity products.",
    type: "website",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      <PublicSectionHeader
        as="h1"
        eyebrow="About AUTOMA SECURITY"
        title="Developing Two Cybersecurity Products"
        description="AUTOMA SECURITY is an early-stage project developing a Windows endpoint application and a separate web vulnerability scanner."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CyberCard className="p-8">
          <Target className="h-8 w-8 text-automa-green" />
          <h2 className="mt-4 font-display text-2xl font-bold text-automa-text">Our Mission</h2>
          <p className="mt-3 text-sm text-automa-muted leading-relaxed">
            To explore practical security software with clear product boundaries and transparent development updates.
          </p>
        </CyberCard>
        <CyberCard className="p-8">
          <Cpu className="h-8 w-8 text-automa-green" />
          <h2 className="mt-4 font-display text-2xl font-bold text-automa-text">Our Architectural Philosophy</h2>
          <p className="mt-3 text-sm text-automa-muted leading-relaxed">
            The project is exploring a Windows desktop product for endpoint security and a separate cloud-based web
            vulnerability scanner. Both are still in development.
          </p>
        </CyberCard>
      </div>
      <CyberCard className="p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-automa-text">Contact AUTOMA SECURITY</h2>
        <div className="mt-6 flex justify-center gap-4">
          <Button href={ROUTES.contact} variant="primary" arrow>
            Contact AUTOMA SECURITY
          </Button>
        </div>
      </CyberCard>
    </div>
  );
}
