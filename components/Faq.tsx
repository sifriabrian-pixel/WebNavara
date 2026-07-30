"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/content/site";
import { fadeUpVariants } from "@/lib/motion";

export function Faq() {
  const reduced = !!useReducedMotion();
  const sectionVariants = fadeUpVariants(reduced);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--navara-beige)]">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="divide-y divide-[var(--navara-tan)]/30">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between text-left font-serif text-lg text-[var(--navara-ink)]"
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: reduced ? 0.15 : 0.25 }}
                    className="ml-4 text-[var(--navara-terracotta)]"
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
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
