// Optional utility to preload or handle fallback
export function preloadAudio(url) {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.src = url;
    audio.addEventListener("loadedmetadata", () => resolve(audio));
    audio.addEventListener("error", reject);
  });
}
