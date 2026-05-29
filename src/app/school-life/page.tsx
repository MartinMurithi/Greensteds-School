import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "School Life | Greensteds International School",
  description: "An overview of life at Greensteds beyond the classroom.",
  path: "/school-life",
});

export default function SchoolLifePage() {
  return (
    <>
      <PageHeader
        overline="Beyond the Classroom"
        heading="School Life"
        subtitle="A rich, balanced experience — boarding, sport, arts, service, and community."
      />
      <HoldingSection
        description="An overview of life at Greensteds beyond the classroom."
      />
      <AdmissionsCTA />
    </>
  );
}
