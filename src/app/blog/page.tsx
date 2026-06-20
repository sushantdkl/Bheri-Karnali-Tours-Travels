import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogPosts } from "@/data/blog";
import { getPublishedBlogPosts } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Karnali Travel Guide",
  description:
    "Travel guide articles for Karnali tour package planning, Rara Lake tour, Phoksundo Lake tour, and Surkhet vehicle rental.",
  keywords: ["Karnali travel guide", "Rara Lake tour guide", "Surkhet vehicle rental guide", "Karnali tour package"],
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts<typeof blogPosts[number]>(blogPosts);

  return (
    <section className="section-pad section-gradient">
      <div className="container-main">
        <SectionHeading
          eyebrow="Travel guide"
          title="Karnali planning notes for smarter trips"
          description="A production-ready blog structure for SEO, travel education, and future content marketing."
          titleAs="h1"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="card overflow-hidden">
              <ResponsiveImage src={post.coverImage} alt={post.imageAlt || post.title} title={post.title} subtitle={post.category} className="h-44 w-full rounded-none" sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="p-6">
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-3 text-2xl font-black text-navyInk">{post.title}</h2>
                <p className="mt-2 text-xs font-bold text-river">{post.readingTime}</p>
                <p className="mt-4 text-sm leading-7 text-navyInk/70">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn-outline mt-5 px-4 py-2.5">Read Guide</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
