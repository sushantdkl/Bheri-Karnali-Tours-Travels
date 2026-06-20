import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function CmsBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">CMS</p>
          <h1 className="mt-2 text-3xl font-black text-navyInk">Blog Guides</h1>
        </div>
        <Link href="/admin/cms/blog/new" className="btn-primary justify-center">New Blog Post</Link>
      </div>
      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-cream text-xs uppercase text-navyInk/60">
              <tr><th className="px-5 py-3">Title</th><th className="px-5 py-3">Category</th><th className="px-5 py-3">Published</th><th className="px-5 py-3">Updated</th><th className="px-5 py-3">Action</th></tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-navyInk/10">
                  <td className="px-5 py-4 font-black">{post.title}</td>
                  <td className="px-5 py-4">{post.category || "Guide"}</td>
                  <td className="px-5 py-4">{post.isPublished ? "Yes" : "No"}</td>
                  <td className="px-5 py-4">{post.updatedAt.toLocaleDateString()}</td>
                  <td className="px-5 py-4"><Link className="font-bold text-forest" href={`/admin/cms/blog/${post.id}/edit`}>Edit</Link></td>
                </tr>
              ))}
              {!posts.length ? <tr><td className="px-5 py-8 text-navyInk/60" colSpan={5}>No blog posts yet.</td></tr> : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
