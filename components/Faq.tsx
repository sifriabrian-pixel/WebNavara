import { faqs } from "@/content/site";

export function Faq() {
  return (
    <section className="bg-[var(--navara-beige)]">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="divide-y divide-[var(--navara-tan)]/30">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-lg text-[var(--navara-ink)]">
                {faq.question}
                <span className="ml-4 text-[var(--navara-terracotta)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--navara-brown)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
