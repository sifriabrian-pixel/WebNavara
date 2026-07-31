"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpVariants } from "@/lib/motion";
import { business, trustStats } from "@/content/site";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Hero() {
  const reduced = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50]);
  const variants = fadeUpVariants(reduced);
  const tratamientosStat = trustStats.find((s) => s.label === "tratamientos realizados");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--navara-cream)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <motion.div
            custom={0}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-brown)]"
          >
            <span className="h-px w-5 bg-[var(--navara-mustard)]" />
            Estética avanzada y bienestar integral
          </motion.div>

          <motion.h1
            custom={1}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-6 font-serif text-4xl leading-[1.12] tracking-tight text-[var(--navara-ink)] sm:text-5xl"
          >
            Tu bienestar
            <br />
            es tu{" "}
            <em className="text-[var(--navara-brown)] italic">
              nueva prioridad
            </em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-9 max-w-md text-base leading-relaxed text-[var(--navara-brown)]"
          >
            Tratamientos personalizados para realzar tu belleza natural y
            potenciar tu bienestar integral, en un espacio pensado para vos.
          </motion.p>

          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-9 flex flex-wrap gap-4"
          >
            <WhatsappButton
              message="Hola, quiero agendar una consulta"
              source="hero"
            >
              Agendá tu consulta
            </WhatsappButton>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navara-ink)]/20 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--navara-ink)] transition-colors hover:bg-[var(--navara-beige)]"
            >
              Ver tratamientos
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 text-sm text-[var(--navara-brown)]"
          >
            {tratamientosStat?.value ? (
              <span>
                <AnimatedCounter
                  value={tratamientosStat.value}
                  suffix={tratamientosStat.suffix}
                />{" "}
                pacientes atendidas
              </span>
            ) : (
              <span>Atención personalizada, sin apuros</span>
            )}
            <span className="h-4 w-px bg-[var(--navara-ink)]/20" />
            <span>{business.city}, Paraguay</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-2 -inset-y-4 rounded-sm border border-[var(--navara-tan)] sm:-inset-x-4 sm:translate-x-4" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[var(--navara-beige)]">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ scale: reduced ? 1 : 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduced ? 0 : 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/brand/hero-portrait.png"
                alt="Paciente con piel radiante y saludable, resultado de tratamientos Navara"
                fill
                priority
                className="object-cover object-[50%_15%]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.3 : 0.7, delay: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 left-4 flex max-w-[240px] items-center gap-3.5 rounded-md bg-[var(--navara-cream)] px-5 py-4 shadow-xl sm:-left-8"
          >
            <span className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[var(--navara-mustard)] to-[var(--navara-brown)]" />
            <span>
              <span className="block text-sm font-semibold text-[var(--navara-ink)]">
                Resultados naturales
              </span>
              <span className="block text-xs text-[var(--navara-brown)]">
                Desde la primera sesión
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
