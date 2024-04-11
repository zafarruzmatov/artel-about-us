"use client";

import Link from "next/link";
import clsx from "clsx";
import { useScrollDirection } from "@/hooks";
import { useHeaderContext } from "@/context/HeaderProvider";
import { RegionSelect } from "../RegionSelect";
import { Icons } from "..";
import {
    CallLink,
    LangSelect,
    BusinessLink,
    BurgerMenu,
    Breadcrumbs,
} from "./components";

export const Header = () => {
    const scrollDirection = useScrollDirection();
    const { type } = useHeaderContext();

    return (
        <header
            className={clsx(
                "header group fixed top-0 z-20 w-full py-[18px] transition-all duration-500",
                scrollDirection === "down" && "!-top-full",
                type === "green" && "green",
            )}
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Icons.logo className="group-[.green]:hidden" />
                            <Icons.logoGreen className="hidden group-[.green]:block" />
                        </Link>

                        <div className="ml-4 h-9 w-[1px] bg-[#f6f7fa] group-[.green]:bg-black-secondary lg:hidden"></div>

                        <RegionSelect />
                    </div>

                    <div className="flex items-center gap-12 sm:flex-row-reverse sm:gap-[10px]">
                        <div className="flex items-center gap-6 lg:hidden sm:block">
                            <LangSelect />
                            <CallLink />
                        </div>
                        <div className="flex items-center gap-2">
                            <BusinessLink />
                            <BurgerMenu />
                        </div>
                    </div>
                </div>
                <Breadcrumbs />
            </div>
        </header>
    );
};
