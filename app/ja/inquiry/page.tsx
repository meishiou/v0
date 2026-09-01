import type { Metadata } from "next"
import { InternationalInquiryForm } from "@/components/international/international-inquiry-form"

export const metadata: Metadata = {
  title: "宿泊のお問い合わせ | 米修B&B",
  description: "台湾・宜蘭の米修B&Bへの宿泊お問い合わせページです。",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <InternationalInquiryForm locale="ja" />
}
