import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { prisma } from "@/lib/prisma";
import { saveFAQ } from "@/server/cms/actions";

export default async function CmsFaqsPage() {
  const items = await prisma.fAQ.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">FAQs</h1>
        <p className="mt-3 text-sm leading-7 text-navyInk/65">Create or update booking, package, and vehicle rental questions.</p>
      </div>
      <FaqForm />
      <div className="grid gap-5">
        {items.map((item) => <FaqForm key={item.id} item={item} />)}
      </div>
    </div>
  );
}

function FaqForm({ item }: { item?: Awaited<ReturnType<typeof prisma.fAQ.findMany>>[number] }) {
  return (
    <form action={saveFAQ} className="card grid gap-5 p-6">
      <input type="hidden" name="id" value={item?.id || ""} />
      <div className="grid gap-5 md:grid-cols-[1fr_180px]">
        <TextField name="question" label={item ? "Question" : "New question"} required defaultValue={item?.question} />
        <TextField name="sortOrder" label="Sort order" type="number" defaultValue={item?.sortOrder ?? 0} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="category" label="Category" defaultValue={item?.category || "General"} />
        <CheckboxField name="isPublished" label="Published" defaultChecked={item?.isPublished ?? true} />
      </div>
      <TextAreaField name="answer" label="Answer" required defaultValue={item?.answer} rows={4} />
      <FormActions cancelHref="/admin/cms" />
    </form>
  );
}
