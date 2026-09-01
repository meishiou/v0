import Image from "next/image"
import type { InternationalLocale } from "./config"

const copy = {
  en: {
    eyebrow: "MEET MEISHIOU",
    title: "A small stay, close to Yilan life.",
    body: "Meishiou B&B is a small countryside stay near the Annong River and Luodong. With just 3+1 rooms, it is a quiet base for slowing down and experiencing the fields, water and everyday rhythms of Yilan.",
    facts: ["Yilan, Taiwan", "3+1 Rooms", "Countryside Stay"],
    entranceAlt: "The garden entrance and wooden deck at Meishiou B&B in Yilan.",
    livingAlt: "The living room at Meishiou B&B, with handmade wooden furniture and a large window looking outside.",
    bikeAlt: "Cycling beside the water and green fields near Meishiou B&B in Yilan.",
  },
  ja: {
    eyebrow: "MEET MEISHIOU",
    title: "宜蘭の日常に近い、小さな宿。",
    body: "米修 B&B は、安農渓と羅東の近くにある小さな田園の宿です。3+1室だけの空間を拠点に、田畑や水辺、宜蘭の日々のリズムを感じながら、ゆっくりと過ごしていただけます。",
    facts: ["台湾・宜蘭", "3+1 Rooms", "Countryside Stay"],
    entranceAlt: "宜蘭にある米修B&Bの庭とウッドデッキの入口。",
    livingAlt: "手作りの木製家具と大きな窓がある米修B&Bのリビング。",
    bikeAlt: "米修B&B周辺の水辺と緑の中を自転車で走る風景。",
  },
  ko: {
    eyebrow: "MEET MEISHIOU",
    title: "이란의 일상 가까이에 머무는 작은 숙소.",
    body: "Meishiou B&B는 안농시와 뤄둥 가까이에 자리한 작은 시골 숙소입니다. 3+1개의 객실을 거점으로 들판과 물가, 이란의 일상적인 리듬을 천천히 느껴보세요.",
    facts: ["대만 · 이란", "3+1 Rooms", "Countryside Stay"],
    entranceAlt: "이란 Meishiou B&B의 정원과 나무 데크 입구.",
    livingAlt: "손수 만든 목재 가구와 큰 창이 있는 Meishiou B&B 거실.",
    bikeAlt: "Meishiou B&B 근처의 물길과 푸른 들판을 따라 자전거를 타는 풍경.",
  },
} satisfies Record<InternationalLocale, {
  eyebrow: string
  title: string
  body: string
  facts: string[]
  entranceAlt: string
  livingAlt: string
  bikeAlt: string
}>

export function MeetMeishiou({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]

  return (
    <section id="meet-meishiou" className="overflow-hidden bg-[#f6f3ed] text-[#343633]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-xs font-medium tracking-[0.34em] text-[#76aaa5] sm:text-sm">
            {t.eyebrow}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20">
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(45,55,48,0.10)] sm:rounded-[2.5rem] lg:aspect-[5/4]">
              <Image
                src="/images/international/meet-meishiou-entrance.webp"
                alt={t.entranceAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative -mt-10 ml-auto w-[72%] sm:-mt-16 sm:w-[64%] lg:-mr-8 lg:-mt-20 lg:w-[62%] lg:translate-x-10 xl:-mr-12 xl:translate-x-14">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] border-[6px] border-[#f6f3ed] shadow-[0_18px_50px_rgba(45,55,48,0.12)] sm:rounded-[2rem]">
                <Image
                  src="/images/international/meet-meishiou-living-room.webp"
                  alt={t.livingAlt}
                  fill
                  sizes="(max-width: 1024px) 65vw, 34vw"
                  className="object-cover object-[center_52%]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-10 xl:pt-16">
            <h2 className="max-w-xl text-3xl font-light leading-[1.25] tracking-[-0.02em] sm:text-[2.1rem] md:text-[2.6rem] lg:text-[2.85rem]">
              {t.title}
            </h2>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-[#656862] sm:text-lg sm:leading-9">
              {t.body}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#d8d5cd] pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-[#72756f] sm:text-xs">
              {t.facts.map((fact, index) => (
                <span key={fact} className="flex items-center gap-5">
                  {index > 0 && <span className="h-1 w-1 rounded-full bg-[#8dbbb6]" aria-hidden="true" />}
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-12 ml-auto w-[78%] sm:w-[66%] lg:mt-16 lg:w-[74%] xl:w-[68%]">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(45,55,48,0.10)]">
                <Image
                  src="/images/international/meet-meishiou-riverside-bike.webp"
                  alt={t.bikeAlt}
                  fill
                  sizes="(max-width: 1024px) 75vw, 35vw"
                  className="object-cover object-[center_44%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
