import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Academic Results | Greensteds International School",
  description: "IGCSE and A-Level results analysis, university destinations, and academic achievement data will be fully presented in the complete engagement.",
  path: "/academics/academic-results",
});

export default function AcademicsAcademicResultsPage() {
  return (
    <>
      <PageHeader
        overline="Proven Excellence"
        heading="Academic Results"
        subtitle="Greensteds students consistently achieve outstanding results at IGCSE and A-Level."
      />
      <HoldingSection
        description="IGCSE and A-Level results analysis, university destinations, and academic achievement data will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
