import { useState } from "react";
import { BookOpen, Car, ClipboardCheck, Route } from "lucide-react";

import BlindSpotGuide from "../components/BlindSpotGuide";
import DrivingChecklist from "../components/DrivingChecklist";
import ManeuversGuide from "../components/ManeuversGuide";
import VideoSection from "../components/VideoSection";

const tabs = [
  {
    id: "checklist",
    label: "Checklist",
    icon: ClipboardCheck,
  },
  {
    id: "blindspot",
    label: "Blind Spots",
    icon: Car,
  },
  {
    id: "maneuvers",
    label: "Maneuvers",
    icon: Route,
  },
];

export default function DrivingGuide() {
  const [tab, setTab] = useState("checklist");

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Driving guide</p>
        <h1>Practice the basics before you get behind the wheel.</h1>
        <p className="lede">
          Move through the checklist, learn where blind spots sit, and review the
          maneuvers most beginner drivers repeat often.
        </p>
      </section>

      <section className="panel">
        <div className="tabs" role="tablist" aria-label="Driving guide topics">
          {tabs.map((item) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setTab(item.id)}
                className={tab === item.id ? "tab tab--active" : "tab"}
                role="tab"
                aria-selected={tab === item.id}
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="panel__body">
          {tab === "checklist" && <DrivingChecklist />}
          {tab === "blindspot" && <BlindSpotGuide />}
          {tab === "maneuvers" && <ManeuversGuide />}
        </div>
      </section>

      <section className="section">
        <div className="page-header">
          <p className="eyebrow">Video review</p>
          <h2 className="inline-heading">
            <BookOpen size={22} aria-hidden="true" />
            Driving instruction videos
          </h2>
        </div>
        <VideoSection />
      </section>
    </>
  );
}
