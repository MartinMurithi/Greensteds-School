import Link from "next/link";
import { admissionsCTA } from "@/lib/content";

export default function AdmissionsCTA() {
  return (
    <section className="cta-section" aria-label="Admissions call to action">
      <div className="container">
        <h2 className="cta-title serif">{admissionsCTA.heading}</h2>
        <p className="cta-body">{admissionsCTA.body}</p>
        <Link href={admissionsCTA.buttonHref} className="btn btn-gold">
          {admissionsCTA.buttonLabel}
        </Link>
      </div>
    </section>
  );
}
