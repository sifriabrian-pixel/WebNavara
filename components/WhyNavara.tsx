import Image from "next/image";
import { HeartPulse, Leaf, Sparkles } from "lucide-react";
import { pillars } from "@/content/site";

// Un ícono por pilar, en el mismo orden que "pillars" en content/site.ts.
const pillarIcons = [Sparkles, Leaf, HeartPulse];

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

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/brand/valores-glow.png"
              alt="Paciente con piel luminosa, reflejo del cuidado integral de Navara"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Sparkles;
              return (
              <div key={pillar.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--navara-terracotta)]/40">
                  <Icon strokeWidth={1.25} className="h-5 w-5 text-[var(--navara-terracotta)]" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-lg text-[var(--navara-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--navara-brown)]">
                    {pillar.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
