import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently asked questions about AUTOMA SECURITY and the development status of its products.",
  openGraph: {
    title: "AUTOMA SECURITY Frequently Asked Questions",
    description: "Frequently asked questions about AUTOMA SECURITY and the development status of its products.",
    type: "website",
  },
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
