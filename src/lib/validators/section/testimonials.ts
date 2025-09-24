import { Link } from "@/lib/base";

export interface IodTestimonialsSection {
  title: string;
  testimonials: {
    name: string;
    company: string;
    companyUrl: string;
    avatar: string;
    subHeader: string;
    quote: string;
    servicesLabel: string;
    services: Link[];
  }[];
}
