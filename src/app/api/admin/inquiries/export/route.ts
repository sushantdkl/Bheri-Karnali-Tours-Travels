import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

const fields = [
  "id",
  "fullName",
  "phone",
  "email",
  "inquiryType",
  "destination",
  "packageSlug",
  "vehicleType",
  "preferredContact",
  "status",
  "source",
  "createdAt",
] as const;

function escapeCsv(value: unknown) {
  const text = value instanceof Date ? value.toISOString() : String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  await requireAdmin();

  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      fullName: true,
      phone: true,
      email: true,
      inquiryType: true,
      destination: true,
      packageSlug: true,
      vehicleType: true,
      preferredContact: true,
      status: true,
      source: true,
      createdAt: true,
    },
  });

  const csv = [
    fields.join(","),
    ...inquiries.map((item) => fields.map((field) => escapeCsv(item[field])).join(",")),
  ].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="bheri-karnali-inquiries.csv"',
      "Cache-Control": "no-store",
    },
  });
}
