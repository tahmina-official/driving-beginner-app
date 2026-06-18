export default function RoadSignCard({ sign }) {
  return (
    <article className="road-sign-card">
      <div className={`sign-preview sign-preview--${sign.type}`} aria-hidden="true">
        <span>{sign.label}</span>
      </div>

      <div>
        <h2>{sign.name}</h2>
        <p>{sign.meaning}</p>
      </div>
    </article>
  );
}
