export default function Header({ activeSection, onSectionChange }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#1a472a] via-[#1e5a3a] to-[#0f2a1a] text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-gold-300 text-sm font-medium tracking-wider uppercase mb-1">
              <span className="w-8 h-0.5 bg-gold-400/60"></span>
              Quran Recitation
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-gold-300">Surah Yaseen</span>
              <span className="text-white/40 mx-2">•</span>
              <span className="text-gold-300">Ayat ul Kursi</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-1 max-w-xl">
              Listen with Arabic recitation, Urdu &amp; English translations,
              and live subtitles.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 backdrop-blur-sm">
            <button
              className={`section-btn px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === "yaseen"
                  ? "bg-gold-600 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => onSectionChange("yaseen")}
            >
              <span className="hidden sm:inline">Surah </span>Yaseen
            </button>
            <button
              className={`section-btn px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === "kursi"
                  ? "bg-gold-600 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => onSectionChange("kursi")}
            >
              Ayat ul Kursi
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
