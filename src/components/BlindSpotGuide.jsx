import { AlertTriangle, Car, Eye } from "lucide-react";

export default function BlindSpotGuide() {
  return (
    <div>
      <h2>Blind Spot Awareness</h2>

      <div className="blindspot-visual">
        <div className="blindspot-car">
          <div className="blindspot-zone blindspot-zone--left">Blind spot</div>
          <Car size={132} aria-hidden="true" />
          <div className="blindspot-zone blindspot-zone--right">Blind spot</div>
        </div>

        <div className="grid grid--2">
          <article className="info-card">
            <Eye color="var(--primary)" aria-hidden="true" />

            <h3>What is a blind spot?</h3>
            <p>Areas beside and behind your car that mirrors may not show clearly.</p>
          </article>

          <article className="info-card">
            <AlertTriangle color="var(--danger)" aria-hidden="true" />

            <h3>Safety rule</h3>
            <p>Check mirrors, signal, then turn your head before changing lanes.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
