"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content/site";
import { fadeUpStaggerVariants, fadeUpVariants } from "@/lib/motion";

function Stars({ calificacion }: { calificacion: number }) {
  return (
    <div className="mb-3 flex gap-1 text-[var(--navara-mustard)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < calificacion ? "" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduced = !!useReducedMotion();
  const sectionVariants = fadeUpVariants(reduced);
  const cardVariants = fadeUpStaggerVariants(reduced);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Testimonios
        </p>
        <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
          Lo que dicen nuestras pacientes
        </h2>
      </div>

      {testimonials.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nombre}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6 shadow-sm"
            >
              <Stars calificacion={t.calificacion} />
              <p className="mb-4 text-sm leading-relaxed text-[var(--navara-brown)]">
                &ldquo;{t.texto}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[var(--navara-ink)]">
                {t.nombre}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[var(--navara-tan)]/50 bg-[var(--navara-beige)]/40 p-10 text-center">
          <p className="text-sm text-[var(--navara-brown)]">
            [PENDIENTE-CLIENTE] Todavía no hay testimonios cargados. Sumalos en{" "}
            <code className="rounded bg-[var(--navara-beige)] px-1.5 py-0.5">
              content/site.ts
            </code>{" "}
            apenas tengas el consentimiento de las pacientes.
          </p>
        </div>
      )}
    </motion.section>
  );
}
