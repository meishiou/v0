"use client"

import { useEffect, useState } from "react"
import { CalendarDays } from "lucide-react"
import { bookingUrl, internationalCopy, type InternationalLocale } from "./config"

export function InternationalFloatingBookingButton({
  locale,
}: {
  locale: InternationalLocale
}) {
  const [visible, setVisible] = useState(false)
  const copy = internationalCopy[locale]

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:bottom-6 md:right-6 md:px-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <CalendarDays size={17} aria-hidden="true" />
      <span>{copy.book}</span>
    </a>
  )
}
