"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsappLink, trackWhatsappClick } from "@/lib/whatsapp";

export function FloatingWhatsapp() {
  const reduced = !!useReducedMotion();
  const href = buildWhatsappLink("Hola, quiero más información");

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick("floating-button")}
      aria-label="Chatear por WhatsApp"
      initial={{ opacity: 0, scale: reduced ? 1 : 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: reduced ? 0.2 : 0.5,
        delay: reduced ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduced ? undefined : { scale: 1.08 }}
      whileTap={reduced ? undefined : { scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--navara-terracotta)] text-[var(--navara-cream)] shadow-xl sm:bottom-6 sm:right-6"
    >
      <MessageCircle strokeWidth={1.75} className="h-7 w-7" />
    </motion.a>
  );
}
