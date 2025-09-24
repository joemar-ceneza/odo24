import { Email, PhoneNumber, Url } from "./brand";

/**
 * Represents an image with required alt text for accessibility
 */
export interface ImageWithAlt {
  readonly image: string;
  readonly alt: string;
}

/**
 * Call-to-action configuration for buttons and links
 */
export interface CTA {
  readonly ctaLabel: string;
  readonly ctaUrl: Url;
}

/**
 * Contact information with profile image
 */
export interface Contact extends ImageWithAlt {
  readonly name: string;
  readonly phone: PhoneNumber;
  readonly email: Email;
}

export interface Link {
  readonly label: string;
  readonly url: Url;
}

export const url = (value: string): Url => value as Url;
export const link = (label: string, value: string): Link => ({
  label,
  url: url(value),
});

export const email = (value: string): Email => value as Email;
export const phoneNumber = (value: string): PhoneNumber => value as PhoneNumber;
