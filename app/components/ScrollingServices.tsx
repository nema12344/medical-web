'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Contract MFG.',
    description:
      'Comprehensive contract manufacturing services tailored to meet specific client requirements.'
  },
  {
    id: 2,
    title: 'Export Unit',
    description:
      'Global distribution network serving healthcare providers across international markets.'
  },
  {
    id: 3,
    title: 'About Company',
    description:
      'Leading manufacturer with decades of experience in surgical disposables and medical devices.'
  },
  {
    id: 4,
    title: 'Regulatory Support',
    description:
      'Full assistance with FDA, CE, and ISO documentation for international product registration.'
  },
  {
    id: 5,
    title: 'Custom Logistics',
    description:
      'Specialized cold-chain and secure logistics solutions for sensitive medical equipment.'
  }
];

export default function ServicesPatientStyle() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#2b160f]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-2.png"
          alt="background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#2b160f]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Our Services
        </h2>

        {/* Navigation */}
        <button className="service-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowLeft className="text-black w-5 h-5" />
        </button>

        <button className="service-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowRight className="text-black w-5 h-5" />
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          navigation={{
            prevEl: '.service-prev',
            nextEl: '.service-next'
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-20"
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 ${
                    isActive
                      ? 'scale-100 opacity-100'
                      : 'scale-90 opacity-50'
                  }`}
                >
                  {/* Bubble */}
                  <div className="relative border-2 border-white rounded-[32px] px-8 py-10 text-center min-h-[260px] flex items-center justify-center">

                    {/* Top Quote */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#d97706] rounded-full p-2">
                      <Quote className="w-5 h-5 text-white fill-white" />
                    </div>

                    <p className="text-white text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bubble Tail */}
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 border-r-2 border-b-2 border-white bg-transparent rotate-45"></span>
                  </div>

                  {/* Title */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <Quote className="w-4 h-4 text-[#d97706] fill-[#d97706] rotate-180" />
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                    <Quote className="w-4 h-4 text-[#d97706] fill-[#d97706]" />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #d97706;
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
