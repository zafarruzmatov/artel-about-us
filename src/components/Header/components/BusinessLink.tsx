import Link from "next/link";

export const BusinessLink = () => {
    return (
        <Link
            href="/"
            className="rounded-btn border border-solid border-stroke px-4 py-[10px] text-sm font-medium text-white group-[.green]:text-black-secondary lg:py-[15px] sm:py-3"
        >
            Бизнес
        </Link>
    );
};
