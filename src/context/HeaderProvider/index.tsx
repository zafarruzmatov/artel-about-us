"use client";

import { FC, useState, useContext, createContext, ReactNode } from "react";

type TType = "white" | "green";

interface IHeaderContext {
    type: TType;
    changeType: (typeValue: TType) => void;
}
interface IHeaderProviderProps {
    children: ReactNode;
}

const HeaderContext = createContext({} as IHeaderContext);

export const HeaderProvider: FC<IHeaderProviderProps> = ({ children }) => {
    const [type, setType] = useState<TType>("white");

    const changeType = (typeValue: TType) => {
        setType(typeValue);
    };

    return (
        <HeaderContext.Provider
            value={{
                type,
                changeType,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => useContext(HeaderContext);
