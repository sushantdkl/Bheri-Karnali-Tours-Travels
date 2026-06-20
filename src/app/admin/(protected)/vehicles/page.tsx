import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminVehiclesPage() {
  const vehicles = await prisma.vehicle.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Fleet</p><h1 className="mt-2 text-3xl font-black text-navyInk">Vehicles</h1></div>
        <Link className="btn-dark" href="/admin/vehicles/new">Add vehicle</Link>
      </div>
      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-navyInk/60">
              <tr><th className="px-5 py-3">Name</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Seats</th><th className="px-5 py-3">Driver</th><th className="px-5 py-3">4WD</th><th className="px-5 py-3">Active</th><th className="px-5 py-3">Action</th></tr>
            </thead>
            <tbody>
              {vehicles.map((item) => (
                <tr key={item.id} className="border-t border-navyInk/10">
                  <td className="px-5 py-4 font-bold">{item.name}</td><td className="px-5 py-4">{item.type}</td><td className="px-5 py-4">{item.seatingCapacity}</td><td className="px-5 py-4">{item.withDriverAvailable ? "Yes" : "No"}</td><td className="px-5 py-4">{item.fourWheelDrive ? "Yes" : "No"}</td><td className="px-5 py-4">{item.isActive ? "Yes" : "No"}</td><td className="px-5 py-4"><Link className="font-bold text-forest" href={`/admin/vehicles/${item.id}/edit`}>Edit</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
