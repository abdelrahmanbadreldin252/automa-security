import type { Metadata } from "next";
import { Shield, Cpu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CyberCard } from "@/components/ui/primitives";
import { PublicBadge } from "@/components/public/public-badge";

export const metadata: Metadata = {
  title: "AUTOMA Antivirus",
  description: "AUTOMA Antivirus is a planned Windows desktop product currently in development.",
  openGraph: {
    title: "AUTOMA Antivirus | In Development",
    description: "AUTOMA Antivirus is a planned Windows desktop product currently in development.",
    type: "website",
  },
  alternates: { canonical: "/antivirus" },
};

export default function AntivirusPage() {
  const av = siteConfig.products.antivirus;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <PublicBadge variant="emerald">WINDOWS DESKTOP PRODUCT // IN DEVELOPMENT</PublicBadge>
          <h1 className="font-display text-4xl font-bold text-automa-text sm:text-5xl">{av.name}</h1>
          <p className="text-base text-automa-muted leading-relaxed">
            AUTOMA Antivirus is a planned Windows desktop product. It is in development and is not currently available
            to download. Product capabilities and system requirements will be announced later.
          </p>
        </div>
        <div className="lg:col-span-5">
          <CyberCard className="bg-automa-secondaryBg p-6">
            <h2 className="font-display text-xl font-bold text-automa-text">Availability</h2>
            <p className="mt-3 text-sm leading-relaxed text-automa-muted">
              No installer or download is available. Release timing and product details have not been announced.
            </p>
          </CyberCard>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CyberCard className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-automa-text">Product Scope</h2>
          <ul className="space-y-3 text-sm text-automa-muted">
            <li className="flex items-center gap-2.5"><Cpu className="h-4 w-4 shrink-0 text-automa-green" /><span>A Windows desktop product is being explored.</span></li>
            <li className="flex items-center gap-2.5"><Shield className="h-4 w-4 shrink-0 text-automa-green" /><span>Final capabilities and requirements are not yet defined.</span></li>
          </ul>
        </CyberCard>

        <CyberCard className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-automa-text">Development</h2>
          <p className="text-sm leading-relaxed text-automa-muted">
            AUTOMA Antivirus is not available to download or install. Further information will be shared if it is confirmed.
          </p>
        </CyberCard>
      </div>
    </div>
  );
}
