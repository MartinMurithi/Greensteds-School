import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Early Years | Greensteds International School",
  description: "The Early Years programme — curriculum detail, daily structure, and pastoral approach — will be fully presented in the complete engagement.",
  path: "/academics/early-years",
});

export default function AcademicsEarlyYearsPage() {
  return (
    <>
      <PageHeader
        overline="Foundation Stage"
        heading="Early Years"
        subtitle="A nurturing, structured environment for children from Reception age."
      />
      <HoldingSection
        description="The Early Years programme — curriculum detail, daily structure, and pastoral approach — will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
