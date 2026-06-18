export default function ProgressTracker({ items = [] }) {
  return (
    <div className="progress-list">
      {items.map((item) => (
        <div key={item.label} className="progress-list__row">
          <div className="progress-list__label">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="progress" aria-label={`${item.label}: ${item.value}%`}>
            <div className="progress__bar" style={{ width: `${item.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
