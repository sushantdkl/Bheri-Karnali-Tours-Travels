import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for inquiries submitted to Bheri Karnali Tours & Travels.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main max-w-3xl">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-black text-navyInk">How inquiry information is used</h1>
        <div className="mt-8 grid gap-5 text-sm leading-7 text-navyInk/72">
          <p>Bheri Karnali Tours & Travels collects inquiry details such as name, phone number, optional email, destination, travel date, message, and preferred contact method.</p>
          <p>This information is used to respond to travel, tour package, vehicle rental, and service coordination requests by phone, WhatsApp, or email.</p>
          <p>Inquiry data is not used to create final bookings until the company confirms route, availability, itinerary, and quotation directly with the customer.</p>
          <p>Users can request correction or deletion of their inquiry information by contacting the company through the published phone or WhatsApp number.</p>
        </div>
      </div>
    </section>
  );
}
