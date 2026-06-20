import { notFound } from "next/navigation";
import { DestinationForm } from "@/components/admin/DestinationForm";
import { prisma } from "@/lib/prisma";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditDestinationPage({ params }: PageProps) {
  const { id } = await params;
  const item = await prisma.destination.findUnique({ where: { id } });
  if (!item) notFound();
  return <div className="grid gap-6"><div><p className="eyebrow">Destinations</p><h1 className="mt-2 text-3xl font-black text-navyInk">Edit Destination</h1></div><DestinationForm item={item} /></div>;
}
