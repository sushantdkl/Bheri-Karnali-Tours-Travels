import { z } from "zod";

const optionalString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

const optionalDecimalString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined))
  .refine((value) => !value || !Number.isNaN(Number(value)), "Must be a valid number.");

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const inquiryStatusSchema = z.object({
  id: z.string().min(1),
  status: z.enum(["NEW", "CONTACTED", "IN_PROGRESS", "CONFIRMED", "CANCELLED", "COMPLETED"]),
});

export const packageSchema = z.object({
  id: optionalString,
  title: z.string().trim().min(2, "Title is required."),
  slug: z.string().trim().min(2, "Slug is required."),
  destination: z.string().trim().min(2, "Destination is required."),
  duration: z.string().trim().min(1, "Duration is required."),
  difficulty: optionalString,
  startingPoint: z.string().trim().min(2, "Starting point is required."),
  endingPoint: optionalString,
  shortDescription: z.string().trim().min(5, "Short description is required."),
  description: z.string().trim().min(10, "Description is required."),
  priceFrom: optionalDecimalString,
  currency: z.string().trim().default("NPR"),
  groupSize: optionalString,
  bestSeason: optionalString,
  includes: optionalString,
  excludes: optionalString,
  itinerary: optionalString,
  images: optionalString,
  isFeatured: z.coerce.boolean().default(false),
  isActive: z.coerce.boolean().default(false),
});

export const vehicleSchema = z.object({
  id: optionalString,
  name: z.string().trim().min(2, "Name is required."),
  slug: z.string().trim().min(2, "Slug is required."),
  type: z.string().trim().min(2, "Type is required."),
  seatingCapacity: z.string().trim().min(1, "Seating capacity is required."),
  luggageCapacity: optionalString,
  bestFor: z.string().trim().min(3, "Best for is required."),
  description: z.string().trim().min(10, "Description is required."),
  pricePerDay: optionalDecimalString,
  pricePerKm: optionalDecimalString,
  withDriverAvailable: z.coerce.boolean().default(false),
  fourWheelDrive: z.coerce.boolean().default(false),
  image: optionalString,
  isActive: z.coerce.boolean().default(false),
});

export const destinationSchema = z.object({
  id: optionalString,
  name: z.string().trim().min(2, "Name is required."),
  slug: z.string().trim().min(2, "Slug is required."),
  district: optionalString,
  province: z.string().trim().default("Karnali"),
  category: z.string().trim().min(2, "Category is required."),
  shortDescription: z.string().trim().min(5, "Short description is required."),
  description: z.string().trim().min(10, "Description is required."),
  bestSeason: optionalString,
  altitude: optionalString,
  difficulty: optionalString,
  image: optionalString,
  isFeatured: z.coerce.boolean().default(false),
  isActive: z.coerce.boolean().default(false),
});

export const testimonialSchema = z.object({
  id: optionalString,
  name: z.string().trim().min(2, "Name is required."),
  location: optionalString,
  rating: z.coerce.number().int().min(1).max(5),
  message: z.string().trim().min(10, "Message is required."),
  packageName: optionalString,
  isPublished: z.coerce.boolean().default(false),
});
