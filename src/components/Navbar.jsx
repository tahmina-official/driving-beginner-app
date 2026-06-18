import {
  BookOpen,
  GraduationCap,
  Home,
  ListChecks,
  TrafficCone,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/guide", label: "Guide", icon: BookOpen },
  { to: "/practice", label: "Practice", icon: ListChecks },
  { to: "/signs", label: "Signs", icon: TrafficCone },
  { to: "/exam", label: "Mock Exam", icon: GraduationCap },
];

export default function Navbar({ dark, setDark }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" aria-label="DMV Driving Trainer home">
          <span className="navbar__brand-mark">
            <TrafficCone size={22} aria-hidden="true" />
          </span>
          <span>DMV Driving Trainer</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "navbar__link navbar__link--active" : "navbar__link"
                }
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <DarkModeToggle dark={dark} setDark={setDark} />
        </nav>
      </div>
    </header>
  );
}
