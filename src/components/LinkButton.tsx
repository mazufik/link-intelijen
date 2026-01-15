type Props = {
    title: string;
    href: string;
    onClick?: () => void;
};

export default function LinkButton({ title, href, onClick }: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className="
            emerald-glow w-full rounded-full
            border border-emerald-400/40
            px-6 py-4
            text-center text-sm font-semibold tracking-wide
            text-emerald-300
            bg-white/5 backdrop-blur
            hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-500
            hover:text-black
            transition-all duration-300
            active:scale-[0.97]
        "
        >
            {title}
        </a>
    );
}
