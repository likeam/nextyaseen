import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import { generateVideoSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata = {
  title: "Surah Yaseen & Ayat ul Kursi – Recitation with Translations",
  description:
    "Listen to Surah Yaseen and Ayat ul Kursi with beautiful Arabic recitation, Urdu and English translations, and synchronized subtitles.",
  keywords:
    "Surah Yaseen, Ayat ul Kursi, Quran, Recitation, Translation, Urdu, English, Islamic, Audio",
  authors: [{ name: "Quran Voice" }],
  openGraph: {
    title: "Surah Yaseen & Ayat ul Kursi – Recitation with Translations",
    description:
      "Listen to Surah Yaseen and Ayat ul Kursi with beautiful Arabic recitation, Urdu and English translations, and synchronized subtitles.",
    url: "https://quran-voice.vercel.app",
    siteName: "Quran Recitation",
    images: [
      {
        url: "https://quran-voice.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surah Yaseen & Ayat ul Kursi – Recitation with Translations",
    description:
      "Listen to Surah Yaseen and Ayat ul Kursi with beautiful Arabic recitation, Urdu and English translations.",
    images: ["https://quran-voice.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://quran-voice.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <head>
        {/* Google Fonts for Urdu */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD for VideoSEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateVideoSchema() }}
        />
      </head>
      <body className="min-h-screen bg-cream">{children}</body>
    </html>
  );
}
