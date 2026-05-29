import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Downloads & Forms | Greensteds International School",
  description: "Admission forms, school policies, joining instructions, and support documents will be available here in the complete site.",
  path: "/admissions/downloads",
});

export default function AdmissionsDownloadsPage() {
  return (
    <>
      <PageHeader
        overline="Resources & Forms"
        heading="Downloads & Forms"
        subtitle="All application forms, joining instructions, and policy documents in one place."
      />
      <HoldingSection
        description="Admission forms, school policies, joining instructions, and support documents will be available here in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
