import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDestinationsPage() {
  const destinations = await prisma.destination.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Places</p><h1 className="mt-2 text-3xl font-black text-navyInk">Destinations</h1></div>
        <Link className="btn-dark" href="/admin/destinations/new">Add destination</Link>
      </div>
      <section className="card overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm">
        <thead className="bg-cream text-xs uppercase text-navyInk/60"><tr><th className="px-5 py-3">Name</th><th className="px-5 py-3">District</th><th className="px-5 py-3">Province</th><th className="px-5 py-3">Category</th><th className="px-5 py-3">Featured</th><th className="px-5 py-3">Active</th><th className="px-5 py-3">Action</th></tr></thead>
        <tbody>{destinations.map((item) => <tr key={item.id} className="border-t border-navyInk/10"><td className="px-5 py-4 font-bold">{item.name}</td><td className="px-5 py-4">{item.district || "-"}</td><td className="px-5 py-4">{item.province}</td><td className="px-5 py-4">{item.category}</td><td className="px-5 py-4">{item.isFeatured ? "Yes" : "No"}</td><td className="px-5 py-4">{item.isActive ? "Yes" : "No"}</td><td className="px-5 py-4"><Link className="font-bold text-forest" href={`/admin/destinations/${item.id}/edit`}>Edit</Link></td></tr>)}</tbody>
      </table></div></section>
    </div>
  );
}
