import Image from "next/image";

export function FullBleedImage() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden sm:h-[420px] md:h-[500px]">
      <Image
        src="/brand/hero-portrait.png"
        alt="Momento de cuidado y bienestar en Navara"
        fill
        className="object-cover object-[50%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navara-ink)]/35 via-transparent to-transparent" />
    </section>
  );
}
