import { useCallback } from "react";

export function useSpeech() {
  const speak = useCallback((text) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return false;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
    return true;
  }, []);

  return { speak };
}
