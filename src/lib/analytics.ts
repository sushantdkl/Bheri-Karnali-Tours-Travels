export type AnalyticsEventName =
  | "whatsapp_click"
  | "phone_click"
  | "booking_submit"
  | "vehicle_inquiry_submit"
  | "contact_submit";

export function isAnalyticsConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID);
}

export function trackServerPreparedEvent(name: AnalyticsEventName, properties: Record<string, string | number | boolean | undefined> = {}) {
  return {
    name,
    properties,
    configured: isAnalyticsConfigured(),
  };
}
