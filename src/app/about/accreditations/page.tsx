import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/shared/PageHeader";
import HoldingSection from "@/components/shared/HoldingSection";
import AdmissionsCTA from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Accreditations & Affiliations | Greensteds International School",
  description: "Full detail on Cambridge International, CIS, BTEC, ABRSM, LAMDA, LCM, KAIS, and ICDL will be presented in the complete engagement.",
  path: "/about/accreditations",
});

export default function AboutAccreditationsPage() {
  return (
    <>
      <PageHeader
        overline="Standards of Excellence"
        heading="Accreditations & Affiliations"
        subtitle="Greensteds holds internationally recognised accreditations across academics, music, drama, and computing."
      />
      <HoldingSection
        description="Full detail on Cambridge International, CIS, BTEC, ABRSM, LAMDA, LCM, KAIS, and ICDL will be presented in the complete engagement."
      />
      <AdmissionsCTA />
    </>
  );
}
