/**
 * Site Content — Greensteds International School
 *
 * ALL text content lives here. To update any copy on the site,
 * edit this file only. No touching layout or component files.
 *
 * Structure mirrors the page hierarchy.
 */

// ── School Identity ─────────────────────────────────────────────────────────
export const school = {
  name:      "Greensteds International School",
  shortName: "Greensteds",
  tagline:   "Where British Tradition Meets the Heart of Africa",
  est:       "1936",
  years:     "89",
  location:  "Nakuru, Kenya",
  address:   "Private Bag, Nakuru, Kenya",
  phone:     "+254 717 236 650",
  whatsapp:  "+254 717 236 650",
  email:     "office@greenstedsschool.com",
  admissionsEmail: "admissions@greenstedsschool.com",
  admissionsPhone: "+254 724 394 451",
  distanceFromNakuru: "16km from Nakuru town",
  nearbyLandmark: "Minutes from Nakuru National Park",
};

// ── Homepage ────────────────────────────────────────────────────────────────
export const homepage = {
  hero: {
    overline:    `Est. ${school.est} · ${school.location}`,
    headline:    "Where British Tradition\nMeets the Heart of Africa",
    subheadline: "A co-educational boarding and day school in the Kenyan highlands, offering the British curriculum from Early Years through A-Level.",
    primaryCTA:  "Discover the School",
    primaryHref: "/about",
    secondaryCTA:"Book a Visit",
    secondaryHref:"/admissions/book-a-visit",
  },

  stats: [
    { value: "89",    label: "Years of continuous\neducational heritage" },
    { value: "CIS",   label: "Internationally accredited\nstandard of excellence" },
    { value: "100%",  label: "University placements\nfor all graduates" },
  ],

  headmaster: {
    overline: "A Message from Our Headmaster",
    heading:  "Education That Shapes Character",
    paragraphs: [
      "Welcome and thank you for visiting the Greensteds International School website. We are deliberate and enthusiastic about the education we offer and are especially proud of our students. Greensteds is an academically non-selective school and the education we offer extends beyond the academic — we take pride in providing opportunities for each child to develop skills that will support growth in their individual personalities, passions, co-curricular activities, community involvement and sporting endeavours.",
      "Set in a serene environment with lush green grounds overlooking the Great Rift Valley, the school offers students the opportunity to thrive in a homely setting whilst enjoying the conveniences of modern living. One of the greatest strengths of this school is the students themselves, who actively and positively contribute to creating a school that is inclusive, supportive, and enjoyable.",
      "Education at Greensteds is anchored on seven pillars that run like golden threads through all aspects of school life: Dedication, Diversity, Opportunity, Respect, Care, Challenge, and Community. It is an honour to be of service to this school family.",
    ],
    name:  "Mr. Leon Bareham",
    title: "CEO & Headmaster, Greensteds International School",
  },

  tiles: [
    {
      title:    "Academic Excellence",
      subtitle: "British curriculum · A-Level",
      href:     "/academics",
      image:    "/images/academics/junior-in-class.jpg",
      alt:      "Greensteds student playing piano at the junior school music concert",
    },
    {
      title:    "Boarding Life",
      subtitle: "A home away from home",
      href:     "/school-life/boarding",
      image:    "/images/sports/swimming.jpg",
      alt:      "Students enjoying swimming at Greensteds International School",
    },
    {
      title:    "Sports & Activities",
      subtitle: "Over 40 co-curricular offerings",
      href:     "/school-life/sports",
      image:    "/images/sports/basketball.jpg",
      alt:      "Greensteds students competing in a basketball match",
    },
    {
      title:    "Community & Character",
      subtitle: "Service, values, leadership",
      href:     "/school-life/co-curricular",
      image:    "/images/campus/students-walking.jpg",
      alt:      "Greensteds students walking on campus in school uniform",
    },
  ],

  setting: {
    headline:  "16 kilometres from Nakuru.\nMinutes from the Rift Valley.",
    subline:   "One of the most remarkable natural settings of any school in the world.",
  },

  testimonials: [
    {
      quote:    "Choosing Greensteds was one of the most significant decisions we made for our daughter. The care and attention she has received — academically and personally — has been extraordinary.",
      name:     "Sarah P.",
      role:     "Parent · Year 11",
      initials: "SP",
    },
    {
      quote:    "Greensteds taught me how to think, not just what to think. Years later, that is the thing I am most grateful for. It shaped everything that followed.",
      name:     "David M.",
      role:     "Alumnus · Class of 2014",
      initials: "DM",
    },
    {
      quote:    "The friendships I made in boarding have lasted far beyond school. There is something about living and growing together that builds a bond you do not find anywhere else.",
      name:     "Amara N.",
      role:     "Current Student · Year 12",
      initials: "AN",
    },
  ],

  news: [
    {
      date:    "May 2026",
      title:   "Sixth Form Students Secure Outstanding University Offers",
      excerpt: "This year's cohort has received offers from universities across the UK, Europe, and North America.",
      href:    "/community/news",
    },
    {
      date:    "April 2026",
      title:   "Athletics Team Wins Regional Championship for Third Consecutive Year",
      excerpt: "The Greensteds athletics programme continues to set the standard across the region.",
      href:    "/community/news",
    },
    {
      date:    "March 2026",
      title:   "Annual Music Concert Brings Together 200 Students",
      excerpt: "From ABRSM examinations to the celebrated annual concert — a season of remarkable achievement.",
      href:    "/community/news",
    },
  ],

  cta: {
    heading:  "Ready to Begin?",
    body:     "We welcome enquiries from families considering Greensteds for their child. Our admissions team is happy to answer any questions you may have.",
    buttonLabel: "Start Your Application",
    buttonHref:  "/admissions/how-to-apply",
  },

  accreditations: [
    { name: "Cambridge International Examinations", src: "/images/accreditations/cambridge.png",  width: 180, height: 60  },
    { name: "Pearson",                              src: "/images/accreditations/pearson.png",    width: 120, height: 40  },
    { name: "BTEC Approved Centre from Pearson",   src: "/images/accreditations/btec.png",       width: 120, height: 50  },
    { name: "ABRSM",                               src: "/images/accreditations/abrsm.png",      width: 70,  height: 70  },
    { name: "LAMDA",                               src: "/images/accreditations/lamda.png",      width: 110, height: 50  },
    { name: "London College of Music",             src: "/images/accreditations/lcm.png",        width: 110, height: 50  },
    { name: "Kenya Association of International Schools", src: "/images/accreditations/kais.png",width: 130, height: 50  },
    { name: "ICDL",                               src: "/images/accreditations/icdl.png",        width: 140, height: 40  },
  ],
};

// ── Admissions CTA (appears on every page) ───────────────────────────────────
export const admissionsCTA = {
  heading:     "Ready to Begin?",
  body:        "We welcome enquiries from families considering Greensteds for their child.",
  buttonLabel: "Start Your Application",
  buttonHref:  "/admissions/how-to-apply",
};

// ── Page Metadata ────────────────────────────────────────────────────────────
export const pageMeta = {
  home: {
    title:       "Greensteds International School | British Curriculum · Nakuru, Kenya · Est. 1936",
    description: "Greensteds International School is a CIS-accredited co-educational boarding and day school in the Kenyan highlands, offering the British curriculum from Early Years to A-Level.",
  },
  about: {
    title:       "About Greensteds | Our Story, History & Values",
    description: "Founded in 1936, Greensteds International School has shaped generations of young people. Learn about our history, values, leadership, and accreditations.",
  },
  academics: {
    title:       "Academics | British Curriculum from Early Years to A-Level",
    description: "Greensteds offers the British curriculum across Early Years, Junior School, Senior School, and Sixth Form, with CIS accreditation and 100% university placements.",
  },
  schoolLife: {
    title:       "School Life | Boarding, Sports & Co-curricular at Greensteds",
    description: "Discover life at Greensteds — boarding, pastoral care, sports, co-curricular activities, and the Beacon Scholarship programme.",
  },
  admissions: {
    title:       "Admissions | How to Apply to Greensteds International School",
    description: "Everything a family needs to know about joining Greensteds — application process, fees, and how to book a visit.",
  },
  community: {
    title:       "Community | News, Alumni & School Stories",
    description: "Stay connected with the Greensteds community — news, events, alumni stories, photo gallery, and current family resources.",
  },
  contact: {
    title:       "Contact Us | Greensteds International School",
    description: "Get in touch with Greensteds International School. We welcome enquiries from prospective families and current stakeholders.",
  },
};

// ── Footer ───────────────────────────────────────────────────────────────────
export const footer = {
  tagline: `${school.address} · ${school.distanceFromNakuru}`,
  est:     `Est. ${school.est}`,
  columns: [
    {
      heading: "School",
      links: [
        { label: "About Greensteds",  href: "/about" },
        { label: "Our Story",         href: "/about/our-story" },
        { label: "Leadership",        href: "/about/leadership" },
        { label: "Accreditations",    href: "/about/accreditations" },
      ],
    },
    {
      heading: "Academics",
      links: [
        { label: "Early Years",    href: "/academics/early-years" },
        { label: "Junior School",  href: "/academics/junior-school" },
        { label: "Senior School",  href: "/academics/senior-school" },
        { label: "Sixth Form",     href: "/academics/sixth-form" },
        { label: "Academic Results", href: "/academics/academic-results" },
      ],
    },
    {
      heading: "Admissions",
      links: [
        { label: "How to Apply",    href: "/admissions/how-to-apply" },
        { label: "Fees & Finances", href: "/admissions/fees" },
        { label: "Book a Visit",    href: "/admissions/book-a-visit" },
        { label: "Downloads",       href: "/admissions/downloads" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: school.email,           href: `mailto:${school.email}` },
        { label: school.phone,           href: `tel:${school.phone.replace(/\s/g,"")}` },
        { label: "WhatsApp",             href: `https://wa.me/${school.whatsapp.replace(/[^0-9]/g,"")}` },
        { label: "Venue Hire",           href: "/venue-hire" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Greensteds International School · All rights reserved`,
};
