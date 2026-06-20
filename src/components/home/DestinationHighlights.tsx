import Image from "next/image";
import { destinations } from "@/data/destinations";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function DestinationHighlights() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <SectionHeading
          eyebrow="Destination highlights"
          title="Karnali routes worth planning properly"
          description="Explore lake, culture, heritage, river, and remote Himalayan destinations with a Surkhet-based team."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.slug} className="card overflow-hidden">
              <Image src={destination.image} alt={destination.name} width={640} height={360} className="h-40 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-saffron">{destination.region}</p>
                <h3 className="mt-2 text-xl font-black text-navyInk">{destination.name}</h3>
                <p className="mt-3 text-sm leading-7 text-navyInk/70">{destination.summary}</p>
                <p className="mt-4 text-xs font-bold text-forest">Best season: {destination.bestSeason}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
