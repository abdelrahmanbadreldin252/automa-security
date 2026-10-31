import type { Metadata } from "next";
import Link from "next/link";
import { Shield, GlobeLock, Cpu, Lock, ArrowRight, CheckCircle2, Terminal, Zap } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SAMPLE_FAQS } from "@/lib/mock-data";
import { NetworkCanvas } from "@/components/animations/network-canvas";
import { CyberTerminal } from "@/components/animations/cyber-terminal";
import { HeroItem } from "@/components/animations/hero-item";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Roadmap } from "@/components/sections/roadmap";
import { SectionDivider } from "@/components/public/section-divider";
import { CyberCard } from "@/components/ui/primitives";
import { PublicBadge } from "@/components/public/public-badge";
import { PublicSectionHeader } from "@/components/public/public-section-header";
import { Button } from "@/components/ui/button";
import { DownloadAntivirusButton, LaunchScannerButton } from "@/components/ui/product-actions";

export const metadata: Metadata = {
  title: "Home",
  description: "AUTOMA SECURITY is developing a Windows endpoint application and a separate cloud web vulnerability scanner.",
  openGraph: {
    title: "AUTOMA SECURITY | Cybersecurity Products in Development",
    description: "AUTOMA SECURITY is developing a Windows endpoint application and a separate cloud web vulnerability scanner.",
    type: "website",
  },
  alternates: { canonical: "/" },
};

const WHY = [
  { icon: Cpu, title: "A focused endpoint product", desc: "We are exploring a Windows desktop product as one part of AUTOMA SECURITY." },
  { icon: Lock, title: "Separate product scopes", desc: "Endpoint protection and web vulnerability scanning are being developed as distinct products." },
  { icon: Zap, title: "Transparent progress", desc: "We will share product details as development progresses; availability has not been announced." },
];

export default function HomePage() {
  const antivirusComingSoon = !siteConfig.products.antivirus.downloadUrl;
  const scannerComingSoon = !siteConfig.products.scanner.externalUrl;

  return (
    <div className="space-y-24 pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[rgba(0,255,136,0.15)] bg-radial-emerald pt-16 pb-24 lg:pt-24 lg:pb-32">
        <NetworkCanvas />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <HeroItem delay={0.05}><PublicBadge variant="emerald">CYBERSECURITY PRODUCTS IN DEVELOPMENT</PublicBadge></HeroItem>
              <HeroItem delay={0.12}>
                <h1 className="font-display text-4xl font-bold tracking-tight text-automa-text sm:text-6xl leading-[1.08]">
                  Intelligent Security. <span className="text-automa-green">Absolute Confidence.</span>
                </h1>
              </HeroItem>
              <HeroItem delay={0.19}>
                <p className="max-w-2xl text-lg text-automa-muted leading-relaxed">
                  AUTOMA SECURITY is developing two separate cybersecurity products: a Windows endpoint application and
                  a cloud web vulnerability scanner. Both products are in development and are not yet available.
                </p>
              </HeroItem>
              <HeroItem delay={0.26}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href={ROUTES.services} variant="primary" className="group py-3.5 shadow-cyber-sm">
                    <span>Explore Our Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button href={ROUTES.register} variant="secondary" className="bg-automa-card/90 py-3.5">
                    <span>Get Started</span>
                  </Button>
                </div>
              </HeroItem>
            </div>
            <HeroItem delay={0.33} className="lg:col-span-5">
              <CyberTerminal />
            </HeroItem>
          </div>
        </div>
      </section>

      {/* TWO PRODUCTS */}
      <Reveal><section className="bg-automa-secondaryBg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicSectionHeader
          eyebrow="Core Security Ecosystem"
          title="Developing Separate Endpoint & Web Products"
          description="The project is developing two distinct products: a Windows endpoint application and a cloud web vulnerability scanner."
        />
        <RevealGroup className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <CyberCard className="flex flex-col justify-between border-t-2 border-t-automa-green/40 p-8">
            <div>
              <div className="flex items-center justify-between">
                <PublicBadge variant="emerald">WINDOWS DESKTOP PRODUCT // {antivirusComingSoon ? "IN DEVELOPMENT" : "AVAILABLE"}</PublicBadge>
                <Shield className="h-6 w-6 text-automa-green" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-automa-text">AUTOMA Antivirus</h3>
              <p className="mt-3 text-sm text-automa-muted leading-relaxed">
                AUTOMA Antivirus is a planned Windows desktop product. It is currently in development, and no installer
                or released feature set is available yet.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-automa-text">
                {[
                  "Windows endpoint protection is the product focus",
                  "Release details will be shared when available",
                  "Requirements and features are still being defined",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-automa-green" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(0,255,136,0.15)] pt-6">
              <DownloadAntivirusButton label={antivirusComingSoon ? "AUTOMA Antivirus — in development" : "Download AUTOMA Antivirus"} />
              <Link href={ROUTES.antivirus} className="inline-flex min-h-10 items-center text-xs font-mono text-automa-green hover:underline">
                Product Overview →
              </Link>
            </div>
          </CyberCard>

          <CyberCard className="flex flex-col justify-between border-t-2 border-t-automa-green/40 p-8">
            <div>
              <div className="flex items-center justify-between">
                <PublicBadge variant="emerald">CLOUD SCANNER // {scannerComingSoon ? "IN DEVELOPMENT" : "AVAILABLE"}</PublicBadge>
                <GlobeLock className="h-6 w-6 text-automa-green" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-automa-text">AUTOMA Web Vulnerability Scanner</h3>
              <p className="mt-3 text-sm text-automa-muted leading-relaxed">
                The web vulnerability scanner is planned as a separate cloud product. It is in development and cannot
                currently run scans.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-automa-text">
                {[
                  "Cloud-based scanning is the product direction",
                  "Planned coverage is still being defined",
                  "Availability will be announced when ready",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-automa-green" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(0,255,136,0.15)] pt-6">
              <LaunchScannerButton label={scannerComingSoon ? "Web scanner — in development" : "Launch Web Scanner"} />
              <Link href={ROUTES.scanner} className="inline-flex min-h-10 items-center text-xs font-mono text-automa-green hover:underline">
                Development Details →
              </Link>
            </div>
          </CyberCard>
        </RevealGroup>
        </div>
      </section></Reveal>

      <SectionDivider />
      <Roadmap />

      <SectionDivider />
      <Reveal><section className="bg-cyber-grid py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicSectionHeader
          eyebrow="Our Values"
          title="Principles Guiding the Work"
          description="The principles we aim to bring to AUTOMA SECURITY as the products develop."
        />
        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Cpu, title: "Clarity", description: "Keep product goals and development status clear." },
            { icon: Lock, title: "Careful scope", description: "Treat endpoint protection and web scanning as separate product challenges." },
            { icon: Zap, title: "Honest progress", description: "Share confirmed information and avoid promises before they are ready." },
          ].map((value) => (
            <CyberCard key={value.title} className={value.title === "Clarity" ? "md:col-span-2 md:row-span-2" : undefined}>
              <value.icon className="h-8 w-8 text-automa-green" />
              <h3 className="mt-4 font-display text-xl font-bold text-automa-text">{value.title}</h3>
              {value.title === "Clarity" && (
                <p className="mt-2 text-sm leading-relaxed text-automa-muted">
                  The principles we aim to bring to AUTOMA SECURITY as the products develop.
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-automa-muted">{value.description}</p>
            </CyberCard>
          ))}
        </RevealGroup>
        </div>
      </section></Reveal>

      <SectionDivider />
      <Reveal>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PublicSectionHeader eyebrow="A Note from the Founders" title="A Project in Its Early Stages" />
          <CyberCard className="grid grid-cols-1 items-center gap-8 md:grid-cols-5">
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-[rgba(0,255,136,0.15)] bg-automa-bg text-center md:col-span-2">
              <Shield className="h-10 w-10 text-automa-green" />
              <span className="font-mono text-xs text-automa-muted">Founder photo coming soon</span>
            </div>
            <div className="md:col-span-3">
              <p className="text-sm leading-relaxed text-automa-muted">
                AUTOMA SECURITY is being built as an early-stage project. We are working toward two distinct products
                and will share confirmed details as development progresses. There are no released products or customer
                stories to report yet.
              </p>
              <p className="mt-4 font-mono text-xs text-automa-green">— The AUTOMA SECURITY founders</p>
            </div>
          </CyberCard>
        </section>
      </Reveal>

      {/* WHY */}
      <Reveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicSectionHeader eyebrow="Why AUTOMA SECURITY" title="A Thoughtful Approach to Security" />
        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHY.map((item) => (
            <CyberCard key={item.title}>
              <item.icon className="h-8 w-8 text-automa-green" />
              <h3 className="mt-4 font-display text-xl font-bold text-automa-text">{item.title}</h3>
              <p className="mt-2 text-sm text-automa-muted leading-relaxed">{item.desc}</p>
            </CyberCard>
          ))}
        </RevealGroup>
      </section></Reveal>

      {/* DEVELOPMENT STATUS */}
      <Reveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicSectionHeader
          eyebrow="Development Update"
          title="Building AUTOMA SECURITY"
          description="AUTOMA SECURITY is an early-stage project. Product details and availability will be shared as development progresses."
        />
        <CyberCard className="bg-automa-secondaryBg">
          <p className="text-sm text-automa-muted leading-relaxed">
            AUTOMA Antivirus and the web vulnerability scanner are not yet available. No customer testimonials or
            product performance figures are published at this stage.
          </p>
        </CyberCard>
      </section></Reveal>

      {/* NEWS */}
      <Reveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PublicSectionHeader eyebrow="News & Engineering" title="Updates Coming Soon" />
        <CyberCard className="text-sm text-automa-muted">
          There are no published articles yet. Updates will appear here as they become available.
        </CyberCard>
      </section></Reveal>

      {/* FINAL CTA */}
      <Reveal><section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <CyberCard className="p-8 lg:p-12 text-center bg-radial-emerald">
          <Terminal className="mx-auto h-10 w-10 text-automa-green" />
          <h2 className="mt-4 font-display text-3xl font-bold text-automa-text">Ready to Harden Your Infrastructure?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-automa-muted">
            AUTOMA Antivirus and the web vulnerability scanner are in development and are not yet available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={ROUTES.antivirus} variant="primary" arrow>
              Antivirus development
            </Button>
            <Button href={ROUTES.scanner} variant="secondary" arrow>
              Scanner development
            </Button>
            <Button href={ROUTES.faq} variant="ghost" arrow>
              Read Full FAQ ({SAMPLE_FAQS.length} answers)
            </Button>
          </div>
        </CyberCard>
      </section></Reveal>
    </div>
  );
}
