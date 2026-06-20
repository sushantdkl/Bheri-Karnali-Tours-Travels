import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/shared/CTASection";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { destinations } from "@/data/destinations";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Karnali Destinations",
  description: "Explore Rara Lake, Shey Phoksundo Lake, Surkhet, Dailekh, Jumla, Humla, Dolpo, Kalikot, Jajarkot, Salyan, and West Rukum.",
  keywords: ["Karnali destinations", "Rara Lake tour", "Phoksundo Lake tour", "Karnali adventure travel"],
};

export default function DestinationsPage() {
  return (
    <>
      <section className="section-pad section-gradient">
        <div className="container-main">
          <SectionHeading
            eyebrow="Karnali destinations"
            title="Plan the right route before you travel"
            description="From iconic lake journeys to cultural routes and remote Himalayan districts, Karnali is best explored with clear planning and local support."
            titleAs="h1"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.slug} className="card overflow-hidden">
                <ResponsiveImage
                  src={destination.coverImage || destination.image}
                  alt={destination.imageAlt || destination.name}
                  title={destination.name}
                  subtitle={destination.district || destination.region}
                  className="h-48 w-full rounded-none"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="p-5">
                  <span className="badge">{destination.category || destination.region}</span>
                  <h2 className="mt-4 text-2xl font-black text-navyInk">{destination.name}</h2>
                  <p className="mt-1 text-sm font-bold text-saffron">{destination.district || destination.region}</p>
                  <p className="mt-3 text-sm leading-7 text-navyInk/70">{destination.shortDescription || destination.summary}</p>
                  <p className="mt-4 text-xs font-bold text-forest">Best season: {destination.bestSeason}</p>
                  {destination.vehicleSupport ? <p className="mt-2 text-xs font-bold text-navyInk/55">Vehicle: {destination.vehicleSupport}</p> : null}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href="/packages" className="btn-dark px-4 py-2.5">Explore Packages</Link>
                    <a href={getWhatsAppUrl(`Hello Bheri Karnali Tours & Travels, I want to ask about ${destination.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2.5">Ask on WhatsApp</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
