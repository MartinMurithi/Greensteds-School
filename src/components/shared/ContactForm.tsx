"use client";
import { useState } from "react";
import { school } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const TYPES = [
  "Admissions enquiry", "Book a school visit",
  "Boarding information", "Fees & finances",
  "General enquiry", "Alumni enquiry", "Work with us",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); setErrMsg("");
    const f = e.currentTarget;
    const data = {
      firstName:   (f.elements.namedItem("firstName")   as HTMLInputElement).value,
      lastName:    (f.elements.namedItem("lastName")    as HTMLInputElement).value,
      email:       (f.elements.namedItem("email")       as HTMLInputElement).value,
      phone:       (f.elements.namedItem("phone")       as HTMLInputElement).value,
      enquiryType: (f.elements.namedItem("enquiryType") as HTMLSelectElement).value,
      message:     (f.elements.namedItem("message")     as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) { const j = await res.json().catch(() => ({})); throw new Error(j.error ?? "Failed"); }
      setStatus("success"); f.reset();
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="contact-section section">
      <div className="container">
        <div className="contact-grid">
          {/* Form */}
          <div>
            <span className="overline">Send an Enquiry</span>
            <h2 className="form-title serif">We Would Love to Hear from You</h2>

            {status === "success" ? (
              <div className="form-success" role="alert" aria-live="polite">
                <p className="form-success-title serif">Thank you for your enquiry.</p>
                <p className="form-success-body">We will be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName" className="form-label">
                      First Name<span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input id="firstName" name="firstName" type="text" required
                      autoComplete="given-name" className="form-input" placeholder="Jane" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName" className="form-label">
                      Last Name<span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input id="lastName" name="lastName" type="text" required
                      autoComplete="family-name" className="form-input" placeholder="Kamau" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email Address<span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input id="email" name="email" type="email" required
                    autoComplete="email" className="form-input" placeholder="jane@email.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="form-label">
                    Phone <span className="form-optional">(optional)</span>
                  </label>
                  <input id="phone" name="phone" type="tel"
                    autoComplete="tel" className="form-input" placeholder="+254 700 000 000" />
                </div>

                <div className="form-field">
                  <label htmlFor="enquiryType" className="form-label">
                    Enquiry Type<span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <select id="enquiryType" name="enquiryType" required className="form-select">
                    <option value="">Select an enquiry type</option>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label">
                    Message<span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5}
                    className="form-textarea"
                    placeholder="Tell us about your child and what you are looking for in a school..." />
                </div>

                {status === "error" && (
                  <p className="form-error" role="alert">{errMsg}</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="btn btn-green"
                  style={{ opacity: status === "loading" ? 0.65 : 1 }}>
                  {status === "loading" ? "Sending…" : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="overline">Find Us</span>
            <h2 className="contact-details-title serif">{school.name}</h2>

            {[
              { label: "Address", value: `${school.address}\n${school.distanceFromNakuru}` },
              { label: "Phone",   value: school.phone },
              { label: "Email",   value: school.email },
              { label: "WhatsApp",value: school.whatsapp },
            ].map(({ label, value }) => (
              <div key={label} className="contact-item">
                <span className="contact-item-label">{label}</span>
                <span className="contact-item-value">
                  {value.split("\n").map((line, i) => (
                    <span key={i} style={{ display: "block" }}>{line}</span>
                  ))}
                </span>
              </div>
            ))}

            <div className="contact-admissions-box">
              <p className="contact-admissions-label">Admissions Team</p>
              <p className="contact-admissions-text">
                {school.admissionsEmail}<br />{school.admissionsPhone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
