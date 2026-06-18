import RoadSignCard from "../components/RoadSignCard";
import { roadSigns } from "../data/roadSigns";

export default function RoadSigns() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Road signs</p>
        <h1>Recognize signs quickly and calmly.</h1>
        <p className="lede">
          Review the shape, label, and meaning of common signs before taking a
          permit or DMV knowledge test.
        </p>
      </section>

      <section className="grid road-signs-grid">
        {roadSigns.map((sign) => (
          <RoadSignCard key={sign.name} sign={sign} />
        ))}
      </section>
    </>
  );
}
