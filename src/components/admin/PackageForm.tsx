import type { TourPackage } from "@prisma/client";
import { SlugFields } from "@/components/admin/SlugFields";
import { savePackage } from "@/server/admin/actions";

function text(value?: string[] | null) {
  return value?.join("\n") || "";
}

export function PackageForm({ item }: { item?: TourPackage }) {
  const itinerary = Array.isArray(item?.itinerary)
    ? item.itinerary.map((entry) => (typeof entry === "object" && entry && "text" in entry ? String(entry.text) : JSON.stringify(entry))).join("\n")
    : "";

  return (
    <form action={savePackage} className="card grid gap-5 p-5">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <SlugFields titleDefault={item?.title} slugDefault={item?.slug} />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="destination" placeholder="Destination" defaultValue={item?.destination} required />
        <input className="input-field" name="duration" placeholder="Duration" defaultValue={item?.duration} required />
        <input className="input-field" name="difficulty" placeholder="Difficulty" defaultValue={item?.difficulty || ""} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="input-field" name="startingPoint" placeholder="Starting point" defaultValue={item?.startingPoint} required />
        <input className="input-field" name="endingPoint" placeholder="Ending point optional" defaultValue={item?.endingPoint || ""} />
      </div>
      <input className="input-field" name="shortDescription" placeholder="Short description" defaultValue={item?.shortDescription} required />
      <textarea className="input-field min-h-36" name="description" placeholder="Description" defaultValue={item?.description} required />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="priceFrom" placeholder="Price from" defaultValue={item?.priceFrom?.toString() || ""} />
        <input className="input-field" name="currency" placeholder="Currency" defaultValue={item?.currency || "NPR"} />
        <input className="input-field" name="groupSize" placeholder="Group size" defaultValue={item?.groupSize || ""} />
      </div>
      <input className="input-field" name="bestSeason" placeholder="Best season" defaultValue={item?.bestSeason || ""} />
      <div className="grid gap-4 sm:grid-cols-2">
        <textarea className="input-field min-h-28" name="includes" placeholder="Includes, one per line" defaultValue={text(item?.includes)} />
        <textarea className="input-field min-h-28" name="excludes" placeholder="Excludes, one per line" defaultValue={text(item?.excludes)} />
      </div>
      <textarea className="input-field min-h-28" name="itinerary" placeholder="Itinerary, one item per line" defaultValue={itinerary} />
      <input className="input-field" name="images" placeholder="Image URLs, comma separated" defaultValue={item?.images?.join(", ") || ""} />
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isFeatured" defaultChecked={item?.isFeatured ?? false} /> Featured</label>
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isActive" defaultChecked={item?.isActive ?? true} /> Active</label>
      </div>
      <button className="btn-dark w-fit">{item ? "Update Package" : "Create Package"}</button>
    </form>
  );
}
