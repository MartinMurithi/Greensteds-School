import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Community | Greensteds International School",
  description: "News, events, alumni stories, and resources for the Greensteds community.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        overline="The Greensteds Community"
        heading="Community"
        subtitle="Connecting current families, alumni, and the broader Greensteds network."
      />
      <HoldingSection
        description="News, events, alumni stories, and resources for the Greensteds community."
      />
      <AdmissionsCTA />
    </>
  );
}
