'use client';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiTarget } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    bgImage: '/hero-bg-1.jpg',
    title: 'Advanced Medical\nSolutions for\nHealthcare Excellence',
    description: 'Leading the industry with innovative surgical instruments and medical devices designed for optimal patient outcomes and precision healthcare delivery.',
    missionTitle: 'Our Mission',
    missionText: 'To provide world-class medical equipment that enhances surgical precision and improves patient care globally.'
  },
  {
    id: 2,
    bgImage: '/hero-bg-2.jpg',
    title: 'Surgical Innovation\nCutting-Edge Technology\nfor Modern Healthcare',
    description: 'Delivering state-of-the-art surgical solutions with uncompromising quality and reliability for medical professionals worldwide.',
    missionTitle: 'Our Vision',
    missionText: 'To be the global leader in medical device innovation, setting new standards in healthcare technology.'
  },
  {
    id: 3,
    bgImage: '/hero-bg-3.jpg',
    title: 'Quality Assurance\nExcellence in Every\nMedical Device',
    description: 'Committed to the highest standards of quality control and precision manufacturing for critical healthcare applications.',
    missionTitle: 'Our Values',
    missionText: 'Integrity, innovation, and excellence drive our commitment to advancing healthcare through superior medical devices.'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Text Section */}
              <div className="text-white">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2">
                  <span>Our Products</span>
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Mission Card */}
              <div className="bg-white rounded-lg shadow-xl p-8 text-center relative">
                {/* Green bar at top */}
                <div className="w-15 h-1 bg-green-600 mx-auto mb-6"></div>
                
                {/* Icon */}
                <div className="mb-6">
                  <FiTarget className="w-12 h-12 text-green-600 mx-auto" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {slide.missionTitle}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {slide.missionText}
                </p>
                
                {/* Green round button */}
                <button className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto transition-colors">
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}