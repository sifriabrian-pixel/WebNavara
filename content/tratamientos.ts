// Catálogo de tratamientos. Para agregar/editar un tratamiento, sumá o modificá un objeto acá.
// No hace falta tocar ningún componente: las páginas /tratamientos/[slug] y la grilla del home
// se generan automáticamente a partir de este archivo.
//
// Si un tratamiento todavía no tiene foto real, dejá "imagen" sin definir: la card
// muestra automáticamente un bloque de color con el ícono de su categoría en su lugar.

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
    slug: "depilacion-laser",
    nombre: "Depilación láser",
    categoria: "estetica",
    descripcionCorta:
      "Reducción progresiva del vello no deseado con tecnología láser.",
    descripcion:
      "La depilación láser reduce el vello de forma progresiva sesión a sesión, adaptándose a cada tipo de piel. Sesiones rápidas y sin tiempo de recuperación, pensadas para sumar comodidad a tu rutina.",
    beneficios: [
      "Resultados progresivos sesión a sesión",
      "Adaptado a cada tipo de piel",
      "Sin tiempo de recuperación",
    ],
    whatsappMensaje: "Hola, quiero info sobre Depilación láser",
  },
  {
    slug: "tratamientos-faciales",
    nombre: "Tratamientos faciales",
    categoria: "estetica",
    descripcionCorta:
      "Cuidado facial personalizado para mejorar la textura, luminosidad y salud de tu piel.",
    descripcion:
      "Combinamos distintas técnicas de estética facial según el objetivo de cada piel: limpieza profunda, hidratación, luminosidad y firmeza. En tu consulta armamos el plan que mejor se adapte a vos.",
    beneficios: [
      "Plan personalizado según tu piel",
      "Enfoque en salud y luminosidad",
      "Resultados naturales, no artificiales",
    ],
    whatsappMensaje: "Hola, quiero info sobre Tratamientos faciales",
  },
  {
    slug: "tratamientos-corporales",
    nombre: "Tratamientos corporales",
    categoria: "estetica",
    descripcionCorta:
      "Tratamientos enfocados en firmeza, textura y bienestar corporal.",
    descripcion:
      "Nuestros tratamientos corporales buscan mejorar la firmeza y textura de la piel del cuerpo, siempre con un enfoque de bienestar integral y resultados que respeten tu proceso natural.",
    beneficios: [
      "Enfoque en firmeza y textura",
      "Planes según tu objetivo",
      "Parte de un enfoque de bienestar integral",
    ],
    whatsappMensaje: "Hola, quiero info sobre Tratamientos corporales",
  },
  {
    slug: "botox",
    nombre: "Botox",
    categoria: "estetica",
    descripcionCorta:
      "Tratamiento para suavizar líneas de expresión con resultado natural.",
    descripcion:
      "La toxina botulínica ayuda a suavizar líneas de expresión en zonas como frente, entrecejo y contorno de ojos, con un resultado natural que respeta el movimiento del rostro. Cada aplicación se planifica en una consulta previa.",
    beneficios: [
      "Suaviza líneas de expresión",
      "Resultado natural, sin perder movimiento",
      "Aplicación planificada en consulta previa",
    ],
    whatsappMensaje: "Hola, quiero info sobre Botox",
  },
  {
    slug: "acido-hialuronico",
    nombre: "Ácido hialurónico",
    categoria: "estetica",
    descripcionCorta:
      "Relleno dérmico para recuperar volumen e hidratación de forma natural.",
    descripcion:
      "El ácido hialurónico se usa para recuperar volumen, definir contornos e hidratar la piel en profundidad, siempre buscando un resultado armónico con tus rasgos.",
    beneficios: [
      "Recupera volumen e hidratación",
      "Resultado armónico con tus rasgos",
      "Técnica personalizada según la zona",
    ],
    whatsappMensaje: "Hola, quiero info sobre Ácido hialurónico",
  },
  {
    slug: "ipl",
    nombre: "IPL",
    categoria: "estetica",
    descripcionCorta:
      "Luz pulsada intensa para manchas, rojeces y fotoenvejecimiento.",
    descripcion:
      "El IPL (luz pulsada intensa) ayuda a mejorar manchas, rojeces y signos de fotoenvejecimiento, mejorando de forma progresiva la uniformidad y luminosidad de la piel.",
    beneficios: [
      "Mejora manchas y rojeces",
      "Resultados progresivos",
      "Piel de aspecto más uniforme",
    ],
    whatsappMensaje: "Hola, quiero info sobre IPL",
  },
  {
    slug: "masajes-relajantes-descontracturantes",
    nombre: "Masajes relajantes y descontracturantes",
    categoria: "bienestar",
    descripcionCorta:
      "Masajes para liberar tensión muscular y sumar un momento de descanso real.",
    descripcion:
      "Nuestros masajes relajantes y descontracturantes están pensados para liberar tensión muscular y sumar un momento de descanso real dentro de tu rutina de bienestar.",
    beneficios: [
      "Libera tensión muscular",
      "Momento de descanso y desconexión",
      "Complemento ideal a tu rutina de bienestar",
    ],
    whatsappMensaje:
      "Hola, quiero info sobre Masajes relajantes y descontracturantes",
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
    whatsappMensaje: "Hola, quiero info sobre las clases de Pilates",
  },
];

export function getTratamientoBySlug(slug: string) {
  return tratamientos.find((t) => t.slug === slug);
}
