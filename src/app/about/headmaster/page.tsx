import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Welcome from the Headmaster | Greensteds International School",
  description: "Mr. Leon Bareham's full headmaster's message, vision for the school, and leadership philosophy will be presented in the complete site.",
  path: "/about/headmaster",
});

export default function AboutHeadmasterPage() {
  return (
    <>
      <PageHeader
        overline="A Message from the Head"
        heading="Welcome from the Headmaster"
        subtitle="A personal welcome from Mr. Leon Bareham, CEO & Headmaster."
      />
      <HoldingSection
        description="Mr. Leon Bareham's full headmaster's message, vision for the school, and leadership philosophy will be presented in the complete site."
      />
      <AdmissionsCTA />
    </>
  );
}
