"use client"

import Image from "next/image"
import { useState } from "react"
import type { InternationalLocale } from "./config"

type AmenityKey =
  | "ac"
  | "tv"
  | "dehumidifier"
  | "wifi"
  | "balcony"
  | "towels"
  | "hairDryer"
  | "bathroomHeater"
  | "bathtub"
  | "toiletries"
  | "sharedFridge"
  | "slide"
  | "more"

type Room = {
  key: string
  image: string
  name: string
  zhName: string
  area: string
  guests: string
  bed: string
  bathroom: string
  balcony?: string
  extra: string
  feature?: string
  price: string
  alt: string
  amenities: AmenityKey[]
}

const sectionCopy = {
  en: {
    eyebrow: "ROOMS",
    title: "Four rooms, each with its own character.",
    intro: "Choose the room that fits the way you travel. All rooms have a private bathroom, and breakfast is included in the rates below.",
    priceNote: "Weekdays to Peak Holidays",
    breakfast: "Breakfast included",
    previous: "Previous room",
    next: "Next room",
    amenities: "Room amenities",
  },
  ja: {
    eyebrow: "ROOMS",
    title: "それぞれに個性のある、4つの客室。",
    intro: "旅のスタイルに合うお部屋をお選びください。全室専用バスルーム付き。下記料金には朝食が含まれています。",
    priceNote: "平日 〜 春節期間",
    breakfast: "朝食付き",
    previous: "前の客室",
    next: "次の客室",
    amenities: "客室設備",
  },
  ko: {
    eyebrow: "ROOMS",
    title: "저마다 다른 분위기의 네 객실.",
    intro: "여행 방식에 맞는 객실을 골라보세요. 모든 객실에 전용 욕실이 있으며, 아래 요금에는 조식이 포함됩니다.",
    priceNote: "평일 → 설 연휴",
    breakfast: "조식 포함",
    previous: "이전 객실",
    next: "다음 객실",
    amenities: "객실 편의시설",
  },
} satisfies Record<InternationalLocale, Record<string, string>>

const amenityLabels: Record<InternationalLocale, Record<AmenityKey, string>> = {
  en: {
    ac: "Heating & A/C",
    tv: "TV",
    dehumidifier: "Dehumidifier",
    wifi: "Wi-Fi",
    balcony: "Balcony",
    towels: "Towel",
    hairDryer: "Hair dryer",
    bathroomHeater: "Bathroom heater",
    bathtub: "Bathtub",
    toiletries: "Toiletries",
    sharedFridge: "Shared fridge",
    slide: "Slide & play",
    more: "More",
  },
  ja: {
    ac: "冷暖房",
    tv: "テレビ",
    dehumidifier: "除湿機",
    wifi: "Wi-Fi",
    balcony: "バルコニー",
    towels: "タオル",
    hairDryer: "ヘアドライヤー",
    bathroomHeater: "浴室暖房",
    bathtub: "バスタブ",
    toiletries: "バス用品",
    sharedFridge: "共用冷蔵庫",
    slide: "すべり台・遊具",
    more: "ほか",
  },
  ko: {
    ac: "냉난방",
    tv: "TV",
    dehumidifier: "제습기",
    wifi: "Wi-Fi",
    balcony: "발코니",
    towels: "수건",
    hairDryer: "헤어드라이어",
    bathroomHeater: "욕실 난방",
    bathtub: "욕조",
    toiletries: "욕실용품",
    sharedFridge: "공용 냉장고",
    slide: "미끄럼틀·놀이",
    more: "기타",
  },
}

const rooms: Record<InternationalLocale, Room[]> = {
  en: [
    { key: "red", image: "/images/international/room-red.webp", name: "The Red Room", zhName: "瑞德溫", area: "36 m²", guests: "2 guests", bed: "1 Queen bed", bathroom: "Private bathroom · Separate shower area", balcony: "Private balcony", extra: "No extra bed", price: "NT$2,600 — 4,200 / room", alt: "The Red Room at Meishiou B&B, with a Queen bed and warm wood details.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "green", image: "/images/international/room-green.webp", name: "The Green Room", zhName: "格林森", area: "40 m²", guests: "4 guests", bed: "2 double beds · 6 × 7 ft each", bathroom: "Private bathroom · Separate shower area", balcony: "Private balcony", extra: "No extra bed", price: "NT$3,600 — 5,800 / room", alt: "The Green Room at Meishiou B&B, a spacious room with two double beds.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "blue", image: "/images/international/room-blue.webp", name: "The Blue Room", zhName: "布魯水瀾", area: "36 m²", guests: "2 guests · Extra bed for 1–2", bed: "1 Queen bed", bathroom: "Private bathroom · Bathtub", balcony: "Private balcony", extra: "Extra bed · NT$800/person", price: "NT$2,800 — 4,600 / room", alt: "The Blue Room at Meishiou B&B, with a Queen bed and blue interior.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "bathtub", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "mix", image: "/images/international/room-mix.webp", name: "The Mix Room", zhName: "米斯洛克", area: "38 m²", guests: "4 guests", bed: "1 Queen bed + 2 single beds", bathroom: "Private bathroom · Separate shower area", extra: "No extra bed", feature: "Slide & climbing play area", price: "NT$4,000 — 6,800 / room", alt: "The Mix Room at Meishiou B&B, with beds, a slide and a climbing play area.", amenities: ["ac", "tv", "dehumidifier", "wifi", "slide", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
  ],
  ja: [
    { key: "red", image: "/images/international/room-red.webp", name: "The Red Room", zhName: "瑞德溫", area: "約36 m²", guests: "定員 2名", bed: "クイーンベッド 1台", bathroom: "専用バスルーム · シャワーエリア分離", balcony: "専用バルコニー", extra: "エキストラベッドのご用意はございません", price: "NT$2,600 — 4,200 / 1室", alt: "クイーンベッドと木の温もりがある米修B&Bの瑞德溫。", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "green", image: "/images/international/room-green.webp", name: "The Green Room", zhName: "格林森", area: "約40 m²", guests: "定員 4名", bed: "ダブルベッド 2台 · 各6×7フィート", bathroom: "専用バスルーム · シャワーエリア分離", balcony: "専用バルコニー", extra: "エキストラベッドのご用意はございません", price: "NT$3,600 — 5,800 / 1室", alt: "ダブルベッド2台を備えた広々とした米修B&Bの格林森。", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "blue", image: "/images/international/room-blue.webp", name: "The Blue Room", zhName: "布魯水瀾", area: "約36 m²", guests: "定員 2名 · 1〜2名追加可", bed: "クイーンベッド 1台", bathroom: "専用バスルーム · バスタブ付き", balcony: "専用バルコニー", extra: "追加料金 · 1名 NT$800", price: "NT$2,800 — 4,600 / 1室", alt: "クイーンベッドとブルーのインテリアが特徴の米修B&Bの布魯水瀾。", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "bathtub", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "mix", image: "/images/international/room-mix.webp", name: "The Mix Room", zhName: "米斯洛克", area: "約38 m²", guests: "定員 4名", bed: "クイーンベッド 1台 + シングルベッド 2台", bathroom: "専用バスルーム · シャワーエリア分離", extra: "エキストラベッドのご用意はございません", feature: "すべり台＆クライミング遊具", price: "NT$4,000 — 6,800 / 1室", alt: "ベッド、すべり台、クライミング遊具がある米修B&Bの米斯洛克。", amenities: ["ac", "tv", "dehumidifier", "wifi", "slide", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
  ],
  ko: [
    { key: "red", image: "/images/international/room-red.webp", name: "The Red Room", zhName: "瑞德溫", area: "약 36㎡", guests: "2인", bed: "퀸사이즈 침대 1개", bathroom: "전용 욕실 · 분리형 샤워 공간", balcony: "전용 발코니", extra: "추가 침대 불가", price: "NT$2,600 — 4,200 / 객실", alt: "퀸사이즈 침대와 따뜻한 원목 디테일이 있는 Meishiou B&B의 Red Room.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "green", image: "/images/international/room-green.webp", name: "The Green Room", zhName: "格林森", area: "약 40㎡", guests: "4인", bed: "더블베드 2개 · 각 6×7 ft", bathroom: "전용 욕실 · 분리형 샤워 공간", balcony: "전용 발코니", extra: "추가 침대 불가", price: "NT$3,600 — 5,800 / 객실", alt: "더블베드 2개가 있는 넓은 Meishiou B&B의 Green Room.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "blue", image: "/images/international/room-blue.webp", name: "The Blue Room", zhName: "布魯水瀾", area: "약 36㎡", guests: "2인 · 1–2인 추가 가능", bed: "퀸사이즈 침대 1개", bathroom: "전용 욕실 · 욕조", balcony: "전용 발코니", extra: "추가 요금 · 1인 NT$800", price: "NT$2,800 — 4,600 / 객실", alt: "퀸사이즈 침대와 블루 인테리어가 있는 Meishiou B&B의 Blue Room.", amenities: ["ac", "tv", "dehumidifier", "wifi", "balcony", "bathroomHeater", "bathtub", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
    { key: "mix", image: "/images/international/room-mix.webp", name: "The Mix Room", zhName: "米斯洛克", area: "약 38㎡", guests: "4인", bed: "퀸사이즈 침대 1개 + 싱글 침대 2개", bathroom: "전용 욕실 · 분리형 샤워 공간", extra: "추가 침대 불가", feature: "미끄럼틀 & 클라이밍 놀이 공간", price: "NT$4,000 — 6,800 / 객실", alt: "침대와 미끄럼틀, 클라이밍 놀이 공간이 있는 Meishiou B&B의 Mix Room.", amenities: ["ac", "tv", "dehumidifier", "wifi", "slide", "bathroomHeater", "towels", "toiletries", "hairDryer", "sharedFridge", "more"] },
  ],
}

function AmenityIcon({ type }: { type: AmenityKey }) {
  const common = "h-5 w-5 stroke-[1.5]"
  const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: common, "aria-hidden": true }
  switch (type) {
    case "ac":
      return <svg {...svgProps}><rect x="3" y="4" width="18" height="7" rx="2"/><path d="M6 8h12M7 14c0 2-2 2-2 4M12 14c0 2-2 2-2 4M17 14c0 2-2 2-2 4"/></svg>
    case "tv":
      return <svg {...svgProps}><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 21h8M12 18v3"/></svg>
    case "dehumidifier":
      return <svg {...svgProps}><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 17h6"/><path d="M12 10c-1.6 2-2.4 3-2.4 4.1A2.4 2.4 0 0 0 12 16.5a2.4 2.4 0 0 0 2.4-2.4C14.4 13 13.6 12 12 10Z"/></svg>
    case "wifi":
      return <svg {...svgProps}><path d="M5 10a10 10 0 0 1 14 0M8.5 13.5a5 5 0 0 1 7 0M12 18h.01"/></svg>
    case "balcony":
      return <svg {...svgProps}><path d="M4 20V9h16v11M4 13h16M8 9V4h8v5M8 16v4M12 16v4M16 16v4"/></svg>
    case "towels":
      return <svg {...svgProps}><path d="M5 7h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h11"/><path d="M5 7v12M8 10h8"/></svg>
    case "hairDryer":
      return <svg {...svgProps}><path d="M4 9h9a4 4 0 0 1 4 4v1H9a5 5 0 0 1-5-5Z"/><path d="M17 12h3v4h-3M10 14l-1 7M13 14l1 7"/></svg>
    case "bathroomHeater":
      return <svg {...svgProps}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>
    case "bathtub":
      return <svg {...svgProps}><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"/><path d="M7 12V7a2 2 0 0 1 4 0M6 19l-1 2M18 19l1 2"/></svg>
    case "toiletries":
      return <svg {...svgProps}><path d="M8 4h8M10 4v3h4V4M9 7h6l1 14H8L9 7Z"/><path d="M11 11h2"/></svg>
    case "sharedFridge":
      return <svg {...svgProps}><rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M6 10h12M9 6v2M9 13v3"/><path d="M19.5 7.5h2M20.5 6.5v2"/></svg>
    case "slide":
      return <svg {...svgProps}><path d="M5 21h14M7 21V5h5M7 9h5M12 5v5l6 8M18 18h2"/><circle cx="10" cy="3.5" r="1.5"/></svg>
    case "more":
      return <svg {...svgProps}><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/></svg>
  }
}

export function InternationalRooms({ locale }: { locale: InternationalLocale }) {
  const [active, setActive] = useState(0)
  const t = sectionCopy[locale]
  const list = rooms[locale]
  const room = list[active]
  const previous = () => setActive((active - 1 + list.length) % list.length)
  const next = () => setActive((active + 1) % list.length)

  return (
    <section id="rooms" className="overflow-hidden bg-[#fbfaf7] text-[#343633]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.34em] text-[#76aaa5] sm:text-sm">{t.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-light leading-[1.22] tracking-[-0.025em] sm:text-4xl md:text-[2.8rem]">{t.title}</h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-7 text-[#6a6d67] sm:text-base sm:leading-8 lg:col-span-5">{t.intro}</p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-[#f1eee7] shadow-[0_24px_70px_rgba(45,55,48,0.08)] lg:mt-18 lg:grid-cols-12 lg:items-center lg:rounded-[2.5rem]">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e6de] lg:col-span-8">
            <Image key={room.image} src={room.image} alt={room.alt} fill priority={active === 0} sizes="(max-width: 1024px) 100vw, 67vw" className="object-contain transition-opacity duration-500" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[#f1eee7]/55 to-transparent blur-[2px]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#f1eee7]/55 to-transparent blur-[2px]" />
            <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[11px] font-medium tracking-[0.18em] backdrop-blur-sm sm:left-7 sm:top-7">{String(active + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</div>
          </div>

          <div className="flex flex-col p-7 sm:p-10 lg:col-span-4 lg:min-h-0 lg:p-7 xl:p-9">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#7daaa6]">{room.name}</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-3xl font-light tracking-[-0.02em] sm:text-[2.35rem]">{room.zhName}</h3>
                <span className="text-sm font-light text-[#777a74]">{room.area}</span>
              </div>
            </div>

            <div className="mt-5 divide-y divide-[#d8d4cb] border-y border-[#d8d4cb] text-sm text-[#5f625d] sm:text-[15px]">
              <div className="grid grid-cols-2 gap-4 py-3"><span>{room.guests}</span><span>{room.bed}</span></div>
              <div className="py-3">{room.bathroom}</div>
              {room.balcony && <div className="py-3">{room.balcony}</div>}
              <div className="py-3">{room.extra}</div>
              {room.feature && <div className="py-3 font-medium text-[#527e7a]">{room.feature}</div>}
            </div>

            <div className="pt-5">
              <p className="text-xl font-medium tracking-[-0.01em] sm:text-2xl">{room.price}</p>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-[#777a74] sm:text-[11px]"><span>{t.priceNote}</span><span aria-hidden="true">·</span><span>{t.breakfast}</span></div>
            </div>

            <div className="mt-5 border-t border-[#d8d4cb] pt-4">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#6f7772]">{t.amenities}</p>
              <div className="grid grid-cols-5 gap-x-2 gap-y-3">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex min-w-0 flex-col items-center gap-1.5 text-center text-[#555b57]">
                    <AmenityIcon type={amenity} />
                    <span className="break-words text-[9px] font-light leading-[1.2] sm:text-[10px]">{amenityLabels[locale][amenity]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2" aria-label={`${active + 1} / ${list.length}`}>
                {list.map((item, index) => <button key={item.key} type="button" onClick={() => setActive(index)} aria-label={`${index + 1}: ${item.name}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-8 bg-[#78aaa5]" : "w-3 bg-[#c8c6bf] hover:bg-[#aaa9a3]"}`} />)}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={previous} aria-label={t.previous} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c6bd] text-lg transition hover:bg-white">←</button>
                <button type="button" onClick={next} aria-label={t.next} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7fbab5] text-lg text-white transition hover:opacity-90">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
