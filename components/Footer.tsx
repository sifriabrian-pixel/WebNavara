import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

export function Footer() {
  return (
    <footer className="border-t border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
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
          <div className="h-40 w-full overflow-hidden rounded-xl border border-[var(--navara-tan)]/40 bg-[var(--navara-tan)]/10">
            {/* [PENDIENTE-CLIENTE] Reemplazar por iframe de Google Maps con la dirección real */}
            <div className="flex h-full items-center justify-center text-xs text-[var(--navara-brown)]/70">
              Mapa: [PENDIENTE-CLIENTE dirección]
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-base text-[var(--navara-ink)]">
            Escribinos
          </h3>
          <WhatsappButton message="Hola, quiero info sobre Navara" source="footer">
            Chatear por WhatsApp
          </WhatsappButton>
          <div className="flex gap-4 text-sm text-[var(--navara-brown)]">
            <Link href="/" className="hover:text-[var(--navara-terracotta)]">
              Instagram
            </Link>
            <Link href="/" className="hover:text-[var(--navara-terracotta)]">
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--navara-tan)]/30 py-5 text-center text-xs text-[var(--navara-brown)]/70">
        © {new Date().getFullYear()} {business.fullName}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
