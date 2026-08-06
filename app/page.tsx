import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
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
      <ServicesGrid />
      <PromoBanner />
      <WhyNavara />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
