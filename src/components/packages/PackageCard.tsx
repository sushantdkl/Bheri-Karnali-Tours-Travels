import Link from "next/link";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { TourPackage } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function PackageCard({ tour }: { tour: TourPackage }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <ResponsiveImage
        src={tour.coverImage || tour.image}
        alt={tour.imageAlt || tour.title}
        title={tour.title}
        subtitle={tour.destination}
        className="h-52 w-full rounded-none transition-transform duration-300 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-sunset">{tour.duration}</span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-river">{tour.difficulty}</span>
          {tour.featured ? <span className="rounded-full bg-navyInk px-3 py-1 text-white">Featured</span> : null}
        </div>
        <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-saffron to-river" />
        <h3 className="mt-4 text-xl font-black text-navyInk">{tour.title}</h3>
        <p className="mt-2 text-sm font-bold text-saffron">{tour.destination} from {tour.startingPoint}</p>
        <p className="mt-3 flex-1 text-sm leading-7 text-navyInk/70">{tour.shortDescription || tour.summary}</p>
        <div className="mt-4 grid gap-2 rounded-2xl bg-slate-50 p-4 text-xs font-bold text-navyInk/68">
          <span>Start: {tour.startingPoint}</span>
          <span>Best season: {tour.bestSeason || "Ask for route guidance"}</span>
          <span>Price: {tour.priceFrom}</span>
          {tour.vehicleRecommendation ? <span>Vehicle: {tour.vehicleRecommendation}</span> : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/packages/${tour.slug}`} className="btn-dark px-4 py-2.5">View Details</Link>
          <a href={getWhatsAppUrl(tour.whatsappMessage || `Hello Bheri Karnali Tours & Travels, I want to know the latest cost and itinerary for the ${tour.title}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2.5">
            Book Tour
          </a>
        </div>
      </div>
    </article>
  );
}
