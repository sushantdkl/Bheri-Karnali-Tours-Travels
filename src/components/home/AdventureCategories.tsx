import { SectionHeading } from "@/components/shared/SectionHeading";

const categories = [
  "Rara Lake tour",
  "Shey Phoksundo Lake tour",
  "Dolpo trek",
  "Jumla and Sinja Valley cultural tour",
  "Humla and Limi Valley adventure",
  "Dailekh heritage and flame tour",
  "Surkhet valley sightseeing",
  "Karnali river rafting",
  "Camping and hiking",
  "Religious and cultural tours",
  "Family tours",
  "Group tours",
  "Student tours",
  "Corporate vehicle hire",
];

export function AdventureCategories() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Featured Karnali adventures"
          title="From lake escapes to remote Himalayan routes"
          description="Choose a ready direction, then customize the pace, vehicle, accommodation style, and support level around your group."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {["Why Karnali?", "Why start from Surkhet?", "Plan with local support"].map((title, index) => (
            <article key={title} className="card p-6">
              <h3 className="text-xl font-black text-navyInk">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-navyInk/68">
                {index === 0
                  ? "Karnali offers Nepal's strongest mix of remote lakes, high-hill culture, river corridors, and expedition-style landscapes."
                  : index === 1
                    ? "Surkhet is a practical gateway for Rara, Dailekh, Jumla, Kalikot, vehicle rental, and western Nepal route planning."
                    : "You can ask for route, cost, vehicle, and timing guidance before you know the full itinerary."}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-lg border border-forest/10 bg-cream px-4 py-4 text-sm font-black text-navyInk">
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
