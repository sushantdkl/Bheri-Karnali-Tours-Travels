"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "@/types";
import { Lightbox } from "@/components/shared/Lightbox";
import { MediaCard } from "@/components/shared/MediaCard";

const filters = ["All", "Destinations", "Tours", "Vehicles", "Culture", "Adventure"] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visible = useMemo(() => (active === "All" ? items : items.filter((item) => item.category === active)), [active, items]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => setActive(filter)} className={active === filter ? "btn-dark px-4 py-2" : "btn-outline px-4 py-2"}>
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <button key={`${item.title}-${item.location}`} type="button" className="text-left" onClick={() => setSelected(item)}>
            <MediaCard {...item} />
          </button>
        ))}
      </div>
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
