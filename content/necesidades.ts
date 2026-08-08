// "Textura de la piel" y "Firmeza" no venían con tratamientos asignados en el
// brief original — este es el mapeo propuesto, a confirmar con el cliente.
export type Necesidad = {
  slug: string;
  label: string;
  tratamientoSlugs: string[];
};

export const necesidades: Necesidad[] = [
  {
    slug: "manchas",
    label: "Manchas",
    tratamientoSlugs: ["ipl", "peeling", "tratamientos-faciales"],
  },
  {
    slug: "lineas-de-expresion",
    label: "Líneas de expresión",
    tratamientoSlugs: ["botox", "acido-hialuronico"],
  },
  {
    slug: "luminosidad",
    label: "Luminosidad",
    tratamientoSlugs: ["tratamientos-faciales", "peeling", "ipl"],
  },
  {
    slug: "textura-de-la-piel",
    label: "Textura de la piel",
    tratamientoSlugs: ["peeling", "tratamientos-faciales"],
  },
  {
    slug: "firmeza",
    label: "Firmeza",
    tratamientoSlugs: ["tratamientos-corporales", "acido-hialuronico"],
  },
  {
    slug: "vello-no-deseado",
    label: "Vello no deseado",
    tratamientoSlugs: ["depilacion-laser"],
  },
  {
    slug: "tension-muscular",
    label: "Tensión muscular",
    tratamientoSlugs: ["masajes-relajantes-descontracturantes", "pilates"],
  },
];
