import Features from "./components/features";
import Products from "./components/Products";
import ProductListing from "./components/ProductListing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import CompanyIntroSection from "./components/CompanyIntroSection";
import QualitySection from "./components/QualitySection";
// import ProcessSection from "./components/ProcessSection";
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
        {/* Hero Section - Full viewport on all devices */}
        <section id="hero" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
          <HeroSlider />
        </section>

        {/* Main Content Container with responsive spacing */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Company Section */}
          <section id="company" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper delay={0.1}>
              <div className="">
                <CompanyIntroSection />
              </div>
            </SectionWrapper>
          </section>

          {/* Highlights Section */}
          <section id="highlights" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <HighlightsMUI />
              </div>
            </SectionWrapper>
          </section>

          {/* Products Section */}
          <section id="products" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <Products />
              </div>
            </SectionWrapper>
          </section>

          {/* Services Section */}
          <section id="services" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <MedicalSections />
              </div>
            </SectionWrapper>
          </section>

          {/* Quality Section - Full width background */}
          <section className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <QualitySection />
            </SectionWrapper>
          </section>

          {/* Partners Section */}
          <section id="partners" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <PartnerMUI />
              </div>
            </SectionWrapper>
          </section>

          {/* Features Section */}
          <section id="features" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <Features />
              </div>
            </SectionWrapper>
          </section>

          {/* Product Listing Section */}
          <section id="product-listing" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <ProductListing />
              </div>
            </SectionWrapper>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <Testimonials />
              </div>
            </SectionWrapper>
          </section>

          {/* CTA Section - Full width background */}
          <section id="cta" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <CTASection />
            </SectionWrapper>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-32">
            <SectionWrapper>
              <div className="">
                <HeroAbout />
              </div>
            </SectionWrapper>
          </section>
        </div>
      </main>

      {/* Footer - Full width */}
      <Footer />
    </div>
  );
}
