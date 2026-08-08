"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { destacados } from "@/content/site";
import { tratamientos } from "@/content/tratamientos";
import { necesidades } from "@/content/necesidades";
import { fadeUpStaggerVariants, fadeUpVariants } from "@/lib/motion";

function tagsFor(slug: string) {
  return necesidades
    .filter((n) => n.tratamientoSlugs.includes(slug))
    .slice(0, 3)
    .map((n) => n.label);
}

export function DestacadosGrid() {
  const reduced = !!useReducedMotion();
  const staggerVariants = fadeUpStaggerVariants(reduced);
  const introVariants = fadeUpVariants(reduced);

  const items = destacados
    .map((slug) => tratamientos.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={introVariants}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Los más elegidos
        </p>
        <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
          Tratamientos favoritos de nuestras pacientes
        </h2>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((tratamiento, i) => {
          const tags = tagsFor(tratamiento.slug);
          return (
            <motion.div
              key={tratamiento.slug}
              custom={i}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group"
            >
              <Link href={`/tratamientos/${tratamiento.slug}`} className="block">
                <span className="mb-3 block font-serif text-sm text-[var(--navara-terracotta)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-sm bg-[var(--navara-beige)]">
                  {tratamiento.imagen && (
                    <Image
                      src={tratamiento.imagen}
                      alt={`Tratamiento de ${tratamiento.nombre} en Navara`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <h3 className="mb-1 font-serif text-lg text-[var(--navara-ink)]">
                  {tratamiento.nombre}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[var(--navara-brown)]">
                  {tratamiento.descripcionCorta}
                </p>
                {tags.length > 0 && (
                  <p className="mb-3 text-xs text-[var(--navara-brown)]/60">
                    {tags.join(" · ")}
                  </p>
                )}
                <span className="group/link relative text-sm font-semibold text-[var(--navara-terracotta)]">
                  Conocer el tratamiento →
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--navara-terracotta)] transition-transform duration-[250ms] group-hover:scale-x-100" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/tratamientos"
          className="group/link relative text-sm font-semibold text-[var(--navara-ink)]"
        >
          Ver todos los tratamientos →
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--navara-ink)] transition-transform duration-[250ms] group-hover/link:scale-x-100" />
        </Link>
      </div>
    </div>
  );
}
