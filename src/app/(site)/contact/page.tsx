import type { CSSProperties } from "react";
import type { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";
import {
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ZM Home Improvements | Austin, TX",
  description:
    "Contact ZM Home Improvements in Austin, TX. Call (512) 560-1400 or request a free estimate for your kitchen, bathroom, or addition.",
  openGraph: {
    title: "Contact ZM Home Improvements | Austin, TX",
    description:
      "Contact ZM Home Improvements in Austin, TX. Call (512) 560-1400 or request a free estimate for your kitchen, bathroom, or addition.",
    images: ["/assets/hero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Contact ZM Home Improvements
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Call, email, or request a free estimate — we respond within one business day.
          </p>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 bg-ink py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <div className="space-y-5">
                <a href={PHONE_HREF} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-phone" /></svg>
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Call or text
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-white">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <a href={EMAIL_MAILTO} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-mail" /></svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">Email</span>
                    <span className="mt-1 block break-words text-sm font-semibold text-white">
                      {EMAIL_DISPLAY}
                    </span>
                  </span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-instagram" /></svg>
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Instagram
                    </span>
                    <span className="mt-1 block text-base font-semibold text-white">
                      {INSTAGRAM_HANDLE}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Business hours</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-white/75">Monday – Friday</dt>
                    <dd className="font-medium text-white">7:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-white/75">Saturday</dt>
                    <dd className="font-medium text-white">By appointment</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-white/75">Sunday</dt>
                    <dd className="font-medium text-white">Closed</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Google Map showing ZM Home Improvements serving Austin, Texas"
                  className="block h-64 w-full border-0 bg-white/5"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold transition hover:text-gold-light"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>

            <div
              data-reveal
              className="rounded-3xl bg-white p-7 text-slate-900 opacity-0 translate-y-8 shadow-2xl shadow-black/20 transition-all duration-700 ease-out sm:p-9"
            >
              <h2 className="font-display text-2xl font-normal text-ink sm:text-3xl">Get a Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
