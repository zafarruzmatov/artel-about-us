import { Icons } from "..";

export const RegionSelect = () => {
    return (
        <div className="flex cursor-pointer items-center gap-2 px-3 py-[6px] lg:hidden">
            <span className="shrink-0 text-sm text-white group-[.green]:text-black-secondary">
                Ташкент
            </span>
            <Icons.dropDown className="group-[.green]:fill-black-secondary" />
        </div>
    );
};
