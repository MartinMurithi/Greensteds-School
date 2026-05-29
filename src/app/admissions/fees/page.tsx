import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Fees & Finances | Greensteds International School",
  description: "Full fee schedules for day and boarding students, payment terms, and scholarship information will be presented in the complete engagement.",
  path: "/admissions/fees",
});

export default function AdmissionsFeesPage() {
  return (
    <>
      <PageHeader
        overline="Investment in Excellence"
        heading="Fees & Finances"
        subtitle="Greensteds offers a world-class education at a fee structure appropriate to East Africa's international school community."
      />
      <HoldingSection
        description="Full fee schedules for day and boarding students, payment terms, and scholarship information will be presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
