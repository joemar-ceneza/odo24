"use client";

import { logoSlider } from "@/lib/iod-data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function LogoSlider() {
  return (
    <section className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 6 },
          1200: { slidesPerView: 8 },
          1500: { slidesPerView: 10 },
          2300: { slidesPerView: 18 },
        }}
        className="">
        {logoSlider.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center p-4 h-20">
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={60}
                className="object-contain transition-all duration-300 min-w-[120px]"
                style={{ height: "auto", maxWidth: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
