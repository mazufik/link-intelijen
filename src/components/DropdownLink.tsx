"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    title: string;
    childrenLinks: { title: string; url: string }[];
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
};

export default function DropdownLink({
    title,
    childrenLinks,
    isOpen,
    onToggle,
    onClose,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [onClose]);

    return (
        <div ref={ref} className="w-full">
            {/* BUTTON */}
            <button
                onClick={onToggle}
                className={`
                hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-500
                hover:text-black
                emerald-glow relative w-full rounded-full
                border px-6 py-4
                flex items-center justify-center
                text-sm tracking-wide
                backdrop-blur
                transition-all duration-300
                ${
                    isOpen
                        ? "border-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-semibold"
                        : "border-emerald-400/40 bg-white/5 text-emerald-300 font-medium"
                }
            `}
            >
                {/* TEXT CENTER */}
                <span className="text-center">{title}</span>

                {/* CHEVRON ICON */}
                <motion.span
                    className="absolute right-6"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.span>
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                        className="
                        mt-3 overflow-hidden
                        rounded-2xl
                        border border-emerald-400/20
                        bg-black/50 backdrop-blur-xl
                    "
                    >
                        {childrenLinks.map((c, i) => (
                            <a
                                key={i}
                                href={c.url}
                                onClick={onClose}
                                className="
                                block px-6 py-3 text-sm
                                text-emerald-200
                                hover:text-emerald-400
                                hover:bg-white/5
                                transition
                            "
                            >
                                {c.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
