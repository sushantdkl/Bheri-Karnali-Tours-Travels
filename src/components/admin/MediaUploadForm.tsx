"use client";

import { useState, useTransition } from "react";

export function MediaUploadForm() {
  const [message, setMessage] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="card grid gap-5 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        setMessage("");
        setUploadedUrl("");
        startTransition(async () => {
          const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
          const result = await response.json().catch(() => ({ error: "Upload failed." }));
          if (!response.ok) {
            setMessage(result.error || "Upload failed.");
            return;
          }
          setUploadedUrl(result.url);
          setMessage("Image uploaded successfully.");
          form.reset();
        });
      }}
    >
      <div>
        <h2 className="text-xl font-black text-navyInk">Upload Image</h2>
        <p className="mt-2 text-sm leading-7 text-navyInk/65">Local development uploads are saved under public/uploads.</p>
      </div>
      <label className="grid gap-2 text-sm font-bold text-navyInk">
        <span>Image file</span>
        <input name="file" type="file" accept="image/jpeg,image/png,image/webp,image/svg+xml" required className="rounded-lg border border-navyInk/15 bg-white px-4 py-3 text-sm" />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navyInk">
          <span>Alt text</span>
          <input name="altText" className="rounded-lg border border-navyInk/15 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-river focus:ring-4 focus:ring-river/15" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navyInk">
          <span>Category</span>
          <input name="category" placeholder="Gallery, Hero, Vehicle" className="rounded-lg border border-navyInk/15 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-river focus:ring-4 focus:ring-river/15" />
        </label>
      </div>
      <button type="submit" disabled={isPending} className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-60">
        {isPending ? "Uploading..." : "Upload image"}
      </button>
      {message ? <p className="text-sm font-bold text-navyInk">{message}</p> : null}
      {uploadedUrl ? (
        <div className="rounded-lg border border-river/20 bg-sky-50 p-4 text-sm font-bold text-navyInk">
          Uploaded URL: <code>{uploadedUrl}</code>
        </div>
      ) : null}
    </form>
  );
}
