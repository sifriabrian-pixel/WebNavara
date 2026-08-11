import { business } from "@/content/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

// Dispara el evento de Meta Pixel / GA4 al hacer clic en cualquier botón de
// WhatsApp del sitio, con "source" identificando qué sección lo originó.
export function trackWhatsappClick(source: string) {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", { content_name: source });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "WhatsAppClick", { section: source });
  }
}

// Formatea el número para mostrarlo como texto, ej. "+595 983 734 292".
export function formatWhatsappNumber() {
  const n = business.whatsappNumber;
  return `+${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`;
}
