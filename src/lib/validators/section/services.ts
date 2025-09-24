import { CTA } from "@/lib/base";

// Services overview section with two-column service lists
export interface IodOdo24ServiceSection {
  readonly title: string;
  readonly leftColumn: string[];
  readonly rightColumn: string[];
  readonly cta: CTA;
}
