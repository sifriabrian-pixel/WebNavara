import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServiciosIntro } from "@/components/ServiciosIntro";
import { CategoriasEditorial } from "@/components/CategoriasEditorial";
import { DestacadosGrid } from "@/components/DestacadosGrid";
import { NecesidadesDiscovery } from "@/components/NecesidadesDiscovery";
import { PromoBanner } from "@/components/PromoBanner";
import { WhyNavara } from "@/components/WhyNavara";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <section id="servicios" className="py-16 sm:py-24">
        <ServiciosIntro />
        <div className="mt-14 sm:mt-20">
          <CategoriasEditorial />
        </div>
        <div className="mt-20 sm:mt-28">
          <DestacadosGrid />
        </div>
        <div className="mt-20 sm:mt-28">
          <NecesidadesDiscovery />
        </div>
      </section>
      <PromoBanner />
      <WhyNavara />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
