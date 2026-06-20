import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  "Local Karnali expertise",
  "Safe and comfortable travel",
  "Experienced drivers",
  "Custom itinerary planning",
  "Transparent pricing",
  "WhatsApp support",
  "Reliable vehicle rental",
  "Families, groups, students, and official trips",
];

export function WhyChoose() {
  return (
    <section className="section-pad section-gradient">
      <div className="container-main grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Why choose us"
          title="A serious travel partner for serious Karnali routes"
          description="Bheri Karnali Tours & Travels combines local route knowledge, practical vehicle planning, and clear communication so customers feel supported from inquiry to return."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="card p-5">
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-saffron to-river" />
              <p className="text-lg font-black text-navyInk">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
