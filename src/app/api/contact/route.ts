/**
 * Contact Form API Route — POST /api/contact
 *
 * Validates incoming form data and sends email via Resend.
 * Returns JSON with success/error status.
 *
 * Environment variables required:
 *   RESEND_API_KEY    — from resend.com dashboard
 *   CONTACT_TO_EMAIL  — email address to receive enquiries
 *   NEXT_PUBLIC_BASE_URL — site URL for email branding
 */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { school } from "@/lib/content";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Validation ───────────────────────────────────────────────────────────────
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000);
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Parse body
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, enquiryType, message } = body;

  // Validate required fields
  if (!firstName || !lastName || !email || !enquiryType || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Send email
  try {
    await resend.emails.send({
      from:    `${school.name} Website <onboarding@resend.dev>`,
      to:      [process.env.CONTACT_TO_EMAIL ?? school.email],
      replyTo: email,
      subject: `New Website Enquiry — ${sanitize(enquiryType)} from ${sanitize(firstName)} ${sanitize(lastName)}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1C1C1C;">
          <div style="background: #006633; padding: 24px 32px; margin-bottom: 32px;">
            <h1 style="color: white; font-size: 20px; margin: 0; font-family: Georgia, serif;">
              New Enquiry — ${school.name} Website
            </h1>
          </div>

          <div style="padding: 0 32px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; color: #555; font-family: sans-serif; font-size: 13px; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; font-family: sans-serif; font-size: 14px;">${sanitize(firstName)} ${sanitize(lastName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; color: #555; font-family: sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; font-family: sans-serif; font-size: 14px;"><a href="mailto:${sanitize(email)}" style="color: #006633;">${sanitize(email)}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; color: #555; font-family: sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; font-family: sans-serif; font-size: 14px;">${sanitize(phone)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; color: #555; font-family: sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Enquiry Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E0DBD4; font-family: sans-serif; font-size: 14px;">${sanitize(enquiryType)}</td>
              </tr>
            </table>

            <div style="margin-top: 28px;">
              <p style="font-family: sans-serif; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #555; margin-bottom: 10px;">Message</p>
              <div style="background: #F5F5F3; border-left: 3px solid #006633; padding: 16px 20px; font-family: sans-serif; font-size: 14px; line-height: 1.7; color: #1C1C1C;">
                ${sanitize(message).replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #E0DBD4; font-family: sans-serif; font-size: 12px; color: #888;">
              This enquiry was submitted via the ${school.name} website contact form.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[contact/route] Resend error:", err);
    return NextResponse.json(
      { error: "We were unable to send your message. Please email us directly at " + school.email },
      { status: 500 }
    );
  }
}
