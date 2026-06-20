import type { Metadata } from "next";
import { PackageCard } from "@/components/packages/PackageCard";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { tourPackages } from "@/data/packages";
import { getActiveTourPackages } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Karnali Tour Packages",
  description:
    "Browse Karnali tour package options including Rara Lake tour, Phoksundo Lake tour, Dolpo, Jumla, Humla, Dailekh, and Surkhet travel plans.",
  keywords: ["Karnali tour package", "Rara Lake tour", "Phoksundo Lake tour", "Nepal tour package", "Karnali travel agency"],
  openGraph: {
    title: "Karnali Tour Packages",
    description: "Explore Rara Lake, Phoksundo, Jumla, Dailekh, Humla, Dolpo, and Surkhet tours with local planning support.",
  },
};

type PageProps = {
  searchParams: Promise<{ q?: string; difficulty?: string }>;
};

export default async function PackagesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const packages = await getActiveTourPackages(tourPackages);
  const q = params.q?.toLowerCase().trim();
  const filtered = packages.filter((tour) => {
    const matchesSearch = !q || `${tour.title} ${tour.destination} ${tour.summary}`.toLowerCase().includes(q);
    const matchesDifficulty = !params.difficulty || tour.difficulty === params.difficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <>
      <section className="section-pad section-gradient">
        <div className="container-main">
          <SectionHeading
            eyebrow="Tour packages"
            title="Karnali tour packages built from Surkhet route knowledge"
            description="Start with a proven Karnali package, then customize the vehicle, pace, accommodation level, route support, and budget around your family, student group, official visit, or adventure plan."
            titleAs="h1"
          />
          <form className="mt-8 grid gap-4 rounded-2xl border border-navyInk/10 bg-white/90 p-4 shadow-premium backdrop-blur md:grid-cols-[1fr_220px_auto]">
            <input className="input-field" name="q" placeholder="Search Rara, Phoksundo, Jumla, Dailekh..." defaultValue={params.q || ""} />
            <select className="input-field" name="difficulty" defaultValue={params.difficulty || ""}>
              <option value="">All difficulty</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Challenging</option>
              <option>Remote Adventure</option>
            </select>
            <button className="btn-dark">Search</button>
          </form>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((tour) => <PackageCard key={tour.slug} tour={tour} />)}
          </div>
          {filtered.length === 0 ? (
            <div className="card mt-8 p-8 text-center">
              <h2 className="text-2xl font-black text-navyInk">No matching packages yet</h2>
              <p className="mt-3 text-sm text-navyInk/65">Message us on WhatsApp and we can suggest a custom Karnali itinerary.</p>
            </div>
          ) : null}
        </div>
      </section>
      <CTASection />
    </>
  );
}
