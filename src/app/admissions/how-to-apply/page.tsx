import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "How to Apply | Greensteds International School",
  description: "The full application process, entry requirements, assessment information, and next steps will be presented in the complete engagement.",
  path: "/admissions/how-to-apply",
});

export default function AdmissionsHowToApplyPage() {
  return (
    <>
      <PageHeader
        overline="Starting the Journey"
        heading="How to Apply"
        subtitle="We welcome applications from families at all stages of the academic year."
      />
      <HoldingSection
        description="The full application process, entry requirements, assessment information, and next steps will be presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
