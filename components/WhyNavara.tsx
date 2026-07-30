import { pillars } from "@/content/site";

export function WhyNavara() {
  return (
    <section className="bg-[var(--navara-beige)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
            Por qué Navara
          </p>
          <h2 className="font-serif text-3xl text-[var(--navara-ink)] sm:text-4xl">
            Cuidamos tu piel, cuidamos tu bienestar
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-[var(--navara-terracotta)]/40" />
              <h3 className="mb-2 font-serif text-lg text-[var(--navara-ink)]">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
