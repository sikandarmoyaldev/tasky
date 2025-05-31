import React from "react";

import Logo from "./logo";

const NavBar: React.FC = () => {
    return (
        <nav className="border-b border-border">
            <div className="max-w-[90%] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Logo />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
