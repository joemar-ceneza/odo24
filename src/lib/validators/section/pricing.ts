import { ImageWithAlt, CTA } from "@/lib/base";

// Pricing information section with cost breakdown and source attribution
// Used for transparent pricing displays with legal compliance
export interface IodPricingServiceSection extends ImageWithAlt {
  readonly title: string;
  readonly subText: string;
  readonly subHeader: string;
  readonly costComponentsTitle: string;
  readonly costComponents: readonly string[];
  readonly footNote: string;
  readonly source: {
    readonly label: string;
    readonly url: string;
  };
  readonly lastUpdate: string;
  readonly footer: string;
  readonly cta: CTA;
}
