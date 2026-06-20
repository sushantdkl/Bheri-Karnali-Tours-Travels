"use client";

import { useState } from "react";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

type SlugFieldsProps = {
  titleName?: string;
  titleLabel?: string;
  titleDefault?: string;
  slugDefault?: string;
};

export function SlugFields({ titleName = "title", titleLabel = "Title", titleDefault = "", slugDefault = "" }: SlugFieldsProps) {
  const [title, setTitle] = useState(titleDefault);
  const [slug, setSlug] = useState(slugDefault || slugify(titleDefault));
  const [slugTouched, setSlugTouched] = useState(Boolean(slugDefault));

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-bold text-navyInk">
        {titleLabel}
        <input
          className="input-field"
          name={titleName}
          value={title}
          required
          onChange={(event) => {
            const nextTitle = event.target.value;
            setTitle(nextTitle);
            if (!slugTouched) setSlug(slugify(nextTitle));
          }}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-navyInk">
        Slug
        <input
          className="input-field"
          name="slug"
          value={slug}
          required
          onChange={(event) => {
            setSlugTouched(true);
            setSlug(slugify(event.target.value));
          }}
        />
      </label>
    </div>
  );
}
