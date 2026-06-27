import Link from "next/link";
import { destinations } from "@/data/destinations";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Destination } from "@/types";

const previewDestinationSlugs = ["rara-lake", "shey-phoksundo-lake", "surkhet", "dailekh", "jumla", "karnali-river"];

export function DestinationHighlights() {
  const previewDestinations = previewDestinationSlugs
    .map((slug) => destinations.find((destination) => destination.slug === slug))
    .filter((destination): destination is Destination => Boolean(destination))
    .slice(0, 6);

  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Destination highlights"
            title="Karnali routes worth planning properly"
            description="A compact preview of lake, heritage, river, and mountain routes with a Surkhet-based team."
          />
          <Link href="/destinations" className="btn-primary hidden w-fit lg:inline-flex">View More Destinations</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewDestinations.map((destination) => (
            <article key={destination.slug} className="card overflow-hidden bg-white">
              <ResponsiveImage src={destination.coverImage || destination.image} alt={destination.imageAlt || destination.name} title={destination.name} subtitle={destination.region} className="h-40 w-full rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-saffron">{destination.category || destination.region}</p>
                <h3 className="mt-2 text-xl font-black text-navyInk">{destination.name}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-7 text-navyInk/70">{destination.shortDescription || destination.summary}</p>
                <p className="mt-4 text-xs font-bold text-forest">Best season: {destination.bestSeason}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center lg:hidden">
          <Link href="/destinations" className="btn-primary">View More Destinations</Link>
        </div>
      </div>
    </section>
  );
}
