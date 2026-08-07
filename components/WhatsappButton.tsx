"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsappLink } from "@/lib/whatsapp";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type WhatsappButtonProps = {
  message: string;
  source: string; // qué sección/servicio originó el clic, para trackear y para el equipo de WhatsApp
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function WhatsappButton({
  message,
  source,
  children,
  variant = "primary",
  className = "",
}: WhatsappButtonProps) {
  const reduced = !!useReducedMotion();
  const href = buildWhatsappLink(message);

  function handleClick() {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact", { content_name: source });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "WhatsAppClick", { section: source });
    }
  }

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-[var(--navara-terracotta)] text-[var(--navara-cream)] hover:bg-[var(--navara-brown)]"
      : "border border-[var(--navara-ink)]/20 text-[var(--navara-ink)] hover:bg-[var(--navara-beige)]";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-whatsapp-source={source}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
