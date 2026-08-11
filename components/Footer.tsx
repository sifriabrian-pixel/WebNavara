"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { business } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";
import { MapEmbed } from "@/components/MapEmbed";
import { formatWhatsappNumber } from "@/lib/whatsapp";
import { fadeUpVariants } from "@/lib/motion";

export function Footer() {
  const reduced = !!useReducedMotion();
  const variants = fadeUpVariants(reduced);

  return (
    <footer className="border-t border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={variants}
        className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3"
      >
        <div>
          <Image
            src="/brand/logo-principal.png"
            alt="Navara Estética Avanzada y Bienestar Integral"
            width={160}
            height={80}
            className="mb-4 h-auto w-40 object-contain"
          />
          <p className="max-w-xs text-sm leading-relaxed text-[var(--navara-brown)]">
            {business.tagline}
          </p>
        </div>

        <div className="text-sm text-[var(--navara-brown)]">
          <h3 className="mb-3 font-serif text-base text-[var(--navara-ink)]">
            Visitanos
          </h3>
          <p className="mb-1">{business.address}</p>
          <p className="mb-1">{business.city}</p>
          <p className="mb-4">{business.hours}</p>
          <div className="h-40 w-full overflow-hidden rounded-xl border border-[var(--navara-tan)]/40">
            <MapEmbed />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-base text-[var(--navara-ink)]">
            Escribinos
          </h3>
          <WhatsappButton message="Hola, quiero info sobre Navara" source="footer">
            Chatear por WhatsApp
          </WhatsappButton>
          <a
            href={`tel:+${business.whatsappNumber}`}
            className="text-sm text-[var(--navara-brown)] transition-colors hover:text-[var(--navara-terracotta)]"
          >
            {formatWhatsappNumber()}
          </a>
          <div className="flex gap-4 text-[var(--navara-brown)]">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Navara"
              className="transition-colors hover:text-[var(--navara-terracotta)]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Navara"
              className="transition-colors hover:text-[var(--navara-terracotta)]"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-[var(--navara-tan)]/30 py-5 text-center text-xs text-[var(--navara-brown)]/70">
        © {new Date().getFullYear()} {business.fullName}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
