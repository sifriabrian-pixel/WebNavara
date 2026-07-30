import { business } from "@/content/site";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
