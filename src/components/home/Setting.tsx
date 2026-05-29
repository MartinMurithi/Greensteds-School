import Image from "next/image";
import { homepage } from "@/lib/content";

export default function Setting() {
  return (
    <section className="setting" aria-label="The Greensteds setting — Kenyan highlands">
      <Image
        src="/images/campus/horses.jpg"
        alt="Horses roaming the wide open grounds of Greensteds International School with the Kenyan highlands beyond"
        fill quality={85} className="setting-img"
        sizes="100vw"
      />
      <div className="setting-overlay" aria-hidden="true" />
      <div className="setting-body">
        <span className="gold-bar" style={{ margin: "0 auto 2rem" }} aria-hidden="true" />
        <h2 className="setting-title serif">
          {homepage.setting.headline.split("\n").map((line, i) => (
            <span key={i} style={{ display: "block" }}>{line}</span>
          ))}
        </h2>
        <p className="setting-sub">{homepage.setting.subline}</p>
      </div>
    </section>
  );
}
