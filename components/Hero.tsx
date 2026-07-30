import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/WhatsappButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navara-cream)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
            Estética avanzada y bienestar integral
          </p>
          <h1 className="mb-6 font-serif text-4xl leading-tight text-[var(--navara-ink)] sm:text-5xl">
            Tu bienestar es tu nueva prioridad
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-[var(--navara-brown)]">
            Tratamientos personalizados para realzar tu belleza natural y
            potenciar tu bienestar integral, en un espacio pensado para vos.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsappButton
              message="Hola, quiero agendar una consulta"
              source="hero"
            >
              Agendá tu consulta
            </WhatsappButton>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navara-ink)]/20 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--navara-ink)] transition-colors hover:bg-[var(--navara-beige)]"
            >
              Ver tratamientos
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[var(--navara-beige)]">
          <Image
            src="/brand/estilo-feed-referencia.png"
            alt="Navara — estética avanzada y bienestar integral"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
