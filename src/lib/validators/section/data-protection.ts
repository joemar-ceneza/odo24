import { SectionWithImage } from "./common";

// Data protection section with feature items list
// Used for showcasing data security features or compliance points
export interface IodDataProtectionSection extends SectionWithImage {
  readonly items: readonly string[];
}
