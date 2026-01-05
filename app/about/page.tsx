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

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
              <div className="text-gray-600">Serving healthcare industry</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Countries Served</div>
              <div className="text-gray-600">Global distribution network</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Products Range</div>
              <div className="text-gray-600">Medical disposables catalog</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">10M+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Units Manufactured</div>
              <div className="text-gray-600">Annual production capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide healthcare professionals with innovative, reliable, and safe medical disposables that enhance patient care and improve clinical outcomes. We are committed to maintaining the highest quality standards while making healthcare solutions accessible globally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted manufacturer of medical disposables, recognized for our commitment to quality, innovation, and customer satisfaction. We envision a future where our products contribute to better healthcare outcomes worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by international certifications and regulatory approvals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">ISO 13485</div>
              <div className="text-gray-600">Quality Management</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">CE Mark</div>
              <div className="text-gray-600">European Conformity</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">FDA</div>
              <div className="text-gray-600">US Approval</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">GMP</div>
              <div className="text-gray-600">Good Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving our mission to deliver excellence in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
              <div className="text-red-600 font-semibold mb-4">Chief Executive Officer</div>
              <p className="text-gray-600">25+ years in medical device industry with expertise in quality management and regulatory affairs.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
              <div className="text-red-600 font-semibold mb-4">Chief Technology Officer</div>
              <p className="text-gray-600">Leading innovation in medical device design and manufacturing processes for over 20 years.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
              <div className="text-red-600 font-semibold mb-4">Global Sales Director</div>
              <p className="text-gray-600">Expanding our global reach with strategic partnerships and market development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
