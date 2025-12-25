import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiAward, FiUsers, FiGlobe, FiTrendingUp } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
     {
        icon: FiAward,
      title: "Quality Excellence",
      description: "Committed to delivering the highest quality medical products with rigorous testing and certification processes."
    },
    {
      icon: FiUsers,
      title: "Customer Focus",
      description: "Building lasting relationships with healthcare providers through exceptional service and reliable support."
    },
    {
      icon: FiGlobe,
      title: "Global Reach",
      description: "Serving healthcare institutions worldwide with comprehensive distribution networks and local partnerships."
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description: "Continuously advancing medical technology to improve patient outcomes and healthcare efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About Tnx SERGICAL
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading manufacturer and exporter of premium medical disposables, serving healthcare providers globally with innovative solutions and unwavering quality standards.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize healthcare through quality medical disposables, Tnx Surgical has grown from a small manufacturing unit to a globally recognized brand trusted by healthcare professionals worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple mission: to provide healthcare providers with reliable, safe, and innovative medical products that enhance patient care and improve clinical outcomes.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve over 40 countries with our comprehensive range of medical disposables, maintaining the highest quality standards and regulatory compliance across all markets.
              </p>
            </div>
            <div className="rounded-2xl lg:h-96 mt-8 flex items-center justify-center">
              <span className="text-gray-500">
                 <img src="/images/company.png" alt="About Us" className="w-full h-full object-cover rounded-2xl" />   
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every product we create, ensuring we deliver excellence in healthcare solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-700 mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
