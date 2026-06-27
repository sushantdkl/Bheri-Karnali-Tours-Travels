import Image from "next/image";
import Link from "next/link";
import { adventureActivities } from "@/data/adventureActivities";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function AdventureActivitiesSection() {
  const activities = adventureActivities.filter((activity) => activity.isActive && activity.isFeatured).slice(0, 3);

  return (
    <section className="section-pad bg-[linear-gradient(135deg,#082032_0%,#0e7490_54%,#fff7ed_54%,#ffffff_100%)]">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="text-white">
            <p className="eyebrow text-saffron">Hiking • Paragliding • Rafting</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Adventure Activities in Karnali</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              Add hiking, paragliding, or rafting to your Karnali trip with local route guidance, safety planning, and WhatsApp booking support.
            </p>
          </div>
          <div className="rounded-lg border border-white/20 bg-white/12 p-5 text-sm leading-7 text-white/82 shadow-premium backdrop-blur">
            Adventure rates and availability may change by season, weather, operator schedule, group size and safety conditions. Please contact us for the latest confirmed price.
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {activities.map((activity) => (
            <article key={activity.id} className="card group flex h-full flex-col overflow-hidden border-white/70 bg-white">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={activity.coverImage}
                  alt={activity.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-river shadow-sm">{activity.category}</div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-sunset">{activity.estimatedPrice}</span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-river">{activity.difficulty}</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-forest">{activity.bestSeason}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-navyInk">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navyInk/70">{activity.shortDescription}</p>
                <dl className="mt-5 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm">
                  <div>
                    <dt className="font-black text-river">Duration</dt>
                    <dd className="text-navyInk/68">{activity.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-black text-river">Best for</dt>
                    <dd className="text-navyInk/68">{activity.bestFor.slice(0, 2).join(", ")}</dd>
                  </div>
                </dl>
                <div className="mt-4 grid gap-2 text-xs leading-6 text-navyInk/62">
                  <p><span className="font-black text-navyInk">Things needed:</span> {activity.thingsNeeded.slice(0, 2).join(", ")}</p>
                  <p className="line-clamp-2"><span className="font-black text-navyInk">Safety:</span> {activity.safetyNotes[0]}</p>
                </div>
                <p className="mt-4 line-clamp-2 text-xs font-semibold leading-6 text-navyInk/58">{activity.priceNote}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  <Link href={activity.bookingHref} className="btn-dark flex-1 justify-center px-4 py-2.5">
                    {activity.ctaLabel}
                  </Link>
                  <a href={getWhatsAppUrl(activity.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center px-4 py-2.5">
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-lg border border-navyInk/10 bg-white p-5 shadow-premium sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-navyInk">Not sure which adventure fits your trip?</h3>
            <p className="mt-2 text-sm leading-7 text-navyInk/65">Tell us your date, group size, comfort level, and route idea. We will suggest a practical plan.</p>
          </div>
          <a href={getWhatsAppUrl("Hello Bheri Karnali Tours & Travels, I need help choosing an adventure activity in Karnali.")} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
            Talk to Local Expert
          </a>
        </div>
      </div>
    </section>
  );
}
