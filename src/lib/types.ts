/**
 * Shared TypeScript types — Greensteds International School
 */

export interface NavChild {
  label: string;
  href:  string;
}

export interface NavItem {
  label:    string;
  href:     string;
  children?: NavChild[];
}

export interface Testimonial {
  quote:  string;
  name:   string;
  role:   string;
  initials: string;
}

export interface NewsItem {
  date:    string;
  title:   string;
  excerpt: string;
  href:    string;
}

export interface AccreditationLogo {
  name: string;
  src:  string;
  width: number;
  height: number;
}

export interface Tile {
  title:    string;
  subtitle: string;
  href:     string;
  image:    string;
  alt:      string;
}

export interface ContactFormData {
  firstName: string;
  lastName:  string;
  email:     string;
  phone?:    string;
  enquiryType: string;
  message:   string;
}
