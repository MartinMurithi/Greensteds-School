import Link from "next/link";
import Image from "next/image";
import { school, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Greensteds International School — home">
              <Image
                src="/logo.png"
                alt="Greensteds International School"
                width={180} height={54}
                className="footer-logo"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="footer-tagline">{footer.tagline}</p>
            <p className="footer-est">{footer.est}</p>
            <div className="footer-contact-row">
              <a href={`mailto:${school.email}`} className="footer-contact-link">
                {school.email}
              </a>
              <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="footer-contact-link">
                {school.phone}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map(col => (
            <div key={col.heading}>
              <h3 className="footer-col-heading">{col.heading}</h3>
              <ul className="footer-col-links">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-col-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{footer.copyright}</p>
          <Link href="/venue-hire" className="footer-venue-link">Venue Hire</Link>
        </div>
      </div>
    </footer>
  );
}
