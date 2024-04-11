import Image from "next/image";
import { Icons } from "@/components";
import { Partners } from "../Partners";

import "./style.css";

export const InfoSection = () => {
    return (
        <>
            <section className="info-section relative overflow-hidden py-[90px]">
                <div className="info-pattern container relative">
                    <h1 className="w-full max-w-[900px] text-4xl font-bold leading-[130%] text-black-text lg:text-center lg:text-2xl">
                        ARTEL - молодой и амбициозный бренд бытовой техники
                        провозглашенный лидером по надежности и эффективности
                        среди конечных пользователей.
                    </h1>
                    <p className="mt-11 w-full max-w-[1000px] text-xl leading-[150%] text-black-text lg:mt-7 lg:text-center lg:text-base">
                        Ключевая особенность бренда Artel является
                        мультикатегорийность с более 16 категорий включая
                        решения бытовой техники для кухни, гостинной и уборки,
                        что позволит полностью укомплектовать Ваш дом
                        современной техникой.
                    </p>
                </div>

                <div className="container mt-[120px] lg:mt-12 lg:px-0">
                    <div className="relative h-[680px] w-full overflow-hidden rounded-[20px] lg:h-[400px] lg:rounded-none">
                        <Image
                            fill
                            alt="banner image"
                            className="object-cover"
                            src="/info-banner.jpg"
                        />
                    </div>
                </div>

                <div className="container mt-11 sm:mt-[30px]">
                    <div className="flex items-center gap-7 lg:items-start sm:flex-col sm:gap-5">
                        <Icons.logoGreen className="h-[70px] w-[140px] shrink-0 sm:h-[60px] sm:w-[120px]" />
                        <h2 className="text-4xl font-bold leading-[135%] text-black-text lg:text-2xl">
                            Бренд Портфель- <br />
                            Artel Electronics включает в себя несколько брендов
                        </h2>
                    </div>
                    <div className="lg: mt-[30px] flex gap-x-6 lg:gap-x-5 sm:gap-x-3">
                        <div className="w-[3px] shrink-0 bg-dark-green"></div>
                        <p className="text-xl text-black-text lg:text-base">
                            Artel предлагает продукцию под собственной торговой
                            маркой, является партнёром Shivaki, Avalon, Vesta и
                            Royal,а также является официальным региональным
                            партнером Samsung и Viessmann в Узбекистане.
                        </p>
                    </div>
                </div>

                <Partners />
            </section>
        </>
    );
};
