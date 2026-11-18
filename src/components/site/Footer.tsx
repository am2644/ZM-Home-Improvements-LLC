import Link from "next/link";
import {
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-gradient bg-night text-white/60">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-32 md:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="ZM Home Improvements home">
              <img src="/assets/unnamed.png" alt="" width="108" height="108" className="h-12 w-12 shrink-0" />
              <span className="leading-tight">
                <span className="block font-display text-lg text-white">Home Improvements</span>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-white/50">
                  Austin, Texas
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6">
              Thoughtful kitchen and bathroom remodels, custom additions, and home improvements, built for
              Austin living.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
              </span>
              <span className="text-xs font-medium text-white/50">5.0 on Google · 40+ reviews</span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/services#kitchens" className="transition hover:text-white">
                  Kitchen remodeling
                </Link>
              </li>
              <li>
                <Link href="/services#bathrooms" className="transition hover:text-white">
                  Bathroom renovations
                </Link>
              </li>
              <li>
                <Link href="/services#additions" className="transition hover:text-white">
                  Custom additions
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Whole-home improvements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 transition hover:text-white">
                  <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-phone" /></svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_MAILTO} className="flex items-start gap-3 transition hover:text-white">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-mail" /></svg>
                  <span>{EMAIL_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-instagram" /></svg>
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-check" /></svg>
                Austin, TX &amp; surrounding areas
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ZM Home Improvements LLC. All rights reserved.</p>
          <p>Serving Austin and the surrounding communities.</p>
        </div>
      </div>
    </footer>
  );
}
