import { CalendarDays, Mail } from "lucide-react"
import { bookingUrls, type InternationalLocale } from "./config"

const copy = {
  en: {
    eyebrow: "READY WHEN YOU ARE",
    title: "Stay a little longer in Yilan.",
    body:
      "Choose a room and book online, or tell us about your trip if you are looking for a more private stay with family or friends.",
    book: "Book a Room",
    inquiry: "Ask About a Private Stay",
    note: "Flexible Private Stay inquiries open in a separate page.",
  },
  ja: {
    eyebrow: "ご予約・お問い合わせ",
    title: "宜蘭で、もう少しゆっくり。",
    body:
      "通常の客室はオンラインでご予約いただけます。ご家族やご友人とのプライベートステイをご希望の場合は、旅の日程や人数をお知らせください。",
    book: "客室を予約する",
    inquiry: "プライベートステイを問い合わせる",
    note: "Flexible Private Stay のお問い合わせは別ページでご入力いただけます。",
  },
  ko: {
    eyebrow: "예약 · 문의",
    title: "이란에서 조금 더 천천히 머물러 보세요.",
    body:
      "일반 객실은 온라인으로 예약할 수 있습니다. 가족이나 친구와 프라이빗하게 머물고 싶다면 여행 일정과 인원을 알려 주세요.",
    book: "객실 예약하기",
    inquiry: "프라이빗 스테이 문의하기",
    note: "Flexible Private Stay 문의는 별도 페이지에서 작성할 수 있습니다.",
  },
} satisfies Record<InternationalLocale, Record<string, string>>

export function InternationalFinalCta({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]

  return (
    <section id="stay-inquiry" className="bg-[#eaf3f1] text-[#343633]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 md:py-24 lg:px-12 lg:py-28">
        <p className="text-[11px] font-medium tracking-[0.34em] text-[#6d9f9a] sm:text-xs">{t.eyebrow}</p>

        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-light leading-[1.24] tracking-[-0.025em] sm:text-4xl md:text-[2.75rem]">
          {t.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-[#656b66] sm:text-base sm:leading-8">
          {t.body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={bookingUrls[locale]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[210px] items-center justify-center gap-2.5 rounded-full bg-[#78b9b4] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(79,135,130,0.18)] transition hover:-translate-y-0.5 hover:bg-[#6baaa5] hover:shadow-[0_14px_32px_rgba(79,135,130,0.22)]"
          >
            <CalendarDays size={17} strokeWidth={1.7} aria-hidden="true" />
            {t.book}
          </a>

          <a
            href={`/${locale}/inquiry`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[210px] items-center justify-center gap-2.5 rounded-full border border-[#9ebfbb] bg-[#f8fbfa] px-6 py-3.5 text-sm font-medium text-[#5f8f8a] transition hover:-translate-y-0.5 hover:border-[#86aaa6] hover:bg-white"
          >
            <Mail size={17} strokeWidth={1.7} aria-hidden="true" />
            {t.inquiry}
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-xs font-light leading-5 text-[#7d8580]">{t.note}</p>
      </div>
    </section>
  )
}
