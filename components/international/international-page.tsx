import { InternationalFooter } from "./international-footer"
import { InternationalFloatingBookingButton } from "./international-floating-booking-button"
import { InternationalHero } from "./international-hero"
import { MeetMeishiou } from "./meet-meishiou"
import { InternationalRooms } from "./international-rooms"
import { InternationalStayOptions } from "./international-stay-options"
import { InternationalGettingHere } from "./international-getting-here"
import { WhyMeishiou } from "./why-meishiou"
import { InternationalFinalCta } from "./international-final-cta"
import type { InternationalLocale } from "./config"

export function InternationalPage({ locale }: { locale: InternationalLocale }) {
  return (
    <main>
      <InternationalHero locale={locale} />
      <div id="international-content">
        <MeetMeishiou locale={locale} />
        <InternationalRooms locale={locale} />
        <InternationalStayOptions locale={locale} />
        <InternationalGettingHere locale={locale} />
        <WhyMeishiou locale={locale} />
        <InternationalFinalCta locale={locale} />
      </div>

      <InternationalFooter locale={locale} />
      <InternationalFloatingBookingButton locale={locale} />
    </main>
  )
}
