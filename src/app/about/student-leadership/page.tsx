import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Student Leadership | Greensteds International School",
  description: "The prefect body, student council, and student-led initiatives will be fully profiled in the complete site.",
  path: "/about/student-leadership",
});

export default function AboutStudentLeadershipPage() {
  return (
    <>
      <PageHeader
        overline="Student Voice"
        heading="Student Leadership"
        subtitle="At Greensteds, students are active leaders of the school community."
      />
      <HoldingSection
        description="The prefect body, student council, and student-led initiatives will be fully profiled in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
