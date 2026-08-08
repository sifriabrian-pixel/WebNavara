"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { necesidades } from "@/content/necesidades";
import { tratamientos } from "@/content/tratamientos";
import { fadeUpVariants } from "@/lib/motion";

export function NecesidadesDiscovery() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);
  const [selected, setSelected] = useState<string | null>(null);

  const activeNecesidad = necesidades.find((n) => n.slug === selected);
  const relacionados = activeNecesidad
    ? activeNecesidad.tratamientoSlugs
        .map((slug) => tratamientos.find((t) => t.slug === slug))
        .filter((t): t is NonNullable<typeof t> => !!t)
    : [];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className="mx-auto max-w-3xl px-5 text-center sm:px-8"
    >
      <h3 className="mb-8 font-serif text-2xl text-[var(--navara-ink)] sm:text-3xl">
        ¿Qué te gustaría mejorar?
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {necesidades.map((necesidad) => {
          const isActive = necesidad.slug === selected;
          return (
            <button
              key={necesidad.slug}
              type="button"
              onClick={() => setSelected(isActive ? null : necesidad.slug)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? "border-[var(--navara-terracotta)] bg-[var(--navara-terracotta)]/10 text-[var(--navara-terracotta)]"
                  : "border-[var(--navara-tan)]/50 text-[var(--navara-brown)] hover:border-[var(--navara-terracotta)]/50 hover:text-[var(--navara-terracotta)]"
              }`}
            >
              {necesidad.label}
            </button>
          );
        })}
      </div>

      <motion.div
        initial={false}
        animate={{
          height: activeNecesidad ? "auto" : 0,
          opacity: activeNecesidad ? 1 : 0,
        }}
        transition={{ duration: reduced ? 0.2 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        {activeNecesidad && (
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-[var(--navara-tan)]/30 pt-8">
            {relacionados.map((t) => (
              <Link
                key={t.slug}
                href={`/tratamientos/${t.slug}`}
                className="text-sm font-semibold text-[var(--navara-ink)] underline decoration-[var(--navara-tan)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--navara-terracotta)]"
              >
                {t.nombre}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
