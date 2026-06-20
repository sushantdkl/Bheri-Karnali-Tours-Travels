import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { prisma } from "@/lib/prisma";
import { saveGalleryItem } from "@/server/cms/actions";

export default async function CmsGalleryPage() {
  const items = await prisma.galleryItem.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Gallery</h1>
        <p className="mt-3 text-sm leading-7 text-navyInk/65">Use uploaded image URLs from Media Library or existing public image paths.</p>
      </div>
      <GalleryForm />
      <div className="grid gap-5">
        {items.map((item) => <GalleryForm key={item.id} item={item} />)}
      </div>
    </div>
  );
}

function GalleryForm({ item }: { item?: Awaited<ReturnType<typeof prisma.galleryItem.findMany>>[number] }) {
  return (
    <form action={saveGalleryItem} className="card grid gap-5 p-6">
      <input type="hidden" name="id" value={item?.id || ""} />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="title" label={item ? "Title" : "New gallery title"} required defaultValue={item?.title} />
        <TextField name="category" label="Category" required defaultValue={item?.category || "Destination"} />
        <TextField name="location" label="Location" defaultValue={item?.location} />
        <TextField name="imageUrl" label="Image URL" required defaultValue={item?.imageUrl} placeholder="/uploads/example.webp" />
        <TextField name="altText" label="Alt text" required defaultValue={item?.altText} />
        <TextField name="sortOrder" label="Sort order" type="number" defaultValue={item?.sortOrder ?? 0} />
        <CheckboxField name="isFeatured" label="Featured" defaultChecked={item?.isFeatured ?? false} />
        <CheckboxField name="isPublished" label="Published" defaultChecked={item?.isPublished ?? true} />
      </div>
      <TextAreaField name="description" label="Description" defaultValue={item?.description} rows={3} />
      <FormActions cancelHref="/admin/cms" />
    </form>
  );
}
