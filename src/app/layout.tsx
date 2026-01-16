import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SubDit Intelijen",
    description: "Pelaporan Intelijen Pemasyarakatan",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className="relative overflow-x-hidden">
                {/* ambient background */}
                <div className="pointer-events-none absolute -top-60 -left-60 w-[520px] h-[520px] bg-emerald-400/10 blur-[140px] rounded-full ambient-glow" />
                <div className="pointer-events-none absolute top-1/3 -right-60 w-[420px] h-[420px] bg-emerald-600/10 blur-[160px] rounded-full" />

                <main className="relative z-10 min-h-screen flex justify-center px-4 py-14">
                    {children}
                </main>
            </body>
        </html>
    );
}
