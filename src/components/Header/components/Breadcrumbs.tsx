import { Icons } from "@/components";
import Link from "next/link";

export const Breadcrumbs = () => {
    return (
        <div className="mt-6 flex gap-x-3">
            <Link
                className="rounded-full bg-gradient-green px-3 py-[6px] text-xs font-medium text-white"
                href="/"
            >
                Назад
            </Link>

            <div className="flex items-center gap-x-1">
                <Link
                    href="/"
                    className="px-3 py-1 text-xs font-medium text-white group-[.green]:text-black-secondary"
                >
                    Главная
                </Link>
                <Icons.chevronBack className="group-[.green]:stroke-black-secondary" />
                <span className="px-3 py-1 text-xs font-medium text-green-main">
                    About Us
                </span>
            </div>
        </div>
    );
};
