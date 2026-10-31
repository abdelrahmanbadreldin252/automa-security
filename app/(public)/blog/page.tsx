import type { Metadata } from "next";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Read news and product updates from AUTOMA SECURITY as they are published.",
  openGraph: {
    title: "AUTOMA SECURITY News & Updates",
    description: "Read news and product updates from AUTOMA SECURITY as they are published.",
    type: "website",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <PublicSectionHeader as="h1" eyebrow="AUTOMA SECURITY" title="News & Updates" />
      <CyberCard className="text-sm text-automa-muted">
        No articles have been published yet. Updates will be posted here as development progresses.
      </CyberCard>
    </div>
  );
}
