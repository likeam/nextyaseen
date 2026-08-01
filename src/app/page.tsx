"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import SubtitleDisplay from "@/components/SubtitleDisplay";
import AyahList from "@/components/AyahList";
import AyatKursiDisplay from "@/components/AyatKursiDisplay";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useSection } from "@/hooks/useSection";
import { SURAH_YASEEN, AYAT_UL_KURSI } from "@/lib/data";
import { AUDIO_URLS } from "@/lib/constants";

export default function Home() {
  const { activeSection, setActiveSection } = useSection();
  const [language, setLanguage] = useState("urdu");
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);

  // Determine which audio URL to use
  const audioUrl =
    activeSection === "yaseen" ? AUDIO_URLS.yaseen : AUDIO_URLS.kursi;
  const ayahs = activeSection === "yaseen" ? SURAH_YASEEN : [AYAT_UL_KURSI];

  const {
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    play,
    pause,
    seek,
    setSpeed,
    isLoaded,
  } = useAudioPlayer(audioUrl);

  // Update current ayah index based on currentTime for Yaseen
  useEffect(() => {
    if (activeSection === "yaseen" && isLoaded) {
      const idx = SURAH_YASEEN.findIndex((ayah, i) => {
        const next = SURAH_YASEEN[i + 1];
        const start = ayah.start || 0;
        const end = next ? next.start : duration || 0;
        return currentTime >= start && currentTime < end;
      });
      if (idx !== -1 && idx !== currentAyahIndex) {
        setCurrentAyahIndex(idx);
      } else if (idx === -1 && currentTime < SURAH_YASEEN[0]?.start) {
        setCurrentAyahIndex(0);
      } else if (
        idx === -1 &&
        currentTime >= (SURAH_YASEEN[SURAH_YASEEN.length - 1]?.end || 0)
      ) {
        setCurrentAyahIndex(SURAH_YASEEN.length - 1);
      }
    }
  }, [currentTime, activeSection, isLoaded, duration, currentAyahIndex]);

  // Handle section change: reset ayah index and seek to 0
  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    setActiveSection(section);
    setCurrentAyahIndex(0);
    if (isPlaying) pause();
    seek(0);
  };

  // Handle click on ayah (for Yaseen)
  const handleAyahClick = (index) => {
    if (activeSection !== "yaseen") return;
    const ayah = SURAH_YASEEN[index];
    if (!ayah) return;
    seek(ayah.start || 0);
    setCurrentAyahIndex(index);
    if (!isPlaying) play();
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Get current ayah for subtitle
  const currentAyah =
    activeSection === "yaseen"
      ? SURAH_YASEEN[currentAyahIndex] || SURAH_YASEEN[0]
      : AYAT_UL_KURSI;

  return (
    <div className="min-h-screen geometric-pattern">
      <Header
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <SubtitleDisplay
          ayah={currentAyah}
          language={language}
          currentTime={currentTime}
          duration={duration}
          isKursi={activeSection === "kursi"}
        />

        <AudioPlayer
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          playbackRate={playbackRate}
          onPlayToggle={togglePlay}
          onSeek={seek}
          onSpeedChange={setSpeed}
          language={language}
          onLanguageChange={setLanguage}
        />

        {activeSection === "yaseen" ? (
          <AyahList
            ayahs={SURAH_YASEEN}
            currentAyahIndex={currentAyahIndex}
            onAyahClick={handleAyahClick}
            language={language}
          />
        ) : (
          <AyatKursiDisplay ayah={AYAT_UL_KURSI} language={language} />
        )}

        <footer className="mt-10 pt-6 border-t border-gray-200/60 text-center text-xs text-gray-400">
          <p>
            Recitation by Mishary Alafasy &middot; Translations: Urdu (Mehmood
            ul Hasan) &amp; English (Sahih International)
          </p>
          <p className="mt-1">
            📖 Surah Yaseen &amp; Ayat ul Kursi &middot; Made with ❤️ for the
            Ummah
          </p>
        </footer>
      </main>
    </div>
  );
}
