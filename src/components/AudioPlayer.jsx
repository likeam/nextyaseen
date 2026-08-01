"use client";

import { useRef, useEffect } from "react";
import { formatTime } from "@/utils/timeFormatter";

export default function AudioPlayer({
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  onPlayToggle,
  onSeek,
  onSpeedChange,
  language,
  onLanguageChange,
}) {
  const progressRef = useRef(null);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (progressRef.current) {
      const pct = Math.min(progress, 100);
      progressRef.current.value = pct;
      progressRef.current.style.background = `linear-gradient(to right, #c9a84c 0%, #c9a84c ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`;
    }
  }, [progress]);

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    const newTime = (val / 100) * duration;
    onSeek(newTime);
  };

  const handleSpeedChange = (e) => {
    onSpeedChange(parseFloat(e.target.value));
  };

  return (
    <section className="glass rounded-2xl p-5 md:p-7 mb-6 shadow-soft border border-white/50">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onPlayToggle}
            className="relative w-14 h-14 rounded-full gold-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span
              className="absolute inset-0 rounded-full pulse-ring opacity-40"
              style={{
                animation: isPlaying
                  ? "pulseRing 2s ease-out infinite"
                  : "none",
              }}
            />
            <span className="relative z-10 text-2xl">
              {isPlaying ? "⏸" : "▶"}
            </span>
          </button>
          <div className="text-sm">
            <div className="font-medium text-gray-700">
              {isPlaying ? "Playing..." : "Ready"}
            </div>
            <div className="text-xs text-gray-400">
              {duration > 0
                ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                : "Loading..."}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <input
            ref={progressRef}
            type="range"
            className="audio-progress w-full"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            disabled={!duration}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <select
            value={playbackRate}
            onChange={handleSpeedChange}
            className="bg-white/70 border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer"
          >
            <option value="0.5">0.5×</option>
            <option value="0.75">0.75×</option>
            <option value="1.0">1×</option>
            <option value="1.25">1.25×</option>
            <option value="1.5">1.5×</option>
            <option value="2.0">2×</option>
          </select>
          <div className="flex bg-white/70 border border-gray-200 rounded-full overflow-hidden">
            <button
              className={`lang-btn px-3 py-1.5 text-xs font-medium transition-all ${
                language === "urdu"
                  ? "bg-gold-600 text-white"
                  : "text-gray-600 hover:bg-gold-100"
              }`}
              onClick={() => onLanguageChange("urdu")}
            >
              اردو
            </button>
            <button
              className={`lang-btn px-3 py-1.5 text-xs font-medium transition-all ${
                language === "english"
                  ? "bg-gold-600 text-white"
                  : "text-gray-600 hover:bg-gold-100"
              }`}
              onClick={() => onLanguageChange("english")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
