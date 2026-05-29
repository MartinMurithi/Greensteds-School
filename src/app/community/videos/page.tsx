import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Videos | Greensteds International School",
  description: "Video content from school events, life, and official productions will be featured in the complete site.",
  path: "/community/videos",
});

export default function CommunityVideosPage() {
  return (
    <>
      <PageHeader
        overline="See Greensteds in Motion"
        heading="Videos"
        subtitle="Greensteds through video — school life, events, and achievements captured on film."
      />
      <HoldingSection
        description="Video content from school events, life, and official productions will be featured in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
