"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderContext } from "@/context/HeaderProvider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import "./style.css";

const Anim = () => {
    const { changeType } = useHeaderContext();
    const triggerRef = useRef(null);
    useGSAP(() => {
        gsap.to(".result", {
            opacity: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "100 80",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".result", {
            scale: 0.1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "100 80",
                scrub: true,
                toggleActions: "play none none reverse",
                // markers: true,
                onEnter: () => {
                    changeType("green");
                },
                onEnterBack: () => {
                    changeType("green");
                },
                onLeaveBack: () => {
                    changeType("white");
                },
            },
        });
    });
    return (
        <section ref={triggerRef} className="h-[350vh]">
            <div className="bg-banner pointer-events-none sticky top-0 isolate h-screen w-full overflow-hidden">
                <Image
                    fill
                    src="/bg.png"
                    alt="banner bg"
                    className="-z-10 object-cover"
                />

                <div className="result"></div>
            </div>
        </section>
    );
};

export default Anim;
