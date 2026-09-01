import type { Metadata } from "next"
import type { InternationalLocale } from "./config"

const metadataByLocale = {
  en: {
    title: "Meishiou B&B | Yilan, Taiwan",
    description: "A small countryside B&B in Yilan, Taiwan, near the Annong River and Luodong.",
    ogLocale: "en_US",
  },
  ja: {
    title: "米修 B&B | 台湾・宜蘭の小さな宿",
    description: "台湾・宜蘭、安農渓や羅東に近い田園の小さなB&B。",
    ogLocale: "ja_JP",
  },
  ko: {
    title: "Meishiou B&B | 대만 이란 숙소",
    description: "대만 이란의 안농시와 뤄둥 인근에 자리한 작은 시골 B&B입니다.",
    ogLocale: "ko_KR",
  },
} satisfies Record<InternationalLocale, {
  title: string
  description: string
  ogLocale: string
}>

export function getInternationalMetadata(locale: InternationalLocale): Metadata {
  const data = metadataByLocale[locale]
  const path = `/${locale}`

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: path,
      languages: {
        "zh-TW": "/",
        en: "/en",
        ja: "/ja",
        ko: "/ko",
        "x-default": "/",
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://meishiou.com.tw${path}`,
      siteName: "Meishiou B&B",
      type: "website",
      locale: data.ogLocale,
      images: [
        {
          url: "/images/international/hero-yilan-panorama.webp",
          width: 1536,
          height: 864,
          alt: "Yilan, Taiwan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/images/international/hero-yilan-panorama.webp"],
    },
  }
}
