"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { activePromotion } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";
import { fadeUpVariants } from "@/lib/motion";

export function PromoBanner() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  if (!activePromotion.active) return null;

  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
        className="flex flex-col items-start gap-6 rounded-3xl bg-[var(--navara-ink)] p-8 sm:flex-row sm:items-center sm:p-10"
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-mustard)]">
            Promoción activa
          </p>
          <h3 className="mb-2 font-serif text-2xl text-[var(--navara-cream)]">
            {activePromotion.title}
          </h3>
          <p className="mb-1 text-sm leading-relaxed text-[var(--navara-cream)]/80">
            {activePromotion.description}
          </p>
          {activePromotion.precio && (
            <p className="mb-3 font-serif text-xl text-[var(--navara-mustard)]">
              {activePromotion.precio}
            </p>
          )}
          {activePromotion.items && activePromotion.items.length > 0 && (
            <ul className="mb-2 space-y-1 text-sm text-[var(--navara-cream)]/80">
              {activePromotion.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--navara-mustard)]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {activePromotion.validUntil && (
            <p className="mt-2 text-xs text-[var(--navara-cream)]/50">
              Vigencia: {activePromotion.validUntil}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2">
          <WhatsappButton
            message={activePromotion.whatsappMessage}
            source="promo-banner"
          >
            Quiero esta promo
          </WhatsappButton>
          <Link
            href="/promociones"
            className="text-xs font-medium text-[var(--navara-cream)]/70 hover:text-[var(--navara-cream)] hover:underline"
          >
            Ver todas las promociones
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
