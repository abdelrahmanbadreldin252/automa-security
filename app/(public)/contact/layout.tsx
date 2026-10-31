import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AUTOMA SECURITY, an early-stage project. Contact form availability depends on current configuration.",
  openGraph: {
    title: "Contact AUTOMA SECURITY",
    description: "Contact AUTOMA SECURITY, an early-stage project. Contact form availability depends on current configuration.",
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
