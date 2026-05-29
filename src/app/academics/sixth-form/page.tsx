import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Sixth Form | Greensteds International School",
  description: "Sixth Form subject choices, university destinations, and academic mentorship will be fully presented in the complete engagement.",
  path: "/academics/sixth-form",
});

export default function AcademicsSixthFormPage() {
  return (
    <>
      <PageHeader
        overline="Years 12 & 13"
        heading="Sixth Form"
        subtitle="A-Level preparation and university guidance in a focused, collegiate environment."
      />
      <HoldingSection
        description="Sixth Form subject choices, university destinations, and academic mentorship will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
