import { z } from "zod";
import { inquiryBaseSchema } from "./inquiry";

export const contactSchema = inquiryBaseSchema
  .pick({
    fullName: true,
    phone: true,
    email: true,
    preferredContact: true,
    companyName: true,
  })
  .extend({
    message: z.string().trim().min(10, "Message must be at least 10 characters."),
  });

export type ContactInput = z.infer<typeof contactSchema>;
