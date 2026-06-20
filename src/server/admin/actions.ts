"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import {
  destinationSchema,
  inquiryStatusSchema,
  packageSchema,
  testimonialSchema,
  vehicleSchema,
} from "@/validations/admin";

function formToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

function lines(value?: string) {
  return value
    ? value
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

function csv(value?: string) {
  return value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

function money(value?: string) {
  return value ? new Prisma.Decimal(value) : undefined;
}

function boolFromForm(formData: FormData, name: string) {
  return formData.get(name) === "on";
}

export async function updateInquiryStatus(formData: FormData) {
  await requireAdmin();
  const input = inquiryStatusSchema.parse(formToObject(formData));

  await prisma.inquiry.update({
    where: { id: input.id },
    data: { status: input.status },
  });

  revalidatePath("/admin/inquiries");
  revalidatePath(`/admin/inquiries/${input.id}`);
}

export async function savePackage(formData: FormData) {
  await requireAdmin();
  const input = packageSchema.parse({
    ...formToObject(formData),
    isFeatured: boolFromForm(formData, "isFeatured"),
    isActive: boolFromForm(formData, "isActive"),
  });

  const data = {
    title: input.title,
    slug: input.slug,
    destination: input.destination,
    duration: input.duration,
    difficulty: input.difficulty,
    startingPoint: input.startingPoint,
    endingPoint: input.endingPoint,
    shortDescription: input.shortDescription,
    description: input.description,
    priceFrom: money(input.priceFrom),
    currency: input.currency || "NPR",
    groupSize: input.groupSize,
    bestSeason: input.bestSeason,
    includes: lines(input.includes),
    excludes: lines(input.excludes),
    itinerary: input.itinerary ? lines(input.itinerary).map((text, index) => ({ day: index + 1, text })) : undefined,
    images: csv(input.images),
    isFeatured: input.isFeatured,
    isActive: input.isActive,
  };

  if (input.id) {
    await prisma.tourPackage.update({ where: { id: input.id }, data });
  } else {
    await prisma.tourPackage.create({ data });
  }

  revalidatePath("/admin/packages");
  redirect("/admin/packages");
}

export async function saveVehicle(formData: FormData) {
  await requireAdmin();
  const input = vehicleSchema.parse({
    ...formToObject(formData),
    withDriverAvailable: boolFromForm(formData, "withDriverAvailable"),
    fourWheelDrive: boolFromForm(formData, "fourWheelDrive"),
    isActive: boolFromForm(formData, "isActive"),
  });

  const data = {
    name: input.name,
    slug: input.slug,
    type: input.type,
    seatingCapacity: input.seatingCapacity,
    luggageCapacity: input.luggageCapacity,
    bestFor: input.bestFor,
    description: input.description,
    pricePerDay: money(input.pricePerDay),
    pricePerKm: money(input.pricePerKm),
    withDriverAvailable: input.withDriverAvailable,
    fourWheelDrive: input.fourWheelDrive,
    image: input.image,
    isActive: input.isActive,
  };

  if (input.id) {
    await prisma.vehicle.update({ where: { id: input.id }, data });
  } else {
    await prisma.vehicle.create({ data });
  }

  revalidatePath("/admin/vehicles");
  redirect("/admin/vehicles");
}

export async function saveDestination(formData: FormData) {
  await requireAdmin();
  const input = destinationSchema.parse({
    ...formToObject(formData),
    isFeatured: boolFromForm(formData, "isFeatured"),
    isActive: boolFromForm(formData, "isActive"),
  });

  const data = {
    name: input.name,
    slug: input.slug,
    district: input.district,
    province: input.province || "Karnali",
    category: input.category,
    shortDescription: input.shortDescription,
    description: input.description,
    bestSeason: input.bestSeason,
    altitude: input.altitude,
    difficulty: input.difficulty,
    image: input.image,
    isFeatured: input.isFeatured,
    isActive: input.isActive,
  };

  if (input.id) {
    await prisma.destination.update({ where: { id: input.id }, data });
  } else {
    await prisma.destination.create({ data });
  }

  revalidatePath("/admin/destinations");
  redirect("/admin/destinations");
}

export async function saveTestimonial(formData: FormData) {
  await requireAdmin();
  const input = testimonialSchema.parse({
    ...formToObject(formData),
    isPublished: boolFromForm(formData, "isPublished"),
  });

  const data = {
    name: input.name,
    location: input.location,
    rating: input.rating,
    message: input.message,
    packageName: input.packageName,
    isPublished: input.isPublished,
  };

  if (input.id) {
    await prisma.testimonial.update({ where: { id: input.id }, data });
  } else {
    await prisma.testimonial.create({ data });
  }

  revalidatePath("/admin/testimonials");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (id) await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
}
