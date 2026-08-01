export function generateVideoSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Surah Yaseen & Ayat ul Kursi Recitation",
    description:
      "Beautiful recitation of Surah Yaseen and Ayat ul Kursi with Urdu and English translations.",
    thumbnailUrl: "https://quran-voice.vercel.app/thumbnail.jpg",
    uploadDate: "2026-07-31",
    duration: "PT15M",
    contentUrl: "https://quran-voice.vercel.app/audio/yaseen.mp3",
    embedUrl: "https://quran-voice.vercel.app",
    interactionCount: "12345",
  });
}
