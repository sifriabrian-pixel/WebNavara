import Link from "next/link";
import { activePromotion } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

export function PromoBanner() {
  if (!activePromotion.active) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-[var(--navara-ink)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-mustard)]">
            Promoción activa
          </p>
          <h3 className="mb-2 font-serif text-2xl text-[var(--navara-cream)]">
            {activePromotion.title}
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-[var(--navara-cream)]/80">
            {activePromotion.description}
          </p>
          {activePromotion.validUntil && (
            <p className="mt-2 text-xs text-[var(--navara-cream)]/50">
              Vigencia: {activePromotion.validUntil}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <WhatsappButton
            message={activePromotion.whatsappMessage}
            source="promo-banner"
          >
            Quiero esta promo
          </WhatsappButton>
          <Link
            href="/promociones"
            className="text-xs font-medium text-[var(--navara-cream)]/70 hover:text-[var(--navara-cream)] hover:underline"
          >
            Ver todas las promociones
          </Link>
        </div>
      </div>
    </section>
  );
}
