import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      type="button"
      onClick={() => setDark((current) => !current)}
      className="icon-button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
