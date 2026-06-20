import { z } from "zod";

const phoneRegex = /^(\+?977[-\s]?)?(9[6-9]\d{8}|0\d{1,2}[-\s]?\d{6,8})$/;

const optionalTrimmedString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

const optionalDateString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined))
  .refine((value) => !value || !Number.isNaN(Date.parse(value)), "Invalid date.");

export const inquiryBaseSchema = z.object({
    fullName: z.string().trim().min(2, "Full name must be at least 2 characters."),
    phone: z.string().trim().regex(phoneRegex, "Enter a valid Nepal phone number."),
    email: z
      .string()
      .trim()
      .optional()
      .transform((value) => (value ? value : undefined))
      .pipe(z.string().email("Enter a valid email.").optional()),
    inquiryType: z.enum(["TOUR_PACKAGE", "CUSTOM_TRIP", "VEHICLE_RENTAL", "GENERAL_CONTACT"]),
    destination: optionalTrimmedString,
    packageSlug: optionalTrimmedString,
    vehicleType: optionalTrimmedString,
    travelDate: optionalDateString,
    returnDate: optionalDateString,
    numberOfPeople: z.coerce.number().int().positive("Number of people must be positive.").optional(),
    pickupLocation: optionalTrimmedString,
    dropoffLocation: optionalTrimmedString,
    preferredContact: z.enum(["WHATSAPP", "CALL", "EMAIL"]),
    message: optionalTrimmedString,
    companyName: z.string().max(0, "Spam detected.").optional(),
});

export const inquirySchema = inquiryBaseSchema.superRefine((value, context) => {
    if (!value.destination && !value.packageSlug && !value.vehicleType && !value.message) {
      context.addIssue({
        code: "custom",
        path: ["message"],
        message: "Please include a destination, package, vehicle, or message.",
      });
    }
  });

export type InquiryInput = z.infer<typeof inquirySchema>;
