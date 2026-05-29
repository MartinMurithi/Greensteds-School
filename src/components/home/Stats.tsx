import { homepage } from "@/lib/content";

export default function Stats() {
  return (
    <section className="stats" aria-label="Key school statistics">
      <div className="container">
        <dl className="stats-grid">
          {homepage.stats.map(stat => (
            <div key={stat.value} className="stat-item">
              <span className="stat-bar" aria-hidden="true" />
              <dt className="stat-value serif">{stat.value}</dt>
              <dd className="stat-label">
                {stat.label.split("\n").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>{line}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
