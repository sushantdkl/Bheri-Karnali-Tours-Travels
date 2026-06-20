import { notFound } from "next/navigation";
import { VehicleForm } from "@/components/admin/VehicleForm";
import { prisma } from "@/lib/prisma";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditVehiclePage({ params }: PageProps) {
  const { id } = await params;
  const item = await prisma.vehicle.findUnique({ where: { id } });
  if (!item) notFound();
  return <div className="grid gap-6"><div><p className="eyebrow">Vehicles</p><h1 className="mt-2 text-3xl font-black text-navyInk">Edit Vehicle</h1></div><VehicleForm item={item} /></div>;
}
