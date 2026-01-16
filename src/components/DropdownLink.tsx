"use client";

import { memo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    title: string;
    childrenLinks: { title: string; url: string }[];
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
};

function DropdownLink({
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
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [onClose]);

    return (
        <div ref={ref} className="w-full">
            <button
                onClick={onToggle}
                className={`
                    emerald-glow relative w-full rounded-full
                    border px-6 py-4 text-sm tracking-wide
                    flex items-center justify-center
                    backdrop-blur transition-all duration-300
                    ${
                        isOpen
                            ? "border-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-semibold"
                            : "border-emerald-400/40 bg-white/5 text-emerald-300 font-medium hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-500 hover:text-black"
                    }
                `}
            >
                <span>{title}</span>

                <motion.span
                    className="absolute right-6"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    ▼
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                            mt-3 overflow-hidden rounded-2xl
                            border border-emerald-400/20
                            bg-black/50 backdrop-blur-xl
                        "
                    >
                        {childrenLinks.map((c, i) => (
                            <a
                                key={i}
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
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

export default memo(DropdownLink);
