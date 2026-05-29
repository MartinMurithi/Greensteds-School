import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Junior School | Greensteds International School",
  description: "The Junior School curriculum, enrichment activities, and staff profiles will be fully presented in the complete engagement.",
  path: "/academics/junior-school",
});

export default function AcademicsJuniorSchoolPage() {
  return (
    <>
      <PageHeader
        overline="Years 1 to 6"
        heading="Junior School"
        subtitle="Where curiosity is celebrated and strong foundations are built."
      />
      <HoldingSection
        description="The Junior School curriculum, enrichment activities, and staff profiles will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
