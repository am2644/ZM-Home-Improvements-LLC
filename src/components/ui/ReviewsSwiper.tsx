"use client";

import { useEffect, useRef, useSyncExternalStore, type ComponentProps } from "react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Review } from "@/lib/reviews";

type SwiperInstance = Parameters<NonNullable<ComponentProps<typeof Swiper>["onSwiper"]>>[0];

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function ReviewsSwiper({ reviews }: { reviews: Review[] }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay || prefersReducedMotion) return;

    const element = swiper.el;
    const stop = () => swiper.autoplay.stop();
    const start = () => swiper.autoplay.start();

    element.addEventListener("focusin", stop);
    element.addEventListener("focusout", start);

    return () => {
      element.removeEventListener("focusin", stop);
      element.removeEventListener("focusout", start);
    };
  }, [prefersReducedMotion]);

  return (
    <Swiper
      className="reviews-swiper"
      aria-label="Customer reviews"
      modules={[Autoplay, Keyboard, A11y]}
      slidesPerView="auto"
      centeredSlides
      spaceBetween={24}
      loop
      grabCursor
      speed={600}
      watchSlidesProgress
      slideToClickedSlide
      keyboard={{ enabled: true, onlyInViewport: true }}
      autoplay={
        prefersReducedMotion
          ? false
          : { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }
      }
      a11y={{ enabled: true }}
      breakpoints={{
        0: { spaceBetween: 16 },
        768: { spaceBetween: 20 },
        1024: { spaceBetween: 24 },
      }}
      onSwiper={(instance) => {
        swiperRef.current = instance;
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={`${review.author}-${review.date}`}>
          <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
              </span>
              <span className="text-xs text-slate-500">{review.date}</span>
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">
              <p>{review.quote}</p>
            </blockquote>
            <footer className="mt-6 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm text-gold"
                aria-hidden="true"
              >
                {review.initial}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{review.author}</p>
                <p className="text-xs text-slate-500">Google review</p>
              </div>
            </footer>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
