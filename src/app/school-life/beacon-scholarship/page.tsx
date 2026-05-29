import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "The Beacon Scholarship | Greensteds International School",
  description: "Full Beacon Scholarship criteria, application process, and current scholars will be presented in the complete engagement.",
  path: "/school-life/beacon-scholarship",
});

export default function SchoolLifeBeaconScholarshipPage() {
  return (
    <>
      <PageHeader
        overline="Academic Excellence Recognised"
        heading="The Beacon Scholarship"
        subtitle="Greensteds celebrates academic ambition through the Beacon Scholarship programme."
      />
      <HoldingSection
        description="Full Beacon Scholarship criteria, application process, and current scholars will be presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
