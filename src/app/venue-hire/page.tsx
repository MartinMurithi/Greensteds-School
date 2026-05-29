import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Venue Hire | Greensteds International School",
  description: "For venue hire enquiries, please contact the school office at office@greenstedsschool.com.",
  path: "/venue-hire",
});

export default function VenueHirePage() {
  return (
    <>
      <PageHeader
        overline="Facilities for Hire"
        heading="Venue Hire"
        subtitle="Greensteds' grounds and facilities are available for hire by approved external organisations."
      />
      <HoldingSection
        description="For venue hire enquiries, please contact the school office at office@greenstedsschool.com."
      />
      <AdmissionsCTA />
    </>
  );
}
