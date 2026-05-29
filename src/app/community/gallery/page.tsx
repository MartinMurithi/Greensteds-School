import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Photo Gallery | Greensteds International School",
  description: "The full photo gallery will be featured in the complete site.",
  path: "/community/gallery",
});

export default function CommunityGalleryPage() {
  return (
    <>
      <PageHeader
        overline="Life in Pictures"
        heading="Photo Gallery"
        subtitle="A visual record of life at Greensteds — events, achievements, and everyday moments."
      />
      <HoldingSection
        description="The full photo gallery will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
