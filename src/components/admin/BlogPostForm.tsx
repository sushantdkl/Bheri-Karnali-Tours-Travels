import type { BlogPost } from "@prisma/client";
import { CheckboxField, FormActions, TextAreaField, TextField } from "@/components/admin/CmsFields";
import { saveBlogPost } from "@/server/cms/actions";

export function BlogPostForm({ post }: { post?: BlogPost }) {
  return (
    <div className="grid gap-8">
      <div>
        <p className="eyebrow">CMS</p>
        <h1 className="mt-2 text-3xl font-black text-navyInk">{post ? "Edit Blog Post" : "New Blog Post"}</h1>
      </div>
      <form action={saveBlogPost} className="card grid gap-5 p-6">
        <input type="hidden" name="id" value={post?.id || ""} />
        <div className="grid gap-5 md:grid-cols-2">
          <TextField name="title" label="Title" required defaultValue={post?.title} />
          <TextField name="slug" label="Slug" defaultValue={post?.slug} placeholder="auto from title if blank" />
          <TextField name="category" label="Category" defaultValue={post?.category || "Guide"} />
          <TextField name="readingTime" label="Reading time" defaultValue={post?.readingTime || "5 min read"} />
          <TextField name="coverImage" label="Cover image URL" defaultValue={post?.coverImage} />
          <CheckboxField name="isPublished" label="Published" defaultChecked={post?.isPublished ?? true} />
          <TextField name="seoTitle" label="SEO title" defaultValue={post?.seoTitle} />
          <TextField name="seoDescription" label="SEO description" defaultValue={post?.seoDescription} />
        </div>
        <TextAreaField name="excerpt" label="Excerpt" required defaultValue={post?.excerpt} rows={3} />
        <TextAreaField name="content" label="Content" required defaultValue={post?.content} rows={12} help="Separate paragraphs with a blank line." />
        <FormActions cancelHref="/admin/cms/blog" />
      </form>
    </div>
  );
}
