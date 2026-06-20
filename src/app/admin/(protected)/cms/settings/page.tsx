import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { DISPLAY_PHONE, PROPRIETOR_NAME } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { saveSiteSettings } from "@/server/cms/actions";

export default async function CmsSettingsPage() {
  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Site Settings</h1>
        <p className="mt-3 text-sm leading-7 text-navyInk/65">Update company details, contact information, footer copy, logos, and default SEO text.</p>
      </div>
      <form action={saveSiteSettings} className="card grid gap-5 p-6">
        <input type="hidden" name="id" value={settings?.id || ""} />
        <div className="grid gap-5 md:grid-cols-2">
          <TextField name="siteName" label="Site name" required defaultValue={settings?.siteName || "Bheri Karnali Tours & Travels"} />
          <TextField name="proprietorName" label="Proprietor name" required defaultValue={settings?.proprietorName || PROPRIETOR_NAME} />
          <TextField name="phone" label="Phone display" required defaultValue={settings?.phone || DISPLAY_PHONE} />
          <TextField name="whatsappNumber" label="WhatsApp number" required defaultValue={settings?.whatsappNumber || "9779705432357"} />
          <TextField name="whatsappLink" label="WhatsApp link" required defaultValue={settings?.whatsappLink || "https://wa.me/9779705432357"} />
          <TextField name="email" label="Email" type="email" defaultValue={settings?.email} />
          <TextField name="location" label="Location" required defaultValue={settings?.location || "Surkhet, Karnali Province, Nepal"} />
          <TextField name="logoUrl" label="Logo URL" defaultValue={settings?.logoUrl} placeholder="/images/brand/logo.png" />
          <TextField name="iconLogoUrl" label="Icon logo URL" defaultValue={settings?.iconLogoUrl} />
          <TextField name="primaryColor" label="Primary color" defaultValue={settings?.primaryColor} placeholder="#082032" />
          <TextField name="accentColor" label="Accent color" defaultValue={settings?.accentColor} placeholder="#F97316" />
          <TextField name="seoTitle" label="Default SEO title" defaultValue={settings?.seoTitle} />
        </div>
        <TextAreaField name="shortDescription" label="Short description" defaultValue={settings?.shortDescription} rows={3} />
        <TextAreaField name="footerDescription" label="Footer description" defaultValue={settings?.footerDescription} rows={3} />
        <TextAreaField name="seoDescription" label="Default SEO description" defaultValue={settings?.seoDescription} rows={3} />
        <FormActions cancelHref="/admin/cms" />
      </form>
    </div>
  );
}
