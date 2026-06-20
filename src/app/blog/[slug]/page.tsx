import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { blogPosts } from "@/data/blog";
import { getPublishedBlogPosts } from "@/lib/cms";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPublishedBlogPosts<typeof blogPosts[number]>(blogPosts);
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: post.coverImage ? [{ url: post.coverImage }] : undefined },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getPublishedBlogPosts<typeof blogPosts[number]>(blogPosts);
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guide", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <article className="section-pad bg-white">
        <div className="container-main max-w-4xl">
          <p className="eyebrow">{post.category} / {post.readingTime}</p>
          <h1 className="mt-4 text-4xl font-black text-navyInk sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-navyInk/70">{post.excerpt}</p>
          <ResponsiveImage src={post.coverImage} alt={post.imageAlt || post.title} title={post.title} subtitle={post.category} priority className="mt-10 h-72 w-full shadow-premium sm:h-96" sizes="100vw" />
          <div className="mt-10 grid gap-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-navyInk/75">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
