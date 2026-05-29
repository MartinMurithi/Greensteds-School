import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "About Greensteds | Greensteds International School",
  description: "Learn about the founding and identity of Greensteds International School — its history, values, leadership team, and internationally recognised accreditati",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        overline="The School"
        heading="About Greensteds"
        subtitle="Founded in 1936, Greensteds has shaped generations of young people in the heart of East Africa."
      />
      <HoldingSection
        description="Learn about the founding and identity of Greensteds International School — its history, values, leadership team, and internationally recognised accreditations."
      />
      <AdmissionsCTA />
    </>
  );
}
