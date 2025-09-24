import { Contact, ImageWithAlt } from "@/lib/base";

// Team contact section with team members and contact form promotion
// Used for about pages and contact sections
export interface IodTeamContactsSection {
  readonly title: string;
  readonly subText: string;
  readonly contacts: readonly Contact[];
  readonly formHeader: string;
  readonly formImage: ImageWithAlt;
  readonly formCtaLabel: string;
  readonly formSubText: string;
  readonly formUrl: string;
}
