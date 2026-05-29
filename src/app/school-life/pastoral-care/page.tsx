import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Pastoral Care | Greensteds International School",
  description: "Our pastoral care approach — form tutors, counselling, wellbeing programmes, and the house system — will be fully presented in the complete engagement.",
  path: "/school-life/pastoral-care",
});

export default function SchoolLifePastoralCarePage() {
  return (
    <>
      <PageHeader
        overline="Student Wellbeing"
        heading="Pastoral Care"
        subtitle="Every Greensteds student is known, valued, and supported."
      />
      <HoldingSection
        description="Our pastoral care approach — form tutors, counselling, wellbeing programmes, and the house system — will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
