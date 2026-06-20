import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { prisma } from "@/lib/prisma";
import { savePageContent } from "@/server/cms/actions";

const pageKeys = ["home", "about", "contact", "booking", "privacy-policy", "terms-and-conditions"];

export default async function CmsPagesPage() {
  const pages = await prisma.pageContent.findMany({ orderBy: { pageKey: "asc" } });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Pages</h1>
        <p className="mt-3 text-sm leading-7 text-navyInk/65">Update homepage headline, page hero images, subtitles, CTA text, and SEO metadata.</p>
      </div>
      <div className="grid gap-6">
        {pageKeys.map((key) => {
          const page = pages.find((item) => item.pageKey === key);
          return (
            <form key={key} action={savePageContent} className="card grid gap-5 p-6">
              <input type="hidden" name="id" value={page?.id || ""} />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-black text-navyInk">{key}</h2>
                <CheckboxField name="isPublished" label="Published" defaultChecked={page?.isPublished ?? true} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <TextField name="pageKey" label="Page key" required defaultValue={page?.pageKey || key} />
                <TextField name="title" label="Page title" required defaultValue={page?.title || key.replace(/-/g, " ")} />
                <TextField name="heroTitle" label="Hero title" defaultValue={page?.heroTitle} />
                <TextField name="heroImage" label="Hero image URL" defaultValue={page?.heroImage} placeholder="/images/karnali-hero.png" />
                <TextField name="ctaLabel" label="CTA label" defaultValue={page?.ctaLabel} />
                <TextField name="ctaHref" label="CTA link" defaultValue={page?.ctaHref} placeholder="/booking" />
                <TextField name="seoTitle" label="SEO title" defaultValue={page?.seoTitle} />
                <TextField name="seoDescription" label="SEO description" defaultValue={page?.seoDescription} />
              </div>
              <TextAreaField name="subtitle" label="Subtitle" defaultValue={page?.subtitle} rows={3} />
              <TextAreaField name="heroSubtitle" label="Hero subtitle" defaultValue={page?.heroSubtitle} rows={3} />
              <TextAreaField name="content" label="Page content" defaultValue={page?.content} rows={6} />
              <FormActions cancelHref="/admin/cms" />
            </form>
          );
        })}
      </div>
    </div>
  );
}
