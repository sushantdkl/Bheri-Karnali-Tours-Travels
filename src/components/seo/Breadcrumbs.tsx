import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { SITE_URL } from "@/lib/constants";

type Breadcrumb = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: new URL(item.href, SITE_URL).toString(),
  }));

  return (
    <nav aria-label="Breadcrumb" className="container-main px-5 pt-6 text-sm font-bold text-navyInk/60 sm:px-8 lg:px-10">
      <JsonLd data={breadcrumbJsonLd(schemaItems)} />
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-navyInk">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-forest">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
