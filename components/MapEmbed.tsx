import { business } from "@/content/site";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = "" }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;

  return (
    <iframe
      src={src}
      title={`Ubicación de ${business.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full w-full border-0 ${className}`}
    />
  );
}
