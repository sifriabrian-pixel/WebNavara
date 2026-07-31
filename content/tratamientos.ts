// Catálogo de tratamientos. Para agregar/editar un tratamiento, sumá o modificá un objeto acá.
// No hace falta tocar ningún componente: las páginas /tratamientos/[slug] y la grilla del home
// se generan automáticamente a partir de este archivo.

export type Tratamiento = {
  slug: string;
  nombre: string;
  categoria: "estetica" | "bienestar";
  descripcionCorta: string;
  descripcion: string;
  beneficios: string[];
  precioDesde?: string; // ej. "Desde ₲350.000" — dejar undefined si no hay precio público
  whatsappMensaje: string;
  imagen?: string; // ruta en /public, ej. "/brand/servicios-tratamiento.png"
};

export const tratamientos: Tratamiento[] = [
  {
    slug: "peeling",
    nombre: "Peeling",
    categoria: "estetica",
    descripcionCorta:
      "Renovación de la piel para una textura más uniforme y luminosa.",
    descripcion:
      "El peeling es un tratamiento de renovación cutánea que ayuda a mejorar la textura, el tono y la luminosidad de la piel. Es ideal para quienes buscan un rejuvenecimiento facial no invasivo y un cuidado de piel constante.",
    beneficios: [
      "Piel de aspecto más uniforme",
      "Ayuda a disimular marcas superficiales",
      "Rutina de mantenimiento facial",
    ],
    precioDesde: undefined,
    whatsappMensaje: "Hola, quiero info sobre el tratamiento de Peeling",
    imagen: "/brand/servicios-tratamiento.png",
  },
  {
    slug: "dermaplaning",
    nombre: "Dermaplaning",
    categoria: "estetica",
    descripcionCorta:
      "Exfoliación mecánica suave que deja la piel lista para absorber mejor tus productos.",
    descripcion:
      "El dermaplaning es una técnica de exfoliación física que retira células muertas y vello facial fino, dejando la piel más suave y luminosa. Además mejora la absorción de los productos de skincare que uses después.",
    beneficios: [
      "Piel visiblemente más suave",
      "Mejora la absorción de cremas y sérums",
      "Sin tiempo de recuperación",
    ],
    precioDesde: undefined,
    whatsappMensaje: "Hola, quiero info sobre Dermaplaning",
    imagen: "/brand/servicios-tratamiento.png",
  },
  {
    slug: "extraccion-de-lunares",
    nombre: "Extracción de lunares",
    categoria: "estetica",
    descripcionCorta:
      "Extracción de lunares con criterio estético y dermatológico.",
    descripcion:
      "Realizamos extracción de lunares con un abordaje cuidadoso, evaluando cada caso de forma individual. Antes de cualquier procedimiento, se realiza una consulta para definir el mejor plan según tu piel.",
    beneficios: [
      "Evaluación previa personalizada",
      "Procedimiento cuidadoso y preciso",
      "Seguimiento post-tratamiento",
    ],
    precioDesde: undefined,
    whatsappMensaje: "Hola, quiero info sobre extracción de lunares",
  },
  {
    slug: "rejuvenecimiento-facial",
    nombre: "Rejuvenecimiento facial",
    categoria: "estetica",
    descripcionCorta:
      "Tratamientos faciales enfocados en firmeza, luminosidad y cuidado de la piel.",
    descripcion:
      "Combinamos distintas técnicas de estética avanzada para mejorar la firmeza y luminosidad de tu piel, siempre buscando un resultado natural que respete tus rasgos.",
    beneficios: [
      "Enfoque personalizado según tu piel",
      "Resultados naturales, no artificiales",
      "Planes de mantenimiento disponibles",
    ],
    precioDesde: undefined,
    whatsappMensaje: "Hola, quiero info sobre rejuvenecimiento facial",
    imagen: "/brand/servicios-tratamiento.png",
  },
  {
    slug: "pilates",
    nombre: "Pilates",
    categoria: "bienestar",
    descripcionCorta:
      "Clases de pilates para complementar tu bienestar integral, cuerpo y mente.",
    descripcion:
      "Nuestras clases de pilates están pensadas como parte del enfoque de bienestar integral de Navara: fortalecimiento, postura y conexión cuerpo-mente, en un espacio cálido y cercano.",
    beneficios: [
      "Mejora de postura y fuerza",
      "Clases en grupos reducidos",
      "Complemento ideal a los tratamientos estéticos",
    ],
    precioDesde: undefined,
    whatsappMensaje: "Hola, quiero info sobre las clases de Pilates",
  },
];

export function getTratamientoBySlug(slug: string) {
  return tratamientos.find((t) => t.slug === slug);
}
