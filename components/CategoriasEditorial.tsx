"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { categorias } from "@/content/categorias";
import { tratamientos } from "@/content/tratamientos";
import { fadeUpVariants } from "@/lib/motion";

export function CategoriasEditorial() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="space-y-20 sm:space-y-28">
        {categorias.map((categoria, i) => {
          const items = categoria.tratamientoSlugs
            .map((slug) => tratamientos.find((t) => t.slug === slug))
            .filter((t): t is NonNullable<typeof t> => !!t);
          const imagen = categoria.imagen ?? items.find((t) => t.imagen)?.imagen;
          const reversed = i % 2 === 1;
          const destacada = i === 0;
          const singleTreatment = items.length === 1;
          const exploreHref = singleTreatment
            ? `/tratamientos/${items[0].slug}`
            : `/tratamientos#${categoria.slug}`;

          return (
            <motion.div
              key={categoria.slug}
              id={categoria.slug}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden rounded-sm ${
                  reversed ? "md:order-2" : ""
                }`}
              >
                {imagen && (
                  <Image
                    src={imagen}
                    alt={`Tratamientos de ${categoria.nombre} en Navara`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className={reversed ? "md:order-1" : ""}>
                <h3
                  className={`mb-4 font-serif text-[var(--navara-ink)] ${
                    destacada ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                  }`}
                >
                  {categoria.nombre}
                </h3>
                <p className="mb-6 max-w-md text-base leading-relaxed text-[var(--navara-brown)]">
                  {categoria.descripcion}
                </p>
                {categoria.tags ? (
                  <p className="mb-8 text-sm text-[var(--navara-brown)]/70">
                    {categoria.tags.join(" · ")}
                  </p>
                ) : (
                  <p className="mb-8 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[var(--navara-brown)]/70">
                    {items.map((t, idx) => (
                      <span key={t.slug} className="flex items-center gap-1.5">
                        <Link
                          href={`/tratamientos/${t.slug}`}
                          className="underline-offset-2 hover:text-[var(--navara-terracotta)] hover:underline"
                        >
                          {t.nombre}
                        </Link>
                        {idx < items.length - 1 && <span aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </p>
                )}
                <Link
                  href={exploreHref}
                  className="group/link relative text-sm font-semibold text-[var(--navara-terracotta)]"
                >
                  Explorar {singleTreatment ? "tratamiento" : "tratamientos"} →
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--navara-terracotta)] transition-transform duration-[250ms] group-hover/link:scale-x-100" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
