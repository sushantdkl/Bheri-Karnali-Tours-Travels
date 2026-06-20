import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/svg+xml"]);
const EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/svg+xml": "svg",
};

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = await prisma.adminUser.findFirst({ where: { id: session.id, isActive: true }, select: { id: true, email: true } });
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file");
  const altText = String(formData.get("altText") || "").trim() || undefined;
  const category = String(formData.get("category") || "").trim() || undefined;

  if (!(file instanceof File)) return NextResponse.json({ error: "Image file is required." }, { status: 400 });
  if (!ALLOWED_TYPES.has(file.type)) return NextResponse.json({ error: "Only JPG, PNG, WebP, and SVG images are allowed." }, { status: 400 });
  if (file.size > MAX_FILE_SIZE) return NextResponse.json({ error: "Image must be 5MB or smaller." }, { status: 400 });

  const extension = EXTENSIONS[file.type];
  const fileName = `${randomUUID()}.${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, fileName), bytes);

  const url = `/uploads/${fileName}`;
  await prisma.mediaAsset.create({
    data: {
      fileName,
      originalName: file.name,
      url,
      mimeType: file.type,
      size: file.size,
      altText,
      category,
      uploadedBy: admin.email,
    },
  });

  return NextResponse.json({ success: true, url });
}
