import Image from "next/image";
import { MediaUploadForm } from "@/components/admin/MediaUploadForm";
import { prisma } from "@/lib/prisma";

export default async function AdminMediaPage() {
  const assets = await prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" }, take: 60 });

  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">Media Library</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-navyInk/65">
          Upload images from this device for local CMS testing. Vercel serverless storage is not persistent, so production should use Cloudinary, S3, Supabase Storage, UploadThing, or Vercel Blob.
        </p>
      </div>
      <MediaUploadForm />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {assets.map((asset) => (
          <article key={asset.id} className="card overflow-hidden">
            <Image src={asset.url} alt={asset.altText || asset.originalName} width={600} height={420} className="h-48 w-full object-cover" />
            <div className="grid gap-2 p-5 text-sm">
              <h2 className="font-black text-navyInk">{asset.originalName}</h2>
              <p className="text-navyInk/60">{asset.category || "Uncategorized"} / {(asset.size / 1024).toFixed(0)} KB</p>
              <code className="rounded-lg bg-cream p-3 text-xs text-navyInk">{asset.url}</code>
            </div>
          </article>
        ))}
        {!assets.length ? <div className="card p-6 text-sm text-navyInk/60">No uploaded media yet.</div> : null}
      </section>
    </div>
  );
}
