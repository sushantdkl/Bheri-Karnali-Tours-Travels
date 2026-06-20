import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { prisma } from "@/lib/prisma";
import { saveService } from "@/server/cms/actions";

export default async function CmsServicesPage() {
  const items = await prisma.service.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Services</h1>
      </div>
      <ServiceForm />
      <div className="grid gap-5">
        {items.map((item) => <ServiceForm key={item.id} item={item} />)}
      </div>
    </div>
  );
}

function ServiceForm({ item }: { item?: Awaited<ReturnType<typeof prisma.service.findMany>>[number] }) {
  return (
    <form action={saveService} className="card grid gap-5 p-6">
      <input type="hidden" name="id" value={item?.id || ""} />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="title" label={item ? "Service title" : "New service title"} required defaultValue={item?.title} />
        <TextField name="slug" label="Slug" defaultValue={item?.slug} placeholder="auto from title if blank" />
        <TextField name="icon" label="Icon label" defaultValue={item?.icon} placeholder="Jeep, Map, Mountain" />
        <TextField name="image" label="Image URL" defaultValue={item?.image} />
        <TextField name="sortOrder" label="Sort order" type="number" defaultValue={item?.sortOrder ?? 0} />
        <div className="grid gap-3 sm:grid-cols-2">
          <CheckboxField name="isFeatured" label="Featured" defaultChecked={item?.isFeatured ?? false} />
          <CheckboxField name="isActive" label="Active" defaultChecked={item?.isActive ?? true} />
        </div>
      </div>
      <TextAreaField name="shortDescription" label="Short description" required defaultValue={item?.shortDescription} rows={3} />
      <TextAreaField name="description" label="Full description" required defaultValue={item?.description} rows={5} />
      <FormActions cancelHref="/admin/cms" />
    </form>
  );
}
