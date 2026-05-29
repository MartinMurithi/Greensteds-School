import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Leadership & Staff | Greensteds International School",
  description: "Full profiles of the Greensteds leadership team, heads of department, and support staff will be featured in the complete site.",
  path: "/about/leadership",
});

export default function AboutLeadershipPage() {
  return (
    <>
      <PageHeader
        overline="Our People"
        heading="Leadership & Staff"
        subtitle="The dedicated team behind the Greensteds experience."
      />
      <HoldingSection
        description="Full profiles of the Greensteds leadership team, heads of department, and support staff will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
