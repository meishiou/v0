export type InternationalLocale = "en" | "ja" | "ko"

export const internationalLocales: InternationalLocale[] = ["en", "ja", "ko"]

export const bookingUrl =
  "https://www.booking-owlnest.com/meishioubnb?lang=zh_TW&adult=1&child=0&infant=0"

export const languageLinks = [
  { href: "/", label: "繁體中文", shortLabel: "繁中" },
  { href: "/en", label: "English", shortLabel: "EN", locale: "en" as const },
  { href: "/ja", label: "日本語", shortLabel: "日本語", locale: "ja" as const },
  { href: "/ko", label: "한국어", shortLabel: "한국어", locale: "ko" as const },
]

export const heroImages = [
  {
    src: "/images/international/hero-yilan-panorama.webp",
    alt: {
      en: "A panoramic view of Yilan with rice fields, the city, the sea and Guishan Island.",
      ja: "田園、市街地、海、亀山島を望む宜蘭のパノラマ風景。",
      ko: "논과 도심, 바다와 구이산다오가 펼쳐지는 이란의 파노라마 풍경.",
    },
    position: "center center",
  },
  {
    src: "/images/international/hero-yilan-water.webp",
    alt: {
      en: "A quiet waterside landscape in Yilan at sunset, with small boats and open sky.",
      ja: "小舟と広い空が広がる、夕暮れ時の宜蘭の静かな水辺。",
      ko: "작은 배와 넓은 하늘이 어우러진 해질녘 이란의 고요한 물가 풍경.",
    },
    position: "center center",
  },
  {
    src: "/images/international/hero-meishiou-home.webp",
    alt: {
      en: "Meishiou B&B surrounded by trees and fields in Yilan.",
      ja: "宜蘭の木々と田園に囲まれた米修B&B。",
      ko: "이란의 나무와 들판에 둘러싸인 메이쇼우 B&B.",
    },
    position: "center 40%",
  },
]

export const internationalCopy = {
  en: {
    location: "Yilan, Taiwan",
    title: "Meishiou B&B",
    tagline: "A small countryside stay shaped by light, water and everyday life.",
    book: "Book Now",
    language: "Language",
    footerNote: "More of the international guide will be added section by section.",
  },
  ja: {
    location: "台湾・宜蘭",
    title: "米修 B&B",
    tagline: "光と水、暮らしの気配に包まれる小さな田園の宿。",
    book: "予約する",
    language: "Language",
    footerNote: "このページは、これから少しずつ内容を整えていきます。",
  },
  ko: {
    location: "대만 · 이란",
    title: "Meishiou B&B",
    tagline: "빛과 물, 일상의 온기가 머무는 작은 시골 숙소.",
    book: "예약하기",
    language: "Language",
    footerNote: "이 페이지의 여행 안내는 섹션별로 차근차근 완성할 예정입니다.",
  },
} satisfies Record<InternationalLocale, {
  location: string
  title: string
  tagline: string
  book: string
  language: string
  footerNote: string
}>
