import { business } from "@/content/site";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = "" }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;

  // Tinte cálido vía CSS para que el estilo default de Google Maps (pines rojos,
  // colores saturados) no rompa la paleta crema/terracota del resto del sitio.
  // Migrar a la API de Google Maps JS con un estilo custom (mapstyle.withgoogle.com)
  // daría más control, pero requiere una API key que todavía no está en .env.
  return (
    <iframe
      src={src}
      title={`Ubicación de ${business.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ filter: "grayscale(40%) sepia(10%)" }}
      className={`h-full w-full border-0 ${className}`}
    />
  );
}
