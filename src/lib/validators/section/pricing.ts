import { ImageWithAlt, CTA } from "@/lib/base";

export interface IodPricingServiceSection extends ImageWithAlt {
  title: string;
  subText: string;
  subHeader: string;
  costComponentsTitle: string;
  costComponents: string[];
  footNote: string;
  source: {
    label: string;
    url: string;
  };
  lastUpdate: string;
  footer: string;
  cta: CTA;
}
