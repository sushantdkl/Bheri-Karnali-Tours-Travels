import type { InquiryType, PreferredContact } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type CreateInquiryPayload = {
  fullName: string;
  phone: string;
  email?: string;
  inquiryType: InquiryType;
  destination?: string;
  packageSlug?: string;
  vehicleType?: string;
  travelDate?: string;
  returnDate?: string;
  numberOfPeople?: number;
  pickupLocation?: string;
  dropoffLocation?: string;
  preferredContact: PreferredContact;
  message?: string;
};

function toDate(value?: string) {
  return value ? new Date(value) : undefined;
}

export async function createInquiry(input: CreateInquiryPayload) {
  return prisma.inquiry.create({
    data: {
      fullName: input.fullName,
      phone: input.phone,
      email: input.email,
      inquiryType: input.inquiryType,
      destination: input.destination,
      packageSlug: input.packageSlug,
      vehicleType: input.vehicleType,
      travelDate: toDate(input.travelDate),
      returnDate: toDate(input.returnDate),
      numberOfPeople: input.numberOfPeople,
      pickupLocation: input.pickupLocation,
      dropoffLocation: input.dropoffLocation,
      preferredContact: input.preferredContact,
      message: input.message,
      source: "WEBSITE",
    },
    select: {
      id: true,
    },
  });
}
