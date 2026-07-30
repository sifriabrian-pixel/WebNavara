"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content/site";
import { fadeUpVariants } from "@/lib/motion";

const AUTOPLAY_MS = 6500;

function initialsOf(nombre: string) {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = testimonials.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hasMultiple, paused]);

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
        <div
          className="mx-auto max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reduced ? 0 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduced ? 0 : -24 }}
                transition={{ duration: reduced ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Stars calificacion={testimonials[index].calificacion} />
                <p className="mb-6 text-sm leading-relaxed text-[var(--navara-brown)]">
                  &ldquo;{testimonials[index].texto}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navara-terracotta)]/15 text-sm font-semibold text-[var(--navara-terracotta)]">
                    {initialsOf(testimonials[index].nombre)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navara-ink)]">
                      {testimonials[index].nombre}
                    </p>
                    <p className="text-xs text-[var(--navara-brown)]">
                      {testimonials[index].tratamiento}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.nombre}
                  aria-label={`Ver testimonio de ${t.nombre}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index
                      ? "bg-[var(--navara-terracotta)]"
                      : "bg-[var(--navara-tan)]/50"
                  }`}
                />
              ))}
            </div>
          )}
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
