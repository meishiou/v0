import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "宜蘭漫遊｜米修 B&B 宜蘭民宿",
  description:
    "從米修 B&B 出發探索宜蘭：美食、自然、咖啡、市集與拍照景點。整理我們熟悉也喜歡的地方，陪你慢慢走進宜蘭的日常風景。",
  alternates: {
    canonical: "/yilan",
  },
  openGraph: {
    title: "宜蘭漫遊｜米修 B&B 宜蘭民宿",
    description:
      "從米修 B&B 出發，探索宜蘭美食、自然、咖啡、市集與值得停留的旅行風景。",
    url: "/yilan",
    type: "website",
  },
}

export default function YilanLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
