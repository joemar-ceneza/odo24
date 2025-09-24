import { CTA, ImageWithAlt } from "@/lib/base";

export interface SectionBase {
  title: string;
  subText?: string;
}

export interface SectionWithCTA {
  cta: CTA;
}

export interface SectionWithImage extends SectionBase, ImageWithAlt {}

export interface SectionWithImageAndCTA extends SectionWithImage, SectionWithCTA {}
