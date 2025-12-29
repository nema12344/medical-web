'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
    <section className="relative py-28 bg-[#dd4817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-2.png"
          alt="background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0c2534]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-20">
          Patient Review
        </h2>

        {/* Navigation Arrows */}
        <button className="srv-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <button className="srv-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowRight className="w-5 h-5 text-black" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={60}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: '.srv-prev',
            nextEl: '.srv-next'
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="!overflow-visible"
        >
          {services.map((item) => (
            <SwiperSlide key={item.id} className="pt-12 pb-24">
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 ${
                    isActive
                      ? 'scale-110 opacity-100'
                      : 'scale-95 opacity-40'
                  }`}
                >
                  {/* Speech Bubble */}
                  <div className="relative border border-white/80 rounded-[24px] px-8 pt-12 pb-16 min-h-[260px] flex items-center justify-center text-center bg-transparent">

                    {/* Top Quote Chip */}
                    <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[#dd0c05] px-3 py-1 rounded-full z-10">
                      <span className="text-white text-lg font-bold leading-none">
                        “”
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white text-sm leading-relaxed max-w-[85%]">
                      {item.description}
                    </p>

                    {/* Bottom-left Tail (diagonal) */}
                    <div className="absolute -bottom-[14px] left-10 w-6 h-6 bg-[#dd0c05] border-l border-b border-white/80 rotate-45"></div>
                  </div>

                  {/* Title */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-[#dd0c05]">
                    <span className="text-lg leading-none">“</span>
                    <span className="text-white text-sm font-semibold">
                      {item.title}
                    </span>
                    <span className="text-lg leading-none">”</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
