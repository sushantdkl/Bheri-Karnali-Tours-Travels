"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { blogPostSchema, faqSchema, galleryItemSchema, pageContentSchema, serviceSchema, siteSettingsSchema } from "@/validations/cms";

function formToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function revalidatePublicContent() {
  ["/", "/about", "/contact", "/blog", "/gallery", "/packages", "/vehicles", "/destinations"].forEach((path) => revalidatePath(path));
}

export async function saveSiteSettings(formData: FormData) {
  await requireAdmin();
  const input = siteSettingsSchema.parse(formToObject(formData));
  const { id, ...data } = input;

  if (id) {
    await prisma.siteSettings.update({ where: { id }, data });
  } else {
    await prisma.siteSettings.create({ data });
  }

  revalidatePublicContent();
  revalidatePath("/admin/cms/settings");
}

export async function savePageContent(formData: FormData) {
  await requireAdmin();
  const input = pageContentSchema.parse(formToObject(formData));
  const { id: _id, ...cleanInput } = input;
  const data = { ...cleanInput, pageKey: slugify(input.pageKey) || input.pageKey };

  await prisma.pageContent.upsert({
    where: { pageKey: data.pageKey },
    create: data,
    update: data,
  });

  revalidatePublicContent();
  revalidatePath("/admin/cms/pages");
}

export async function saveService(formData: FormData) {
  await requireAdmin();
  const input = serviceSchema.parse({ ...formToObject(formData), slug: String(formData.get("slug") || formData.get("title") || "") });
  const { id, ...cleanInput } = input;
  const data = { ...cleanInput, slug: slugify(input.slug) };

  if (id) {
    await prisma.service.update({ where: { id }, data });
  } else {
    await prisma.service.create({ data });
  }

  revalidatePublicContent();
  revalidatePath("/admin/cms/services");
}

export async function saveFAQ(formData: FormData) {
  await requireAdmin();
  const input = faqSchema.parse(formToObject(formData));
  const { id, ...data } = input;

  if (id) {
    await prisma.fAQ.update({ where: { id }, data });
  } else {
    await prisma.fAQ.create({ data });
  }

  revalidatePublicContent();
  revalidatePath("/admin/cms/faqs");
}

export async function saveBlogPost(formData: FormData) {
  await requireAdmin();
  const input = blogPostSchema.parse({ ...formToObject(formData), slug: String(formData.get("slug") || formData.get("title") || "") });
  const { id, ...cleanInput } = input;
  const data = {
    ...cleanInput,
    slug: slugify(input.slug),
    publishedAt: input.isPublished ? new Date() : undefined,
  };

  if (id) {
    await prisma.blogPost.update({ where: { id }, data });
  } else {
    await prisma.blogPost.create({ data });
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);
  revalidatePath("/admin/cms/blog");
  redirect("/admin/cms/blog");
}

export async function saveGalleryItem(formData: FormData) {
  await requireAdmin();
  const input = galleryItemSchema.parse(formToObject(formData));
  const { id, ...data } = input;

  if (id) {
    await prisma.galleryItem.update({ where: { id }, data });
  } else {
    await prisma.galleryItem.create({ data });
  }

  revalidatePath("/gallery");
  revalidatePath("/");
  revalidatePath("/admin/cms/gallery");
}
