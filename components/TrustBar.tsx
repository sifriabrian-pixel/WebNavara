import { trustBar } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-y border-[var(--navara-tan)]/30 bg-[var(--navara-beige)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-4 text-center text-sm font-medium tracking-wide text-[var(--navara-brown)] sm:px-8">
        {trustBar.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </section>
  );
}
