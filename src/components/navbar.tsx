import React from "react";

import Logo from "./logo";
import ThemeToggler from "@/features/theme/components/theme-toggler";

const NavBar: React.FC = () => {
    return (
        <nav className="border-b border-border">
            <div className="max-w-[90%] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
