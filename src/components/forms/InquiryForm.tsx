"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { DISPLAY_PHONE } from "@/lib/constants";

const tripTypes = [
  { label: "Karnali tour package", value: "TOUR_PACKAGE" },
  { label: "Custom trip", value: "CUSTOM_TRIP" },
  { label: "Vehicle rental", value: "VEHICLE_RENTAL" },
  { label: "General contact", value: "GENERAL_CONTACT" },
];
const contacts = [
  { label: "WhatsApp", value: "WHATSAPP" },
  { label: "Call", value: "CALL" },
  { label: "Email", value: "EMAIL" },
] as const;

const activityDefaults: Record<string, { destination: string; message: string }> = {
  hiking: {
    destination: "Hiking / Trekking in Karnali",
    message: "I want to plan a hiking or trekking trip in Karnali. Please share route, guide, permit, transport, safety, and latest price guidance.",
  },
  paragliding: {
    destination: "Paragliding in Surkhet",
    message: "I want to ask about paragliding in Surkhet. Please share today's rate, operator availability, weather condition, and photo/video options.",
  },
  rafting: {
    destination: "Karnali River Rafting",
    message: "I want to ask about Karnali river rafting. Please share latest route, group size, safety team, transport, and quote details.",
  },
};

type ApiResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export function InquiryForm({ activity = "" }: { activity?: string }) {
  const activityDefault = activityDefaults[activity];
  const [status, setStatus] = useState<ApiResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      phone: data.get("phone"),
      email: data.get("email"),
      inquiryType: data.get("inquiryType"),
      destination: data.get("destination"),
      travelDate: data.get("travelDate"),
      numberOfPeople: data.get("numberOfPeople") || undefined,
      preferredContact: data.get("preferredContact"),
      message: data.get("message"),
      companyName: data.get("companyName"),
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ApiResult;
      setStatus(result);
      if (result.success) form.reset();
    } catch {
      setStatus({
        success: false,
        message: `Something went wrong. Please contact us on WhatsApp or call ${DISPLAY_PHONE}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-5 sm:p-7">
      <p className="rounded-lg bg-cream p-4 text-sm leading-7 text-navyInk/70">
        You do not need to know the full itinerary yet. Ask for route, cost, vehicle, and date guidance. Prices may depend on route, travel date, road condition, vehicle type, and group size.
      </p>
      <input className="hidden" name="companyName" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" name="fullName" placeholder="Full name" required />
        <input className="input-field" name="phone" placeholder="Phone number" required />
      </div>
      <input className="input-field" name="email" type="email" placeholder="Email optional" />
      <div className="grid gap-4 sm:grid-cols-2">
        <select className="input-field" name="inquiryType" required defaultValue={activityDefault ? "CUSTOM_TRIP" : ""}>
          <option value="" disabled>Trip type</option>
          <option value="CUSTOM_TRIP">Hiking / Trekking</option>
          <option value="CUSTOM_TRIP">Paragliding</option>
          <option value="CUSTOM_TRIP">Rafting</option>
          {tripTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
        </select>
        <input className="input-field" name="destination" placeholder="Destination" required defaultValue={activityDefault?.destination || ""} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" name="travelDate" type="date" required />
        <input className="input-field" name="numberOfPeople" type="number" min="1" placeholder="Number of people" required />
      </div>
      <textarea className="input-field min-h-32" name="message" placeholder="Tell us your route, budget, vehicle need, or comfort preference" required defaultValue={activityDefault?.message || ""} />
      <div>
        <p className="mb-3 text-sm font-bold text-navyInk">Preferred contact method</p>
        <div className="flex flex-wrap gap-3">
          {contacts.map((contact) => (
            <label key={contact.value} className="flex cursor-pointer items-center gap-2 rounded-full border border-navyInk/15 px-4 py-2 text-sm font-bold text-navyInk">
              <input type="radio" name="preferredContact" value={contact.value} required defaultChecked={contact.value === "WHATSAPP"} />
              {contact.label}
            </label>
          ))}
        </div>
      </div>
      <button className="btn-dark w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
      {status ? (
        <div className={status.success ? "rounded-lg bg-river/10 p-4 text-sm font-semibold text-forest" : "rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700"}>
          <p>{status.success ? "Thank you. Your inquiry has been received. For faster response, you can also message us on WhatsApp." : status.message}</p>
          {status.errors ? (
            <ul className="mt-3 list-inside list-disc">
              {Object.entries(status.errors).map(([field, messages]) => (
                <li key={field}>{messages.join(" ")}</li>
              ))}
            </ul>
          ) : null}
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
            WhatsApp Us
          </a>
        </div>
      ) : null}
    </form>
  );
}
