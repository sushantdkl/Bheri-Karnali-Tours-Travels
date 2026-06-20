import type { Metadata } from "next";
import { CTASection } from "@/components/shared/CTASection";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { getPublishedGalleryItems } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Karnali Travel Gallery",
  description:
    "Browse Karnali destination, tour, vehicle rental, culture, and adventure gallery placeholders for Bheri Karnali Tours & Travels.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Karnali Travel Gallery",
    description: "Rara, Phoksundo, Surkhet, Dailekh, Jumla, Dolpo, vehicles, and tour moments.",
  },
  twitter: { card: "summary_large_image" },
};

export default async function GalleryPage() {
  const items = await getPublishedGalleryItems(galleryItems);

  return (
    <>
      <section className="section-pad section-gradient">
        <div className="container-main">
          <SectionHeading
            eyebrow="Gallery"
            title="Karnali travel visuals ready for real client photos"
            description="Premium placeholder cards keep the site polished now, while the structure is ready for approved destination, tour, and vehicle images before launch."
            titleAs="h1"
          />
          <div className="mt-10">
            <GalleryGrid items={items} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
