"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Leaf, Sparkles } from "lucide-react";
import { pillars } from "@/content/site";
import { fadeUpStaggerVariants } from "@/lib/motion";

// Un ícono por pilar, en el mismo orden que "pillars" en content/site.ts.
const pillarIcons = [Sparkles, Leaf, HeartPulse];

export function WhyNavara() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <section className="bg-[var(--navara-beige)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
            Por qué Navara
          </p>
          <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
            Cuidamos tu piel, cuidamos tu bienestar
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduced ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/brand/valores-glow.png"
              alt="Paciente con piel luminosa, reflejo del cuidado integral de Navara"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Sparkles;
              return (
                <motion.div
                  key={pillar.title}
                  custom={i}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--navara-terracotta)]/40">
                    <Icon strokeWidth={1.25} className="h-5 w-5 text-[var(--navara-terracotta)]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-lg text-[var(--navara-ink)]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
