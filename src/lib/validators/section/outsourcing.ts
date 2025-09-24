import { CTA } from "@/lib/base";

// Outsourcing services section with two-column feature list
export interface IodOutSourcingSection {
  readonly title: string;
  readonly leftColumn: string[];
  readonly rightColumn: string[];
  readonly footerText: string;
  readonly cta: CTA;
}
