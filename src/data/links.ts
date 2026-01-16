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
        title: "Laporan Konsolidasi Intelijen",
        url: "https://forms.gle/xauz6Wnpegn3rSFcA",
    },
];
