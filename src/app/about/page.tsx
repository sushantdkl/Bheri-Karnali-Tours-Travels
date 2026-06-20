import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SafetySupportSection, TestimonialsSection } from "@/components/shared/TrustSections";
import { PROPRIETOR_NAME } from "@/lib/constants";
import { getPageContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bheri Karnali Tours & Travels, a Surkhet-based Karnali travel agency for tours, vehicle rental, and custom Nepal trips.",
};

export default async function AboutPage() {
  const page = await getPageContent("about");
  const stats = ["100+ custom trips planned", "Karnali-focused routes", "Vehicle rental support", "Local travel guidance"];
  const values = ["Practical route advice", "Safe vehicle choices", "Transparent communication", "Respect for local communities"];

  return (
    <>
      <section className="section-pad section-gradient">
        <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the company"
              title={page?.heroTitle || page?.title || "A premium travel partner rooted in Karnali"}
              description={page?.heroSubtitle || page?.subtitle || "Bheri Karnali Tours & Travels is built around practical local knowledge: roads, seasons, vehicle fit, cultural routes, family comfort, official travel needs, and remote route planning."}
              titleAs="h1"
            />
            <p className="mt-6 text-base leading-8 text-navyInk/72">
              {page?.content || "Surkhet is the working gateway for many Karnali routes. Our role is to make complex travel feel clear: where to go, when to travel, which vehicle fits, how many days to keep, and how to stay flexible when roads or weather change."}
            </p>
            <p className="mt-4 rounded-lg bg-white/70 p-4 text-sm font-bold leading-7 text-navyInk shadow-sm">
              Bheri Karnali Tours & Travels is led by proprietor {PROPRIETOR_NAME}, with a focus on reliable Karnali travel planning, vehicle rental from Surkhet, and personalized tour support.
            </p>
          </div>
          <Image src={page?.heroImage || "/images/karnali/rara-lake.jpg"} alt="Rara Lake and Karnali mountain landscape" width={900} height={560} className="rounded-lg object-cover shadow-premium" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading eyebrow="Trust signals" title="Built for real travel decisions, not generic itineraries" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => <div key={item} className="card p-6 text-center text-lg font-black text-navyInk">{item}</div>)}
          </div>
        </div>
      </section>
      <section className="section-pad section-gradient">
        <div className="container-main">
          <SectionHeading eyebrow="Team values" title="How we approach every trip" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => <div key={item} className="card p-6"><h3 className="text-xl font-black text-navyInk">{item}</h3><p className="mt-3 text-sm leading-7 text-navyInk/65">Every recommendation should help the traveler make a better, safer, clearer decision.</p></div>)}
          </div>
        </div>
      </section>
      <SafetySupportSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
