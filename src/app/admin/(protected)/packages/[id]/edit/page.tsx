import { notFound } from "next/navigation";
import { PackageForm } from "@/components/admin/PackageForm";
import { prisma } from "@/lib/prisma";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditPackagePage({ params }: PageProps) {
  const { id } = await params;
  const item = await prisma.tourPackage.findUnique({ where: { id } });
  if (!item) notFound();
  return (
    <div className="grid gap-6">
      <div><p className="eyebrow">Packages</p><h1 className="mt-2 text-3xl font-black text-navyInk">Edit Package</h1></div>
      <PackageForm item={item} />
    </div>
  );
}
