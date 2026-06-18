const videos = [
  {
    title: "How to Drive a Car for Beginners",
    embed: "https://www.youtube.com/embed/0-Mr4A6gJ4M",
  },
  {
    title: "Parallel Parking Tutorial",
    embed: "https://www.youtube.com/embed/l4LcfZeS4qw",
  },
  {
    title: "Defensive Driving Tips",
    embed: "https://www.youtube.com/embed/8wKjA2mXxZA",
  },
];

export default function VideoSection() {
  return (
    <div className="grid video-grid">
      {videos.map((video) => (
        <article key={video.title} className="video-card">
          <iframe
            src={video.embed}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          <div className="video-card__body">
            <h3>{video.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
