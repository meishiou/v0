import type { Metadata } from "next"
import { InternationalInquiryForm } from "@/components/international/international-inquiry-form"

export const metadata: Metadata = {
  title: "Stay Inquiry | Meishiou B&B",
  description: "Prepare a private stay inquiry for Meishiou B&B in Yilan, Taiwan.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <InternationalInquiryForm locale="en" />
}
