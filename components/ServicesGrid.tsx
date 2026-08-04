"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import { tratamientos, type Tratamiento } from "@/content/tratamientos";
import { servicioDestacado } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpVariants, fadeUpStaggerVariants } from "@/lib/motion";

const categoryStyles = {
  estetica: {
    label: "Estética",
    badge: "bg-[var(--navara-terracotta)]/12 text-[var(--navara-terracotta)]",
    icon: "border-[var(--navara-terracotta)]/50",
    placeholderBg: "bg-[var(--navara-terracotta)]/10",
    placeholderIcon: "text-[var(--navara-terracotta)]/50",
    CategoryIcon: Sparkles,
  },
  bienestar: {
    label: "Bienestar",
    badge: "bg-[var(--navara-sage)]/15 text-[var(--navara-sage)]",
    icon: "border-[var(--navara-sage)]/50",
    placeholderBg: "bg-[var(--navara-sage)]/12",
    placeholderIcon: "text-[var(--navara-sage)]/50",
    CategoryIcon: Leaf,
  },
} as const;

function ServiceMedia({
  tratamiento,
  className = "",
  iconClassName = "h-10 w-10",
}: {
  tratamiento: Tratamiento;
  className?: string;
  iconClassName?: string;
}) {
  const category = categoryStyles[tratamiento.categoria];
  const { CategoryIcon } = category;

  if (tratamiento.imagen) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={tratamiento.imagen}
          alt={`Tratamiento de ${tratamiento.nombre} en Navara`}
          fill
          className="object-cover transition-transform duration-[250ms] group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${category.placeholderBg} ${className}`}
    >
      <CategoryIcon strokeWidth={1.25} className={`${category.placeholderIcon} ${iconClassName}`} />
    </div>
  );
}

export function ServicesGrid() {
  const reduced = !!useReducedMotion();
  const staggerVariants = fadeUpStaggerVariants(reduced);
  const featuredVariants = fadeUpVariants(reduced);

  const featured = tratamientos.find((t) => t.slug === servicioDestacado);
  const resto = tratamientos.filter((t) => t.slug !== servicioDestacado);

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

      {featured && (
        <motion.div
          custom={0}
          variants={featuredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="group mb-8 grid overflow-hidden rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] shadow-sm transition-shadow duration-[250ms] hover:shadow-lg sm:grid-cols-2"
        >
          <ServiceMedia
            tratamiento={featured}
            className="aspect-[4/3] sm:aspect-auto"
            iconClassName="h-16 w-16"
          />
          <div className="flex flex-col justify-center p-8">
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${categoryStyles[featured.categoria].badge}`}
              >
                {categoryStyles[featured.categoria].label}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--navara-mustard)]">
                Tratamiento destacado
              </span>
            </div>
            <h3 className="mb-3 font-serif text-2xl text-[var(--navara-ink)] sm:text-3xl">
              {featured.nombre}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[var(--navara-brown)]">
              {featured.descripcion}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/tratamientos/${featured.slug}`}
                className="group/link relative text-sm font-semibold text-[var(--navara-terracotta)]"
              >
                Ver más
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--navara-terracotta)] transition-transform duration-[250ms] group-hover/link:scale-x-100" />
              </Link>
              <WhatsappButton
                message={featured.whatsappMensaje}
                source={`servicio-destacado-${featured.slug}`}
              >
                Consultar
              </WhatsappButton>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resto.map((tratamiento, i) => {
          const category = categoryStyles[tratamiento.categoria];
          return (
            <motion.div
              key={tratamiento.slug}
              custom={i}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.22 } }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6 shadow-sm transition-shadow duration-[250ms] hover:shadow-lg"
            >
              <ServiceMedia
                tratamiento={tratamiento}
                className="-mx-6 -mt-6 mb-4 aspect-[4/3]"
              />
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
