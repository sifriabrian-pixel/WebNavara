"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Tratamiento } from "@/content/tratamientos";
import { WhatsappButton } from "@/components/WhatsappButton";
import { BenefitCards } from "@/components/treatment/BenefitCards";
import { ProcessTimeline } from "@/components/treatment/ProcessTimeline";
import { fadeUpVariants } from "@/lib/motion";

const categoriaLabels = {
  intimo: "Íntimo",
  rostro: "Rostro",
  cuerpo: "Cuerpo",
  bienestar: "Bienestar",
} as const;

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={`mx-auto max-w-3xl px-5 py-12 sm:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-serif text-2xl text-[var(--navara-ink)] sm:text-3xl">
      {children}
    </h2>
  );
}

export function FaqAccordion({ items }: { items: NonNullable<Tratamiento["faq"]> }) {
  const reduced = !!useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--navara-tan)]/30">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.pregunta} className="py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between text-left font-serif text-lg text-[var(--navara-ink)]"
            >
              {item.pregunta}
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: reduced ? 0.15 : 0.25 }}
                className="ml-4 shrink-0 text-[var(--navara-terracotta)]"
              >
                +
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: open ? "auto" : 0 }}
              transition={{ duration: reduced ? 0.2 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pt-3 text-sm leading-relaxed text-[var(--navara-brown)]">
                {item.respuesta}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

type Block = { key: string; content: ReactNode; wide?: boolean };

export function TreatmentLandingLayout({
  tratamiento,
}: {
  tratamiento: Tratamiento;
}) {
  const reduced = !!useReducedMotion();
  const heroVariants = fadeUpVariants(reduced);

  const specs = [
    { label: "Proceso", value: tratamiento.proceso },
    { label: "Duración de la sesión", value: tratamiento.duracionSesion },
    { label: "Recuperación", value: tratamiento.recuperacion },
    { label: "Primeros resultados", value: tratamiento.primerosResultados },
    { label: "Mantenimiento", value: tratamiento.mantenimiento },
  ].filter((s): s is { label: string; value: string } => !!s.value);

  // Bloques entre el Hero y el CTA final, en una lista para que el fondo
  // crema/beige alterne siempre bien sin importar qué secciones opcionales
  // terminen renderizando para cada tratamiento.
  const blocks: Block[] = [];

  if (tratamiento.queEs) {
    blocks.push({
      key: "que-es",
      content: (
        <>
          <SectionHeading>Qué es</SectionHeading>
          <p className="text-base leading-relaxed text-[var(--navara-brown)]">
            {tratamiento.queEs}
          </p>
        </>
      ),
    });
  }

  blocks.push({
    key: "beneficios",
    content: (
      <>
        <SectionHeading>Beneficios</SectionHeading>
        <BenefitCards beneficios={tratamiento.beneficios} />
      </>
    ),
  });

  if (tratamiento.modalidades && tratamiento.modalidades.length > 0) {
    blocks.push({
      key: "modalidades",
      content: (
        <>
          <SectionHeading>Modalidades</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {tratamiento.modalidades.map((m) => (
              <div
                key={m.nombre}
                className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-5"
              >
                <h3 className="mb-1.5 font-serif text-base text-[var(--navara-ink)]">
                  {m.nombre}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
                  {m.descripcion}
                </p>
              </div>
            ))}
          </div>
        </>
      ),
    });
  }

  if (specs.length > 0) {
    blocks.push({
      key: "proceso",
      content: (
        <>
          <SectionHeading>Proceso</SectionHeading>
          <ProcessTimeline steps={specs} />
        </>
      ),
    });
  }

  if (tratamiento.contraindicaciones && tratamiento.contraindicaciones.length > 0) {
    blocks.push({
      key: "contraindicaciones",
      wide: true,
      content: (
        <div className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6 sm:p-8">
          <SectionHeading>Contraindicaciones</SectionHeading>
          <p className="mb-4 text-sm leading-relaxed text-[var(--navara-brown)]">
            Por tu seguridad, contanos si alguna de estas situaciones te
            corresponde antes de agendar tu sesión:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {tratamiento.contraindicaciones.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-[var(--navara-brown)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--navara-brown)]/50" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      ),
    });
  }

  if (tratamiento.diferencialNavara) {
    blocks.push({
      key: "porque-navara",
      content: (
        <>
          <SectionHeading>Por qué Navara</SectionHeading>
          <p className="text-base leading-relaxed text-[var(--navara-brown)]">
            {tratamiento.diferencialNavara}
          </p>
        </>
      ),
    });
  }

  if (tratamiento.faq && tratamiento.faq.length > 0) {
    blocks.push({
      key: "faq",
      content: (
        <>
          <SectionHeading>Preguntas frecuentes</SectionHeading>
          <FaqAccordion items={tratamiento.faq} />
        </>
      ),
    });
  }

  return (
    <article>
      {/* Hero — fondo crema */}
      <section className="bg-[var(--navara-cream)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <motion.div initial="hidden" animate="visible" custom={0} variants={heroVariants}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
              {categoriaLabels[tratamiento.categoria]}
            </p>
            <h1 className="mb-5 font-serif text-4xl text-[var(--navara-ink)] sm:text-5xl">
              {tratamiento.nombre}
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[var(--navara-brown)]">
              {tratamiento.descripcionCorta}
            </p>
            <WhatsappButton
              message={tratamiento.whatsappMensaje}
              source={`landing-hero-${tratamiento.slug}`}
            >
              Agendá tu consulta
            </WhatsappButton>
          </motion.div>

          {tratamiento.imagen ? (
            <motion.div
              initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduced ? 0.3 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
            >
              <Image
                src={tratamiento.imagen}
                alt={`${tratamiento.nombre} en Navara`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="relative aspect-[4/5] w-full rounded-sm bg-[var(--navara-beige)]" />
          )}
        </div>
      </section>

      {blocks.map((block, i) => {
        const bg = i % 2 === 0 ? "bg-[var(--navara-beige)]" : "bg-[var(--navara-cream)]";
        return (
          <section key={block.key} className={bg}>
            <Section className={block.wide ? "max-w-3xl" : undefined}>{block.content}</Section>
          </section>
        );
      })}

      {/* CTA final */}
      <Section className="max-w-3xl text-center">
        <div className="rounded-3xl bg-[var(--navara-ink)] px-8 py-12 sm:px-12">
          <h2 className="mb-3 font-serif text-2xl text-[var(--navara-cream)] sm:text-3xl">
            ¿Charlamos sobre tu caso?
          </h2>
          <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-[var(--navara-cream)]/80">
            Consultá tu plan a medida por WhatsApp — sin compromiso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WhatsappButton
              message={tratamiento.whatsappMensaje}
              source={`landing-cta-${tratamiento.slug}`}
            >
              Agendá tu consulta
            </WhatsappButton>
            <Link
              href="/tratamientos"
              className="text-sm font-medium text-[var(--navara-cream)]/70 hover:text-[var(--navara-cream)] hover:underline"
            >
              Ver todos los tratamientos
            </Link>
          </div>
        </div>
      </Section>
    </article>
  );
}
