"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpStaggerVariants } from "@/lib/motion";

export function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          custom={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-6 text-center"
        >
          <p className="mb-1 font-serif text-2xl text-[var(--navara-terracotta)] sm:text-3xl">
            {stat.value}
          </p>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--navara-brown)]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
