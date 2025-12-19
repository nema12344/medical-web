import Features from "./components/features";
import Products from "./components/Products";
import ProductListing from "./components/ProductListing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import CompanyIntroSection from "./components/CompanyIntroSection";
import ExportSection from "./components/ExportSection";
import HeroAbout from "./components/HeroAbout";

export const metadata = {
  title: "DispoPowell — Fresh Purple & Pink Homepage",
  description:
    "Modern, reimagined homepage built with Next.js and TailwindCSS",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSlider />
        <CompanyIntroSection />
        <Features />
        <Products />
        <ExportSection />
        <Testimonials />
          <ProductListing />
          <HeroAbout />
      </main>
      <Footer />
    </div>
  );
}
