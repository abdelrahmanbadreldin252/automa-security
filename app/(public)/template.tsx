"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/animations/reveal";

export default function PublicTemplate({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
    >
      {pathname === "/" ? children : <Reveal>{children}</Reveal>}
    </motion.div>
  );
}
