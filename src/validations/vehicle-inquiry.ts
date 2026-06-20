import { z } from "zod";
import { inquiryBaseSchema } from "./inquiry";

export const vehicleInquirySchema = inquiryBaseSchema
  .pick({
    fullName: true,
    phone: true,
    email: true,
    vehicleType: true,
    pickupLocation: true,
    dropoffLocation: true,
    travelDate: true,
    returnDate: true,
    preferredContact: true,
    message: true,
    companyName: true,
  })
  .extend({
    vehicleType: z.string().trim().min(2, "Vehicle type is required."),
    pickupLocation: z.string().trim().min(2, "Pickup location is required."),
  });

export type VehicleInquiryInput = z.infer<typeof vehicleInquirySchema>;
