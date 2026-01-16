export type LinkItem = {
    title: string;
    url?: string;
    children?: {
        title: string;
        url: string;
    }[];
};

export const links: LinkItem[] = [
    {
        title: "Data Warga Binaan Risiko Tinggi (Highrisk)",
        children: [
            {
                title: "Format Laporan",
                url: "https://docs.google.com/spreadsheets/d/17zIZZ9ODYal67Pb_wr1xzMCJdssPIMur",
            },
            {
                title: "Upload Laporan",
                url: "https://forms.gle/adtDuMErf5HC5tZF7",
            },
        ],
    },
    {
        title: "Laporan Pengisian Deteksi Dini",
        children: [
            {
                title: "Format Laporan",
                url: "https://docs.google.com/spreadsheets/d/17zIZZ9ODYal67Pb_wr1xzMCJdssPIMur",
            },
            {
                title: "Matriks",
                url: "https://docs.google.com/spreadsheets/d/17zIZZ9ODYal67Pb_wr1xzMCJdssPIMur",
            },
            {
                title: "Upload Laporan",
                url: "https://forms.gle/bFWjBCjqcMTrkbv88",
            },
        ],
    },
    {
        title: "SK Tim Unit Pemasyarakatan (UIP)",
        children: [
            {
                title: "Contoh SK Tim UIP",
                url: "https://docs.google.com/document/d/17VFpvF3SWaJ3vM14yiaEzm03VYPGYvpt",
            },
            {
                title: "Upload SK Tim UIP",
                url: "https://forms.gle/xauz6Wnpegn3rSFcA",
            },
        ],
    },
    {
        title: "Laporan Konsolidasi Intelijen",
        url: "https://forms.gle/xauz6Wnpegn3rSFcA",
    },
    {
        title: "Laporan Intelijen",
        children: [
            {
                title: "Format Laporan Intelijen",
                url: "https://docs.google.com/document/d/1c0zPYfmemdv3ft4BG43qU5z1UK9BzaVz",
            },
            {
                title: "Upload Laporan Intelijen",
                url: "https://forms.gle/VX5xLAWMvMpSL5qA6",
            },
        ],
    },
    {
        title: "Laporan Analisa Pengawasan Komunikasi / WARTELSUSPAS",
        url: "https://forms.gle/xauz6Wnpegn3rSFcA",
    },
    {
        title: "Rekapitulasi Pelaksanaan Hasil Rekomendasi Intelijen",
        url: "https://forms.gle/xauz6Wnpegn3rSFcA",
    },
];
