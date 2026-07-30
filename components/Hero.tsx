"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpVariants } from "@/lib/motion";

export function Hero() {
  const reduced = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50]);
  const variants = fadeUpVariants(reduced);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--navara-cream)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <motion.p
            custom={0}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]"
          >
            Estética avanzada y bienestar integral
          </motion.p>
          <motion.h1
            custom={1}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-6 font-serif text-4xl leading-tight text-[var(--navara-ink)] sm:text-5xl"
          >
            Tu bienestar es tu nueva prioridad
          </motion.h1>
          <motion.p
            custom={2}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-8 max-w-md text-base leading-relaxed text-[var(--navara-brown)]"
          >
            Tratamientos personalizados para realzar tu belleza natural y
            potenciar tu bienestar integral, en un espacio pensado para vos.
          </motion.p>
          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
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
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[var(--navara-beige)]">
          <motion.div
            style={{ y: parallaxY }}
            initial={{ scale: reduced ? 1 : 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduced ? 0 : 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/brand/estilo-feed-referencia.png"
              alt="Navara — estética avanzada y bienestar integral"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
