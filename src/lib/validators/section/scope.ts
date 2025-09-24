import { SectionWithImage } from "./common";

// Project or service scope section with bullet points
// Used for outlining the boundaries and inclusions of a service
export interface IodScopeSection extends SectionWithImage {
  readonly items: readonly string[];
}
