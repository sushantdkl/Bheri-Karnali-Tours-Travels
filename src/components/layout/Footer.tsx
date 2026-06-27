import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO, COMPANY_NAME, DISPLAY_PHONE, NAV_LINKS, PROPRIETOR_NAME, TEL_PHONE } from "@/lib/constants";
import { getSiteSettings } from "@/lib/cms";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const destinations = ["Rara Lake", "Shey Phoksundo", "Surkhet", "Dailekh", "Jumla", "Humla", "Dolpo"];
const services = ["Karnali tour package", "Surkhet vehicle rental", "Jeep rental in Surkhet", "Custom Nepal adventure tours"];

export async function Footer() {
  const settings = await getSiteSettings();
  const companyName = settings?.siteName || COMPANY_NAME;
  const displayPhone = settings?.phone || DISPLAY_PHONE;
  const telPhone = displayPhone.replace(/\s|-/g, "");
  const proprietor = settings?.proprietorName || PROPRIETOR_NAME;

  return (
    <footer className="bg-emeraldDeep px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="container-main grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Image src={settings?.logoUrl || BRAND_LOGO} alt="Bheri Karnali Tours & Travels logo" width={240} height={64} className="h-16 w-auto rounded-md bg-white/95 object-contain p-2" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            {settings?.footerDescription || "Premium tour and travel in Surkhet for Karnali adventures, Nepal trips, and reliable vehicle rental."}
          </p>
          <p className="mt-3 text-sm font-bold text-white/80">Proprietor: {proprietor}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${telPhone || TEL_PHONE}`} className="btn-primary">
              Call {displayPhone}
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <p className="font-black">Quick Links</p>
          <div className="mt-4 grid gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-saffron">
                {link.label}
              </Link>
            ))}
            <Link href="/booking?activity=hiking" className="text-sm text-white/70 hover:text-saffron">Adventure Activities</Link>
            <Link href="/booking" className="text-sm text-white/70 hover:text-saffron">Booking Inquiry</Link>
            <Link href="/gallery" className="text-sm text-white/70 hover:text-saffron">Gallery</Link>
            <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-saffron">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-sm text-white/70 hover:text-saffron">Terms and Conditions</Link>
          </div>
        </div>
        <div>
          <p className="font-black">Destinations</p>
          <div className="mt-4 grid gap-3">
            {destinations.map((item) => (
              <span key={item} className="text-sm text-white/70">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Services</p>
          <div className="mt-4 grid gap-3">
            {services.map((item) => (
              <span key={item} className="text-sm text-white/70">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="container-main mt-10 border-t border-white/15 pt-6 text-xs text-white/55">
        <p>Copyright 2026 {companyName}. Responsible travel, verified routes, and direct inquiry support.</p>
      </div>
    </footer>
  );
}
