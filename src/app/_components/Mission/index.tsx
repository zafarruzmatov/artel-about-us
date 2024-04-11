import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missionData } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Mission = () => {
    const missionRef = useRef<HTMLDivElement>(null);
    const conRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        let sections = gsap.utils.toArray(".mission-item");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: conRef.current,
                pin: true,
                scrub: 0.1,
                start: "top -10",
                end: () => "+=" + conRef?.current?.offsetWidth!,
            },
        });
    });

    return (
        <div
            ref={missionRef}
            className="my-[60px] overflow-x-hidden pl-[90px] lg:pl-[70px] sm:pl-4"
        >
            <h2 className="text-5xl font-bold text-white lg:text-[40px] sm:text-2xl">
                Наша Миссия
            </h2>

            <div className="lg: mt-[30px] flex gap-x-5 lg:mt-5 sm:gap-x-3">
                <div className="w-[3px] shrink-0 bg-white"></div>
                <p className="lg:tex-xl w-full max-w-[488px] text-2xl text-white sm:text-base">
                    Создавать надёжную и выгодную бытовую технику для каждого
                    дома
                </p>
            </div>

            <div
                ref={conRef}
                className="relative mt-6 flex flex-nowrap gap-x-11 sm:gap-x-5"
            >
                {missionData.map(({ id, image, title, desc, Icon }) => (
                    <div
                        key={id}
                        className="mission-item flex w-3/4 shrink-0 flex-col sm:w-4/5"
                    >
                        <div className="relative h-[400px] overflow-hidden rounded-large sm:h-[240px]">
                            <Image
                                fill
                                alt="mission"
                                src={image}
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-[30px] sm:mt-5">
                            <div className="flex items-center gap-x-5">
                                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-md bg-white bg-opacity-10 lg:h-9 lg:w-9">
                                    {<Icon className="lg:h-6 lg:w-6" />}
                                </div>
                                <h3 className="text-[40px] font-bold text-white lg:text-2xl">
                                    {title}
                                </h3>
                            </div>
                            <p className="mt-5 text-xl text-white lg:text-base sm:mt-4">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
