import Link from "next/link";
import { tratamientos } from "@/content/tratamientos";
import { WhatsappButton } from "@/components/WhatsappButton";

export function ServicesGrid() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Tratamientos
        </p>
        <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
          Nuestros servicios
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tratamientos.map((tratamiento) => (
          <div
            key={tratamiento.slug}
            className="flex flex-col rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--navara-sage)]">
              {tratamiento.categoria === "bienestar" ? "Bienestar" : "Estética"}
            </span>
            <h3 className="mb-2 font-serif text-xl text-[var(--navara-ink)]">
              {tratamiento.nombre}
            </h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--navara-brown)]">
              {tratamiento.descripcionCorta}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/tratamientos/${tratamiento.slug}`}
                className="text-sm font-semibold text-[var(--navara-terracotta)] hover:underline"
              >
                Ver más
              </Link>
              <WhatsappButton
                message={tratamiento.whatsappMensaje}
                source={`servicio-${tratamiento.slug}`}
                variant="secondary"
                className="ml-auto !px-4 !py-2 text-xs"
              >
                Consultar
              </WhatsappButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
