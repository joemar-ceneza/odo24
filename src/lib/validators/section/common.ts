import { CTA, ImageWithAlt } from "@/lib/base";

// Base properties shared across most content sections
export interface SectionBase {
  readonly title: string;
  readonly subText?: string;
}

// Section that includes a call-to-action
export interface SectionWithCTA {
  readonly cta: CTA;
}

// Section that includes a primary image with alt text
export interface SectionWithImage extends SectionBase, ImageWithAlt {}

// Section with both image and call-to-action
export interface SectionWithImageAndCTA extends SectionWithImage, SectionWithCTA {}
