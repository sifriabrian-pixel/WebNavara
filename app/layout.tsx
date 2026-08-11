import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { TrackingScripts } from "@/components/TrackingScripts";
import { business } from "@/content/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: business.fullName,
    template: `%s | ${business.name}`,
  },
  description: business.tagline,
  openGraph: {
    title: business.fullName,
    description: business.tagline,
    images: ["/brand/logo-principal.png"],
    locale: "es_PY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.fullName,
    description: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressCountry: "PY",
    },
    telephone: business.whatsappNumber,
    openingHours: business.hours,
  };

  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <TrackingScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
