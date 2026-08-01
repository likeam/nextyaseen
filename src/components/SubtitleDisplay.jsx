"use client";

import { formatTime } from "@/utils/timeFormatter";

export default function SubtitleDisplay({
  ayah,
  language,
  currentTime,
  duration,
  isKursi,
}) {
  if (!ayah) return null;

  const { arabic, urdu, english, number } = ayah;
  const translation = language === "urdu" ? urdu : english;
  const title = isKursi ? "آیت الکرسی" : `آیہ ${number || ""}`;

  return (
    <section className="glass rounded-2xl p-5 md:p-8 mb-6 shadow-soft border border-white/50">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gold-700 uppercase tracking-wider bg-gold-100/70 px-3 py-1 rounded-full">
          {title}
        </span>
        <span className="text-xs text-gray-400 font-mono">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="subtitle-text fade-in">
        <p className="font-arabic text-right text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-[2.4] md:leading-[2.8]">
          {arabic}
        </p>
        <div className="mt-3 pt-3 border-t border-gray-100/60">
          <p className="font-urdu text-lg sm:text-xl text-gray-700 leading-relaxed">
            {translation}
          </p>
        </div>
      </div>
    </section>
  );
}
