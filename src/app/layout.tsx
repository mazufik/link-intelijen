import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className="relative overflow-x-hidden overflow-y-auto">
                {/* emerald ambience */}
                <div className="absolute -top-60 -left-60 w-[520px] h-[520px] bg-emerald-400/10 blur-[130px] rounded-full ambient-glow" />
                <div className="absolute top-1/3 -right-60 w-[420px] h-[420px] bg-emerald-600/10 blur-[150px] rounded-full" />

                <div className="relative z-10 min-h-screen flex justify-center py-14 px-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
