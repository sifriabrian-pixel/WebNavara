// Datos generales del negocio. Editá estos valores cuando tengas la info confirmada.
// Todo lo que diga [PENDIENTE-CLIENTE] es placeholder: no está confirmado por Navara todavía.

export const business = {
  name: "Navara",
  fullName: "Navara Estética Avanzada y Bienestar Integral",
  tagline: "Belleza que conecta. Bienestar que transforma.",
  whatsappNumber: "595XXXXXXXXX", // [PENDIENTE-CLIENTE] formato +595...
  city: "[PENDIENTE-CLIENTE]", // ej. "Asunción"
  address: "[PENDIENTE-CLIENTE]",
  hours: "[PENDIENTE-CLIENTE]",
  professional: {
    name: "[PENDIENTE-CLIENTE]",
    credential: "[PENDIENTE-CLIENTE]",
  },
  social: {
    instagram: "[PENDIENTE-CLIENTE]",
    facebook: "[PENDIENTE-CLIENTE]",
  },
  metaPixelId: "", // Pegá el Pixel ID acá cuando lo tengas. Vacío = no se carga el pixel.
  ga4Id: "", // Pegá el Measurement ID de GA4 (formato G-XXXXXXX) cuando lo tengas.
};

export type TrustStat = {
  value: number | null; // null = todavía sin confirmar por el cliente (se muestra como placeholder, sin animar)
  suffix?: string; // ej. "+"
  label: string;
};

// Cuando el cliente confirme un número real, cambiá `value` de null al número:
// la stats bar lo anima contando hacia arriba automáticamente al entrar en pantalla.
export const trustStats: TrustStat[] = [
  { value: null, suffix: "+", label: "años de trayectoria" },
  { value: null, suffix: "+", label: "tratamientos realizados" },
  { value: null, label: "certificación profesional" },
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

export const activePromotion = {
  active: true,
  title: "[PENDIENTE-CLIENTE] Promoción del mes",
  description:
    "[PENDIENTE-CLIENTE] Descripción de la promoción vigente, condiciones y vigencia.",
  validUntil: "[PENDIENTE-CLIENTE]",
  whatsappMessage: "Hola, quiero info sobre la promoción del mes",
};

export type Testimonio = {
  nombre: string;
  tratamiento: string;
  texto: string;
  calificacion: number; // 1 a 5
  fecha: string; // "YYYY-MM"
};

// Testimonios reales, cargados con consentimiento de la paciente.
// Para sumar uno nuevo, agregá otro objeto con la misma forma.
export const testimonials: Testimonio[] = [
  {
    nombre: "Sonia García",
    tratamiento: "Rejuvenecimiento facial",
    texto: "Fui por las líneas de expresión y terminé enamorada de todo el proceso. Desde la primera consulta me explicaron exactamente qué iban a hacer y por qué, sin venderme nada de más. Los resultados se ven naturales, nadie nota que me hice algo, solo que 'se me ve bien la piel'. Volví dos veces más para otros tratamientos.",
    calificacion: 5,
    fecha: "2026-06",
  },
];
