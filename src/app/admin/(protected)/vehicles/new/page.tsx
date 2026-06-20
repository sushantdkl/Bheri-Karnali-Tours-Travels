import { VehicleForm } from "@/components/admin/VehicleForm";

export default function NewVehiclePage() {
  return <div className="grid gap-6"><div><p className="eyebrow">Vehicles</p><h1 className="mt-2 text-3xl font-black text-navyInk">New Vehicle</h1></div><VehicleForm /></div>;
}
