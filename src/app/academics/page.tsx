import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Academics | Greensteds International School",
  description: "An overview of academic provision at Greensteds International School across all year groups.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        overline="Learning at Greensteds"
        heading="Academics"
        subtitle="The British curriculum, delivered with care and ambition from Early Years through A-Level."
      />
      <HoldingSection
        description="An overview of academic provision at Greensteds International School across all year groups."
      />
      <AdmissionsCTA />
    </>
  );
}
