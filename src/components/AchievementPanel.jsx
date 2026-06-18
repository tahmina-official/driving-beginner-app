import { Trophy } from "lucide-react";

export default function AchievementPanel({ unlocked = [] }) {
  return (
    <div className="grid achievement-list">
      {unlocked.map((item) => (
        <article key={item.id} className="achievement-card">
          <span className="achievement-card__badge">
            <Trophy size={18} aria-hidden="true" />
            {item.badge}
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
