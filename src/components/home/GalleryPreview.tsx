import Link from "next/link";
import { MediaCard } from "@/components/shared/MediaCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Travel gallery"
            title="Real Karnali, Surkhet, vehicle, and adventure visuals"
            description="Explore destination photos, route moments, vehicle rental visuals, culture, and adventure ideas before planning your trip."
          />
          <Link href="/gallery" className="btn-dark w-fit">
            View Gallery
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.slice(0, 4).map((item) => (
            <MediaCard key={`${item.title}-${item.location}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
