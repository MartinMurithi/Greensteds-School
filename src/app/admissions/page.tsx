import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Admissions | Greensteds International School",
  description: "A complete guide to joining Greensteds International School.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        overline="Joining Greensteds"
        heading="Admissions"
        subtitle="Everything a family needs to know — from first enquiry to first day."
      />
      <HoldingSection
        description="A complete guide to joining Greensteds International School."
      />
      <AdmissionsCTA />
    </>
  );
}
