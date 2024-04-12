'use client'

import { theme } from "../assets/styles/theme";
import { PropsWithChildren, useContext, useState } from "react";
import { ThemeProvider } from "styled-components"
import { GlobalContext } from "./GlobalContext";

interface ThemeProviderProps extends PropsWithChildren<{}> {

}

export const ThemeProviderNext: React.FC<ThemeProviderProps> = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};