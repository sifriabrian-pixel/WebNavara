import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categorias } from "@/content/categorias";
import { tratamientos } from "@/content/tratamientos";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Tratamientos",
  description: `Conocé todos los tratamientos de ${business.name}, organizados por rostro, cuerpo y bienestar.`,
};

export default function TratamientosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
          Catálogo completo
        </p>
        <h1 className="mb-4 font-serif text-4xl text-[var(--navara-ink)]">
          Todos los tratamientos
        </h1>
        <p className="text-base leading-relaxed text-[var(--navara-brown)]">
          Organizados por área, para que encuentres más rápido lo que estás
          buscando. Si no sabés por dónde empezar, escribinos y te ayudamos a
          elegir.
        </p>
      </div>

      <div className="space-y-20">
        {categorias.map((categoria) => {
          const items = categoria.tratamientoSlugs
            .map((slug) => tratamientos.find((t) => t.slug === slug))
            .filter((t): t is NonNullable<typeof t> => !!t);

          return (
            <section key={categoria.slug} id={categoria.slug}>
              <div className="mb-8">
                <h2 className="mb-2 font-serif text-2xl text-[var(--navara-ink)] sm:text-3xl">
                  {categoria.nombre}
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--navara-brown)]">
                  {categoria.descripcion}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tratamiento) => (
                  <Link
                    key={tratamiento.slug}
                    href={`/tratamientos/${tratamiento.slug}`}
                    className="group block"
                  >
                    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm bg-[var(--navara-beige)]">
                      {tratamiento.imagen && (
                        <Image
                          src={tratamiento.imagen}
                          alt={`Tratamiento de ${tratamiento.nombre} en Navara`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
                        />
                      )}
                    </div>
                    <h3 className="mb-1 font-serif text-lg text-[var(--navara-ink)]">
                      {tratamiento.nombre}
                    </h3>
                    <p className="mb-2 text-sm leading-relaxed text-[var(--navara-brown)]">
                      {tratamiento.descripcionCorta}
                    </p>
                    <span className="text-sm font-semibold text-[var(--navara-terracotta)]">
                      Conocer el tratamiento →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
