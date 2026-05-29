import type { Metadata } from "next";
import { siteMetadata } from "@/lib/metadata";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SchemaOrg from "@/components/shared/SchemaOrg";
import "@/app/globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
