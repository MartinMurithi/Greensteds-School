import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Events | Greensteds International School",
  description: "The full events calendar will be regularly updated in the complete site.",
  path: "/community/events",
});

export default function CommunityEventsPage() {
  return (
    <>
      <PageHeader
        overline="What's On"
        heading="Events"
        subtitle="School events, open days, sports fixtures, and community activities."
      />
      <HoldingSection
        description="The full events calendar will be regularly updated in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
