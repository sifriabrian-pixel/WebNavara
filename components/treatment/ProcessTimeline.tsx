"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpStaggerVariants } from "@/lib/motion";

export function ProcessTimeline({
  steps,
}: {
  steps: { label: string; value: string }[];
}) {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-4 top-2 bottom-2 w-px bg-[var(--navara-tan)]/40"
      />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative flex gap-5 pl-0"
          >
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--navara-terracotta)]/50 bg-[var(--navara-cream)] font-serif text-sm text-[var(--navara-terracotta)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--navara-sage)]">
                {step.label}
              </p>
              <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
                {step.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
