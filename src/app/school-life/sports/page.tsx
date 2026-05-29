import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Sports | Greensteds International School",
  description: "Sports teams, facilities, fixtures, achievements, and the physical education curriculum will be fully presented in the complete engagement.",
  path: "/school-life/sports",
});

export default function SchoolLifeSportsPage() {
  return (
    <>
      <PageHeader
        overline="Physical Excellence"
        heading="Sports"
        subtitle="Greensteds students compete, train, and develop across a wide range of sporting disciplines."
      />
      <HoldingSection
        description="Sports teams, facilities, fixtures, achievements, and the physical education curriculum will be fully presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
