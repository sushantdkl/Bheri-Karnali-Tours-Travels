import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const badges = ["Karnali Local Experts", "WhatsApp Booking", "Vehicle Rental from Surkhet", "Custom Trips"];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <Image src="/images/karnali-hero.png" alt="Karnali mountain lake travel landscape" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navyInk/92 via-emeraldDeep/72 to-navyInk/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaf1] to-transparent" />
      <div className="container-main relative flex min-h-[calc(100vh-5rem)] items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl text-white">
          <p className="eyebrow">Karnali travel agency based in Surkhet</p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Explore Karnali with Trusted Local Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Plan Rara Lake, Phoksundo, Dolpo, Humla, Jumla, Surkhet tours and vehicle rental from Surkhet with Bheri Karnali Tours & Travels.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/packages" className="btn-primary">Explore Packages</Link>
            <Link href="/vehicles" className="btn-secondary">Rent a Vehicle</Link>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Now</a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <div key={badge} className="rounded-lg border border-white/20 bg-white/12 p-4 text-sm font-bold backdrop-blur">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
