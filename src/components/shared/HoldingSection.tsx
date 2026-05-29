import Link from "next/link";

interface HoldingSectionProps {
  description: string;
  preview?:    string;
}

export default function HoldingSection({ description, preview }: HoldingSectionProps) {
  return (
    <section className="holding">
      <div className="container">
        <div className="holding-inner">
          <span className="gold-bar" style={{ margin: "0 auto" }} aria-hidden="true" />
          <p className="holding-desc">{description}</p>
          {preview && <p style={{ fontSize: "13px", color: "var(--light)", fontStyle: "italic", marginBottom: "var(--space-4)" }}>{preview}</p>}
          <div className="holding-badge" role="status">
            <span className="holding-dot" aria-hidden="true" />
            Full content being carefully prepared
          </div>
          <div className="holding-btns">
            <Link href="/" className="btn btn-green">Return to Homepage</Link>
            <Link href="/contact" className="btn btn-outline-green">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
