import { CTA } from "@/lib/base";

// Services overview section with two-column service lists
export interface IodOdo24ServiceSection {
  readonly title: string;
  readonly leftColumn: readonly string[];
  readonly rightColumn: readonly string[];
  readonly cta: CTA;
}
