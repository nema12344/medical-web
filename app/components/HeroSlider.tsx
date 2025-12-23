'use client';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiTarget } from 'react-icons/fi';
import Image from 'next/image';
const slides = [
  {
    id: 1,
    bgImage: '/images/hero-bg-1.png',
    title: 'Advanced Medical\nSolutions for\nHealthcare Excellence',
    description: 'Leading the industry with innovative surgical instruments and medical devices designed for optimal patient outcomes and precision healthcare delivery.',
    missionTitle: 'Our Mission',
    missionText: 'To provide world-class medical equipment that enhances surgical precision and improves patient care globally.'
  },
  {
    id: 2,
    bgImage: '/images/hero-bg-2.png',
    title: 'Surgical Innovation\nCutting-Edge Technology\nfor Modern Healthcare',
    description: 'Delivering state-of-the-art surgical solutions with uncompromising quality and reliability for medical professionals worldwide.',
    missionTitle: 'Our Vision',
    missionText: 'To be the global leader in medical device innovation, setting new standards in healthcare technology.'
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
  <div className="relative min-h-screen overflow-hidden">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-7 max-w-xl mx-auto lg:mx-0">
                {slide.description}
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition">
                  <span>Our Products</span>
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-sm text-center">
                {/* Red line */}
                <div className="w-12 h-1 bg-red-600 mx-auto mb-5"></div>

                {/* Icon */}
                <FiTarget className="w-10 h-10 text-red-600 mx-auto mb-4" />

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {slide.missionTitle}
                </h3>

                {/* Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {slide.missionText}
                </p>

                {/* Button */}
                <button className="bg-red-600 hover:bg-red-700 text-white w-11 h-11 rounded-full flex items-center justify-center mx-auto transition">
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    ))}

    {/* ARROWS (DESKTOP ONLY) */}
    <button
      onClick={prevSlide}
      className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur text-white p-3 rounded-full hover:bg-white/30"
    >
      <FiChevronLeft className="w-6 h-6" />
    </button>

    <button
      onClick={nextSlide}
      className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur text-white p-3 rounded-full hover:bg-white/30"
    >
      <FiChevronRight className="w-6 h-6" />
    </button>

    {/* DOTS */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-red-500' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  </div>
);
}