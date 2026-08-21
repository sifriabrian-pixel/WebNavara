import type { Metadata } from "next";
import { promotions } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones activas del mes en Navara.",
};

export default function PromocionesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        Promociones
      </p>
      <h1 className="mb-10 font-serif text-4xl text-[var(--navara-ink)]">
        Promociones activas
      </h1>

      {promotions.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <div
              key={promo.slug}
              className="flex flex-col rounded-3xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-7 sm:p-8"
            >
              <h2 className="mb-2 font-serif text-xl text-[var(--navara-ink)] sm:text-2xl">
                {promo.title}
              </h2>
              <p className="mb-1 text-sm leading-relaxed text-[var(--navara-brown)]">
                {promo.description}
              </p>
              {promo.precio && (
                <p className="mb-3 font-serif text-2xl text-[var(--navara-terracotta)]">
                  {promo.precio}
                </p>
              )}
              {promo.items && promo.items.length > 0 && (
                <ul className="mb-4 space-y-1.5 text-sm text-[var(--navara-brown)]">
                  {promo.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--navara-terracotta)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {promo.validUntil && (
                <p className="mb-6 text-xs text-[var(--navara-brown)]/70">
                  Vigencia: {promo.validUntil}
                </p>
              )}
              <div className="mt-auto pt-2">
                <WhatsappButton
                  message={promo.whatsappMessage}
                  source={`pagina-promociones-${promo.slug}`}
                >
                  Quiero esta promo
                </WhatsappButton>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[var(--navara-brown)]">
          Por el momento no hay promociones activas. Escribinos por WhatsApp
          para conocer nuestros tratamientos y precios.
        </p>
      )}

      <p className="mt-10 text-xs text-[var(--navara-brown)]/70">
        Para editar estas promociones, actualizá el array{" "}
        <code className="rounded bg-[var(--navara-cream)] px-1.5 py-0.5">
          promotions
        </code>{" "}
        en{" "}
        <code className="rounded bg-[var(--navara-cream)] px-1.5 py-0.5">
          content/site.ts
        </code>
        .
      </p>
    </section>
  );
}
