import ParallelParkingSimulator from "../components/ParallelParkingSimulator";
import TrafficLightSimulator from "../components/TrafficLightSimulator";
import VoiceChecklist from "../components/VoiceChecklist";

export default function PracticeMode() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Practice mode</p>
        <h1>Repeat the small actions until they feel natural.</h1>
        <p className="lede">
          Run through the voice checklist, step through traffic light decisions, and
          watch the parallel parking movement.
        </p>
      </section>

      <section className="practice-stack">
        <div className="panel">
          <div className="panel__body">
            <h2>Voice Checklist</h2>
            <VoiceChecklist />
          </div>
        </div>

        <div className="panel">
          <div className="panel__body">
            <TrafficLightSimulator />
          </div>
        </div>

        <div className="panel">
          <div className="panel__body">
            <ParallelParkingSimulator />
          </div>
        </div>
      </section>
    </>
  );
}
