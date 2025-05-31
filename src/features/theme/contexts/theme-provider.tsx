"use client";

import React from "react";
import {
    type ThemeProviderProps,
    ThemeProvider as NextThemesProvider,
} from "next-themes";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    ...props
}) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
