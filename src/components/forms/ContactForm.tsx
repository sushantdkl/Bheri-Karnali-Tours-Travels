"use client";

import { useState } from "react";
import { DISPLAY_PHONE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ApiResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const contacts = [
  { label: "WhatsApp", value: "WHATSAPP" },
  { label: "Call", value: "CALL" },
  { label: "Email", value: "EMAIL" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<ApiResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          preferredContact: data.get("preferredContact"),
          companyName: data.get("companyName"),
        }),
      });
      const result = (await response.json()) as ApiResult;
      setStatus(result);
      if (result.success) form.reset();
    } catch {
      setStatus({ success: false, message: `Something went wrong. Please contact us on WhatsApp or call ${DISPLAY_PHONE}.` });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-5 sm:p-7">
      <input className="hidden" name="companyName" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" name="fullName" placeholder="Full name" required />
        <input className="input-field" name="phone" placeholder="Phone number" required />
      </div>
      <input className="input-field" name="email" type="email" placeholder="Email optional" />
      <textarea className="input-field min-h-36" name="message" placeholder="How can we help?" minLength={10} required />
      <div className="flex flex-wrap gap-3">
        {contacts.map((contact) => (
          <label key={contact.value} className="flex cursor-pointer items-center gap-2 rounded-full border border-navyInk/15 px-4 py-2 text-sm font-bold text-navyInk">
            <input type="radio" name="preferredContact" value={contact.value} required defaultChecked={contact.value === "WHATSAPP"} />
            {contact.label}
          </label>
        ))}
      </div>
      <button className="btn-dark w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Contact Message"}
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
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-primary mt-4">WhatsApp Us</a>
        </div>
      ) : null}
    </form>
  );
}
