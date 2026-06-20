import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Starter terms for tour package and vehicle rental inquiries with Bheri Karnali Tours & Travels.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main max-w-3xl">
        <p className="eyebrow">Terms and Conditions</p>
        <h1 className="mt-4 text-4xl font-black text-navyInk">Travel inquiry terms</h1>
        <div className="mt-8 grid gap-5 text-sm leading-7 text-navyInk/72">
          <p>Submitting a tour or vehicle rental inquiry does not create a final booking. Bookings are confirmed only after route, availability, price, vehicle, dates, and itinerary are agreed directly with the company.</p>
          <p>Prices may vary by route, season, vehicle type, road condition, driver availability, group size, pickup point, and travel duration.</p>
          <p>Remote Karnali travel can be affected by weather, flight changes, road condition, landslides, permits, health considerations, and local operating conditions.</p>
          <p>Bheri Karnali Tours & Travels coordinates final travel plans and quotations directly with customers before confirmation.</p>
        </div>
      </div>
    </section>
  );
}
