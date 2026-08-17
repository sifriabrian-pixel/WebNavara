// Catálogo de tratamientos. Para agregar/editar un tratamiento, sumá o modificá un objeto acá.
// No hace falta tocar ningún componente: las páginas /tratamientos/[slug] y la grilla del home
// se generan automáticamente a partir de este archivo.
//
// Si un tratamiento todavía no tiene foto real, dejá "imagen" sin definir: la card
// muestra automáticamente un bloque de color con el ícono de su categoría en su lugar.

export type Categoria = "intimo" | "rostro" | "cuerpo" | "bienestar";

export type FaqItem = {
  pregunta: string;
  respuesta: string;
};

export type Modalidad = {
  nombre: string;
  descripcion: string;
};

export type Tratamiento = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  descripcionCorta: string; // usado en cards (home, catálogo) y como intro del hero
  descripcion: string; // párrafo corto, debajo del hero
  beneficios: string[];
  precioDesde?: string; // ej. "Desde ₲350.000" — dejar undefined si no hay precio público (regla: ningún tratamiento publica precio)
  whatsappMensaje: string;
  imagen?: string; // ruta en /public, ej. "/brand/servicios-tratamiento.png"

  // Campos de la landing rica (todos opcionales — si faltan, esa sección
  // simplemente no se renderiza, así un tratamiento sin completar no rompe nada).
  queEs?: string; // sección "Qué es"
  modalidades?: Modalidad[]; // sub-variantes dentro del mismo tratamiento (ej. Masajes)
  proceso?: string; // cantidad de sesiones / frecuencia
  duracionSesion?: string;
  recuperacion?: string;
  primerosResultados?: string;
  mantenimiento?: string;
  contraindicaciones?: string[];
  diferencialNavara?: string;
  faq?: FaqItem[];
};

export const tratamientos: Tratamiento[] = [
  {
    slug: "rejuvenecimiento-intimo",
    nombre: "Rejuvenecimiento íntimo",
    categoria: "intimo",
    descripcionCorta:
      "Tratamientos médicos y estéticos diseñados para devolver la salud, elasticidad, hidratación y funcionalidad a la zona genital femenina.",
    descripcion:
      "Tratamientos médicos y estéticos diseñados para devolver la salud, elasticidad, hidratación y funcionalidad a la zona genital femenina.",
    beneficios: [
      "Estimula el colágeno natural",
      "Alivia la sequedad",
      "Disminuye el dolor en las relaciones sexuales",
      "Ayuda con la incontinencia urinaria leve",
      "Aumenta la firmeza de los tejidos",
    ],
    whatsappMensaje: "Hola, quiero info sobre Rejuvenecimiento íntimo",
    imagen: "/brand/categoria-intimo.png",
    queEs:
      "Busca atender molestias físicas causadas por el envejecimiento, molestias de partos o la menopausia, más allá de un objetivo puramente estético.",
    diferencialNavara:
      "Personal médico certificado en medicina estética, con un consultorio destinado a este tratamiento dentro de las normas de salubridad.",
    proceso: "2 a 3 sesiones iniciales, espaciadas cada 4 a 6 semanas.",
    duracionSesion: "15 a 30 minutos.",
    recuperacion:
      "Vuelta inmediata a la rutina; se indica un breve período de abstinencia sexual según indicación médica.",
    primerosResultados:
      "Se notan desde la primera sesión (mayor hidratación y confort); el efecto máximo se logra al completar el protocolo de 3 sesiones.",
    mantenimiento: "Una sesión de refuerzo por año tras completar el ciclo inicial.",
    contraindicaciones: [
      "Infecciones activas",
      "Embarazo",
      "Lesiones sospechosas",
      "Enfermedades de piel que afectan la cicatrización",
    ],
    faq: [
      {
        pregunta: "¿Duele el tratamiento con láser?",
        respuesta:
          "La mayoría de las pacientes solo siente calor leve o una presión menor en la zona.",
      },
      {
        pregunta: "¿Puedo volver a mi rutina el mismo día?",
        respuesta:
          "Sí, incluso al trabajo. Se recomienda evitar ejercicio intenso por un tiempo.",
      },
      {
        pregunta: "¿Hay efectos secundarios?",
        respuesta: "Enrojecimiento o hinchazón leve y transitoria es normal.",
      },
    ],
  },
  {
    slug: "depilacion-laser",
    nombre: "Depilación láser",
    categoria: "cuerpo",
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
    imagen: "/brand/servicio-depilacion-laser.png",
    queEs:
      "Reduce de forma notable y duradera el crecimiento del vello corporal y facial.",
    proceso: "6 a 10 sesiones según zona, tipo de piel y color del vello.",
    duracionSesion:
      "Desde 5 minutos (zonas chicas) hasta 30 a 60 minutos (zonas grandes).",
    recuperacion: "Sin reposo — se retoma la rutina de inmediato.",
    primerosResultados: "Reducción visible a partir de la 3ra o 4ta sesión.",
    mantenimiento: "Cada 4 a 8 semanas en rostro, cada 6 a 10 semanas en cuerpo.",
    contraindicaciones: [
      "Embarazo",
      "Infecciones o heridas activas en la piel",
      "Medicamentos fotosensibles",
      "Piel muy bronceada",
    ],
    diferencialNavara:
      "Equipo de última tecnología, personal técnico con experiencia, estrictas normas de higiene.",
    faq: [
      {
        pregunta: "¿Duele?",
        respuesta: "Se siente como un leve pinchazo o calor.",
      },
      {
        pregunta: "¿El resultado es definitivo?",
        respuesta:
          "Se reduce en un gran porcentaje; a veces requiere sesiones de mantenimiento.",
      },
    ],
  },
  {
    slug: "tratamientos-faciales",
    nombre: "Tratamientos faciales",
    categoria: "rostro",
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
    imagen: "/brand/servicio-tratamientos-faciales.png",
  },
  {
    slug: "peeling",
    nombre: "Peeling",
    categoria: "rostro",
    descripcionCorta:
      "Tratamiento estético y dermatológico que retira células muertas y estimula la renovación controlada de la piel.",
    descripcion:
      "El peeling es un tratamiento de renovación cutánea que ayuda a mejorar la textura, el tono y la luminosidad de la piel. Ideal para sumar a una rutina de cuidado facial constante.",
    beneficios: [
      "Atenúa manchas",
      "Suaviza arrugas finas",
      "Da luminosidad",
      "Afina poros abiertos",
    ],
    whatsappMensaje: "Hola, quiero info sobre Peeling",
    imagen: "/brand/servicio-peeling.png",
    queEs:
      "Renueva las capas superficiales de la piel para lograr un aspecto más suave, luminoso y con menos manchas o arrugas.",
    proceso:
      "Varía según profundidad: superficial, 4 a 8 sesiones (cada 2 a 4 semanas); medio, 1 a 3 sesiones; profundo, 1 sola sesión.",
    duracionSesion: "20 a 40 minutos.",
    recuperacion:
      "Varía según la intensidad del peeling aplicado — se define en tu consulta.",
    primerosResultados:
      "Una vez que la piel completa la descamación y regeneración.",
    mantenimiento:
      "La frecuencia depende de la profundidad del tratamiento y el tipo de piel.",
    contraindicaciones: [
      "Embarazo o lactancia",
      "Uso de isotretinoína oral",
      "Infecciones activas o herpes en el rostro",
      "Heridas abiertas o quemaduras",
    ],
    diferencialNavara:
      "Cada caso es evaluado y realizado por personal médico en dermatología o medicina estética.",
    faq: [
      {
        pregunta: "¿Puedo tomar sol después?",
        respuesta: "No se recomienda exposición solar directa tras el tratamiento.",
      },
      {
        pregunta: "¿Duele o arde durante la sesión?",
        respuesta: "Es normal sentir ardor o calor leve a moderado.",
      },
    ],
  },
  {
    slug: "dermaplaning",
    nombre: "Dermaplaning",
    categoria: "rostro",
    descripcionCorta:
      "Exfoliación física facial que retira con suavidad las células muertas y el vello fino del rostro.",
    descripcion:
      "El dermaplaning exfolia la piel en profundidad y elimina el vello fino, dejando la piel lista para absorber mejor los productos de cuidado.",
    beneficios: [
      "Piel más suave y luminosa",
      "Mejor penetración de cremas y tratamientos posteriores",
    ],
    whatsappMensaje: "Hola, quiero info sobre Dermaplaning",
    queEs:
      "Exfolia la piel en profundidad y elimina el vello fino, dejando la piel lista para absorber mejor los productos de cuidado.",
    proceso: "1 sesión, se repite cada 3 a 4 semanas.",
    duracionSesion: "30 a 45 minutos.",
    recuperacion: "Sin downtime — se retoma la rutina normal de inmediato.",
    primerosResultados: "Brillo y suavidad notorios al instante.",
    contraindicaciones: [
      "Acné activo",
      "Rosácea",
      "Dermatitis",
      "Eccema",
      "Herpes labial",
      "Heridas o quemaduras solares",
      "Uso de anticoagulantes",
      "Problemas de cicatrización",
    ],
    diferencialNavara:
      "Centro de estética avanzada, cosmiatras y esteticistas con licencia.",
    faq: [
      {
        pregunta: "¿Cómo queda la piel después?",
        respuesta: "Textura uniforme al tacto y efecto radiante inmediato.",
      },
      {
        pregunta: "¿El vello vuelve más oscuro o grueso?",
        respuesta: "No, solo se corta el vello fino de la superficie.",
      },
    ],
  },
  {
    slug: "tratamientos-corporales",
    nombre: "Tratamientos corporales",
    categoria: "cuerpo",
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
    imagen: "/brand/servicio-tratamientos-corporales.png",
  },
  {
    slug: "botox",
    nombre: "Botox",
    categoria: "rostro",
    descripcionCorta:
      "Tratamiento con proteína purificada que ayuda a suavizar las arrugas del rostro.",
    descripcion:
      "La toxina botulínica ayuda a suavizar líneas de expresión en zonas como frente, entrecejo y contorno de ojos, con un resultado natural que respeta el movimiento del rostro. Cada aplicación se planifica en una consulta previa.",
    beneficios: [
      "Relaja temporalmente los músculos tratados",
      "Suaviza y previene arrugas",
      "Sin cirugía, resultado rápido",
    ],
    whatsappMensaje: "Hola, quiero info sobre Botox",
    imagen: "/brand/servicio-botox.png",
    queEs:
      "Suaviza arrugas ya formadas y previene nuevas líneas de expresión en frente, entrecejo y patas de gallo.",
    proceso: "Una sola sesión de aplicación.",
    duracionSesion: "15 a 30 minutos.",
    recuperacion: "Sin baja médica, reincorporación inmediata a la rutina.",
    primerosResultados:
      "Iniciales entre 3 y 5 días, efecto total a los 14 días. Dura de 3 a 6 meses.",
    mantenimiento: "2 a 3 veces al año (cada 4 a 6 meses).",
    contraindicaciones: [
      "Alergia a la toxina",
      "Embarazo o lactancia",
      "Enfermedades neuromusculares",
      "Infección activa en la zona a tratar",
    ],
    diferencialNavara:
      "Personal médico certificado en medicina estética, consultorio dentro de normas de salubridad.",
    faq: [
      {
        pregunta: "¿Duele el pinchazo?",
        respuesta:
          "Se usan agujas muy finas, la molestia es mínima y breve.",
      },
      {
        pregunta: "¿Se va a notar?",
        respuesta:
          "No se nota un \"arreglo\" — solo un aspecto más descansado.",
      },
      {
        pregunta: "¿Qué pasa si no vuelvo a aplicarme?",
        respuesta:
          "Las arrugas vuelven a su estado natural, sin empeorar.",
      },
    ],
  },
  {
    slug: "acido-hialuronico",
    nombre: "Ácido hialurónico",
    categoria: "rostro",
    descripcionCorta:
      "Microinyecciones estéticas que hidratan en profundidad, rellenan arrugas y devuelven volumen al rostro.",
    descripcion:
      "El ácido hialurónico se usa para recuperar volumen, definir contornos e hidratar la piel en profundidad, siempre buscando un resultado armónico con tus rasgos.",
    beneficios: [
      "Hidratación profunda",
      "Relleno de arrugas y líneas de expresión",
      "Volumen en labios o pómulos",
      "Elasticidad y firmeza",
    ],
    whatsappMensaje: "Hola, quiero info sobre Ácido hialurónico",
    imagen: "/brand/servicio-acido-hialuronico.png",
    queEs:
      "Hidrata la piel en profundidad, rellena arrugas, restaura volumen perdido y define contornos, aportando elasticidad y un aspecto más joven.",
    proceso: "Una sesión principal al año.",
    duracionSesion: "30 a 45 minutos.",
    recuperacion: "Casi inmediata; inflamación leve o sensibilidad hasta 1 a 3 días.",
    primerosResultados: "Inmediatos.",
    mantenimiento: "El efecto dura entre 9 y 12 meses.",
    contraindicaciones: [
      "Embarazo o lactancia",
      "Infecciones cutáneas activas en la zona",
      "Alergia severa a sus componentes",
      "Enfermedades autoinmunes graves",
      "Problemas de coagulación",
    ],
    diferencialNavara:
      "Personal médico certificado en medicina estética, consultorio dentro de normas de salubridad.",
    faq: [
      {
        pregunta: "¿El cambio es inmediato?",
        respuesta:
          "El relleno es inmediato; el resultado final se aprecia al bajar la inflamación.",
      },
      {
        pregunta: "¿Cuánto dura?",
        respuesta: "Entre 9 y 12 meses.",
      },
      {
        pregunta: "¿Duele la inyección?",
        respuesta: "Molestia leve, bien tolerada por la mayoría.",
      },
    ],
  },
  {
    slug: "ipl",
    nombre: "IPL",
    categoria: "rostro",
    descripcionCorta:
      "Procedimiento no invasivo que utiliza destellos de luz de alta intensidad para mejorar la piel.",
    descripcion:
      "El IPL (luz pulsada intensa) ayuda a mejorar manchas, rojeces y signos de fotoenvejecimiento, mejorando de forma progresiva la uniformidad y luminosidad de la piel.",
    beneficios: [
      "Unifica el tono",
      "Mejora la textura",
      "Rejuvenecimiento visible sin dañar la piel ni requerir recuperación",
    ],
    whatsappMensaje: "Hola, quiero info sobre IPL",
    imagen: "/brand/servicio-ipl.png",
    queEs:
      "Mejora el color, la textura y la calidad general de la piel; ayuda con manchas solares, rojeces, venas dilatadas, acné y estimula colágeno.",
    proceso: "3 a 5 sesiones, cada 3 a 4 semanas, según el objetivo.",
    duracionSesion: "30 a 45 minutos.",
    recuperacion: "Mínima o casi nula.",
    primerosResultados:
      "Se notan entre 7 y 10 días; resultado completo tras 3 a 5 semanas o al finalizar todas las sesiones.",
    mantenimiento: "El efecto dura entre 6 y 12 meses.",
    contraindicaciones: [
      "Piel muy oscura o bronceada",
      "Embarazo o lactancia",
      "Medicamentos fotosensibles",
      "Infecciones o heridas activas",
      "Antecedentes de cáncer de piel",
      "Epilepsia fotosensible",
      "Trastornos de cicatrización",
    ],
    diferencialNavara:
      "Equipo de última tecnología, personal técnico calificado, estrictas normas de higiene.",
    faq: [
      {
        pregunta: "¿Duele?",
        respuesta: "No es doloroso, se siente un pinchazo o calor leve.",
      },
      {
        pregunta: "¿Queda la cara roja o hinchada?",
        respuesta:
          "Enrojecimiento leve que desaparece en horas o pocos días.",
      },
      {
        pregunta: "¿Puedo maquillarme después?",
        respuesta: "Se recomienda evitar maquillaje las primeras 24 horas.",
      },
    ],
  },
  {
    slug: "masajes-relajantes-descontracturantes",
    nombre: "Masajes corporales",
    categoria: "bienestar",
    descripcionCorta:
      "Distintas técnicas de masaje para el bienestar físico y mental — relajante, descontracturante, reductor y drenaje linfático.",
    descripcion:
      "Nuestros masajes están pensados para liberar tensión muscular y sumar un momento de descanso real dentro de tu rutina de bienestar.",
    beneficios: [
      "Reduce estrés y ansiedad",
      "Alivia dolor y tensión muscular",
      "Mejora la circulación",
      "Favorece el descanso",
      "Estimula el sistema inmunitario",
    ],
    whatsappMensaje: "Hola, quiero info sobre Masajes corporales",
    imagen: "/brand/servicio-masajes.png",
    queEs:
      "Una herramienta para cuidar la salud física y mental: calma el dolor, relaja músculos tensos, reduce el estrés y mejora la circulación.",
    modalidades: [
      { nombre: "Relajante", descripcion: "Para bajar el estrés." },
      { nombre: "Descontracturante", descripcion: "Para aliviar nudos musculares." },
      {
        nombre: "Reductor",
        descripcion: "Ayuda a moldear la figura y reducir volumen localizado.",
      },
      {
        nombre: "Drenaje linfático",
        descripcion: "Ayuda a eliminar líquidos retenidos.",
      },
    ],
    proceso: "Cantidad de sesiones según objetivo.",
    duracionSesion: "40 a 60 minutos.",
    recuperacion: "No aplica.",
    primerosResultados: "Inmediatos, desde la primera sesión.",
    mantenimiento:
      "Depende del tipo — el relajante, por ejemplo, dura entre 48 y 72hs; se puede repetir de 1 a 3 veces por semana.",
    contraindicaciones: [
      "Fiebre",
      "Infecciones activas en la piel",
      "Trombosis o coágulos",
      "Heridas abiertas",
      "Quemaduras",
      "Fracturas recientes",
      "Problemas graves de sangrado",
    ],
    diferencialNavara:
      "Centro de Estética Avanzada, esteticistas especializados y certificados.",
    faq: [
      {
        pregunta: "¿Voy a estar expuesta durante la sesión?",
        respuesta:
          "No, se usan sábanas o toallas para cubrir el resto del cuerpo en todo momento.",
      },
      {
        pregunta: "¿Qué pasa si la presión es muy fuerte o muy suave?",
        respuesta:
          "Se ajusta según el objetivo: algunas técnicas requieren más presión para aliviar tensión profunda, otras son suaves para relajar.",
      },
    ],
  },
  {
    slug: "pilates",
    nombre: "Pilates",
    categoria: "bienestar",
    descripcionCorta:
      "Sistema de ejercicio de bajo impacto que prioriza la calidad del movimiento y la respiración consciente.",
    descripcion:
      "Nuestras clases de pilates están pensadas como parte del enfoque de bienestar integral de Navara: fortalecimiento, postura y conexión cuerpo-mente, en un espacio cálido y cercano.",
    beneficios: [
      "Mejora postura y flexibilidad",
      "Alivia dolores de espalda",
      "Mejora la respiración",
      "Reduce la ansiedad",
    ],
    whatsappMensaje: "Hola, quiero info sobre las clases de Pilates",
    imagen: "/brand/servicio-pilates.png",
    queEs:
      "Fortalece el abdomen y la espalda, mejora la postura corporal, aumenta la flexibilidad y ayuda a aliviar el dolor de espalda.",
    proceso:
      "Resultados progresivos con la práctica sostenida — cambios en cómo te movés desde las primeras clases, cambios físicos visibles con la constancia.",
    duracionSesion: "45 a 50 minutos.",
    recuperacion: "No aplica (actividad física regular).",
    primerosResultados: "A partir de 10 sesiones.",
    contraindicaciones: [
      "Lesiones agudas",
      "Fracturas recientes",
      "Hernias discales graves en fase dolorosa",
      "Embarazos de riesgo",
      "Cirugías recientes sin alta médica",
    ],
    diferencialNavara:
      "Profesores altamente capacitados, Pilates Transformer en camilla deslizante, equipos de primera calidad.",
    faq: [
      {
        pregunta: "¿Qué días hay clases?",
        respuesta: "Lunes, miércoles y viernes.",
      },
      {
        pregunta: "¿Hay clases a la mañana?",
        respuesta: "Sí, hay horarios de mañana y de tarde.",
      },
      {
        pregunta: "¿Puedo ir con mi pareja?",
        respuesta: "Sí, las clases son mixtas.",
      },
    ],
  },
];

export function getTratamientoBySlug(slug: string) {
  return tratamientos.find((t) => t.slug === slug);
}
