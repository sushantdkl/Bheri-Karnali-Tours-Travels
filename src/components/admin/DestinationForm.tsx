import type { Destination } from "@prisma/client";
import { SlugFields } from "@/components/admin/SlugFields";
import { saveDestination } from "@/server/admin/actions";

export function DestinationForm({ item }: { item?: Destination }) {
  return (
    <form action={saveDestination} className="card grid gap-5 p-5">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <SlugFields titleName="name" titleLabel="Name" titleDefault={item?.name} slugDefault={item?.slug} />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="district" placeholder="District" defaultValue={item?.district || ""} />
        <input className="input-field" name="province" placeholder="Province" defaultValue={item?.province || "Karnali"} />
        <input className="input-field" name="category" placeholder="Category" defaultValue={item?.category} required />
      </div>
      <input className="input-field" name="shortDescription" placeholder="Short description" defaultValue={item?.shortDescription} required />
      <textarea className="input-field min-h-36" name="description" placeholder="Description" defaultValue={item?.description} required />
      <div className="grid gap-4 sm:grid-cols-4">
        <input className="input-field" name="bestSeason" placeholder="Best season" defaultValue={item?.bestSeason || ""} />
        <input className="input-field" name="altitude" placeholder="Altitude" defaultValue={item?.altitude || ""} />
        <input className="input-field" name="difficulty" placeholder="Difficulty" defaultValue={item?.difficulty || ""} />
        <input className="input-field" name="image" placeholder="Image URL" defaultValue={item?.image || ""} />
      </div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isFeatured" defaultChecked={item?.isFeatured ?? false} /> Featured</label>
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isActive" defaultChecked={item?.isActive ?? true} /> Active</label>
      </div>
      <button className="btn-dark w-fit">{item ? "Update Destination" : "Create Destination"}</button>
    </form>
  );
}
