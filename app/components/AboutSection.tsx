import  { FiArrowRight, FiAward, FiTool, FiGlobe, FiInfo } from 'react-icons/fi';

export default function AboutSection() {
  const featureCards = [
    {
      icon: FiAward,
      title: "Quality Parameters",
      subtitle: "Stringent quality control measures ensuring the highest standards in medical device manufacturing."
    },
    {
      icon: FiTool,
      title: "Contract MFG.",
      subtitle: "Comprehensive contract manufacturing services tailored to meet specific client requirements."
    },
    {
      icon: FiGlobe,
      title: "Export Unit",
      subtitle: "Global distribution network serving healthcare providers across international markets."
    },
    {
      icon: FiInfo,
      title: "About Company",
      subtitle: "Leading manufacturer with decades of experience in surgical disposables and medical devices."
    }
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)'}}>
                  <card.icon className="w-8 h-8" style={{color: '#D0252C'}} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4" style={{color: '#1A1A1A'}}>
                {card.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {card.subtitle}
              </p>
              
              {/* Circular Button */}
              <button className="w-12 h-12 rounded-full flex items-center justify-center mx-auto hover:opacity-90 transition-opacity" style={{backgroundColor: '#1A1A1A'}}>
                <FiArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
