import { z } from "zod";

const optionalText = z.string().trim().optional().transform((value) => value || undefined);
const checkbox = z.union([z.literal("on"), z.boolean(), z.undefined()]).transform((value) => value === "on" || value === true);

export const siteSettingsSchema = z.object({
  id: optionalText,
  siteName: z.string().trim().min(2),
  proprietorName: z.string().trim().min(2),
  phone: z.string().trim().min(5),
  whatsappNumber: z.string().trim().min(8),
  whatsappLink: z.string().trim().url(),
  email: optionalText,
  location: z.string().trim().min(2),
  shortDescription: optionalText,
  footerDescription: optionalText,
  logoUrl: optionalText,
  iconLogoUrl: optionalText,
  primaryColor: optionalText,
  accentColor: optionalText,
  seoTitle: optionalText,
  seoDescription: optionalText,
});

export const pageContentSchema = z.object({
  id: optionalText,
  pageKey: z.string().trim().min(2),
  title: z.string().trim().min(2),
  subtitle: optionalText,
  content: optionalText,
  heroTitle: optionalText,
  heroSubtitle: optionalText,
  heroImage: optionalText,
  ctaLabel: optionalText,
  ctaHref: optionalText,
  seoTitle: optionalText,
  seoDescription: optionalText,
  isPublished: checkbox,
});

export const serviceSchema = z.object({
  id: optionalText,
  title: z.string().trim().min(2),
  slug: z.string().trim().min(2),
  shortDescription: z.string().trim().min(5),
  description: z.string().trim().min(5),
  icon: optionalText,
  image: optionalText,
  sortOrder: z.coerce.number().int().default(0),
  isFeatured: checkbox,
  isActive: checkbox,
});

export const faqSchema = z.object({
  id: optionalText,
  question: z.string().trim().min(5),
  answer: z.string().trim().min(5),
  category: optionalText,
  sortOrder: z.coerce.number().int().default(0),
  isPublished: checkbox,
});

export const blogPostSchema = z.object({
  id: optionalText,
  title: z.string().trim().min(2),
  slug: z.string().trim().min(2),
  excerpt: z.string().trim().min(5),
  content: z.string().trim().min(5),
  coverImage: optionalText,
  category: optionalText,
  readingTime: optionalText,
  seoTitle: optionalText,
  seoDescription: optionalText,
  isPublished: checkbox,
});

export const galleryItemSchema = z.object({
  id: optionalText,
  title: z.string().trim().min(2),
  category: z.string().trim().min(2),
  location: optionalText,
  description: optionalText,
  imageUrl: z.string().trim().min(2),
  altText: z.string().trim().min(2),
  sortOrder: z.coerce.number().int().default(0),
  isFeatured: checkbox,
  isPublished: checkbox,
});
