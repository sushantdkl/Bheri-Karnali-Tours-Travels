import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import type { Destination as StaticDestination, FAQ as StaticFAQ, GalleryItem as StaticGalleryItem, Testimonial as StaticTestimonial, TourPackage as StaticTourPackage, Vehicle as StaticVehicle } from "@/types";
import { prisma } from "@/lib/prisma";

export async function getSiteSettings() {
  noStore();
  try {
    return await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });
  } catch {
    return null;
  }
}

export async function getPageContent(pageKey: string) {
  noStore();
  try {
    return await prisma.pageContent.findUnique({ where: { pageKey } });
  } catch {
    return null;
  }
}

export async function getPublishedFAQs(fallback: StaticFAQ[]) {
  noStore();
  try {
    const items = await prisma.fAQ.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      question: item.question,
      answer: item.answer,
      category: (item.category as StaticFAQ["category"]) || "General",
    }));
  } catch {
    return fallback;
  }
}

export async function getPublishedBlogPosts<T>(fallback: T[]) {
  noStore();
  try {
    const items = await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      category: item.category || "Guide",
      seoTitle: item.seoTitle || undefined,
      seoDescription: item.seoDescription || undefined,
      readingTime: item.readingTime || "5 min read",
      content: item.content.split(/\n{2,}/).filter(Boolean),
      coverImage: item.coverImage || undefined,
      imageAlt: item.title,
    })) as T[];
  } catch {
    return fallback;
  }
}

export async function getPublishedGalleryItems(fallback: StaticGalleryItem[]) {
  noStore();
  try {
    const items = await prisma.galleryItem.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      title: item.title,
      category: item.category as StaticGalleryItem["category"],
      location: item.location || "",
      image: item.imageUrl,
      alt: item.altText,
      description: item.description || "",
    }));
  } catch {
    return fallback;
  }
}

export async function getActiveTourPackages(fallback: StaticTourPackage[]): Promise<StaticTourPackage[]> {
  noStore();
  try {
    const items = await prisma.tourPackage.findMany({
      where: { isActive: true },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      slug: item.slug,
      title: item.title,
      destination: item.destination,
      duration: item.duration,
      difficulty: (item.difficulty || "Moderate") as StaticTourPackage["difficulty"],
      startingPoint: item.startingPoint,
      endingPoint: item.endingPoint || undefined,
      priceFrom: item.priceFrom ? `${item.currency} ${item.priceFrom}` : "Contact for price",
      contactForPrice: !item.priceFrom,
      bestSeason: item.bestSeason || undefined,
      groupSize: item.groupSize || undefined,
      summary: item.shortDescription,
      shortDescription: item.shortDescription,
      description: item.description,
      highlights: [],
      itinerary: Array.isArray(item.itinerary) ? item.itinerary.map((step) => (typeof step === "string" ? step : JSON.stringify(step))) : [],
      includes: item.includes,
      excludes: item.excludes,
      travelNotes: undefined,
      safetyNotes: undefined,
      faqs: undefined,
      seoTitle: undefined,
      seoDescription: undefined,
      keywords: undefined,
      whatsappMessage: undefined,
      featured: item.isFeatured,
      active: item.isActive,
      vehicleRecommendation: undefined,
      bestFor: [],
      idealFor: undefined,
      image: item.images[0] || "/images/karnali/rara-lake.jpg",
      coverImage: item.images[0] || "/images/karnali/rara-lake.jpg",
      galleryImages: item.images,
      imageAlt: item.title,
    }));
  } catch {
    return fallback;
  }
}

export async function getActiveVehicles(fallback: StaticVehicle[]): Promise<StaticVehicle[]> {
  noStore();
  try {
    const items = await prisma.vehicle.findMany({ where: { isActive: true }, orderBy: { createdAt: "desc" } });
    if (!items.length) return fallback;
    return items.map((item) => ({
      slug: item.slug,
      name: item.name,
      type: item.type,
      seatingCapacity: item.seatingCapacity,
      luggageCapacity: item.luggageCapacity || undefined,
      bestUseCase: item.bestFor,
      bestFor: item.bestFor,
      description: item.description,
      withDriver: item.withDriverAvailable,
      withDriverAvailable: item.withDriverAvailable,
      fourWheelDrive: item.fourWheelDrive,
      routes: [item.bestFor],
      priceDisplay: item.pricePerDay ? `From NPR ${item.pricePerDay}/day` : "Contact for current quote",
      active: item.isActive,
      image: item.image || "/images/destinations/car-rental-nepal-with-driver.png",
      imageAlt: `${item.name} rental from Surkhet`,
    }));
  } catch {
    return fallback;
  }
}

export async function getActiveDestinations(fallback: StaticDestination[]): Promise<StaticDestination[]> {
  noStore();
  try {
    const items = await prisma.destination.findMany({
      where: { isActive: true },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      slug: item.slug,
      name: item.name,
      region: item.province,
      district: item.district || undefined,
      province: item.province,
      category: item.category,
      summary: item.shortDescription,
      shortDescription: item.shortDescription,
      description: item.description,
      bestSeason: item.bestSeason || "Ask for latest season guidance",
      altitude: item.altitude || undefined,
      difficulty: item.difficulty || undefined,
      vehicleSupport: undefined,
      active: item.isActive,
      featured: item.isFeatured,
      image: item.image || "/images/karnali/rara-lake.jpg",
      coverImage: item.image || "/images/karnali/rara-lake.jpg",
      imageAlt: item.name,
    }));
  } catch {
    return fallback;
  }
}

export async function getPublishedTestimonials(fallback: StaticTestimonial[]) {
  noStore();
  try {
    const items = await prisma.testimonial.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    });
    if (!items.length) return fallback;
    return items.map((item) => ({
      name: item.name,
      location: item.location || "Nepal",
      quote: item.message,
    }));
  } catch {
    return fallback;
  }
}
