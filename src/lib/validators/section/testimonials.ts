import { Link } from "@/lib/base";

// Customer testimonial with company context and services used
// Used for social proof and credibility building
export interface IodTestimonialsSection {
  readonly title: string;
  readonly testimonials: {
    readonly name: string;
    readonly company: string;
    readonly companyUrl: string;
    readonly avatar: string;
    readonly subHeader: string;
    readonly quote: string;
    readonly servicesLabel: string;
    readonly services: Link[];
  }[];
}
