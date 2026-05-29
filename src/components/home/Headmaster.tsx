import Image from "next/image";
import { homepage } from "@/lib/content";

export default function Headmaster() {
  const { headmaster } = homepage;
  return (
    <section className="headmaster section" aria-labelledby="hm-heading">
      <div className="container">
        <div className="headmaster-grid">
          <div className="headmaster-photo-wrap">
            <div className="headmaster-photo">
              <Image
                src="/images/people/headmaster.jpg"
                alt={`${headmaster.name}, ${headmaster.title}`}
                fill className="object-cover object-top"
                sizes="220px"
              />
            </div>
            <div>
              <p className="headmaster-name">{headmaster.name}</p>
              <p className="headmaster-role">CEO &amp; Headmaster</p>
            </div>
          </div>

          <div className="headmaster-content">
            <span className="overline">{headmaster.overline}</span>
            <h2 id="hm-heading" className="headmaster-heading serif">{headmaster.heading}</h2>
            {headmaster.paragraphs.map((p, i) => (
              <p key={i} className="headmaster-text">{p}</p>
            ))}
            <div className="headmaster-sig">
              <p className="headmaster-sig-name serif">— {headmaster.name}</p>
              <p className="headmaster-sig-title">{headmaster.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
