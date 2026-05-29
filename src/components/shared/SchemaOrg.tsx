/**
 * Schema.org structured data — EducationalOrganization
 * Helps Google understand and display rich results for the school.
 */
import { school } from "@/lib/content";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": school.name,
    "alternateName": school.shortName,
    "url": process.env.NEXT_PUBLIC_BASE_URL ?? "https://greensteds-redesign.vercel.app",
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/logo.png`,
    "foundingDate": school.est,
    "description": `${school.name} is a CIS-accredited co-educational boarding and day school in ${school.location}, offering the British curriculum from Early Years to A-Level.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nakuru",
      "addressCountry": "KE",
      "streetAddress": "Private Bag",
    },
    "telephone": school.phone,
    "email": school.email,
    "sameAs": [],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "CIS Accreditation" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Cambridge International Examinations" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
