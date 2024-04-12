'use client'

import React, { createContext, useState, useMemo, ReactNode } from "react";

type Card = {
    id: number;
    name: string;
    img: string;
    price: string;
    description: string,
    quantity: number
}

type ContextType = {
    cards: Card[];
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;

}

const DEFAULT_VALUE: ContextType = {
    cards: [],
    setCards: () => { }
};

export const GlobalContext = createContext<ContextType>(DEFAULT_VALUE);

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    let [cards, setCards] = useState<Card[]>([]);

    return (
        <GlobalContext.Provider value={{ cards, setCards, }}>
            {children}
        </GlobalContext.Provider >
    );
}

export { GlobalProvider }