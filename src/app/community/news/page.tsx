import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "News & Stories | Greensteds International School",
  description: "The full news archive, press coverage, and school stories will be featured in the complete site.",
  path: "/community/news",
});

export default function CommunityNewsPage() {
  return (
    <>
      <PageHeader
        overline="School Stories"
        heading="News & Stories"
        subtitle="The latest from Greensteds — achievements, events, and school life."
      />
      <HoldingSection
        description="The full news archive, press coverage, and school stories will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
