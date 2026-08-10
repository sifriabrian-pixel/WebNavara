"use client";

import { Armchair, BadgeCheck, LayoutGrid } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { trustFeatures } from "@/content/site";
import { fadeUpStaggerVariants } from "@/lib/motion";

// Un ícono por feature, en el mismo orden que "trustFeatures" en content/site.ts.
const featureIcons = [LayoutGrid, BadgeCheck, Armchair];

export function TrustBar() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <section className="border-y border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-10 gap-y-6 px-5 py-10 text-center sm:gap-x-24 sm:px-8 sm:py-14">
        {trustFeatures.map((label, i) => {
          const Icon = featureIcons[i] ?? LayoutGrid;
          return (
            <motion.div
              key={label}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex w-32 flex-col items-center gap-2"
            >
              <Icon strokeWidth={1.25} className="h-6 w-6 text-[var(--navara-brown)]" />
              <span className="text-sm font-medium text-[var(--navara-brown)]">
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
