import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Sign In | ZM Home Improvements",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
          aria-label="ZM Home Improvements home"
        >
          <img src="/assets/unnamed.png" alt="" width="108" height="108" className="h-14 w-14" />
          <span className="leading-tight">
            <span className="block font-display text-lg text-white">Home Improvements</span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-white/50">
              Austin, Texas
            </span>
          </span>
        </Link>

        <div className="rounded-3xl bg-white p-7 shadow-2xl shadow-black/30 sm:p-9">
          <h1 className="font-display text-2xl font-normal text-ink">Admin Sign In</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter the admin password to manage leads and portfolio items.
          </p>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          <Link href="/" className="transition hover:text-white">
            ← Back to website
          </Link>
        </p>
      </div>
    </main>
  );
}
