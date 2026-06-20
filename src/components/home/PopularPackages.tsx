import Link from "next/link";
import { PackageCard } from "@/components/packages/PackageCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { tourPackages } from "@/data/packages";

export function PopularPackages() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Popular tour packages"
            title="High-demand Karnali and Nepal travel plans"
            description="Built for real road conditions, route timing, local support, and clear communication before you travel."
          />
          <Link href="/packages" className="btn-dark w-fit">All Packages</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tourPackages.slice(0, 3).map((tour) => <PackageCard key={tour.slug} tour={tour} />)}
        </div>
      </div>
    </section>
  );
}
