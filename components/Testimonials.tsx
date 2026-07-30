import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Testimonios
        </p>
        <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
          Lo que dicen nuestras pacientes
        </h2>
      </div>

      {testimonials.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-cream)] p-6"
            >
              <p className="mb-4 text-sm leading-relaxed text-[var(--navara-brown)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[var(--navara-ink)]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[var(--navara-tan)]/50 bg-[var(--navara-beige)]/40 p-10 text-center">
          <p className="text-sm text-[var(--navara-brown)]">
            [PENDIENTE-CLIENTE] Todavía no hay testimonios cargados. Sumalos en{" "}
            <code className="rounded bg-[var(--navara-beige)] px-1.5 py-0.5">
              content/site.ts
            </code>{" "}
            apenas tengas el consentimiento de las pacientes.
          </p>
        </div>
      )}
    </section>
  );
}
