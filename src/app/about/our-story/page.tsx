import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Story & History | Greensteds International School",
  description: "The full Greensteds story — founding in 1936, our growth, traditions, and the values that have shaped the school across 89 years — will be presented in the",
  path: "/about/our-story",
});

export default function AboutOurStoryPage() {
  return (
    <>
      <PageHeader
        overline="Our Heritage"
        heading="Our Story & History"
        subtitle="Nearly nine decades of continuous education in the Kenyan highlands."
      />
      <HoldingSection
        description="The full Greensteds story — founding in 1936, our growth, traditions, and the values that have shaped the school across 89 years — will be presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
