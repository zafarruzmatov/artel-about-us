export const BurgerMenu = () => {
    return (
        <div className="flex cursor-pointer items-center gap-2 rounded-btn border border-solid border-stroke px-4 py-[10px] text-sm font-medium text-white group-[.green]:border-black-secondary group-[.green]:text-black-secondary lg:p-4 sm:hidden">
            <span className="lg:hidden">Меню</span>
            <div className="flex h-5 w-5 shrink-0 flex-col justify-center gap-1 px-[3px]">
                <div
                    className="h-[2px] w-2 rounded-full
                bg-stroke group-[.green]:bg-black-secondary group-[.green]:bg-opacity-70"
                ></div>
                <div
                    className="h-[2px] w-full rounded-full
                bg-white group-[.green]:bg-black-secondary"
                ></div>
                <div
                    className="h-[2px] w-2 self-end
                rounded-full bg-stroke group-[.green]:bg-black-secondary group-[.green]:bg-opacity-70"
                ></div>
            </div>
        </div>
    );
};
