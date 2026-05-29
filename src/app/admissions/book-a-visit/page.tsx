import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Book a Visit | Greensteds International School",
  description: "To arrange a visit, please use the contact form or call our admissions team directly on +254 724 394 451.",
  path: "/admissions/book-a-visit",
});

export default function AdmissionsBookAVisitPage() {
  return (
    <>
      <PageHeader
        overline="Come and See Us"
        heading="Book a Visit"
        subtitle="There is no substitute for visiting Greensteds in person. We welcome families to experience campus life firsthand."
      />
      <HoldingSection
        description="To arrange a visit, please use the contact form or call our admissions team directly on +254 724 394 451."
      />
      <AdmissionsCTA />
    </>
  );
}
