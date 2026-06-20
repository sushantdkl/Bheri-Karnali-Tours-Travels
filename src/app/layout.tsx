import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { COMPANY_NAME, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";
import { localBusinessJsonLd, travelAgencyJsonLd, vehicleRentalServiceJsonLd } from "@/lib/seo/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Karnali Tour Packages and Surkhet Vehicle Rental`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Premium Karnali travel agency for Rara Lake tour, Phoksundo Lake tour, Nepal adventure tours, and vehicle rental from Surkhet.",
  keywords: [
    "Karnali tour package",
    "Surkhet vehicle rental",
    "Rara Lake tour",
    "Phoksundo Lake tour",
    "Karnali travel agency",
    "Tour and travel in Surkhet",
    "Jeep rental in Surkhet",
    "Nepal adventure tours",
    "Bheri Karnali Tours & Travels",
  ],
  openGraph: {
    title: `${COMPANY_NAME} | Explore Karnali and Nepal`,
    description:
      "Book Karnali tours, custom Nepal trips, and reliable vehicles from Surkhet with local experts.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900, alt: "Rara Lake and Karnali mountain landscape" }],
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Karnali Tours and Surkhet Vehicle Rental`,
    description: "Book Karnali tours, custom Nepal trips, and reliable vehicles from Surkhet with local experts.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <JsonLd data={[travelAgencyJsonLd(), localBusinessJsonLd(), vehicleRentalServiceJsonLd()]} />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
