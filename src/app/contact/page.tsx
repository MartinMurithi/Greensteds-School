import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Greensteds International School",
  description: "Get in touch with Greensteds International School. We welcome enquiries from prospective families and current stakeholders.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline="Reach Out"
        heading="Contact Us"
        subtitle="We welcome enquiries from prospective families, current stakeholders, and the wider community. Our team will respond within one working day."
      />
      <ContactForm />
    </>
  );
}
