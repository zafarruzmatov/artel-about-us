"use client";

import { Header } from "@/components";
import Anim from "./_components/Anim";
import { InfoSection } from "./_components/InfoSection";
import { Strategy } from "./_components/Strategy";
import { Mission } from "./_components/Mission";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex flex-col">
                <Anim />
                <InfoSection />

                <div className="bg-gradient-strategy">
                    <Strategy />
                    <Mission />
                    <div className="h-screen"></div>
                </div>
            </main>
        </>
    );
}
