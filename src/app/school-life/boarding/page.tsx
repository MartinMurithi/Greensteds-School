import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Day & Boarding | Greensteds International School",
  description: "The full boarding experience — house structure, daily life, pastoral care, fees, and what to expect — will be fully presented in the complete engagement.",
  path: "/school-life/boarding",
});

export default function SchoolLifeBoardingPage() {
  return (
    <>
      <PageHeader
        overline="A Home Away from Home"
        heading="Day & Boarding"
        subtitle="Boarding at Greensteds is a community, a tradition, and one of the most formative aspects of a Greensteds education."
      />
      <HoldingSection
        description="The full boarding experience — house structure, daily life, pastoral care, fees, and what to expect — will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
