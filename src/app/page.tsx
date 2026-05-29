import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content";
import Hero           from "@/components/home/Hero";
import Stats          from "@/components/home/Stats";
import Headmaster     from "@/components/home/Headmaster";
import LifeTiles      from "@/components/home/LifeTiles";
import Setting        from "@/components/home/Setting";
import Testimonials   from "@/components/home/Testimonials";
import NewsPreview    from "@/components/home/NewsPreview";
import Accreditations from "@/components/home/Accreditations";
import AdmissionsCTA  from "@/components/shared/AdmissionsCTA";

export const metadata: Metadata = generatePageMetadata({
  title:       pageMeta.home.title,
  description: pageMeta.home.description,
  path:        "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Headmaster />
      <LifeTiles />
      <Setting />
      <Testimonials />
      <NewsPreview />
      <Accreditations />
      <AdmissionsCTA />
    </>
  );
}
