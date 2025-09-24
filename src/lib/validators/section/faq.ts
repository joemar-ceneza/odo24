import { ImageWithAlt } from "@/lib/base";

export interface IodFaq {
  question: string;
  answer: string;
  id?: string;
}

export interface IodFaqSection extends ImageWithAlt {
  title: string;
  faqs: IodFaq[];
}
