import { SectionWithImage } from "./common";

// Project deliverables section outlining key outputs
// Used for service pages to list concrete results clients receive
export interface IodDeliverablesSection extends SectionWithImage {
  readonly items: readonly string[];
}
