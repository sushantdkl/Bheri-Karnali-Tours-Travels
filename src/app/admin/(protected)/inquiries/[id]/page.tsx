import { InquiryStatus } from "@prisma/client";
import { notFound } from "next/navigation";
import { getCustomerWhatsAppUrl } from "@/lib/admin-whatsapp";
import { prisma } from "@/lib/prisma";
import { updateInquiryStatus } from "@/server/admin/actions";

type PageProps = {
  params: Promise<{ id: string }>;
};

function Row({ label, value }: { label: string; value?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-navyInk/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-navyInk/45">{label}</p>
      <div className="mt-2 text-sm font-semibold text-navyInk">{value || "-"}</div>
    </div>
  );
}

export default async function InquiryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const inquiry = await prisma.inquiry.findUnique({ where: { id } });
  if (!inquiry) notFound();

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Inquiry detail</p>
          <h1 className="mt-2 text-3xl font-black text-navyInk">{inquiry.fullName}</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn-dark" href={getCustomerWhatsAppUrl(inquiry.phone)} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
          <a className="btn-dark" href={`tel:${inquiry.phone}`}>Call</a>
        </div>
      </div>
      <section className="card p-5">
        <h2 className="text-xl font-black text-navyInk">Status actions</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {Object.values(InquiryStatus).map((status) => (
            <form key={status} action={updateInquiryStatus}>
              <input type="hidden" name="id" value={inquiry.id} />
              <input type="hidden" name="status" value={status} />
              <button className={status === inquiry.status ? "btn-primary" : "btn-dark"}>{status}</button>
            </form>
          ))}
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Row label="Phone" value={inquiry.phone} />
        <Row label="Email" value={inquiry.email} />
        <Row label="Type" value={inquiry.inquiryType} />
        <Row label="Destination" value={inquiry.destination} />
        <Row label="Package slug" value={inquiry.packageSlug} />
        <Row label="Vehicle type" value={inquiry.vehicleType} />
        <Row label="Travel date" value={inquiry.travelDate?.toLocaleDateString()} />
        <Row label="Return date" value={inquiry.returnDate?.toLocaleDateString()} />
        <Row label="People" value={inquiry.numberOfPeople} />
        <Row label="Pickup" value={inquiry.pickupLocation} />
        <Row label="Dropoff" value={inquiry.dropoffLocation} />
        <Row label="Preferred contact" value={inquiry.preferredContact} />
        <Row label="Status" value={inquiry.status} />
        <Row label="Source" value={inquiry.source} />
        <Row label="Created" value={inquiry.createdAt.toLocaleString()} />
      </section>
      <section className="card p-5">
        <h2 className="text-xl font-black text-navyInk">Message</h2>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-navyInk/75">{inquiry.message || "-"}</p>
      </section>
    </div>
  );
}
