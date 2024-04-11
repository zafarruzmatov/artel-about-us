import { Icons } from "@/components";
import clsx from "clsx";

export const CallLink = () => {
    return (
        <a
            href="tell:+998781488888"
            className={clsx(
                "flex items-center gap-2 py-[6px]",
                "sm:flex sm:h-12 sm:w-12 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-solid sm:border-stroke",
            )}
        >
            <Icons.call className="group-[.green]:fill-black-secondary" />
            <span className="shrink-0 text-sm font-medium text-white group-[.green]:text-black-secondary sm:hidden">
                +998 78 148-88-88
            </span>
        </a>
    );
};
