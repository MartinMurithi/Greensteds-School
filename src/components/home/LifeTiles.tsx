import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/lib/content";

export default function LifeTiles() {
  return (
    <section className="tiles section" aria-labelledby="tiles-heading">
      <div className="container">
        <div className="section-header">
          <span className="overline">Life at Greensteds</span>
          <h2 id="tiles-heading" className="section-title serif">Everything a Child Needs to Flourish</h2>
        </div>
        <div className="tiles-grid">
          {homepage.tiles.map(tile => (
            <Link key={tile.title} href={tile.href} className="tile"
              aria-label={`${tile.title} — ${tile.subtitle}`}>
              <Image src={tile.image} alt={tile.alt} fill className="tile-img"
                sizes="(max-width: 480px) 50vw, (max-width: 900px) 50vw, 25vw" />
              <div className="tile-overlay" aria-hidden="true" />
              <div className="tile-body">
                <h3 className="tile-title serif">{tile.title}</h3>
                <p className="tile-sub">{tile.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
