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
        <ModernHero />

        <div className="pb-20">
          <SectionWrapper delay={0.1}>
            <CompanyIntroSection />
          </SectionWrapper>

          <SectionWrapper>
            <HighlightsMUI />
          </SectionWrapper>

          {/* <SectionWrapper>
            <ScrollingServices />
          </SectionWrapper> */}

          <SectionWrapper>
            <Products />
          </SectionWrapper>

          <SectionWrapper>
            <MedicalSections />
          </SectionWrapper>

          <SectionWrapper>
            <ProcessSection />
          </SectionWrapper>
{/* 
          <SectionWrapper>
            <QualitySection />
          </SectionWrapper> */}

          <SectionWrapper>
            <PartnerMUI />
          </SectionWrapper>

          <SectionWrapper>
            <Features />
          </SectionWrapper>

          <SectionWrapper>
            <Testimonials />
          </SectionWrapper>

          <SectionWrapper>
            <CTASection />
          </SectionWrapper>

          <SectionWrapper>
            <ProductListing />
          </SectionWrapper>

          <SectionWrapper>
            <HeroAbout />
          </SectionWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
}
