import Link from "next/link";
import { DISPLAY_PHONE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-main overflow-hidden rounded-lg bg-[linear-gradient(135deg,#102033_0%,#063f35_55%,#0f4f3d_100%)] p-8 text-white shadow-premium sm:p-12 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Plan with local experts</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Need a Karnali tour package, Jeep rental in Surkhet, or a custom Nepal adventure?
            </h2>
            <p className="mt-4 max-w-3xl text-white/75">
              Send your date, group size, destination, and comfort level. The team will prepare a practical route and quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={getWhatsAppUrl("Hello Bheri Karnali Tours & Travels, I want to customize a trip.")} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp Inquiry
            </a>
            <a href={`tel:${DISPLAY_PHONE.replace("-", "")}`} className="btn-secondary">
              Call {DISPLAY_PHONE}
            </a>
            <Link href="/booking" className="btn-secondary">
              Customize Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
