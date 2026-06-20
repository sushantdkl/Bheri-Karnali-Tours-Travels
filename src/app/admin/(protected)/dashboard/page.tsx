import Link from "next/link";
import { prisma } from "@/lib/prisma";

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-5">
      <p className="text-sm font-bold text-navyInk/60">{label}</p>
      <p className="mt-2 text-3xl font-black text-navyInk">{value}</p>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [total, newInquiries, confirmed, vehicle, tour, recent] = await Promise.all([
    prisma.inquiry.count(),
    prisma.inquiry.count({ where: { status: "NEW" } }),
    prisma.inquiry.count({ where: { status: "CONFIRMED" } }),
    prisma.inquiry.count({ where: { inquiryType: "VEHICLE_RENTAL" } }),
    prisma.inquiry.count({ where: { inquiryType: "TOUR_PACKAGE" } }),
    prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      select: { id: true, fullName: true, phone: true, inquiryType: true, status: true, createdAt: true },
    }),
  ]);

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">Admin overview</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Dashboard</h1>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Total inquiries" value={total} />
        <StatCard label="New inquiries" value={newInquiries} />
        <StatCard label="Confirmed bookings" value={confirmed} />
        <StatCard label="Vehicle inquiries" value={vehicle} />
        <StatCard label="Tour inquiries" value={tour} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link className="btn-dark" href="/admin/inquiries">View inquiries</Link>
        <Link className="btn-dark" href="/admin/packages/new">Add package</Link>
        <Link className="btn-dark" href="/admin/vehicles/new">Add vehicle</Link>
        <Link className="btn-dark" href="/admin/destinations/new">Add destination</Link>
      </div>
      <section className="card overflow-hidden">
        <div className="border-b border-navyInk/10 p-5">
          <h2 className="text-xl font-black text-navyInk">Recent leads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-navyInk/60">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Phone</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((item) => (
                <tr key={item.id} className="border-t border-navyInk/10">
                  <td className="px-5 py-4 font-bold">{item.fullName}</td>
                  <td className="px-5 py-4">{item.phone}</td>
                  <td className="px-5 py-4">{item.inquiryType}</td>
                  <td className="px-5 py-4">{item.status}</td>
                  <td className="px-5 py-4">{item.createdAt.toLocaleDateString()}</td>
                  <td className="px-5 py-4"><Link className="font-bold text-forest" href={`/admin/inquiries/${item.id}`}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
