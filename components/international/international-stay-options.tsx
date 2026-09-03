import Image from "next/image"
import { Mail, Users } from "lucide-react"
import type { InternationalLocale } from "./config"

const copy = {
  en: { eyebrow: "PRIVATE STAY", title: "Exclusive stay,\nwith just the rooms you need.", intro: "Traveling with family or friends? Meishiou can be reserved as a private stay, so your group can enjoy the shared spaces without other guests staying at the same time.", card: "Your group, your own pace.", body: "Reserve only the guest rooms you need. Unused rooms stay closed, while the living and shared spaces remain private for your group throughout your stay.", larger: "Traveling with a larger group? Whole-house stays are also available by inquiry.", pricing: "Enjoy exclusive use of the property while booking only the rooms your group needs. Unused guest rooms remain closed and are not offered to other guests. An additional exclusive-use fee applies for each unused room: NT$1,500 on weekdays / NT$2,000 on weekends and holidays.", cta: "Send an Inquiry", note: "Tell us your dates, group size and rooms needed.", alt: "The shared living and dining space at Meishiou B&B, with large windows overlooking the Yilan countryside." },
  ja: { eyebrow: "PRIVATE STAY", title: "必要な客室だけで、\n少し贅沢な貸切時間を。", intro: "ご家族やご友人との旅に。必要な客室だけを予約し、滞在中はほかのお客様を受け入れないため、共用スペースもご同行者だけでゆっくりお使いいただけます。", card: "旅の人数に合わせて、空間はプライベートに。", body: "必要な客室だけをご予約ください。使わない客室は閉室し、リビングや共用スペースは滞在中、ご同行者だけでお使いいただけます。", larger: "人数の多いグループには、全館貸切もご相談いただけます。", pricing: "必要な客室のみをご予約いただけます。ほかの客室をほかのお客様に販売せず、ご同行者だけでご利用いただくため、未使用の客室1室につき平日 NT$1,500／週末・祝日 NT$2,000 の追加料金を頂戴します。", cta: "メールで問い合わせる", note: "宿泊日・人数・必要な客室数をお知らせください。", alt: "米修B&Bのリビングとダイニング。大きな窓から宜蘭の田園風景を望めます。" },
  ko: { eyebrow: "PRIVATE STAY", title: "필요한 객실만 예약하고,\n공용 공간은 우리 일행만 프라이빗하게.", intro: "가족이나 친구와 함께 여행하시나요? 필요한 객실만 예약하고, 머무는 동안 다른 팀의 예약을 받지 않아 공용 공간을 일행끼리 편안하게 이용할 수 있습니다.", card: "우리 일행만의 속도로 머무는 공간.", body: "필요한 객실만 예약하세요. 사용하지 않는 객실은 닫아 두고, 거실과 공용 공간은 숙박 기간 동안 일행만 이용할 수 있습니다.", larger: "인원이 많은 경우에는 숙소 전체 대관도 문의하실 수 있습니다.", pricing: "필요한 객실만 예약하실 수 있습니다. 나머지 객실을 다른 고객에게 판매하지 않고 일행만 이용할 수 있도록, 사용하지 않는 객실 1실당 평일 NT$1,500 / 주말·공휴일 NT$2,000의 추가 요금이 적용됩니다.", cta: "이메일로 문의하기", note: "숙박 날짜, 인원, 필요한 객실 수를 알려 주세요.", alt: "큰 창으로 이란의 전원 풍경이 보이는 Meishiou B&B의 공용 거실과 다이닝 공간." },
} satisfies Record<InternationalLocale, Record<string, string>>

export function InternationalStayOptions({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]
  return (
    <section id="private-stay" className="overflow-hidden bg-[#f4f2ed] text-[#343633]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.36em] text-[#76aaa5]">{t.eyebrow}</p>
            <h2 className="mt-6 whitespace-pre-line text-4xl font-light leading-[1.22] tracking-[-0.035em] sm:text-5xl">{t.title}</h2>
          </div>
          <p className="max-w-2xl text-sm font-light leading-8 text-[#74766f] sm:text-base sm:leading-9">{t.intro}</p>
        </div>

        <div className="relative mt-14 lg:mt-16 lg:min-h-[650px]">
          <div className="w-full lg:w-[68%]">
            <div className="overflow-hidden rounded-[2rem] bg-[#e9e6df] shadow-[0_18px_50px_rgba(55,61,54,0.07)]">
              <Image src="/images/international/flexible-private-living-room.webp" alt={t.alt} width={1408} height={1056} sizes="(max-width:1024px) 100vw,68vw" className="h-auto w-full" />
            </div>
          </div>

          <div className="relative z-10 mx-4 -mt-8 rounded-[1.8rem] border border-[#dfdcd4] bg-[#fbfaf7] p-7 shadow-[0_24px_65px_rgba(55,61,54,0.10)] sm:mx-8 sm:p-9 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[43%] lg:-translate-y-1/2 lg:p-10 xl:p-12">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e1f0ed] text-[#6faaa5]"><Users size={19} strokeWidth={1.6} /></span>
              <p className="text-[11px] font-medium tracking-[0.28em] text-[#76aaa5]">FLEXIBLE PRIVATE STAY</p>
            </div>
            <h3 className="mt-6 text-2xl font-light leading-snug tracking-[-0.02em] sm:text-3xl">{t.card}</h3>
            <p className="mt-4 text-sm font-light leading-7 text-[#74766f] sm:text-[15px] sm:leading-8">{t.body}</p>
            <p className="mt-3 text-sm font-light leading-7 text-[#85877f]">{t.larger}</p>

            <div className="mt-6 rounded-[1.15rem] bg-[#f1efea] px-5 py-4">
              <p className="text-[10px] font-medium tracking-[0.28em] text-[#76aaa5]">{locale === "ja" ? "料金について" : locale === "ko" ? "요금 안내" : "HOW PRICING WORKS"}</p>
              <p className="mt-2.5 text-sm font-light leading-7 text-[#686b65]">{t.pricing}</p>
            </div>

            <div className="mt-6 sm:flex sm:items-center sm:gap-5">
              <a href={`/${locale}/inquiry`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-[#83c5c0] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#72b7b2]"><Mail size={16} strokeWidth={1.7} />{t.cta}</a>
              <p className="mt-3 max-w-[220px] text-xs font-light leading-5 text-[#92948d] sm:mt-0">{t.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
