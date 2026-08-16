import type { Categoria } from "@/content/tratamientos";

export type CategoriaInfo = {
  slug: Categoria;
  nombre: string;
  descripcion: string;
  imagen?: string; // ruta en /public. Si no se define, se usa la foto del primer tratamiento de la categoría.
  tratamientoSlugs: string[]; // referencia por slug a content/tratamientos.ts — no duplica data.
  tags?: string[]; // texto sutil debajo de la descripción. Si no se define, se arma solo con los nombres de tratamientoSlugs.
};

export const categorias: CategoriaInfo[] = [
  {
    slug: "intimo",
    nombre: "Rejuvenecimiento Íntimo",
    descripcion:
      "Tratamientos no invasivos orientados a bienestar, firmeza y salud íntima femenina, en un espacio privado y confidencial.",
    imagen: "/brand/categoria-intimo.png",
    tratamientoSlugs: ["rejuvenecimiento-intimo"],
    tags: ["Rejuvenecimiento íntimo", "Consulta confidencial", "Atención personalizada"],
  },
  {
    slug: "rostro",
    nombre: "Rostro",
    descripcion:
      "Tratamientos orientados a textura, luminosidad, firmeza y armonía facial, con resultados naturales.",
    tratamientoSlugs: [
      "tratamientos-faciales",
      "peeling",
      "dermaplaning",
      "ipl",
      "botox",
      "acido-hialuronico",
    ],
  },
  {
    slug: "cuerpo",
    nombre: "Cuerpo",
    descripcion:
      "Tecnología y protocolos personalizados para distintas necesidades corporales.",
    tratamientoSlugs: ["tratamientos-corporales", "depilacion-laser"],
  },
  {
    slug: "bienestar",
    nombre: "Bienestar",
    descripcion:
      "Experiencias para aliviar tensiones, recuperar movilidad y acompañar tu bienestar integral.",
    tratamientoSlugs: ["masajes-relajantes-descontracturantes", "pilates"],
  },
];

export function getCategoriaBySlug(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
