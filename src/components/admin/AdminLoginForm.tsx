"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      setError(result.message || "Login failed.");
      setLoading(false);
      return;
    }

    router.push(searchParams.get("next") || "/admin/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="card grid gap-4 p-6">
      <input className="input-field" name="email" type="email" placeholder="Email" required />
      <input className="input-field" name="password" type="password" placeholder="Password" minLength={8} required />
      {error ? <p className="rounded-lg bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
      <button className="btn-dark w-full disabled:opacity-60" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
