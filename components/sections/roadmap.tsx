"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

const MILESTONES = [
  {
    title: "Define product scope",
    status: "In progress",
    description: "Clarifying the goals and boundaries of the two planned products.",
  },
  {
    title: "Develop the Windows desktop product",
    status: "Planned",
    description: "Continue development of the AUTOMA Antivirus concept.",
  },
  {
    title: "Develop the cloud scanner",
    status: "Planned",
    description: "Continue development of a separate web vulnerability scanning product.",
  },
  {
    title: "Share availability details",
    status: "Planned",
    description: "Publish requirements, capabilities, and release information when confirmed.",
  },
];

export function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.3"],
  });

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PublicSectionHeader
        eyebrow="Development Roadmap"
        title="What We’re Working On"
        description="A high-level view of the project. Timing and final product scope have not been announced."
      />
      <div ref={timelineRef} className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-[rgba(0,255,136,0.15)]">
          <motion.div
            className="public-roadmap-progress h-full w-full origin-top bg-automa-green"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
        <ol className="space-y-6">
          {MILESTONES.map((milestone, index) => (
            <motion.li
              key={milestone.title}
              className="public-roadmap-item relative pl-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.08 }}
            >
              <motion.span
                aria-hidden="true"
                className="public-roadmap-marker absolute left-0 top-5 h-8 w-8 rounded-full border border-automa-green/40 bg-automa-bg"
                initial={{ backgroundColor: "#050705", boxShadow: "0 0 0 rgba(0,255,136,0)" }}
                whileInView={{ backgroundColor: "#003D25", boxShadow: "0 0 18px rgba(0,255,136,0.28)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reducedMotion ? 0 : 0.35, delay: reducedMotion ? 0 : index * 0.08 }}
              />
              <CyberCard>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-automa-text">{milestone.title}</h3>
                  <span className="rounded-full border border-[rgba(0,255,136,0.2)] px-2.5 py-1 font-mono text-[11px] text-automa-green">
                    {milestone.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-automa-muted">{milestone.description}</p>
              </CyberCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
