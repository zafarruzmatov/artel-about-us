import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderContext } from "@/context/HeaderProvider";
import { FaqData } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import "./style.css";

export const Strategy = () => {
    const { changeType } = useHeaderContext();

    const triggerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".strategy", {
            scrollTrigger: {
                trigger: triggerRef.current,
                onEnter: () => {
                    changeType("white");
                },
                onEnterBack: () => {
                    changeType("white");
                },
                onLeaveBack: () => {
                    changeType("green");
                },
            },
        });

        let sections = gsap.utils.toArray(".info-item");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 3,
                start: "top 200",
                // markers: true,
                end: () => "+=" + containerRef?.current?.offsetWidth!,
            },
        });
    });

    return (
        <section
            ref={triggerRef}
            className="strategy strategy-line relative isolate overflow-hidden pl-[90px] pt-[200px] sm:pl-4"
        >
            <div
                className="relative flex flex-nowrap gap-x-5"
                ref={containerRef}
            >
                {FaqData.map(({ id, num, numValue, title }) => (
                    <div
                        key={id}
                        className="info-item flex w-full max-w-60 shrink-0 flex-col gap-y-6 rounded-large bg-[#2E8255] px-6 py-[34px]"
                    >
                        <span className="max-w-[190px] text-sm font-bold text-white">
                            {title}
                        </span>
                        <div>
                            <span className="text-5xl font-bold text-white">
                                {num}
                            </span>
                            {numValue !== null && (
                                <span className="text-sm font-bold text-white">
                                    {numValue}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
