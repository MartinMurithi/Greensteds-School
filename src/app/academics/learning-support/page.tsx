import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Learning Support | Greensteds International School",
  description: "Our Learning Support programme — specialist staff, individual learning plans, and the Ready to Learn initiative — will be fully presented in the complete e",
  path: "/academics/learning-support",
});

export default function AcademicsLearningSupportPage() {
  return (
    <>
      <PageHeader
        overline="Every Child Matters"
        heading="Learning Support"
        subtitle="Greensteds believes every child deserves the support to reach their full potential."
      />
      <HoldingSection
        description="Our Learning Support programme — specialist staff, individual learning plans, and the Ready to Learn initiative — will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
