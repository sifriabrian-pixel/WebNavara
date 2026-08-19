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

export const activePromotion = {
  active: true,
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
};

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
