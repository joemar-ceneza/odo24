import { Email, PhoneNumber, Url } from "./brand";

export interface ImageWithAlt {
  image: string;
  alt: string;
}

export interface CTA {
  ctaLabel: string;
  ctaUrl: string;
}

export interface Contact extends ImageWithAlt {
  name: string;
  phone: PhoneNumber;
  email: Email;
}

export interface Link {
  label: string;
  url: Url;
}

export const url = (value: string): Url => value as Url;
export const link = (label: string, value: string): Link => ({
  label,
  url: url(value),
});

export const email = (value: string): Email => value as Email;
export const phoneNumber = (value: string): PhoneNumber => value as PhoneNumber;
