/**
 * Metadata helpers — Greensteds International School
 *
 * Centralised SEO metadata generation.
 * Used in every page.tsx via generateMetadata().
 */
import type { Metadata } from "next";
import { school } from "./content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://greensteds-redesign.vercel.app";
const OG_IMAGE = `${BASE_URL}/images/hero/compound.jpg`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:  `${school.name} | British Curriculum · Nakuru, Kenya · Est. ${school.est}`,
    template: `%s | ${school.name}`,
  },
  description:
    "Greensteds International School is a CIS-accredited co-educational boarding and day school in the Kenyan highlands, offering the British curriculum from Early Years to A-Level.",
  keywords: [
    "Greensteds International School",
    "British curriculum school Kenya",
    "boarding school Nakuru",
    "CIS accredited school Kenya",
    "international school Kenya",
    "IGCSE school Kenya",
    "A-Level school Kenya",
    "boarding school East Africa",
  ],
  authors: [{ name: school.name }],
  creator: school.name,
  openGraph: {
    type:        "website",
    locale:      "en_GB",
    url:         BASE_URL,
    siteName:    school.name,
    title:       `${school.name} | British Curriculum · Nakuru, Kenya`,
    description: `A CIS-accredited co-educational boarding and day school in the Kenyan highlands. Est. ${school.est}.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${school.name} campus` }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${school.name} | British Curriculum · Nakuru, Kenya`,
    description: `A CIS-accredited co-educational boarding and day school in the Kenyan highlands. Est. ${school.est}.`,
    images:      [OG_IMAGE],
  },
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:          true,
      follow:         true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
  icons: {
    icon:   "/favicon.ico",
    apple:  "/apple-touch-icon.png",
  },
};

/**
 * Generate page-level metadata
 * Usage: export const metadata = generateMetadata({ title, description })
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title:       string;
  description: string;
  path?:       string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates:  { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${school.name} campus` }],
    },
    twitter: { title, description, images: [OG_IMAGE] },
  };
}
