import Features from "./components/features";
import Products from "./components/Products";
import ProductListing from "./components/ProductListing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import CompanyIntroSection from "./components/CompanyIntroSection";
import QualitySection from "./components/QualitySection";
import ProcessSection from "./components/ProcessSection";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
//   ExportSection from "./components/ExportSection";
import HeroAbout from "./components/HeroAbout";
import MedicalSections from "./components/MedicalSections";
// import HeroCarousel from "./components/HeroCarousel";

export const metadata = {
  title: "Tnx Surgical Surgical",
  description:
    "Leading Manufacturer and Exporter of Premium Medical Disposables",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSlider />
        {/* <HeroCarousel /> */}
        <CompanyIntroSection />
        <MedicalSections />
        <ProcessSection />
        <QualitySection />
        <BenefitsSection />
        <Products />
        <Features />
        {/* <ExportSection /> */}
        <Testimonials />
        <CTASection />
        <ProductListing />
        <HeroAbout />
      </main>
      <Footer />
    </div>
  );
}
