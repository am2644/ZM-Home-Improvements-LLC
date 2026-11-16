import Link from "next/link";
import { PHONE_HREF } from "@/lib/site";

export default function MobileCtaBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_-12px_rgba(11,18,32,0.25)] backdrop-blur md:hidden"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm transition active:scale-[0.99]"
        >
          <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-phone" /></svg>
          Call Now
        </a>
        <Link
          href="/contact#contact-form"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-gold-light active:scale-[0.99]"
        >
          Get Quote
          <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
        </Link>
      </div>
    </nav>
  );
}
