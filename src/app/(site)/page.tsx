import type { CSSProperties } from "react";
import type { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";
import ReviewsSwiper from "@/components/ui/ReviewsSwiper";
import { INSTAGRAM_POSTS } from "@/lib/instagram";
import { REVIEWS } from "@/lib/reviews";
import {
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling in Austin, TX | ZM Home Improvements",
  description:
    "Top-rated kitchen and bathroom remodeling in Austin, TX. Owner-led custom additions, clear communication, and a 5.0 Google rating. Get a free quote.",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling in Austin, TX | ZM Home Improvements",
    description:
      "Top-rated kitchen and bathroom remodeling in Austin, TX. Owner-led custom additions, clear communication, and a 5.0 Google rating. Get a free quote.",
    images: ["/assets/hero.jpg"],
  },
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[55svh] items-center overflow-hidden bg-ink text-white">
        <img
          src="/assets/hero.jpg"
          alt="Remodeled Austin kitchen with white cabinetry, quartz countertops, and stainless steel appliances"
          width="1179"
          height="784"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <video
          className="hero-video absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src="/assets/hero-video.mp4"
          poster="/assets/hero-video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

        <div className="mx-auto w-full max-w-7xl px-5 py-28 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="hero-word">
                <span className="hero-word-inner text-gold" style={delay(160)}>ZM</span>
              </span>{" "}
              <span className="hero-word">
                <span className="hero-word-inner" style={delay(240)}>Home</span>
              </span>{" "}
              <span className="hero-word">
                <span className="hero-word-inner" style={delay(320)}>Improvements</span>
              </span>
            </h1>

            <p
              className="hero-reveal mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
              style={delay(440)}
            >
              Top-Rated Kitchen &amp; Bath Remodeling in Austin, TX
            </p>

            <div
              className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={delay(560)}
            >
              <a
                href="#quote"
                className="hero-btn hero-btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Get a Quote
                <svg className="hero-arrow h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </a>
              <a
                href={PHONE_HREF}
                className="hero-btn hero-btn-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg className="hero-phone-icon h-4 w-4 text-gold" aria-hidden="true">
                  <use href="#icon-phone" />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="max-w-2xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Remodeling Services
            </h2>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="/assets/kitchen.jpg"
                  alt="White shaker kitchen remodel with quartz countertops, tile backsplash, and stainless appliances"
                  width="1179"
                  height="733"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                Kitchen Remodeling in Austin
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Custom cabinetry, quartz counters, and tilework planned for daily life.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Request a kitchen quote
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>

            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="/assets/bathroom.jpg"
                  alt="Renovated bathroom with a freestanding soaking tub and patterned tile accent wall"
                  width="1600"
                  height="2133"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                Bathroom Remodeling in Austin
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Walk-in showers, freestanding tubs, vanities, and expert tile work.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Request a bathroom quote
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>

            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="/assets/addition.jpg"
                  alt="Open living room addition with hardwood floors, large windows, and a corner fireplace"
                  width="1600"
                  height="900"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                Custom Home Additions in Austin
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Carports, studios, and living-space additions built for your home.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Plan your addition
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-mist py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            data-reveal
            className="grid gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-out lg:grid-cols-[1.2fr_1fr] lg:items-end"
          >
            <div>
              <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Client Reviews &amp; Testimonials
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="font-display text-4xl text-ink">5.0</span>
                <div>
                  <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  </span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    40+ Google reviews
                  </p>
                </div>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-dark"
              >
                See all reviews on Google
                <svg className="h-3.5 w-3.5" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="mt-20 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <ReviewsSwiper reviews={REVIEWS} />
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            Reviews sourced from Google Maps, November 2026.
          </p>
        </div>
      </section>

      <section id="instagram" className="scroll-mt-24 bg-white py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            data-reveal
            className="flex flex-col gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Instagram
              </p>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Follow <span className="break-words">@zm.clientshowcase</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Recent projects, reels, and behind-the-scenes from Austin jobs.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/unnamed.png"
                  alt=""
                  width="108"
                  height="108"
                  className="h-12 w-12 rounded-full border border-ink/10"
                />
                <div>
                  <p className="whitespace-nowrap text-sm font-semibold text-ink">
                    ZM Home Improvements
                  </p>
                  <p className="whitespace-nowrap text-xs text-slate-500">
                    @zm.clientshowcase · Austin, TX
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-instagram" /></svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="mt-14 grid gap-5 opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out sm:grid-cols-2 lg:grid-cols-3"
          >
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="relative aspect-square overflow-hidden bg-mist">
                  <img
                    src={post.image}
                    alt={post.alt}
                    width="800"
                    height="800"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {post.type}
                  </span>
                  <span
                    className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-100 shadow-sm transition sm:opacity-0 sm:group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4"><use href="#icon-instagram" /></svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="line-clamp-2 text-[15px] leading-7 text-slate-600">{post.caption}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    View on Instagram
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <use href="#icon-arrow" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="section-gradient scroll-mt-24 py-28 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Request a Free Remodeling Quote in Austin
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
                Tell us about your project and we&rsquo;ll reply within one business day with a free
                estimate.
              </p>

              <div className="mt-9 space-y-5">
                <a href={PHONE_HREF} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-phone" /></svg>
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Call or text
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-white">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a href={EMAIL_MAILTO} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-mail" /></svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Email
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-white">
                      {EMAIL_DISPLAY}
                    </span>
                  </span>
                </a>
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
              <h3 className="font-display text-2xl font-normal text-ink sm:text-3xl">Get a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
