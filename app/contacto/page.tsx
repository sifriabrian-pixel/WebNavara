import type { Metadata } from "next";
import { business } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactá a ${business.name} por WhatsApp o visitanos en ${business.city}.`,
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        Contacto
      </p>
      <h1 className="mb-10 font-serif text-4xl text-[var(--navara-ink)]">
        Estamos para ayudarte
      </h1>

      <div className="mb-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-6 text-sm text-[var(--navara-brown)]">
          <h2 className="mb-3 font-serif text-lg text-[var(--navara-ink)]">
            Dirección
          </h2>
          <p className="mb-1">{business.address}</p>
          <p>{business.city}</p>
        </div>
        <div className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-6 text-sm text-[var(--navara-brown)]">
          <h2 className="mb-3 font-serif text-lg text-[var(--navara-ink)]">
            Horario
          </h2>
          <p>{business.hours}</p>
        </div>
      </div>

      <div className="mb-10 h-64 w-full overflow-hidden rounded-2xl border border-[var(--navara-tan)]/40">
        <MapEmbed />
      </div>

      <WhatsappButton
        message="Hola, quiero contactarme con Navara"
        source="pagina-contacto"
      >
        Escribinos por WhatsApp
      </WhatsappButton>
    </section>
  );
}
