import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CheckCircle2,
  MoveRight,
  ParkingCircle,
  StopCircle,
} from "lucide-react";

const maneuvers = [
  {
    title: "Pulling Out / Merging",
    icon: MoveRight,
    steps: ["Signal", "Gear to Drive", "Check mirrors", "Check blind spots", "Merge smoothly"],
  },
  {
    title: "Left Turn",
    icon: ArrowLeftCircle,
    steps: ["Signal 100 ft ahead", "Move to center", "Turn wheel left", "Accelerate after turn"],
  },
  {
    title: "Right Turn",
    icon: ArrowRightCircle,
    steps: ["Signal", "Move near curb", "Turn right", "Accelerate after turn"],
  },
  {
    title: "Stop Sign",
    icon: StopCircle,
    steps: ["Full stop", "Check pedestrians", "Look left-right-left", "Proceed when clear"],
  },
  {
    title: "Parallel Parking",
    icon: ParkingCircle,
    steps: ["Signal right", "Align cars", "Reverse slowly", "Turn wheel", "Straighten vehicle"],
  },
];

export default function ManeuversGuide() {
  return (
    <div>
      <h2>Essential Maneuvers</h2>

      <div className="grid grid--2">
        {maneuvers.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="maneuver-card">
              <h3 className="maneuver-card__title">
                <Icon size={24} color="var(--primary)" aria-hidden="true" />
                {item.title}
              </h3>

              <ul className="step-list">
                {item.steps.map((step) => (
                  <li key={step}>
                    <CheckCircle2 size={16} color="var(--success)" aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
