// Datos generales del negocio. Editá estos valores cuando tengas la info confirmada.
// Todo lo que diga [PENDIENTE-CLIENTE] es placeholder: no está confirmado por Navara todavía.

export const business = {
  name: "Navara",
  fullName: "Navara Estética Avanzada y Bienestar Integral",
  tagline: "Belleza que conecta. Bienestar que transforma.",
  whatsappNumber: "595983734292",
  city: "Fernando de la Mora",
  address: "Calle India 1342 casi Waldino Lovera",
  mapsQuery: "Calle India 1342 casi Waldino Lovera, Fernando de la Mora, Paraguay",
  hours: "Lunes a viernes de 8 a 20hs, sábados de 8 a 13hs",
  social: {
    instagram: "https://www.instagram.com/navaraclinic",
    facebook: "https://www.facebook.com/profile.php?id=61587256786468",
  },
  metaPixelId: "", // Pegá el Pixel ID acá cuando lo tengas. Vacío = no se carga el pixel.
  ga4Id: "", // Pegá el Measurement ID de GA4 (formato G-XXXXXXX) cuando lo tengas.
};

export type TeamMember = {
  nombre: string;
  rol: string;
  descripcion: string;
  fotoUrl?: string; // ruta en /public, ej. "/brand/equipo-alma-duarte.jpg". Sin foto real todavía: dejar undefined.
};

export const team: TeamMember[] = [
  {
    nombre: "Dra. Alma Duarte",
    rol: "Médica cirujana",
    descripcion:
      "Medicina estética: rostro, capilar y corporal. Miembro de @asomestetica.",
    fotoUrl: "/brand/equipo-alma-duarte.jpg",
  },
  {
    nombre: "Karen López",
    rol: "Técnico Superior en Estética Integral — Cosmiatra y Esteticista",
    descripcion:
      "Tratamientos faciales y corporales: acné, manchas y antiage. Masajes reductores, relajantes, descontracturantes, reflexología podal, entre otros.",
    fotoUrl: "/brand/equipo-karen-lopez.jpg",
  },
  {
    nombre: "Sonia García",
    rol: "Cosmetóloga, Cosmiatra y Esteticista",
    fotoUrl: "/brand/equipo-sonia-garcia.jpg",
    descripcion:
      "Entrenadora deportiva e instructora de pilates, estudiante de yoga. Miembro de El Arte de Vivir.",
  },
];

// 3 features fijos (sin datos numéricos verificables) — formato ícono + texto.
export const trustFeatures = [
  "+8 tratamientos diferentes",
  "Equipo certificado",
  "Ambiente cómodo y profesional",
];

export const pillars = [
  {
    title: "Estética avanzada",
    description:
      "Tratamientos con tecnología y técnica precisa, pensados para resultados naturales.",
  },
  {
    title: "Resultados naturales",
    description:
      "Buscamos realzar tu belleza real, no transformarla en algo que no sos.",
  },
  {
    title: "Bienestar integral",
    description:
      "La estética y el bienestar del cuerpo van juntos: por eso sumamos pilates a la experiencia Navara.",
  },
];

export const faqs = [
  {
    question: "¿Los tratamientos duelen?",
    answer:
      "La mayoría de nuestros tratamientos son mínimamente invasivos y con muy baja o nula molestia. En tu consulta te explicamos qué vas a sentir en el tratamiento puntual que te interesa.",
  },
  {
    question: "¿Cuánto tiempo de recuperación necesito?",
    answer:
      "Depende del tratamiento. Varios de nuestros servicios no requieren tiempo de reposo y podés volver a tu rutina el mismo día. Te lo confirmamos en la consulta según tu caso.",
  },
  {
    question: "¿Los resultados se ven naturales?",
    answer:
      "Sí, trabajamos siempre buscando realzar tus rasgos y tu piel de forma natural, sin resultados artificiales o exagerados. Los resultados pueden variar según cada paciente.",
  },
  {
    question: "Es mi primera vez, ¿qué hago?",
    answer:
      "Perfecto, la mayoría de nuestras consultas empiezan así. Escribinos por WhatsApp contándonos qué te gustaría mejorar y te asesoramos sin compromiso sobre el mejor plan para vos.",
  },
];

// Slugs de los tratamientos que se muestran en "Los más elegidos" (home).
// Deben matchear "slug" de content/tratamientos.ts. Orden = orden de aparición.
export const destacados = [
  "tratamientos-faciales",
  "botox",
  "acido-hialuronico",
  "depilacion-laser",
];

export type Promotion = {
  slug: string;
  title: string;
  description: string;
  precio?: string;
  items?: string[];
  validUntil?: string; // dejar sin definir si no hay fecha de corte confirmada
  whatsappMessage: string;
};

// La primera promo de la lista es la que se destaca en el banner del home.
export const promotions: Promotion[] = [
  {
    slug: "ritual-navara",
    title: "Ritual Navara",
    description: "Disfrutá de un día solo para vos.",
    precio: "₲200.000",
    items: [
      "Una clase de pilates",
      "Una limpieza facial",
      "Un café de especialidad",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre el Ritual Navara",
  },
  {
    slug: "plan-intimo-premium",
    title: "Plan Íntimo Premium",
    description:
      "Rejuvenecimiento vaginal — 3 sesiones. Salud y bienestar físico, vida sexual y emocional.",
    precio: "₲4.500.000",
    items: [
      "Reduce la sequedad y el dolor en las relaciones íntimas",
      "Alivia la incontinencia urinaria leve",
      "Aumenta la lubricación natural y el placer en la pareja",
      "Mayor seguridad, comodidad y confianza en el día a día",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre el Plan Íntimo Premium",
  },
  {
    slug: "pilates-hombres",
    title: "Pilates para hombres",
    description: "8 clases semanales — animate a cuidarte.",
    precio: "₲300.000",
    items: [
      "Menos estrés y más concentración",
      "Abdomen fuerte y mayor resistencia",
      "Más flexibilidad, movilidad y rendimiento deportivo",
      "Mejora tu bienestar y tu vida en pareja",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre Pilates para hombres",
  },
  {
    slug: "adios-manchas",
    title: "Adiós a las manchas",
    description: "Tratamiento IPL — luz pulsada intensa, 8 sesiones.",
    precio: "₲1.200.000",
    items: [
      "Borra manchas oscuras por el sol y la edad",
      "Unifica el tono de la piel y reduce rojeces",
      "Estimula el colágeno para dar firmeza y suavidad",
      "Recuperación rápida, volvés a tu rutina de inmediato",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre la promo Adiós a las manchas",
  },
  {
    slug: "pack-tirze-360",
    title: "Pack Tirze 360",
    description:
      "5 sesiones — tratamientos corporales para tensar la piel, estimular colágeno y mejorar el drenaje linfático (zona a elegir).",
    precio: "₲600.000",
    items: ["Radiofrecuencia", "Ondas rusas para tonificar", "Drenaje linfático"],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre el Pack Tirze 360",
  },
  {
    slug: "pack-belleza-total",
    title: "Pack Belleza Total",
    description: "60 minutos para resaltar la belleza natural de tu rostro.",
    precio: "₲250.000",
    items: ["Limpieza de cutis profunda", "Shock de nutrición facial", "Dermaplaning"],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre el Pack Belleza Total",
  },
  {
    slug: "programa-reductivo",
    title: "Programa reductivo",
    description: "8 sesiones — moldeá tu figura (zona abdomen).",
    precio: "₲800.000",
    items: [
      "Masaje reductor y modelador",
      "Lipoláser rompe grasa",
      "Drenaje linfático",
      "Ondas rusas para tonificar",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre el Programa reductivo",
  },
  {
    slug: "piel-nueva-co2",
    title: "Piel Nueva CO2",
    description: "3 sesiones — rejuvenecé tu piel (previa evaluación).",
    precio: "₲2.500.000",
    items: [
      "Manchas causadas por el sol o la edad",
      "Arrugas y líneas de expresión",
      "Cicatrices de acné o quirúrgicas",
      "Poros dilatados",
      "Más elasticidad y firmeza",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre Piel Nueva CO2",
  },
  {
    slug: "labios-lifting",
    title: "Labios & Lifting",
    description: "Relleno de labios y microlifting (previa evaluación).",
    precio: "₲2.500.000",
    items: [
      "Aporta volumen y definición a los labios",
      "Mejora la armonía facial",
      "Apariencia más fresca",
    ],
    validUntil: "Hasta el 30 de septiembre",
    whatsappMessage: "Hola, quiero info sobre Labios & Lifting",
  },
];

export type Testimonio = {
  nombre: string;
  tratamiento?: string;
  texto: string;
  calificacion: number; // 1 a 5
  fecha?: string; // "YYYY-MM"
};

// Testimonios reales (reseñas públicas de Google). Sin foto ni fecha por
// pedido del cliente — solo nombre, calificación y comentario.
// Importante: no cargar acá testimonios de personas que trabajan en Navara
// (ver "team" arriba) presentados como pacientes — es publicidad engañosa.
export const testimonials: Testimonio[] = [
  {
    nombre: "Ana Cardozo",
    calificacion: 5,
    texto: "Excelente atención! Recomiendo 100%",
  },
  {
    nombre: "Giselle Rivas",
    calificacion: 5,
    texto:
      "La atención bien personalizada, en horario programado y estuvieron predispuestos a brindarme toda la información que solicité acerca del tratamiento que me realicé.",
  },
  {
    nombre: "Sirley Ortiz",
    calificacion: 5,
    texto: "Muy buen servicio",
  },
];
