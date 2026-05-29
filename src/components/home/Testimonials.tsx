import { homepage } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="testimonials section" aria-labelledby="testi-heading">
      <div className="container">
        <div className="section-header">
          <span className="overline">Voices</span>
          <h2 id="testi-heading" className="section-title serif">In Their Own Words</h2>
        </div>
        <div className="testi-grid">
          {homepage.testimonials.map(t => (
            <figure key={t.name} className="testi-card">
              <span className="testi-quote-mark serif" aria-hidden="true">&ldquo;</span>
              <blockquote>
                <p className="testi-text">{t.quote}</p>
              </blockquote>
              <figcaption className="testi-foot">
                <div className="testi-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
