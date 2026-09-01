"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Globe2 } from "lucide-react"
import { languageLinks, type InternationalLocale } from "./config"

export function LanguageSwitcher({ locale }: { locale: InternationalLocale }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const active = languageLinks.find((item) => item.locale === locale)

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", closeOnOutsideClick)
    return () => document.removeEventListener("mousedown", closeOnOutsideClick)
  }, [])

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-3.5 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md transition hover:bg-black/30"
      >
        <Globe2 size={16} aria-hidden="true" />
        <span>{active?.shortLabel ?? locale.toUpperCase()}</span>
        <ChevronDown size={15} aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-40 overflow-hidden rounded-2xl border border-white/25 bg-background/95 p-1.5 text-foreground shadow-xl backdrop-blur-md"
        >
          {languageLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-2 text-sm transition hover:bg-muted ${
                item.locale === locale ? "font-semibold text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
