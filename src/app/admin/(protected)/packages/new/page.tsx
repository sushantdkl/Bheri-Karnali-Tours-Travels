import { PackageForm } from "@/components/admin/PackageForm";

export default function NewPackagePage() {
  return (
    <div className="grid gap-6">
      <div><p className="eyebrow">Packages</p><h1 className="mt-2 text-3xl font-black text-navyInk">New Package</h1></div>
      <PackageForm />
    </div>
  );
}
