"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calendar, Globe2, ChevronDown } from "lucide-react"

// 1. 資料結構：清晰拆分中英文，方便不同區塊進行精細的字體特效設定
const navItems = [
  { href: "/", zh: "民宿首頁", en: "Home" },
  { href: "/space", zh: "遇見米修", en: "About" },
  { href: "/booking", zh: "入住提案", en: "Plans" },
  { href: "/rooms", zh: "房型介紹", en: "Rooms" },
  { href: "/yilan", zh: "宜蘭漫遊", en: "Yilan" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo 區塊：完美置入精緻尺寸的官方 LOGO */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 shrink-0 mix-blend-multiply">
                <Image
                  src="/images/LOGO.jpg"
                  alt="米修 B&B LOGO"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold tracking-wide text-primary transition-colors">米修</span>
                <span className="text-xs text-muted-foreground pt-0.5">B&B</span>
              </div>
            </Link>

            {/* 中文主站外語入口：低調放在 Logo 旁，桌機與手機皆可快速切換 */}
            <div ref={languageRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen((value) => !value)}
                aria-expanded={languageOpen}
                aria-haspopup="menu"
                aria-label="切換語言 Language"
                title="Language"
                className="flex items-center gap-1 rounded-full border border-border/70 bg-background/70 px-2.5 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:text-primary"
              >
                <Globe2 size={15} aria-hidden="true" />
                <span className="hidden sm:inline">Language</span>
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className={`transition-transform ${languageOpen ? "rotate-180" : ""}`}
                />
              </button>

              {languageOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-[70] mt-2 min-w-40 overflow-hidden rounded-2xl border border-border bg-background/98 p-1.5 text-foreground shadow-xl backdrop-blur-md"
                >
                  <span
                    role="menuitem"
                    aria-current="page"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-primary"
                  >
                    繁體中文
                  </span>
                  <Link
                    href="/en"
                    role="menuitem"
                    onClick={() => setLanguageOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    English
                  </Link>
                  <Link
                    href="/ja"
                    role="menuitem"
                    onClick={() => setLanguageOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    日本語
                  </Link>
                  <Link
                    href="/ko"
                    role="menuitem"
                    onClick={() => setLanguageOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-muted"
                  >
                    한국어
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 電腦版導航列：中英文雙列置中重疊 (上下排列) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center group transition-colors"
              >
                {/* 上排：中文 */}
                <span className="text-[14px] font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  {item.zh}
                </span>
                {/* 下排：英文（全大寫 + 寬字距） */}
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors uppercase">
                  {item.en}
                </span>
              </Link>
            ))}
          </div>

          {/* 右側圖標按鈕區塊 (LINE、預訂、手機版漢堡選單) */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 pl-2 md:pl-8">
            {/* LINE 圖標 */}
            <a
              href="https://line.me/R/ti/p/@766nnznw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-200 block"
              aria-label="Contact us on LINE"
              title="LINE聯絡我們"
            >
              <img 
                src="/Line.png" 
                alt="LINE" 
                className="w-11 h-11 object-contain mix-blend-multiply"
              />
            </a>

            {/* 圓形預訂 (Calendar) 圖標 */}
            <a
              href="https://www.booking-owlnest.com/meishioubnb?lang=zh_TW&adult=1&child=0&infant=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              aria-label="Reserve"
              title="線上訂房.Reserve"
            >
              <Calendar size={18} />
            </a>

            {/* Mobile Menu Button (手機版漢堡選單按鈕) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-foreground ml-1 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 手機版展開後的彈出選單（已優化：水平並列，但英文同步改為全大寫＋寬字距） */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 w-1/2 bg-background/95 backdrop-blur-sm border-l border-b border-border shadow-lg rounded-bl-2xl">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-base font-medium text-foreground/80 hover:text-primary transition-colors gap-1"
                >
                  {/* 中文 */}
                  <span>{item.zh}</span>
                  {/* 間隔符號 */}
                  <span className="text-muted-foreground/50 text-xs">·</span>
                  {/* 英文 */}
                  <span className="text-[11px] tracking-[0.15em] text-muted-foreground uppercase pt-0.5">
                    {item.en}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}