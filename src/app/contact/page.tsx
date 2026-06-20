import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { COMPANY_NAME, DISPLAY_PHONE, PROPRIETOR_NAME } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { FAQSection } from "@/components/shared/TrustSections";
import { rentalRoutes } from "@/data/routes";
import { faqs } from "@/data/faqs";
import { getSiteSettings } from "@/lib/cms";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bheri Karnali Tours & Travels for Karnali tour package booking, Surkhet vehicle rental, and WhatsApp travel inquiries.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqPageJsonLd(faqs.slice(0, 8))]} />
      <section className="section-pad section-gradient">
        <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Call or WhatsApp for fast travel planning"
              description={`${COMPANY_NAME} supports tour inquiries, vehicle rental quotes, and custom trip planning from Surkhet.`}
              titleAs="h1"
            />
            <div className="mt-8 grid gap-4">
              <ContactCards settings={settings} />
              <div className="card p-5">
                <p className="font-black text-navyInk">WhatsApp-first booking support</p>
                <p className="mt-2 text-sm leading-7 text-navyInk/70">Ask for latest route condition, cost range, vehicle fit, and available dates before you confirm.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {["Tour package inquiry", "Vehicle rental inquiry", "Custom trip planning"].map((item) => (
                <div key={item} className="rounded-lg bg-white/70 p-4 text-sm font-black text-navyInk shadow-sm">{item}</div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Based in Surkhet for Karnali routes"
              description="Serving Karnali Province and Nepal-wide travel routes from Surkhet."
            />
            <div className="mt-8 rounded-lg border border-navyInk/10 bg-[linear-gradient(135deg,#102033_0%,#0f4f3d_55%,#1aa7a1_100%)] p-6 text-white shadow-premium">
              <p className="text-xl font-black">Surkhet, Karnali Province, Nepal</p>
              <p className="mt-3 text-sm leading-7 text-white/75">Exact office address should be confirmed before adding street-level map details.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Surkhet%2C%20Karnali%20Province%2C%20Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Route guidance"
              title="Common vehicle and tour routes from Surkhet"
              description="Ask for latest route condition, vehicle fit, and travel timing before confirming remote Karnali plans."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {rentalRoutes.slice(0, 7).map((route) => (
                <article key={route.slug} className="card p-5">
                  <span className="badge">{route.bestVehicleType}</span>
                  <h3 className="mt-4 text-lg font-black text-navyInk">{route.routeName}</h3>
                  <p className="mt-2 text-sm leading-6 text-navyInk/70">{route.travelNature}</p>
                  <p className="mt-3 text-xs font-bold text-forest">{route.roadConditionNote}</p>
                  <a href={getWhatsAppUrl(route.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5 px-4 py-2.5">
                    Ask Route on WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}

function ContactCards({ settings }: { settings: Awaited<ReturnType<typeof getSiteSettings>> }) {
  const phone = settings?.phone || DISPLAY_PHONE;
  const proprietor = settings?.proprietorName || PROPRIETOR_NAME;
  const company = settings?.siteName || COMPANY_NAME;
  const location = settings?.location || "Surkhet, Karnali Province, Nepal";
  const tel = phone.replace(/\s|-/g, "");

  return (
    <>
      <div className="card p-5">
        <p className="font-black text-navyInk">Company</p>
        <p className="mt-2 text-sm leading-7 text-navyInk/70">{company}</p>
        <p className="mt-1 text-sm leading-7 text-navyInk/70">Proprietor: {proprietor}</p>
      </div>
      <a className="card p-5 text-lg font-black text-navyInk" href={`tel:${tel}`}>Phone: {phone}</a>
      <a className="card p-5 text-lg font-black text-forest" href={settings?.whatsappLink || getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp: {phone}</a>
      <div className="card p-5">
        <p className="font-black text-navyInk">Business base</p>
        <p className="mt-2 text-sm leading-7 text-navyInk/70">{location}</p>
        <p className="mt-2 text-sm leading-7 text-navyInk/70">Service region: Karnali Province and Nepal</p>
      </div>
    </>
  );
}
