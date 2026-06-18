import { Volume2 } from "lucide-react";

import { useSpeech } from "../hooks/useSpeech";

export default function VoiceChecklist() {
  const { speak } = useSpeech();

  const startDrivingMode = () => {
    speak(`
      Welcome driver.
      Check your seat.
      Adjust mirrors.
      Fasten seatbelt.
      Test signals.
      Test horn.
      You are ready to drive.
    `);
  };

  return (
    <button type="button" onClick={startDrivingMode} className="button button--primary">
      <Volume2 size={18} aria-hidden="true" />
      Start Driving Mode
    </button>
  );
}
