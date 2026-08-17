import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tratamientos, getTratamientoBySlug } from "@/content/tratamientos";
import { business } from "@/content/site";
import { TreatmentLandingLayout } from "@/components/TreatmentLandingLayout";
import { IntimoTreatmentLanding } from "@/components/IntimoTreatmentLanding";

// Piloto de rediseño — solo esta página por ahora, ver si se replica al resto.
const PILOT_SLUGS = new Set(["rejuvenecimiento-intimo"]);

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

  if (PILOT_SLUGS.has(tratamiento.slug)) {
    return <IntimoTreatmentLanding tratamiento={tratamiento} />;
  }

  return <TreatmentLandingLayout tratamiento={tratamiento} />;
}
