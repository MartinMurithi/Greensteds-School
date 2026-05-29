import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/lib/content";

export default function Accreditations() {
  return (
    <section className="accreditations" aria-labelledby="accred-heading">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <span className="overline">Internationally Recognised</span>
          <h2 id="accred-heading" className="section-title serif"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
            Our Accreditations &amp; Affiliations
          </h2>
        </div>
        <div className="accred-logos">
          {homepage.accreditations.map(acc => (
            <div key={acc.name} className="accred-logo" title={acc.name}>
              <Image
                src={acc.src} alt={acc.name}
                width={acc.width} height={acc.height}
                style={{ height: "32px", width: "auto" }}
                sizes="120px"
              />
            </div>
          ))}
        </div>
        <Link href="/about/accreditations" className="accred-link">
          Learn about our accreditations →
        </Link>
      </div>
    </section>
  );
}
