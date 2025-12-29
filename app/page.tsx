import Features from "./components/features";
import Products from "./components/Products";
import ProductListing from "./components/ProductListing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ModernHero from "./components/ModernHero";
import CompanyIntroSection from "./components/CompanyIntroSection";
// import QualitySection from "./components/QualitySection";
import ProcessSection from "./components/ProcessSection";
import PartnerMUI from "./components/PartnerMUI";
import CTASection from "./components/CTASection";
import HeroAbout from "./components/HeroAbout";
import MedicalSections from "./components/MedicalSections";
import SectionWrapper from "./components/SectionWrapper";
import HighlightsMUI from "./components/HighlightsMUI";
// import ScrollingServices from "./components/ScrollingServices";

export const metadata = {
  title: "Tnx Surgical Surgical",
  description:
    "Leading Manufacturer and Exporter of Premium Medical Disposables",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <main className="flex-grow">
        <section id="hero" className="scroll-mt-32">
          <ModernHero />
        </section>

        <div className="pb-20">
          <section id="company" className="scroll-mt-32">
            <SectionWrapper delay={0.1}>
              <CompanyIntroSection />
            </SectionWrapper>
          </section>

          <section id="highlights" className="scroll-mt-32">
            <SectionWrapper>
              <HighlightsMUI />
            </SectionWrapper>
          </section>

          {/* <SectionWrapper>
            <ScrollingServices />
          </SectionWrapper> */}

          <section id="products" className="scroll-mt-32">
            <SectionWrapper>
              <Products />
            </SectionWrapper>
          </section>

          <section id="services" className="scroll-mt-32">
            <SectionWrapper>
              <MedicalSections />
            </SectionWrapper>
          </section>

          <section id="process" className="scroll-mt-32">
            <SectionWrapper>
              <ProcessSection />
            </SectionWrapper>
          </section>
{/* 
          <SectionWrapper>
            <QualitySection />
          </SectionWrapper> */}

          <section id="partners" className="scroll-mt-32">
            <SectionWrapper>
              <PartnerMUI />
            </SectionWrapper>
          </section>

          <section id="features" className="scroll-mt-32">
            <SectionWrapper>
              <Features />
            </SectionWrapper>
          </section>

          <section id="testimonials" className="scroll-mt-32">
            <SectionWrapper>
              <Testimonials />
            </SectionWrapper>
          </section>

          <section id="cta" className="scroll-mt-32">
            <SectionWrapper>
              <CTASection />
            </SectionWrapper>
          </section>

          <section id="catalog" className="scroll-mt-32">
            <SectionWrapper>
              <ProductListing />
            </SectionWrapper>
          </section>

          <section id="about" className="scroll-mt-32">
            <SectionWrapper>
              <HeroAbout />
            </SectionWrapper>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
