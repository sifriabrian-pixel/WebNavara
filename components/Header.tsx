import Image from "next/image";
import Link from "next/link";
import { WhatsappButton } from "@/components/WhatsappButton";

const navLinks = [
  { href: "/#servicios", label: "Tratamientos" },
  { href: "/promociones", label: "Promociones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--navara-tan)]/30 bg-[var(--navara-cream)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/submark.png"
            alt="Navara"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-serif text-lg tracking-wide text-[var(--navara-ink)]">
            Navara
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[var(--navara-brown)] transition-colors hover:text-[var(--navara-terracotta)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <WhatsappButton
          message="Hola, quiero agendar una consulta"
          source="header"
          className="!px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
        >
          Agendá tu consulta
        </WhatsappButton>
      </div>
    </header>
  );
}
