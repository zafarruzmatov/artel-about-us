import Image from "next/image";
import { PartnersData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const Partners = () => {
    return (
        <section className="container mt-[45px] lg:px-0">
            <Swiper
                navigation={false}
                className="!px-px"
                breakpoints={{
                    320: {
                        slidesPerView: 2.3,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 4.2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 56,
                    },
                }}
            >
                {PartnersData.map(({ id, icon_url }) => (
                    <SwiperSlide
                        className="!h-10 overflow-hidden sm:!h-8"
                        key={id}
                    >
                        <Image
                            fill
                            className="h-full w-full select-none object-contain"
                            src={icon_url}
                            alt="partners logo"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
