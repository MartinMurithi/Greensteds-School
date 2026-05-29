import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Senior School | Greensteds International School",
  description: "Senior School curriculum, subject offerings, IGCSE results, and academic support will be fully presented in the complete engagement.",
  path: "/academics/senior-school",
});

export default function AcademicsSeniorSchoolPage() {
  return (
    <>
      <PageHeader
        overline="Years 7 to 11"
        heading="Senior School"
        subtitle="Rigorous Cambridge IGCSE preparation within a supportive school community."
      />
      <HoldingSection
        description="Senior School curriculum, subject offerings, IGCSE results, and academic support will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
