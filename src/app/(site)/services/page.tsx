import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remodeling Services in Austin, TX | ZM Home Improvements",
  description:
    "Kitchen, bathroom, and custom addition remodeling services in Austin, TX. Owner-led craftsmanship and free estimates from ZM Home Improvements.",
  openGraph: {
    title: "Remodeling Services in Austin, TX | ZM Home Improvements",
    description:
      "Kitchen, bathroom, and custom addition remodeling services in Austin, TX. Owner-led craftsmanship and free estimates from ZM Home Improvements.",
    images: ["/assets/hero.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Remodeling Services in Austin, TX
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Kitchen, bathroom, and addition remodeling, handled from design through final walkthrough.
          </p>
        </div>
      </section>

      <section id="kitchens" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Kitchen Remodeling in Austin
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Custom cabinetry, quartz counters, tile, and lighting, planned for the way you cook and
                gather.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src="/assets/kitchen.jpg"
                alt="White shaker kitchen remodel with quartz countertops and tile backsplash in Austin"
                width="1600"
                height="1067"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bathrooms" className="scroll-mt-24 bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:order-2"
            >
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Bathroom Remodeling in Austin
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Walk-in showers, freestanding tubs, vanities, and precise tile work, built to last.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out lg:order-1"
            >
              <img
                src="/assets/bathroom.jpg"
                alt="Austin bathroom renovation with a freestanding soaking tub and mosaic tile"
                width="1600"
                height="2133"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="additions" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Custom Home Additions in Austin
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Carports, studios, and expanded living spaces, finished to blend with your home.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src="/assets/addition.jpg"
                alt="Open living room addition with hardwood floors and large windows in Austin"
                width="1600"
                height="900"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Remodeling Process
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {["Walkthrough & Estimate", "Design & Selections", "Build & Communicate", "Final Walkthrough"].map(
              (step, index) => (
                <li
                  key={step}
                  data-reveal
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  <span className="font-display text-2xl text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-xl text-ink">{step}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-28">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            Ready to Start Your Austin Remodeling Project?
          </h2>
          <Link
            href="/contact#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get a Quote
            <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
