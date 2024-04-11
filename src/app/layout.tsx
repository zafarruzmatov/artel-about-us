import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { HeaderProvider } from "@/context/HeaderProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Artel",
    description: "Artel Ishonchli va barakali",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <HeaderProvider>{children}</HeaderProvider>
            </body>
        </html>
    );
}
