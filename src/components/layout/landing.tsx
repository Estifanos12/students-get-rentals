import Hero from "@/components/common/hero";
import Requirments from "@/components/common/requirement-card";
import Services from "@/components/common/services";
import Contact from "@/components/common/contact";
import FAQ from "@/components/common/faq";
import CTA from "../common/cta";
import Offer from "../common/offer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Requirments />
      <Services />
      <CTA />
      <Offer />
      <Contact />
      <FAQ />
    </>
  );
}
