import Link from "next/link";

const cards = [
  { title: "Edit Pages", href: "/admin/cms/pages", description: "Homepage, About, Contact, and other page hero/content blocks." },
  { title: "Site Settings", href: "/admin/cms/settings", description: "Company, proprietor, phone, WhatsApp, footer, and SEO defaults." },
  { title: "Upload Images", href: "/admin/media", description: "Upload local images for CMS content and gallery testing." },
  { title: "Blog Guides", href: "/admin/cms/blog", description: "Travel guides and SEO articles." },
  { title: "Gallery", href: "/admin/cms/gallery", description: "Public website gallery images and captions." },
  { title: "FAQs", href: "/admin/cms/faqs", description: "Booking, package, and vehicle rental questions." },
  { title: "Services", href: "/admin/cms/services", description: "Business service cards shown across the website." },
];

export default function CmsDashboardPage() {
  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">Content management</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Website CMS</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-navyInk/65">
          Edit public website content from here. Changes save to the database and appear on public pages after refresh or revalidation.
        </p>
        <p className="mt-4 rounded-lg border border-saffron/30 bg-saffron/10 p-4 text-sm font-bold leading-6 text-navyInk">
          Development login warning: change the default test password before any real production launch.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="card block p-6 hover:-translate-y-1 hover:shadow-premium">
            <h2 className="text-xl font-black text-navyInk">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-navyInk/65">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
