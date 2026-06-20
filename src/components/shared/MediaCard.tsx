import { ResponsiveImage } from "@/components/shared/ResponsiveImage";

type MediaCardProps = {
  title: string;
  category?: string;
  location?: string;
  description?: string;
  image?: string;
  alt: string;
};

export function MediaCard({ title, category, location, description, image, alt }: MediaCardProps) {
  return (
    <article className="card overflow-hidden">
      <ResponsiveImage src={image} alt={alt} title={title} subtitle={location} className="h-56 w-full rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="p-5">
        {category ? <span className="badge">{category}</span> : null}
        <h3 className="mt-4 text-xl font-black text-navyInk">{title}</h3>
        {location ? <p className="mt-1 text-sm font-bold text-saffron">{location}</p> : null}
        {description ? <p className="mt-3 text-sm leading-7 text-navyInk/70">{description}</p> : null}
      </div>
    </article>
  );
}
