import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/shared/CTASection";
import { InquirySection } from "@/components/home/InquirySection";
import { tourPackages } from "@/data/packages";
import { SITE_URL } from "@/lib/constants";
import { faqPageJsonLd, touristTripJsonLd } from "@/lib/seo/jsonLd";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tourPackages.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = tourPackages.find((item) => item.slug === slug);
  if (!tour) return {};

  return {
    title: tour.seoTitle || tour.title,
    description: tour.seoDescription || `${tour.summary} Book with Bheri Karnali Tours & Travels.`,
    keywords: tour.keywords,
    alternates: { canonical: `/packages/${tour.slug}` },
    openGraph: {
      title: tour.title,
      description: tour.summary,
      images: [{ url: tour.coverImage || tour.image }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = tourPackages.find((item) => item.slug === slug);
  if (!tour) notFound();

  return (
    <>
      <JsonLd data={tour.faqs?.length ? [touristTripJsonLd(tour), faqPageJsonLd(tour.faqs)] : touristTripJsonLd(tour)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Packages", href: "/packages" },
          { name: tour.title, href: new URL(`/packages/${tour.slug}`, SITE_URL).pathname },
        ]}
      />
      <section className="relative overflow-hidden bg-navyInk text-white">
        <Image src={tour.coverImage || tour.image} alt={tour.imageAlt || tour.title} fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navyInk via-navyInk/84 to-emeraldDeep/45" />
        <div className="container-main relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <p className="eyebrow">{tour.destination}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">{tour.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">{tour.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={getWhatsAppUrl(tour.whatsappMessage || `Hello Bheri Karnali Tours & Travels, I want to know the latest cost and itinerary for the ${tour.title}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book This Tour
            </a>
            <a href="/booking" className="btn-secondary">Customize Trip</a>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-main grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="card sticky top-28 h-fit p-6">
            <h2 className="text-xl font-black text-navyInk">Book this package</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div><dt className="font-black text-forest">Duration</dt><dd className="text-navyInk/70">{tour.duration}</dd></div>
              <div><dt className="font-black text-forest">Difficulty</dt><dd className="text-navyInk/70">{tour.difficulty}</dd></div>
              <div><dt className="font-black text-forest">Starting point</dt><dd className="text-navyInk/70">{tour.startingPoint}</dd></div>
              <div><dt className="font-black text-forest">Best season</dt><dd className="text-navyInk/70">{tour.bestSeason || "Ask us"}</dd></div>
              <div><dt className="font-black text-forest">Group size</dt><dd className="text-navyInk/70">{tour.groupSize || "Flexible"}</dd></div>
              <div><dt className="font-black text-forest">Price</dt><dd className="text-navyInk/70">{tour.priceFrom}</dd></div>
              <div><dt className="font-black text-forest">Vehicle</dt><dd className="text-navyInk/70">{tour.vehicleRecommendation || "Route-based recommendation"}</dd></div>
            </dl>
            <a href={getWhatsAppUrl(tour.whatsappMessage || `Hello Bheri Karnali Tours & Travels, I want to know the latest cost and itinerary for the ${tour.title}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              WhatsApp Inquiry
            </a>
            <a href="/booking" className="btn-outline mt-3 w-full">Send Booking Inquiry</a>
          </aside>
          <div className="grid gap-8">
            <div className="card p-6">
              <h2 className="text-2xl font-black text-navyInk">Trip Overview</h2>
              <p className="mt-4 text-sm leading-7 text-navyInk/72">{tour.description || tour.summary}</p>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-black text-navyInk">Highlights</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((item) => <p key={item} className="rounded-lg bg-cream p-4 text-sm font-bold text-navyInk">{item}</p>)}
              </div>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-black text-navyInk">Suggested Flow</h2>
              <ol className="mt-5 grid gap-3">
                {tour.itinerary.map((item, index) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-navyInk/10 p-4 text-sm text-navyInk/75">
                    <span className="font-black text-saffron">Day {index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-black text-navyInk">Best For</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {(tour.idealFor || tour.bestFor).map((item) => <span key={item} className="rounded-full bg-river/10 px-4 py-2 text-sm font-bold text-river">{item}</span>)}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card p-6">
                <h2 className="text-2xl font-black text-navyInk">Includes</h2>
                <ul className="mt-4 grid gap-3 text-sm text-navyInk/72">
                  {(tour.includes || ["Custom route planning", "WhatsApp support"]).map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
              <div className="card p-6">
                <h2 className="text-2xl font-black text-navyInk">Excludes</h2>
                <ul className="mt-4 grid gap-3 text-sm text-navyInk/72">
                  {(tour.excludes || ["Personal expenses", "Items not confirmed in quote"]).map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card p-6">
                <h2 className="text-2xl font-black text-navyInk">Travel Notes</h2>
                <ul className="mt-4 grid gap-3 text-sm text-navyInk/72">
                  {(tour.travelNotes || ["Route and timing are finalized after discussing date, group size, and comfort level."]).map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
              <div className="card p-6">
                <h2 className="text-2xl font-black text-navyInk">Safety Notes</h2>
                <ul className="mt-4 grid gap-3 text-sm text-navyInk/72">
                  {(tour.safetyNotes || ["Karnali trips should be planned with season, road condition, and driver experience in mind."]).map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            </div>
            {tour.faqs?.length ? (
              <div className="card p-6">
                <h2 className="text-2xl font-black text-navyInk">Package FAQs</h2>
                <div className="mt-4 grid gap-4">
                  {tour.faqs.map((faq) => (
                    <article key={faq.question} className="rounded-lg bg-cream p-4">
                      <h3 className="font-black text-navyInk">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-navyInk/70">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <InquirySection />
      <CTASection />
    </>
  );
}
