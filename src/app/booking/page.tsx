import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Booking Inquiry",
  description:
    "Send a booking inquiry for Karnali tours, Rara Lake tour, Phoksundo Lake tour, Surkhet vehicle rental, and custom Nepal adventure tours.",
};

export default function BookingPage() {
  return (
    <section className="section-pad section-gradient">
      <div className="container-main grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeading
            eyebrow="Booking and inquiry"
            title="Request a custom quote for your tour or vehicle"
            description="Share your contact details, trip details, preferred date, group size, and contact method. The inquiry is saved for follow-up, and WhatsApp remains available for faster response."
            titleAs="h1"
          />
          <div className="mt-8 grid gap-4 text-sm leading-7 text-navyInk/72">
            <div className="card p-5"><p className="font-black text-navyInk">Trip details</p><p className="mt-2">Destination, travel date, number of people, route, and comfort level.</p></div>
            <div className="card p-5"><p className="font-black text-navyInk">Contact details</p><p className="mt-2">Phone, optional email, and whether you prefer WhatsApp, call, or email.</p></div>
            <div className="rounded-lg bg-navyInk p-5 text-white">
              <p className="font-black">Not sure what to choose?</p>
              <p className="mt-2 text-sm leading-7 text-white/72">Message us on WhatsApp for fast Karnali route and vehicle guidance.</p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">WhatsApp Now</a>
            </div>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
