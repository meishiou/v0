import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "遇見米修｜米修 B&B 宜蘭民宿",
  description:
    "認識米修 B&B 的生活空間與故事。從宜蘭落腳、親手木作到民宿裡的一景一物，這裡收藏著我們對生活、土地與旅行的想像。",
  alternates: {
    canonical: "/space",
  },
  openGraph: {
    title: "遇見米修｜米修 B&B 宜蘭民宿",
    description:
      "走進米修 B&B 的空間與故事，看看一間宜蘭民宿如何慢慢長成生活的模樣。",
    url: "/space",
    type: "website",
  },
}

export default function SpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
