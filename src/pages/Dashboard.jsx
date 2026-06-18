import { BookOpen, GraduationCap, ListChecks, TrafficCone } from "lucide-react";
import { Link } from "react-router-dom";

import AchievementPanel from "../components/AchievementPanel";
import ProgressTracker from "../components/ProgressTracker";
import { achievements } from "../data/achievements";
import { questions } from "../data/questions";
import { roadSigns } from "../data/roadSigns";

const learningPaths = [
  {
    to: "/guide",
    title: "Driving Guide",
    description: "Pre-drive checks, blind spots, turns, stops, and parking basics.",
    icon: BookOpen,
  },
  {
    to: "/practice",
    title: "Practice Mode",
    description: "Use small simulators for traffic lights and parallel parking flow.",
    icon: ListChecks,
  },
  {
    to: "/signs",
    title: "Road Signs",
    description: "Review common signs you are likely to see on a permit test.",
    icon: TrafficCone,
  },
  {
    to: "/exam",
    title: "Mock DMV Exam",
    description: "Answer practice questions and see whether you reached a passing score.",
    icon: GraduationCap,
  },
];

export default function Dashboard() {
  const progressItems = [
    { label: "Driving basics", value: 35 },
    { label: "Road signs", value: 50 },
    { label: "Mock exam readiness", value: 25 },
  ];

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Beginner driver practice</p>
        <h1>Build calm, repeatable driving habits.</h1>
        <p className="lede">
          Study the checklist, practice common situations, review road signs, and test
          yourself with DMV-style questions.
        </p>
      </section>

      <section className="grid dashboard-grid">
        <div className="grid grid--2">
          {learningPaths.map((path) => {
            const Icon = path.icon;

            return (
              <Link key={path.to} to={path.to} className="feature-card">
                <span className="feature-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h2>{path.title}</h2>
                  <p>{path.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <aside className="grid">
          <div className="stat-card">
            <span className="stat-card__icon">
              <TrafficCone size={22} aria-hidden="true" />
            </span>
            <div>
              <strong>{roadSigns.length}</strong>
              <span>signs to review</span>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-card__icon">
              <GraduationCap size={22} aria-hidden="true" />
            </span>
            <div>
              <strong>{questions.length}</strong>
              <span>mock exam questions</span>
            </div>
          </div>

          <div className="panel">
            <div className="panel__body">
              <h2>Study Progress</h2>
              <ProgressTracker items={progressItems} />
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2>Milestones</h2>
        <AchievementPanel unlocked={achievements} />
      </section>
    </>
  );
}
