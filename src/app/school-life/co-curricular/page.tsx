import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Co-curricular Activities | Greensteds International School",
  description: "The full co-curricular programme, clubs, societies, and enrichment opportunities will be fully presented in the complete engagement.",
  path: "/school-life/co-curricular",
});

export default function SchoolLifeCoCurricularPage() {
  return (
    <>
      <PageHeader
        overline="Passions & Pursuits"
        heading="Co-curricular Activities"
        subtitle="Over 40 co-curricular activities — from music and drama to community service and digital skills."
      />
      <HoldingSection
        description="The full co-curricular programme, clubs, societies, and enrichment opportunities will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
