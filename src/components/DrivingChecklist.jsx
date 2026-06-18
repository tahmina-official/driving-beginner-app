import { useState } from "react";

import {
  AlertTriangle,
  Armchair,
  Bell,
  CarFront,
  CheckCircle2,
  Gauge,
  Lightbulb,
  ParkingCircle,
  ShieldCheck,
  View,
  Wind,
} from "lucide-react";

const items = [
  { text: "Left turn signal", icon: Lightbulb },
  { text: "Right turn signal", icon: Lightbulb },
  { text: "Hazard lights", icon: AlertTriangle },
  { text: "Headlights", icon: CarFront },
  { text: "Foot brake", icon: Gauge },
  { text: "Windshield wipers", icon: Wind },
  { text: "Defroster", icon: Wind },
  { text: "Horn", icon: Bell },
  { text: "Parking brake", icon: ParkingCircle },
  { text: "Seat position", icon: Armchair },
  { text: "Side mirrors", icon: View },
  { text: "Rear view mirror", icon: View },
  { text: "Seat belt", icon: ShieldCheck },
];

export default function DrivingChecklist() {
  const [checked, setChecked] = useState([]);

  const toggle = (index) => {
    setChecked((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index]
    );
  };

  const progress = Math.round((checked.length / items.length) * 100);

  return (
    <div>
      <h2>Pre-Drive Checklist</h2>

      <div className="progress" aria-label={`Checklist progress: ${progress}%`}>
        <div className="progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="checklist section">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isChecked = checked.includes(index);

          return (
            <button
              type="button"
              key={item.text}
              onClick={() => toggle(index)}
              className={isChecked ? "checklist__item checklist__item--checked" : "checklist__item"}
            >
              <CheckCircle2 className="checklist__check" aria-hidden="true" />
              <Icon className="feature-card__icon" size={22} aria-hidden="true" />
              <span>{item.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
