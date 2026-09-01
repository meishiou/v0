import type { Metadata } from "next"
import { InternationalInquiryForm } from "@/components/international/international-inquiry-form"

export const metadata: Metadata = {
  title: "숙박 문의 | Meishiou B&B",
  description: "대만 이란 Meishiou B&B 숙박 문의 페이지입니다.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <InternationalInquiryForm locale="ko" />
}
