import { Icons } from "@/components";

export const LangSelect = () => {
    return (
        <div className="flex cursor-pointer items-center gap-2 py-[6px] sm:hidden">
            <Icons.global className="group-[.green]:fill-black-secondary" />
            <span className="shrink-0 text-sm font-medium text-white group-[.green]:text-black-secondary">
                RU
            </span>
        </div>
    );
};
