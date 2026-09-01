import { InternationalPage } from "@/components/international/international-page"
import { getInternationalMetadata } from "@/components/international/metadata"

export const metadata = getInternationalMetadata("ja")

export default function Page() {
  return <InternationalPage locale="ja" />
}
