// components/HeroSection.js
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
export default function HeroSection() {
    return (
        <section className="bg-[#1A1A1A] text-white">
            <div className="grid">
                {/* Texto */}


                {/* Carrossel */}

                <Swiper className="h-full w-full">
                    <SwiperSlide>
                        <Image src="/assets/carrosel1.svg" alt="slide1" width={200} height={50} className="h-full w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/carrosel2.svg" alt="slide1" width={200} height={50} className="h-full w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/assets/carrosel3.svg" alt="slide1" width={200} height={50} className="h-full w-full object-cover" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
}
