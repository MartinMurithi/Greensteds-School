import Link from "next/link";
import { homepage } from "@/lib/content";

export default function NewsPreview() {
  return (
    <section className="news section" aria-labelledby="news-heading">
      <div className="container">
        <div className="news-header">
          <div>
            <span className="overline">Latest from the School</span>
            <h2 id="news-heading" className="section-title serif">News &amp; Stories</h2>
          </div>
          <Link href="/community/news" className="news-view-all">View all news →</Link>
        </div>
        <div className="news-grid">
          {homepage.news.map(item => (
            <article key={item.title} className="news-card">
              <div className="news-card-top" aria-hidden="true" />
              <div className="news-card-body">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title serif">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <Link href={item.href} className="news-link"
                  aria-label={`Read more about ${item.title}`}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
