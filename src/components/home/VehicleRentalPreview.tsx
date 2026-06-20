import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/data/vehicles";

export function VehicleRentalPreview() {
  return (
    <section className="section-pad bg-emeraldDeep text-white">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Vehicle rental from Surkhet"
            title="Reliable cars, Jeeps, Hiace, Bolero, bus, and 4WD support"
            description="Book vehicles with experienced drivers for Karnali highways, official field visits, group tours, and remote routes."
            tone="light"
          />
          <Link href="/vehicles" className="btn-primary w-fit">View Vehicles</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.slice(0, 3).map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}
        </div>
      </div>
    </section>
  );
}
