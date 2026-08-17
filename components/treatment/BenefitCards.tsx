"use client";

import { Heart, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpStaggerVariants } from "@/lib/motion";

// Mapeo simple por palabra clave — si ninguna calza, cae a Sparkles.
function iconFor(texto: string) {
  const t = texto.toLowerCase();
  if (t.includes("confidencial") || t.includes("privad")) return ShieldCheck;
  if (t.includes("personalizada") || t.includes("atención")) return UserCheck;
  if (t.includes("bienestar") || t.includes("confort") || t.includes("cuidado")) return Heart;
  return Sparkles;
}

export function BenefitCards({ beneficios }: { beneficios: string[] }) {
  const reduced = !!useReducedMotion();
  const variants = fadeUpStaggerVariants(reduced);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {beneficios.map((b, i) => {
        const Icon = iconFor(b);
        return (
          <motion.div
            key={b}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-start gap-3 rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navara-terracotta)]/10">
              <Icon strokeWidth={1.25} className="h-5 w-5 text-[var(--navara-terracotta)]" />
            </span>
            <p className="pt-2 text-sm leading-relaxed text-[var(--navara-brown)]">{b}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
