type InquiryNotificationInput = {
  fullName: string;
  phone: string;
  email?: string;
  inquiryType: string;
  destination?: string;
  vehicleType?: string;
  message?: string;
};

export function createInquiryNotificationEmail(input: InquiryNotificationInput) {
  const subject = `New ${input.inquiryType} inquiry from ${input.fullName}`;
  const text = [
    `New inquiry received for Bheri Karnali Tours & Travels.`,
    ``,
    `Name: ${input.fullName}`,
    `Phone: ${input.phone}`,
    `Email: ${input.email || "-"}`,
    `Inquiry type: ${input.inquiryType}`,
    `Destination: ${input.destination || "-"}`,
    `Vehicle: ${input.vehicleType || "-"}`,
    ``,
    `Message:`,
    input.message || "-",
  ].join("\n");

  return { subject, text };
}
