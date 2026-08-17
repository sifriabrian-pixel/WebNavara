"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Tratamiento } from "@/content/tratamientos";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Section, SectionHeading, FaqAccordion } from "@/components/TreatmentLandingLayout";
import { BenefitCards } from "@/components/treatment/BenefitCards";
import { StatStrip } from "@/components/treatment/StatStrip";
import { ProcessTimeline } from "@/components/treatment/ProcessTimeline";
import { fadeUpVariants } from "@/lib/motion";

const HERO_IMAGE = "/brand/categoria-intimo.png";

// Mismos datos que ya existen en content/tratamientos.ts, condensados para
// lectura rápida — no se inventa información nueva.
const STAT_STRIP = [
  { value: "2 a 3", label: "Sesiones iniciales" },
  { value: "15-30 min", label: "Por sesión" },
  { value: "Desde la 1ª", label: "Sesión con resultados" },
];

type Block =
  | { type: "section"; key: string; content: ReactNode; wide?: boolean }
  | { type: "photo" };

export function IntimoTreatmentLanding({ tratamiento }: { tratamiento: Tratamiento }) {
  const reduced = !!useReducedMotion();
  const heroVariants = fadeUpVariants(reduced);

  const steps = [
    { label: "Proceso", value: tratamiento.proceso },
    { label: "Duración de la sesión", value: tratamiento.duracionSesion },
    { label: "Recuperación", value: tratamiento.recuperacion },
    { label: "Primeros resultados", value: tratamiento.primerosResultados },
    { label: "Mantenimiento", value: tratamiento.mantenimiento },
  ].filter((s): s is { label: string; value: string } => !!s.value);

  // Bloques entre el Hero y el CTA final. Se arman como lista para que el
  // fondo crema/beige alterne siempre bien, sin importar qué secciones
  // opcionales terminen renderizando (ej. si falta "Por qué Navara").
  const blocks: Block[] = [];

  if (tratamiento.queEs) {
    blocks.push({
      type: "section",
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

  blocks.push(
    {
      type: "section",
      key: "beneficios",
      content: (
        <>
          <SectionHeading>Beneficios</SectionHeading>
          <BenefitCards beneficios={tratamiento.beneficios} />
        </>
      ),
    },
    { type: "section", key: "stats", content: <StatStrip stats={STAT_STRIP} /> },
  );

  if (steps.length > 0) {
    blocks.push({
      type: "section",
      key: "proceso",
      content: (
        <>
          <SectionHeading>Proceso</SectionHeading>
          <ProcessTimeline steps={steps} />
        </>
      ),
    });
  }

  blocks.push({ type: "photo" });

  if (tratamiento.contraindicaciones && tratamiento.contraindicaciones.length > 0) {
    blocks.push({
      type: "section",
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
      type: "section",
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
      type: "section",
      key: "faq",
      content: (
        <>
          <SectionHeading>Preguntas frecuentes</SectionHeading>
          <FaqAccordion items={tratamiento.faq} />
        </>
      ),
    });
  }

  let sectionIndex = 0;

  return (
    <article>
      {/* Hero — fondo crema */}
      <section className="bg-[var(--navara-cream)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <motion.div initial="hidden" animate="visible" custom={0} variants={heroVariants}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
              Íntimo
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

          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0.3 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
          >
            <Image
              src={HERO_IMAGE}
              alt={`${tratamiento.nombre} en Navara`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[15%_35%]"
            />
          </motion.div>
        </div>
      </section>

      {blocks.map((block) => {
        if (block.type === "photo") {
          return (
            <section
              key="photo"
              className="relative h-[320px] w-full overflow-hidden sm:h-[420px]"
            >
              <Image
                src={HERO_IMAGE}
                alt={`Espacio privado de Navara para ${tratamiento.nombre}`}
                fill
                sizes="100vw"
                className="object-cover object-[70%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navara-ink)]/25 via-transparent to-transparent" />
            </section>
          );
        }

        const bg =
          sectionIndex % 2 === 0 ? "bg-[var(--navara-beige)]" : "bg-[var(--navara-cream)]";
        sectionIndex += 1;

        return (
          <section key={block.key} className={bg}>
            <Section className={block.wide ? "max-w-3xl" : undefined}>{block.content}</Section>
          </section>
        );
      })}

      {/* CTA final — sin cambios */}
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
