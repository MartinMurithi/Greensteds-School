/**
 * Navigation Structure — Greensteds International School
 *
 * This is the single source of truth for ALL navigation links.
 * Update here and the nav + footer update automatically.
 * Every route listed here must have a corresponding page.tsx file.
 */
import type { NavItem } from "./types";

export const navigation: NavItem[] = [
  {
    label: "About",
    href:  "/about",
    children: [
      { label: "Our Story & History",       href: "/about/our-story" },
      { label: "Welcome from the Headmaster",href: "/about/headmaster" },
      { label: "Leadership & Staff",         href: "/about/leadership" },
      { label: "Student Leadership",         href: "/about/student-leadership" },
      { label: "Accreditations",             href: "/about/accreditations" },
    ],
  },
  {
    label: "Academics",
    href:  "/academics",
    children: [
      { label: "Early Years",       href: "/academics/early-years" },
      { label: "Junior School",     href: "/academics/junior-school" },
      { label: "Senior School",     href: "/academics/senior-school" },
      { label: "Sixth Form",        href: "/academics/sixth-form" },
      { label: "Learning Support",  href: "/academics/learning-support" },
      { label: "Academic Results",  href: "/academics/academic-results" },
    ],
  },
  {
    label: "School Life",
    href:  "/school-life",
    children: [
      { label: "Day & Boarding",          href: "/school-life/boarding" },
      { label: "Pastoral Care",           href: "/school-life/pastoral-care" },
      { label: "Sports",                  href: "/school-life/sports" },
      { label: "Co-curricular Activities",href: "/school-life/co-curricular" },
      { label: "The Beacon Scholarship",  href: "/school-life/beacon-scholarship" },
    ],
  },
  {
    label: "Admissions",
    href:  "/admissions",
    children: [
      { label: "How to Apply",      href: "/admissions/how-to-apply" },
      { label: "Fees & Finances",   href: "/admissions/fees" },
      { label: "Book a Visit",      href: "/admissions/book-a-visit" },
      { label: "Downloads & Forms", href: "/admissions/downloads" },
    ],
  },
  {
    label: "Community",
    href:  "/community",
    children: [
      { label: "Current Families", href: "/community/current-families" },
      { label: "Alumni",           href: "/community/alumni" },
      { label: "News & Stories",   href: "/community/news" },
      { label: "Photo Gallery",    href: "/community/gallery" },
      { label: "Videos",           href: "/community/videos" },
      { label: "Events",           href: "/community/events" },
      { label: "Work With Us",     href: "/community/work-with-us" },
    ],
  },
  {
    label: "Contact",
    href:  "/contact",
  },
];

/** Footer-only links — not in main nav */
export const footerOnlyLinks = [
  { label: "Venue Hire", href: "/venue-hire" },
];
