import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { prisma } from "@/lib/prisma";
import { deleteTestimonial } from "@/server/admin/actions";

type PageProps = { searchParams: Promise<{ edit?: string }> };

export default async function AdminTestimonialsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const [testimonials, editItem] = await Promise.all([
    prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } }),
    params.edit ? prisma.testimonial.findUnique({ where: { id: params.edit } }) : null,
  ]);

  return (
    <div className="grid gap-6">
      <div><p className="eyebrow">Reputation</p><h1 className="mt-2 text-3xl font-black text-navyInk">Testimonials</h1></div>
      <TestimonialForm item={editItem || undefined} />
      <section className="card overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm">
        <thead className="bg-cream text-xs uppercase text-navyInk/60"><tr><th className="px-5 py-3">Name</th><th className="px-5 py-3">Rating</th><th className="px-5 py-3">Package</th><th className="px-5 py-3">Published</th><th className="px-5 py-3">Actions</th></tr></thead>
        <tbody>{testimonials.map((item) => <tr key={item.id} className="border-t border-navyInk/10"><td className="px-5 py-4 font-bold">{item.name}</td><td className="px-5 py-4">{item.rating}</td><td className="px-5 py-4">{item.packageName || "-"}</td><td className="px-5 py-4">{item.isPublished ? "Yes" : "No"}</td><td className="px-5 py-4"><div className="flex gap-3"><a className="font-bold text-forest" href={`/admin/testimonials?edit=${item.id}`}>Edit</a><form action={deleteTestimonial}><input type="hidden" name="id" value={item.id} /><button className="font-bold text-red-700">Delete</button></form></div></td></tr>)}</tbody>
      </table></div></section>
    </div>
  );
}
