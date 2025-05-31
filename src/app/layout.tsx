import type { Metadata } from "next";

import "./globals.css";
import { env } from "@/lib/env";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
    title: {
        default: env.NEXT_PUBLIC_SITE_TITLE,
        template: `%s - ${env.NEXT_PUBLIC_SITE_TITLE}`,
    },
    description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
    keywords: env.NEXT_PUBLIC_SITE_TAGS.split(", "),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-background font-sans antialiased text-foreground">
                <NavBar />
                <div className="py-5 max-w-[90%] px-4 sm:px-6 lg:px-8 mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
