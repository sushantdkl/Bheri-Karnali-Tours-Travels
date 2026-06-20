import type { Vehicle } from "@prisma/client";
import { SlugFields } from "@/components/admin/SlugFields";
import { saveVehicle } from "@/server/admin/actions";

export function VehicleForm({ item }: { item?: Vehicle }) {
  return (
    <form action={saveVehicle} className="card grid gap-5 p-5">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <SlugFields titleName="name" titleLabel="Name" titleDefault={item?.name} slugDefault={item?.slug} />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="type" placeholder="Type" defaultValue={item?.type} required />
        <input className="input-field" name="seatingCapacity" placeholder="Seating capacity" defaultValue={item?.seatingCapacity} required />
        <input className="input-field" name="luggageCapacity" placeholder="Luggage capacity" defaultValue={item?.luggageCapacity || ""} />
      </div>
      <input className="input-field" name="bestFor" placeholder="Best for" defaultValue={item?.bestFor} required />
      <textarea className="input-field min-h-36" name="description" placeholder="Description" defaultValue={item?.description} required />
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="pricePerDay" placeholder="Price per day" defaultValue={item?.pricePerDay?.toString() || ""} />
        <input className="input-field" name="pricePerKm" placeholder="Price per km" defaultValue={item?.pricePerKm?.toString() || ""} />
        <input className="input-field" name="image" placeholder="Image URL" defaultValue={item?.image || ""} />
      </div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="withDriverAvailable" defaultChecked={item?.withDriverAvailable ?? true} /> With driver</label>
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="fourWheelDrive" defaultChecked={item?.fourWheelDrive ?? false} /> 4WD</label>
        <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isActive" defaultChecked={item?.isActive ?? true} /> Active</label>
      </div>
      <button className="btn-dark w-fit">{item ? "Update Vehicle" : "Create Vehicle"}</button>
    </form>
  );
}
