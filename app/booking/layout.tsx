import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "入住提案｜米修 B&B 宜蘭民宿",
  description:
    "查看米修 B&B 的入住方式、包棟與彈性住宿提案、入住須知及相關資訊，依旅行人數與需求選擇適合的宜蘭住宿方式。",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "入住提案｜米修 B&B 宜蘭民宿",
    description:
      "查看米修 B&B 入住方式與住宿提案，安排適合你的宜蘭旅行。",
    url: "/booking",
    type: "website",
  },
}

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
