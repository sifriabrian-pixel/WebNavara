import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tratamientos, getTratamientoBySlug } from "@/content/tratamientos";
import { business } from "@/content/site";
import { WhatsappButton } from "@/components/WhatsappButton";

const categoriaLabels = {
  intimo: "Íntimo",
  rostro: "Rostro",
  cuerpo: "Cuerpo",
  bienestar: "Bienestar",
} as const;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tratamientos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tratamiento = getTratamientoBySlug(slug);
  if (!tratamiento) return {};

  const ciudad = business.city !== "[PENDIENTE-CLIENTE]" ? ` en ${business.city}` : "";

  return {
    title: `${tratamiento.nombre}${ciudad}`,
    description: tratamiento.descripcionCorta,
    openGraph: {
      title: `${tratamiento.nombre}${ciudad} | ${business.name}`,
      description: tratamiento.descripcionCorta,
    },
  };
}

export default async function TratamientoPage({ params }: Props) {
  const { slug } = await params;
  const tratamiento = getTratamientoBySlug(slug);

  if (!tratamiento) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navara-sage)]">
        {categoriaLabels[tratamiento.categoria]}
      </p>
      <h1 className="mb-6 font-serif text-4xl text-[var(--navara-ink)]">
        {tratamiento.nombre}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-[var(--navara-brown)]">
        {tratamiento.descripcion}
      </p>

      <div className="mb-10 rounded-2xl border border-[var(--navara-tan)]/30 bg-[var(--navara-beige)] p-6">
        <h2 className="mb-4 font-serif text-lg text-[var(--navara-ink)]">
          Beneficios
        </h2>
        <ul className="space-y-2 text-sm text-[var(--navara-brown)]">
          {tratamiento.beneficios.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--navara-terracotta)]" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <p className="mb-8 text-sm font-medium text-[var(--navara-brown)]">
        {tratamiento.precioDesde ?? "Consultá tu plan a medida por WhatsApp"}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <WhatsappButton
          message={tratamiento.whatsappMensaje}
          source={`landing-${tratamiento.slug}`}
        >
          Agendá tu consulta
        </WhatsappButton>
        <Link
          href="/tratamientos"
          className="text-sm font-medium text-[var(--navara-brown)] hover:underline"
        >
          Ver todos los tratamientos
        </Link>
      </div>
    </article>
  );
}
