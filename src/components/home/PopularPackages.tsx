import Link from "next/link";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { tourPackages } from "@/data/packages";
import type { TourPackage } from "@/types";

const featuredAdventureSlugs = [
  "rara-lake-tour-from-surkhet",
  "shey-phoksundo-lake-adventure",
  "karnali-river-rafting-experience",
  "dailekh-heritage-eternal-flame-tour",
];

export function PopularPackages() {
  const featuredAdventures = featuredAdventureSlugs
    .map((slug) => tourPackages.find((tour) => tour.slug === slug))
    .filter((tour): tour is TourPackage => Boolean(tour))
    .slice(0, 4);

  return (
    <section className="section-pad bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_46%,#f0f9ff_100%)]">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Karnali adventures"
            title="Featured Karnali Adventures"
            description="Handpicked journeys from Rara Lake escapes to remote Himalayan routes."
          />
          <Link href="/packages" className="btn-dark w-fit">View All Packages</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredAdventures.map((tour) => (
            <article key={tour.slug} className="card group flex h-full flex-col overflow-hidden border-white/70 bg-white/92">
              <ResponsiveImage
                src={tour.coverImage || tour.image}
                alt={tour.imageAlt || tour.title}
                title={tour.title}
                subtitle={tour.destination}
                className="h-48 w-full rounded-none transition-transform duration-500 group-hover:scale-[1.035]"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="badge">{tour.destination}</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-sunset">{tour.duration}</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-navyInk">{tour.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-navyInk/68">{tour.shortDescription || tour.summary}</p>
                <Link href={`/packages/${tour.slug}`} className="btn-outline mt-5 justify-center px-4 py-2.5">
                  Plan This Trip
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
