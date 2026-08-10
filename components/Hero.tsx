"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpVariants } from "@/lib/motion";
import { business } from "@/content/site";

// Rotan de fondo con crossfade + zoom lento continuo (efecto Ken Burns).
// Todas son fotos reales ya aprobadas para el sitio, sin repetir las que
// ya se usan en otras secciones (servicios, "Por qué Navara").
const HERO_IMAGES = [
  {
    src: "/brand/hero-principal.png",
    alt: "Paciente con piel radiante y saludable, resultado de tratamientos Navara",
  },
  {
    src: "/brand/servicios-tratamiento.png",
    alt: "Especialista de Navara realizando un tratamiento estético",
  },
  {
    src: "/brand/hero-pilates.jpg",
    alt: "Paciente practicando pilates como parte del bienestar integral en Navara",
  },
];

const SLIDE_DURATION_MS = 7000;

export function Hero() {
  const reduced = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50]);
  const variants = fadeUpVariants(reduced);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setImageIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--navara-cream)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--navara-terracotta)]/20 blur-3xl animate-[navara-float-1_18s_ease-in-out_infinite] motion-reduce:animate-none sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[var(--navara-sage)]/20 blur-3xl animate-[navara-float-2_20s_ease-in-out_infinite] motion-reduce:animate-none sm:h-80 sm:w-80"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-14 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
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
            <span>Atención personalizada, sin apuros</span>
            <span className="h-4 w-px bg-[var(--navara-ink)]/20" />
            <span>{business.city}, Paraguay</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-2 -inset-y-4 rounded-sm border border-[var(--navara-tan)] sm:-inset-x-4 sm:translate-x-4" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[var(--navara-beige)]">
            <motion.div style={{ y: parallaxY }} className="absolute inset-0">
              <AnimatePresence mode="sync">
                <motion.div
                  key={HERO_IMAGES[imageIndex].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: reduced ? 1 : 1.08 }}
                    transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_IMAGES[imageIndex].src}
                      alt={HERO_IMAGES[imageIndex].alt}
                      fill
                      priority={imageIndex === 0}
                      className="object-cover object-[50%_15%]"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
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
