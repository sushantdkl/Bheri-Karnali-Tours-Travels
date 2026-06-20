import { InquiryStatus, InquiryType, Prisma } from "@prisma/client";
import Link from "next/link";
import { updateInquiryStatus } from "@/server/admin/actions";
import { prisma } from "@/lib/prisma";

const statuses = Object.values(InquiryStatus);
const types = Object.values(InquiryType);
const quickFilters = [
  { label: "New leads", href: "/admin/inquiries?status=NEW" },
  { label: "Vehicle rental leads", href: "/admin/inquiries?type=VEHICLE_RENTAL" },
  { label: "Tour package leads", href: "/admin/inquiries?type=TOUR_PACKAGE" },
  { label: "Confirmed leads", href: "/admin/inquiries?status=CONFIRMED" },
  { label: "Cancelled leads", href: "/admin/inquiries?status=CANCELLED" },
];

type PageProps = {
  searchParams: Promise<{ status?: string; type?: string; q?: string }>;
};

export default async function AdminInquiriesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = params.q?.trim();
  const where: Prisma.InquiryWhereInput = {
    ...(params.status && statuses.includes(params.status as InquiryStatus) ? { status: params.status as InquiryStatus } : {}),
    ...(params.type && types.includes(params.type as InquiryType) ? { inquiryType: params.type as InquiryType } : {}),
    ...(q
      ? {
          OR: [
            { fullName: { contains: q, mode: "insensitive" } },
            { phone: { contains: q, mode: "insensitive" } },
            { destination: { contains: q, mode: "insensitive" } },
            { packageSlug: { contains: q, mode: "insensitive" } },
            { vehicleType: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const inquiries = await prisma.inquiry.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div className="grid gap-6">
      <div>
        <p className="eyebrow">Lead management</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Inquiries</h1>
      </div>
      <div className="flex flex-wrap gap-3">
        {quickFilters.map((filter) => (
          <Link key={filter.href} href={filter.href} className="btn-outline px-4 py-2.5">
            {filter.label}
          </Link>
        ))}
        <Link href="/admin/inquiries" className="btn-dark px-4 py-2.5">
          All leads
        </Link>
        <a href="/api/admin/inquiries/export" className="btn-primary px-4 py-2.5">
          Export CSV
        </a>
      </div>
      <form className="card grid gap-4 p-5 md:grid-cols-[1fr_220px_220px_auto]">
        <input className="input-field" name="q" placeholder="Search name, phone, destination, package, vehicle" defaultValue={params.q || ""} />
        <select className="input-field" name="status" defaultValue={params.status || ""}>
          <option value="">All statuses</option>
          {statuses.map((status) => <option key={status}>{status}</option>)}
        </select>
        <select className="input-field" name="type" defaultValue={params.type || ""}>
          <option value="">All types</option>
          {types.map((type) => <option key={type}>{type}</option>)}
        </select>
        <button className="btn-dark">Filter</button>
      </form>
      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-navyInk/60">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Destination/package/vehicle</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((item) => (
                <tr key={item.id} className="border-t border-navyInk/10">
                  <td className="px-4 py-4 font-bold">{item.fullName}</td>
                  <td className="px-4 py-4">{item.phone}</td>
                  <td className="px-4 py-4">{item.inquiryType}</td>
                  <td className="px-4 py-4">{item.destination || item.packageSlug || item.vehicleType || "-"}</td>
                  <td className="px-4 py-4">{item.preferredContact}</td>
                  <td className="px-4 py-4">
                    <form action={updateInquiryStatus} className="flex gap-2">
                      <input type="hidden" name="id" value={item.id} />
                      <select className="rounded-lg border border-navyInk/15 px-2 py-1" name="status" defaultValue={item.status}>
                        {statuses.map((status) => <option key={status}>{status}</option>)}
                      </select>
                      <button className="rounded-lg bg-forest px-3 py-1 text-xs font-bold text-white">Save</button>
                    </form>
                  </td>
                  <td className="px-4 py-4">{item.createdAt.toLocaleDateString()}</td>
                  <td className="px-4 py-4"><Link className="font-bold text-forest" href={`/admin/inquiries/${item.id}`}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
