"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export function ServiciosIntro() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className="mx-auto max-w-2xl px-5 text-center sm:px-8"
    >
      <div className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-brown)]">
        <span className="h-px w-5 bg-[var(--navara-mustard)]" />
        Tratamientos
      </div>
      <h2 className="mb-4 font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
        Tratamientos pensados para vos
      </h2>
      <p className="text-base leading-relaxed text-[var(--navara-brown)]">
        No creemos en soluciones iguales para todas las personas. Conocé
        nuestras áreas de tratamiento y encontrá la opción que mejor
        acompaña lo que querés mejorar.
      </p>
    </motion.div>
  );
}
