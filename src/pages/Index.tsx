import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AudienceSection from "@/components/landing/AudienceSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProgramsSection from "@/components/landing/ProgramsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import OfferSection from "@/components/landing/OfferSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PDFSection from "@/components/landing/PDFSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AudienceSection />
      <ProblemSection />
      <ProgramsSection />
      <section id="beneficios">
        <BenefitsSection />
      </section>
      <OfferSection />
      <TestimonialsSection />
      <section id="autoridad">
        <AuthoritySection />
      </section>
      <GuaranteeSection />
      <PDFSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
