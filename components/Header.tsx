"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsappButton } from "@/components/WhatsappButton";

const navLinks = [
  { href: "/#servicios", label: "Tratamientos" },
  { href: "/promociones", label: "Promociones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduced = !!useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--navara-cream)]/90 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-[var(--navara-tan)]/40 shadow-sm"
          : "border-[var(--navara-tan)]/30 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, scale: reduced ? 1 : 0.8 }}
            animate={{
              opacity: 1,
              scale: scrolled && !reduced ? 0.9 : 1,
            }}
            transition={{ duration: reduced ? 0.2 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-9 w-9 items-center justify-center transition-transform duration-200 group-hover:rotate-[-6deg]"
          >
            <Image
              src="/brand/submark-header.png"
              alt="Navara"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </motion.span>
          <span className="font-serif text-lg tracking-wide text-[var(--navara-ink)]">
            Navara
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = !link.href.startsWith("/#") && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group/nav relative text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-[var(--navara-terracotta)]"
                    : "text-[var(--navara-brown)] hover:text-[var(--navara-terracotta)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[var(--navara-terracotta)] transition-transform duration-[250ms] ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/nav:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsappButton
            message="Hola, quiero agendar una consulta"
            source="header"
            className="!px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
          >
            Agendá tu consulta
          </WhatsappButton>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-[var(--navara-ink)] md:hidden"
          >
            {mobileOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--navara-tan)]/30 md:hidden"
          >
            <div className="flex flex-col px-5 py-4 sm:px-8">
              {navLinks.map((link) => {
                const isActive = !link.href.startsWith("/#") && pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`border-b border-[var(--navara-tan)]/20 py-3 text-sm font-medium tracking-wide last:border-b-0 ${
                      isActive
                        ? "text-[var(--navara-terracotta)]"
                        : "text-[var(--navara-brown)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
