import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: "#070A12", // midnight
                    darker: "#05070D", // obsidian
                },
                card: {
                    DEFAULT: "rgba(18, 22, 38, 0.75)",
                },
                gold: {
                    light: "#FFE7A3",
                    DEFAULT: "#E6C77A", // champagne gold
                    dark: "#B89B4F",
                },
                accent: {
                    amber: "#FFB703",
                },
            },
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};

export default config;
