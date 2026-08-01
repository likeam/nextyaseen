"use client";

export default function AyahList({
  ayahs,
  currentAyahIndex,
  onAyahClick,
  language,
}) {
  return (
    <section className="space-y-3">
      {ayahs.map((ayah, idx) => {
        const isActive = idx === currentAyahIndex;
        const translation = language === "urdu" ? ayah.urdu : ayah.english;
        return (
          <div
            key={ayah.id}
            className={`ayah-card ${isActive ? "active" : ""} p-4 md:p-5 rounded-xl bg-white/50 border border-transparent hover:border-gold-200/30 transition-all`}
            onClick={() => onAyahClick(idx)}
          >
            <div className="flex items-start gap-3">
              <span className="ayah-number flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold transition-all">
                {ayah.number}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-arabic text-right text-lg md:text-xl text-gray-800 leading-[2.2]">
                  {ayah.arabic}
                </p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  <p className="font-urdu text-gray-600 leading-relaxed">
                    {ayah.urdu}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {ayah.english}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
