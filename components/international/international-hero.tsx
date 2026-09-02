"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, CalendarDays } from "lucide-react"
import {
  bookingUrl,
  bookingUrlEnglish,
  heroImages,
  internationalCopy,
  type InternationalLocale,
} from "./config"
import { LanguageSwitcher } from "./language-switcher"

export function InternationalHero({ locale }: { locale: InternationalLocale }) {
  const [currentImage, setCurrentImage] = useState(0)
  const copy = internationalCopy[locale]

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const timer = window.setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentImage}
          >
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: image.position }}
            />
          </div>
        ))}

        <div
          className={`absolute inset-0 transition-colors duration-[1500ms] ${
            currentImage === 0
              ? "bg-gradient-to-b from-black/30 via-black/10 to-black/42"
              : currentImage === 1
                ? "bg-gradient-to-b from-black/22 via-black/8 to-black/38"
                : "bg-gradient-to-b from-black/28 via-black/10 to-black/44"
          }`}
        />
      </div>

      <div className="absolute right-5 top-5 z-30 md:right-8 md:top-7">
        <LanguageSwitcher locale={locale} />
      </div>

      <div className="relative z-20 flex min-h-[100svh] items-center justify-center px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl -translate-y-4 md:-translate-y-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 md:text-sm">
            {copy.location}
          </p>
          <h1 className="text-5xl font-light tracking-wide drop-shadow-sm md:text-7xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-7 text-white/90 md:text-xl md:leading-8">
            {copy.tagline}
          </p>

          <a
            href={locale === "ko" ? bookingUrlEnglish : bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-sm transition hover:bg-white hover:text-foreground"
          >
            <CalendarDays size={17} aria-hidden="true" />
            {copy.book}
          </a>

          {locale === "ko" && (
            <p className="mt-3 text-[11px] font-light tracking-wide text-white/75 md:text-xs">
              ※ 예약 페이지: 영어 · 중국어 · 일본어 지원
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-white/60">
        <Link href="#international-content" aria-label="Scroll to page content" className="flex flex-col items-center gap-1">
          <span className="text-[9px] uppercase tracking-[0.28em]">Scroll</span>
          <ArrowDown size={15} className="animate-bounce" aria-hidden="true" />
        </Link>
      </div>

      <div className="absolute bottom-8 right-5 z-20 flex gap-1.5 md:right-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Hero image ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === currentImage ? "w-7 bg-white" : "w-2 bg-white/55"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
