import type { Metadata } from "next";
import { activePromotion } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones activas del mes en Navara.",
};

export default function PromocionesPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        Promociones
      </p>
      <h1 className="mb-10 font-serif text-4xl text-[var(--navara-ink)]">
        Promociones activas
      </h1>

      {activePromotion.active ? (
        <div className="rounded-3xl bg-[var(--navara-mustard)]/25 p-8 sm:p-10">
          <h2 className="mb-3 font-serif text-2xl text-[var(--navara-ink)]">
            {activePromotion.title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-[var(--navara-brown)]">
            {activePromotion.description}
          </p>
          {activePromotion.validUntil && (
            <p className="mb-6 text-xs text-[var(--navara-brown)]/70">
              Vigencia: {activePromotion.validUntil}
            </p>
          )}
          <WhatsappButton
            message={activePromotion.whatsappMessage}
            source="pagina-promociones"
          >
            Quiero esta promo
          </WhatsappButton>
        </div>
      ) : (
        <p className="text-sm text-[var(--navara-brown)]">
          Por el momento no hay promociones activas. Escribinos por WhatsApp
          para conocer nuestros tratamientos y precios.
        </p>
      )}

      <p className="mt-10 text-xs text-[var(--navara-brown)]/70">
        Para editar esta promoción, actualizá el objeto{" "}
        <code className="rounded bg-[var(--navara-beige)] px-1.5 py-0.5">
          activePromotion
        </code>{" "}
        en{" "}
        <code className="rounded bg-[var(--navara-beige)] px-1.5 py-0.5">
          content/site.ts
        </code>
        .
      </p>
    </section>
  );
}
