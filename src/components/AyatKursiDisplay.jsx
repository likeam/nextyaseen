"use client";

export default function AyatKursiDisplay({ ayah, language }) {
  const { arabic, urdu, english, number } = ayah;
  return (
    <section className="space-y-3">
      <div className="ayah-card active p-5 md:p-7 rounded-xl bg-white/60 border border-gold-200/30">
        <div className="flex items-start gap-3">
          <span className="ayah-number flex-shrink-0 w-8 h-8 rounded-full bg-gold-600 text-white flex items-center justify-center text-sm font-bold">
            {number}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-arabic text-right text-xl md:text-2xl text-gray-800 leading-[2.4]">
              {arabic}
            </p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p className="font-urdu text-gray-700 leading-relaxed">{urdu}</p>
              <p className="text-gray-500 leading-relaxed">{english}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
