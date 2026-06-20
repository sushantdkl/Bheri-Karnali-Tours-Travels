import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";

const support = [
  "Route guidance before booking",
  "Driver and vehicle fit for Karnali roads",
  "Flexible custom itineraries",
  "WhatsApp support for fast decisions",
];

export function SafetySupportSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Safety and support"
          title="Travel with route decisions that make sense"
          description="Karnali rewards good planning. We help customers choose the right vehicle, timing, route flow, and support level before the trip begins."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {support.map((item) => (
            <div key={item} className="card p-5">
              <p className="text-lg font-black text-navyInk">{item}</p>
              <p className="mt-2 text-sm leading-6 text-navyInk/65">Clear, practical support for families, groups, students, and official travel.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-pad section-gradient">
      <div className="container-main">
        <SectionHeading eyebrow="Customer confidence" title="Helpful planning, reliable vehicles, local knowledge" align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="card p-6">
              <p className="text-sm leading-7 text-navyInk/75">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 font-black text-navyInk">{item.name}</p>
              <p className="text-sm text-forest">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const groups = ["General", "Vehicle Rental", "Packages"] as const;

  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <SectionHeading eyebrow="FAQ" title="Common booking questions" description="Quick answers before you call, WhatsApp, or submit a trip inquiry." />
        <div className="mt-10 grid gap-8">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-xl font-black text-navyInk">{group}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {faqs.filter((item) => item.category === group).map((item) => (
                  <article key={item.question} className="card p-5">
                    <h4 className="text-lg font-black text-navyInk">{item.question}</h4>
                    <p className="mt-3 text-sm leading-7 text-navyInk/68">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
