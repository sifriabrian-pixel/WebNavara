"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustStats } from "@/content/site";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { fadeUpVariants } from "@/lib/motion";

export function TrustBar() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  return (
    <section className="border-y border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-center sm:px-8">
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col items-center"
          >
            {stat.value !== null ? (
              <span className="font-serif text-2xl text-[var(--navara-ink)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
            ) : (
              <span className="font-serif text-2xl text-[var(--navara-ink)]/40">
                [PENDIENTE-CLIENTE]
              </span>
            )}
            <span className="text-xs font-medium tracking-wide text-[var(--navara-brown)]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
