"use client";

import { useState } from "react";
import Image from "next/image";
import { links } from "@/data/links";
import LinkButton from "./LinkButton";
import DropdownLink from "./DropdownLink";

export default function ProfileCard() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div
            className="
            relative w-full max-w-md
            rounded-[32px]
            bg-gradient-to-b from-white/10 to-white/5
            backdrop-blur-2xl
            p-8 pb-12
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            text-center
        "
        >
            {/* logo */}
            <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-emerald-400 to-emerald-600">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <h1 className="mt-6 text-xl font-semibold tracking-wide text-emerald-400">
                SubDit Intelijen
            </h1>

            <p className="mt-2 text-sm text-gray-400">
                Pelaporan Intelijen Pemasyarakatan
            </p>

            <div className="mt-6 mb-8 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            <div className="flex flex-col gap-4 mb-10">
                {links.map((l, i) =>
                    l.children ? (
                        <DropdownLink
                            key={i}
                            title={l.title}
                            childrenLinks={l.children}
                            isOpen={active === i}
                            onToggle={() => setActive(active === i ? null : i)}
                            onClose={() => setActive(null)}
                        />
                    ) : (
                        <LinkButton
                            key={i}
                            title={l.title}
                            href={l.url!}
                            onClick={() => setActive(null)}
                        />
                    ),
                )}
            </div>

            <p className="text-xs text-gray-500 tracking-wider">
                © Official Digital DITPAMINTEL
            </p>
        </div>
    );
}
