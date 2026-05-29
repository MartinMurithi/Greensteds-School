import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/lib/content";

export default function Hero() {
  const { hero } = homepage;
  return (
    <section className="hero" aria-label="Welcome to Greensteds International School">
      <Image
        src="/images/campus/horses.jpg"
        alt="Horses roaming freely on the lush grounds of Greensteds International School, Kenyan highlands"
        fill priority quality={88}
        className="hero-img"
        sizes="100vw"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-body">
        <span className="hero-overline">{hero.overline}</span>
        <h1 className="hero-title serif">
          {hero.headline.split("\n").map((line, i) => (
            <span key={i} style={{ display: "block" }}>{line}</span>
          ))}
        </h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <div className="hero-btns">
          <Link href={hero.primaryHref} className="btn btn-green">{hero.primaryCTA}</Link>
          <Link href={hero.secondaryHref} className="btn btn-outline-white">{hero.secondaryCTA} →</Link>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
