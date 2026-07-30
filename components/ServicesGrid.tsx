"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { tratamientos } from "@/content/tratamientos";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpStaggerVariants } from "@/lib/motion";

const categoryStyles = {
  estetica: {
    label: "Estética",
    badge: "bg-[var(--navara-terracotta)]/12 text-[var(--navara-terracotta)]",
    icon: "border-[var(--navara-terracotta)]/50",
  },
  bienestar: {
    label: "Bienestar",
    badge: "bg-[var(--navara-sage)]/15 text-[var(--navara-sage)]",
    icon: "border-[var(--navara-sage)]/50",
  },
} as const;

export function ServicesGrid() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Tratamientos
        </p>
        <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
          Nuestros servicios
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tratamientos.map((tratamiento, i) => {
          const category = categoryStyles[tratamiento.categoria];
          return (
            <motion.div
              key={tratamiento.slug}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.22 } }}
              className="group flex flex-col rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6 shadow-sm transition-shadow duration-[250ms] hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full border transition-transform duration-[250ms] group-hover:scale-125 ${category.icon}`}
                />
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${category.badge}`}
                >
                  {category.label}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl text-[var(--navara-ink)]">
                {tratamiento.nombre}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--navara-brown)]">
                {tratamiento.descripcionCorta}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/tratamientos/${tratamiento.slug}`}
                  className="group/link relative text-sm font-semibold text-[var(--navara-terracotta)]"
                >
                  Ver más
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--navara-terracotta)] transition-transform duration-[250ms] group-hover/link:scale-x-100" />
                </Link>
                <WhatsappButton
                  message={tratamiento.whatsappMensaje}
                  source={`servicio-${tratamiento.slug}`}
                  variant="secondary"
                  className="group/cta ml-auto !px-4 !py-2 text-xs"
                >
                  <span className="inline-flex items-center gap-1.5">
                    Consultar
                    <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                      →
                    </span>
                  </span>
                </WhatsappButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
