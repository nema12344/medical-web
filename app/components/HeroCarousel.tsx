"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  return (
    <section className="w-full bg-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="h-[420px] md:h-[520px] lg:h-[600px]"
      >
        {[
          {
            title: "Compassionate Care, Advanced Medical Treatment",
            desc: "Delivering world-class healthcare with cutting-edge technology and compassionate patient-centered care. Trust our expert team for your medical needs.",
            image: "/images/hero-1.jpg",
          },
          {
            title: "Expert Doctors. Trusted Treatment.",
            desc: "Personalized care plans backed by decades of clinical excellence and state-of-the-art medical technology.",
            image: "/images/hero-2.jpg",
          },
        ].map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full flex items-center justify-center bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/40" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-5xl text-center px-6 py-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medicalNavy mb-8 leading-snug">
                  {s.title}
                </h1>
                <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                  {s.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link href="/contact" className="inline-block px-10 py-4 rounded-lg bg-medicalRed text-white font-semibold shadow-redGlow hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                    Book Appointment
                  </Link>
                  <Link href="/contact" className="inline-block px-10 py-4 rounded-lg border-2 border-medicalNavy text-medicalNavy font-semibold bg-transparent hover:bg-medicalNavy/5 transition-all duration-300">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
