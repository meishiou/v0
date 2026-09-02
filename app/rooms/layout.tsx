import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "房型介紹｜米修 B&B 宜蘭民宿",
  description:
    "米修 B&B 位於宜蘭冬山鄉、鄰近安農溪與羅東。查看瑞德溫、布魯水瀾、格林森、米斯洛克四種房型，依旅伴人數與旅行方式選擇適合的住宿空間。",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: "房型介紹｜米修 B&B 宜蘭民宿",
    description:
      "查看米修 B&B 四種房型與住宿空間，為宜蘭旅行找到適合的房間。",
    url: "/rooms",
    type: "website",
  },
}

export default function RoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
