import React from "react";
import Link from "next/link";
import Image from "next/image";

import { env } from "@/lib/env";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center justify-center">
            <Image
                className="h-8 w-auto"
                src="/brand/logo.png"
                alt={env.NEXT_PUBLIC_SITE_TITLE}
                width={24}
                height={3}
            />
            <span className="ml-1 text-foreground text-xl">
                {env.NEXT_PUBLIC_SITE_TITLE}
            </span>
        </Link>
    );
};

export default Logo;
