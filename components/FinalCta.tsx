import { WhatsappButton } from "@/components/WhatsappButton";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="rounded-3xl bg-[var(--navara-ink)] px-8 py-14 text-center sm:px-16">
        <h2 className="mb-4 font-serif text-3xl text-[var(--navara-cream)] sm:text-4xl">
          Empecemos a cuidar tu bienestar
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-[var(--navara-cream)]/80">
          Contanos qué te gustaría mejorar y te ayudamos a encontrar el
          tratamiento ideal para vos.
        </p>
        <WhatsappButton
          message="Hola, me gustaría recibir asesoramiento sobre un tratamiento"
          source="cta-final"
        >
          Escribinos por WhatsApp
        </WhatsappButton>
      </div>
    </section>
  );
}
