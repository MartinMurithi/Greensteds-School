import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Alumni | Greensteds International School",
  description: "Alumni profiles, reunion events, and the alumni network directory will be featured in the complete site.",
  path: "/community/alumni",
});

export default function CommunityAlumniPage() {
  return (
    <>
      <PageHeader
        overline="Once Greensteds, Always Greensteds"
        heading="Alumni"
        subtitle="The Greensteds alumni network spans decades and continents."
      />
      <HoldingSection
        description="Alumni profiles, reunion events, and the alumni network directory will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
