import type { Testimonial } from "@prisma/client";
import { saveTestimonial } from "@/server/admin/actions";

export function TestimonialForm({ item }: { item?: Testimonial }) {
  return (
    <form action={saveTestimonial} className="card grid gap-5 p-5">
      {item ? <input type="hidden" name="id" value={item.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-3">
        <input className="input-field" name="name" placeholder="Name" defaultValue={item?.name} required />
        <input className="input-field" name="location" placeholder="Location" defaultValue={item?.location || ""} />
        <input className="input-field" name="rating" type="number" min="1" max="5" placeholder="Rating" defaultValue={item?.rating || 5} required />
      </div>
      <input className="input-field" name="packageName" placeholder="Package name optional" defaultValue={item?.packageName || ""} />
      <textarea className="input-field min-h-32" name="message" placeholder="Message" defaultValue={item?.message} required />
      <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isPublished" defaultChecked={item?.isPublished ?? false} /> Published</label>
      <button className="btn-dark w-fit">{item ? "Update Testimonial" : "Create Testimonial"}</button>
    </form>
  );
}
