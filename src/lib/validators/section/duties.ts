import { SectionWithImage } from "./common";

// Responsibilities or duties section with sub-header
// Used for role descriptions, job duties, or service responsibilities
export interface IodDutiesSection extends SectionWithImage {
  readonly subHeader: string;
  readonly items: readonly string[];
}
