import type { Metadata } from "next";
import { business, pillars } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conocé a ${business.name}, ${business.fullName}.`,
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        Nosotros
      </p>
      <h1 className="mb-6 font-serif text-4xl text-[var(--navara-ink)]">
        {business.fullName}
      </h1>
      <p className="mb-10 text-base leading-relaxed text-[var(--navara-brown)]">
        {business.tagline}
      </p>

      <div className="mb-10 rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-6">
        <h2 className="mb-2 font-serif text-lg text-[var(--navara-ink)]">
          Profesional a cargo
        </h2>
        <p className="text-sm text-[var(--navara-brown)]">
          {business.professional.name} — {business.professional.credential}
        </p>
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3 className="mb-2 font-serif text-lg text-[var(--navara-ink)]">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <WhatsappButton
        message="Hola, quiero conocer más sobre Navara"
        source="nosotros"
      >
        Escribinos por WhatsApp
      </WhatsappButton>
    </section>
  );
}
