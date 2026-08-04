import type { Metadata } from "next";
import { business, team } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";
import { TeamCard } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conocé a ${business.name}, ${business.fullName}.`,
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        Nosotros
      </p>
      <h1 className="mb-6 font-serif text-4xl text-[var(--navara-ink)]">
        {business.fullName}
      </h1>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-[var(--navara-brown)]">
        {business.tagline}
      </p>

      <div className="mb-10">
        <h2 className="mb-6 font-serif text-lg text-[var(--navara-ink)]">
          Nuestro equipo
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.nombre} member={member} />
          ))}
        </div>
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
