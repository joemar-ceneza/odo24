import { Contact, ImageWithAlt } from "@/lib/base";

export interface IodTeamContactsSection {
  title: string;
  subText: string;
  contacts: Contact[];
  formHeader: string;
  formImage: ImageWithAlt;
  formCtaLabel: string;
  formSubText: string;
  formUrl: string;
}
