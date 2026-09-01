import { InternationalPage } from "@/components/international/international-page"
import { getInternationalMetadata } from "@/components/international/metadata"

export const metadata = getInternationalMetadata("en")

export default function Page() {
  return <InternationalPage locale="en" />
}
