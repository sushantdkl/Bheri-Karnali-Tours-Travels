import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { Vehicle } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="card overflow-hidden">
      <ResponsiveImage
        src={vehicle.image}
        alt={vehicle.imageAlt || `${vehicle.name} rental in Surkhet`}
        title={vehicle.name}
        subtitle="Vehicle rental from Surkhet"
        className="h-44 w-full rounded-none"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="p-5">
        <h3 className="text-xl font-black text-navyInk">{vehicle.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {vehicle.type ? <span className="badge">{vehicle.type}</span> : null}
          {vehicle.withDriver ? <span className="badge">With driver</span> : null}
          {vehicle.fourWheelDrive ? <span className="badge bg-river/10 text-river">4WD</span> : null}
        </div>
        <dl className="mt-4 grid gap-3 text-sm">
          <div>
            <dt className="font-black text-forest">Seating capacity</dt>
            <dd className="text-navyInk/70">{vehicle.seatingCapacity}</dd>
          </div>
          <div>
            <dt className="font-black text-forest">Best use case</dt>
            <dd className="text-navyInk/70">{vehicle.bestFor || vehicle.bestUseCase}</dd>
          </div>
          <div>
            <dt className="font-black text-forest">Driver option</dt>
            <dd className="text-navyInk/70">{vehicle.withDriver ? "Available with experienced driver" : "Self-drive or local use based on availability"}</dd>
          </div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.routes.map((route) => (
            <span key={route} className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest">{route}</span>
          ))}
        </div>
        {vehicle.priceDisplay ? <p className="mt-4 rounded-lg bg-cream p-3 text-sm font-black text-navyInk">{vehicle.priceDisplay}</p> : null}
        <a
          href={getWhatsAppUrl(`Hello Bheri Karnali Tours & Travels, I need a quote for ${vehicle.name} rental from Surkhet.`)}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-5 w-full"
        >
          WhatsApp Quote
        </a>
      </div>
    </article>
  );
}
