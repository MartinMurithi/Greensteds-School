import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Current Families | Greensteds International School",
  description: "The current families portal, parent communications, and family resources will be accessible here in the complete site.",
  path: "/community/current-families",
});

export default function CommunityCurrentFamiliesPage() {
  return (
    <>
      <PageHeader
        overline="For Families"
        heading="Current Families"
        subtitle="Resources, portal access, and communications for families currently enrolled at Greensteds."
      />
      <HoldingSection
        description="The current families portal, parent communications, and family resources will be accessible here in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
