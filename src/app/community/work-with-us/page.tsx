import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Work With Us | Greensteds International School",
  description: "Current vacancies, the application process, and staff culture at Greensteds will be featured in the complete site.",
  path: "/community/work-with-us",
});

export default function CommunityWorkWithUsPage() {
  return (
    <>
      <PageHeader
        overline="Join Our Team"
        heading="Work With Us"
        subtitle="Greensteds is always interested in hearing from talented, passionate educators."
      />
      <HoldingSection
        description="Current vacancies, the application process, and staff culture at Greensteds will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
