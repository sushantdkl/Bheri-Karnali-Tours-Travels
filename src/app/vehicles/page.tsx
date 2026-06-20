import type { Metadata } from "next";
import { VehicleInquiryForm } from "@/components/forms/VehicleInquiryForm";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { rentalRoutes } from "@/data/routes";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { getActiveVehicles } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Surkhet Vehicle Rental",
  description:
    "Book Surkhet vehicle rental, Jeep rental in Surkhet, Scorpio, Hiace, Bolero, bus, bike, scooter, and 4WD vehicles for Karnali routes.",
  keywords: ["Surkhet vehicle rental", "Jeep rental in Surkhet", "Karnali route vehicle", "Rara Jeep rental"],
  openGraph: {
    title: "Vehicle Rental from Surkhet for Karnali Routes",
    description: "Rent cars, Jeeps, Hiace, Bolero, bus, and 4WD vehicles from Surkhet for Karnali travel.",
    images: [{ url: "/images/destinations/car-rental-nepal-with-driver.png" }],
  },
};

export default async function VehiclesPage() {
  const vehicleItems = await getActiveVehicles(vehicles);

  return (
    <>
      <section className="section-pad bg-[linear-gradient(135deg,#102033_0%,#063f35_60%,#0f4f3d_100%)] text-white">
        <div className="container-main grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Surkhet vehicle rental"
              title="Vehicle Rental from Surkhet for Karnali Routes"
              description="Choose the right vehicle for Rara route, Dailekh route, Jumla route, local Surkhet travel, official trips, family trips, and group tours."
              tone="light"
              titleAs="h1"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Rara route", "Dailekh route", "Jumla route", "Local Surkhet travel", "Official trips", "Family trips", "Group tours"].map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white">{item}</span>
              ))}
            </div>
          </div>
          <ResponsiveImage
            src="/images/destinations/car-rental-nepal-with-driver.png"
            alt="Vehicle rental in Nepal with driver"
            title="Vehicle rental from Surkhet"
            subtitle="Car, Jeep, Hiace, bus and route support"
            priority
            className="h-72 w-full shadow-premium lg:h-96"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div className="container-main">
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {vehicleItems.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}
          </div>
        </div>
      </section>
      <section className="section-pad section-gradient">
        <div className="container-main">
          <SectionHeading eyebrow="How rental works" title="Simple route-first vehicle booking" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["Tell us your route", "Choose vehicle type", "Confirm date and pickup", "Travel safely with driver"].map((item, index) => (
              <div key={item} className="card p-6">
                <span className="badge">Step {index + 1}</span>
                <h3 className="mt-4 text-xl font-black text-navyInk">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Route-based rental guidance"
            title="Vehicle rental for remote Karnali roads"
            description="Rental quotes depend on route, vehicle type, number of days, road condition, travel date, and driver availability. Ask us for current route guidance before final planning."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rentalRoutes.map((route) => (
              <article key={route.slug} className="card p-5">
                <span className="badge">{route.bestVehicleType}</span>
                <h3 className="mt-4 text-xl font-black text-navyInk">{route.routeName}</h3>
                <p className="mt-3 text-sm leading-7 text-navyInk/70">{route.travelNature}</p>
                <p className="mt-3 text-xs font-bold text-forest">{route.roadConditionNote}</p>
                <a href={getWhatsAppUrl(route.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5 px-4 py-2.5">{route.quoteCta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Vehicle quote"
            title="Request a vehicle rental quote from Surkhet"
            description="Submit your pickup, route, date, and vehicle preference. The inquiry is saved securely and the team can follow up by WhatsApp, call, or email."
          />
          <VehicleInquiryForm />
        </div>
      </section>
      <CTASection />
    </>
  );
}
