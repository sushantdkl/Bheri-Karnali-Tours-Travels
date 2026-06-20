import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPackagesPage() {
  const packages = await prisma.tourPackage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Content</p><h1 className="mt-2 text-3xl font-black text-navyInk">Packages</h1></div>
        <Link className="btn-dark" href="/admin/packages/new">Add package</Link>
      </div>
      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-navyInk/60">
              <tr><th className="px-5 py-3">Title</th><th className="px-5 py-3">Destination</th><th className="px-5 py-3">Duration</th><th className="px-5 py-3">Price</th><th className="px-5 py-3">Featured</th><th className="px-5 py-3">Active</th><th className="px-5 py-3">Action</th></tr>
            </thead>
            <tbody>
              {packages.map((item) => (
                <tr key={item.id} className="border-t border-navyInk/10">
                  <td className="px-5 py-4 font-bold">{item.title}</td>
                  <td className="px-5 py-4">{item.destination}</td>
                  <td className="px-5 py-4">{item.duration}</td>
                  <td className="px-5 py-4">{item.priceFrom?.toString() || "-"}</td>
                  <td className="px-5 py-4">{item.isFeatured ? "Yes" : "No"}</td>
                  <td className="px-5 py-4">{item.isActive ? "Yes" : "No"}</td>
                  <td className="px-5 py-4"><Link className="font-bold text-forest" href={`/admin/packages/${item.id}/edit`}>Edit</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
