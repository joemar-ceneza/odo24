import { ImageWithAlt } from "@/lib/base";

// Standalone quote section with supporting image
export interface IodQuoteSection extends ImageWithAlt {
  readonly quote: string;
}
