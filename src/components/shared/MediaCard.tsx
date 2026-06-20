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
    <article className="card group overflow-hidden">
      <ResponsiveImage src={image} alt={alt} title={title} subtitle={location} className="h-56 w-full rounded-none transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="p-5">
        {category ? <span className="badge">{category}</span> : null}
        <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-saffron to-river" />
        <h3 className="mt-4 text-xl font-black text-navyInk">{title}</h3>
        {location ? <p className="mt-1 text-sm font-bold text-saffron">{location}</p> : null}
        {description ? <p className="mt-3 text-sm leading-7 text-navyInk/70">{description}</p> : null}
      </div>
    </article>
  );
}
