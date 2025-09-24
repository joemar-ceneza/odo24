import { ImageWithAlt } from "@/lib/base";

// Individual FAQ item with question and answer
export interface IodFaq {
  readonly question: string;
  readonly answer: string;
  readonly id?: string;
}

// FAQ section configuration with title and list of questions
export interface IodFaqSection extends ImageWithAlt {
  readonly title: string;
  readonly faqs: readonly IodFaq[];
}
