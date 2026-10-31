"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { SAMPLE_FAQS } from "@/lib/mock-data";
import { ROUTES } from "@/config/routes";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(SAMPLE_FAQS[0]?.question ?? null);
  const q = query.toLowerCase();

  const filtered = SAMPLE_FAQS.filter(
    (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <PublicSectionHeader
        as="h1"
        eyebrow="Knowledge Base & Technical Support"
        title="Frequently Asked Questions"
        description="Answers about AUTOMA SECURITY and the current development status of its products."
      />
      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-4 w-4 text-automa-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search FAQ"
          placeholder="Search product development questions..."
          className="w-full rounded-xl border border-[rgba(0,255,136,0.25)] bg-automa-secondaryBg pl-11 pr-4 py-3 text-sm text-automa-text focus:border-automa-green focus:outline-none"
        />
      </div>

      <div className="space-y-4">
        {filtered.length === 0 && <p className="text-center text-sm text-automa-muted">No matching questions found.</p>}
        {filtered.map((item, index) => {
          const isOpen = openQuestion === item.question;
          const answerId = `faq-answer-${index}`;
          return (
            <CyberCard key={item.question} className="p-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <div>
                  <span className="font-mono text-xs text-automa-green block mb-1">{item.category}</span>
                  <span className="font-display text-base font-semibold text-automa-text">{item.question}</span>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-automa-green transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                id={answerId}
                hidden={!isOpen}
                className="border-t border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg px-6 py-4 text-sm text-automa-muted leading-relaxed"
              >
                {item.answer}
              </div>
            </CyberCard>
          );
        })}
      </div>

      <CyberCard className="text-center">
        <p className="text-sm text-automa-muted">Have a question about AUTOMA SECURITY?</p>
        <Link href={ROUTES.contact} className="mt-4 inline-flex min-h-10 items-center rounded-lg bg-automa-green px-5 py-2.5 text-xs font-semibold text-automa-bg">
          Contact Technical Support
        </Link>
      </CyberCard>
    </div>
  );
}
