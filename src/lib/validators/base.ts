import { z } from "zod";

export const Email = z.string().email().brand<"Email">();
export const PhoneNumber = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/)
  .brand<"PhoneNumber">();
export const Url = z.string().url().brand<"Url">();

export const ContactSchema = z.object({
  name: z.string(),
  email: Email,
  phone: PhoneNumber,
  image: z.string(),
  alt: z.string(),
});

export type Contact = z.infer<typeof ContactSchema>;
