import { InquiryForm } from "@/components/forms/InquiryForm";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function InquirySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Booking inquiry"
            title="Tell us where you want to go"
            description="Use this form for tour packages, Surkhet vehicle rental, Jeep rental in Surkhet, Rara Lake tour, Phoksundo Lake tour, or fully customized Nepal adventure tours."
          />
          <div className="mt-8 rounded-lg bg-cream p-5 text-sm leading-7 text-navyInk/72">
            For fastest response, include your travel date, number of people, destination, vehicle preference, and whether you prefer call or WhatsApp.
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
