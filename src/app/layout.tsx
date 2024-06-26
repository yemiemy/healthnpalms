import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    style: ["normal", "italic"],
    preload: true,
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "HealthInHands: Your Wellness at Your Fingertips",
    description:
        "Experience wellness at your fingertips with HealthInHands, revolutionizing healthcare accessibility using technology solutions.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    lato.variable
                )}
                suppressHydrationWarning={true}>
                {children}
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
