import Image from "next/image"
import { Heart, Leaf, Home } from "lucide-react"
import type { InternationalLocale } from "./config"

const copy = {
  en: {
    eyebrow: "WHY MEISHIOU",
    title: "A place that feels lived in, not staged.",
    intro:
      "Meishiou is not a polished hotel made to look the same every day. It is a small B&B shaped slowly by daily life, handmade details, sunlight, plants and the people who pass through.",
    quote:
      "We hope you come back from Yilan’s fields, rivers and mountains, close the door, and simply feel at ease.",
    points: [
      {
        title: "Made by hand, shaped by time",
        text: "From handmade details to quiet moments shared with friends, this house has grown through the people and everyday life around it.",
      },
      {
        title: "Space to slow down",
        text: "There is no need to fill every minute. Sit by the window, share a meal, or just let the day become quiet.",
      },
      {
        title: "Warm, not formal",
        text: "We keep things simple and personal — comfortable enough to settle in and feel a little more at home.",
      },
    ],
    imageAlt:
      "Friends sharing a handmade craft moment at Meishiou B&B in Yilan.",
    closing: "A small place in Yilan, with just enough room to breathe.",
  },
  ja: {
    eyebrow: "WHY MEISHIOU",
    title: "飾りすぎず、暮らしの温度が残る宿。",
    intro:
      "米修B&Bは、いつも同じ姿に整えられたホテルではありません。手仕事の家具や小さな飾り、光や植物、そしてここを訪れた人たちとの時間が、少しずつ今の米修をつくってきました。",
    quote:
      "宜蘭の田園や川、山を楽しんだあと、宿に戻って扉を閉めたとき、ほっと肩の力を抜いて過ごしていただけたらと思っています。",
    points: [
      {
        title: "手仕事と時間が育てた空間",
        text: "手づくりのものや、友人たちと過ごした何気ない時間。人と日々の暮らしが重なりながら、この宿は少しずつ今の姿になりました。",
      },
      {
        title: "急がない時間",
        text: "予定を詰め込まなくても大丈夫。窓辺で過ごしたり、一緒に食事をしたり、静かな時間も旅の一部です。",
      },
      {
        title: "かしこまりすぎない心地よさ",
        text: "華やかさよりも、自然体で過ごせること。旅先でも少し家のようにくつろげる空間を大切にしています。",
      },
    ],
    imageAlt:
      "宜蘭の米修B&Bで、友人たちが一緒に手仕事を楽しむ日常のひととき。",
    closing: "宜蘭で、深呼吸できるくらいの小さな居場所を。",
  },
  ko: {
    eyebrow: "WHY MEISHIOU",
    title: "꾸며 놓은 공간보다, 생활의 온기가 남아 있는 곳.",
    intro:
      "Meishiou B&B는 매일 똑같이 정돈된 호텔 같은 공간이 아닙니다. 손으로 만든 가구와 작은 소품, 햇빛과 식물, 그리고 이곳을 다녀간 사람들의 시간이 조금씩 쌓여 지금의 Meishiou가 되었습니다.",
    quote:
      "이란의 들판과 강, 산을 여행한 뒤 숙소로 돌아와 문을 닫는 순간, 편안하게 긴장을 풀 수 있기를 바랍니다.",
    points: [
      {
        title: "손길과 시간이 만든 공간",
        text: "손으로 만든 작은 것들과 친구들과 함께한 평범한 시간들. 사람과 일상이 차곡차곡 쌓이며 이 공간은 지금의 모습이 되었습니다.",
      },
      {
        title: "천천히 보내는 시간",
        text: "일정을 가득 채우지 않아도 괜찮습니다. 창가에 앉거나 함께 식사하며 조용히 보내는 시간도 여행의 일부입니다.",
      },
      {
        title: "격식보다 편안함",
        text: "화려함보다는 자연스럽게 머물 수 있는 분위기. 여행지에서도 잠시 집처럼 편안할 수 있는 공간을 소중히 생각합니다.",
      },
    ],
    imageAlt:
      "이란 Meishiou B&B에서 친구들이 함께 손작업을 즐기는 일상의 한때.",
    closing: "이란에서, 잠시 깊게 숨 쉴 수 있는 작은 공간.",
  },
} satisfies Record<InternationalLocale, {
  eyebrow: string
  title: string
  intro: string
  quote: string
  points: { title: string; text: string }[]
  imageAlt: string
  closing: string
}>

const icons = [Home, Leaf, Heart]

export function WhyMeishiou({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]

  return (
    <section id="why-meishiou" className="overflow-hidden bg-[#f4f2ed] text-[#343633]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="grid items-end gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.34em] text-[#76aaa5] sm:text-sm">
              {t.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-light leading-[1.22] tracking-[-0.025em] sm:text-4xl md:text-[2.75rem]">
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm font-light leading-7 text-[#6a6d67] sm:text-base sm:leading-8">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#e1ded6] bg-[#fbfaf7] shadow-[0_18px_55px_rgba(45,55,48,0.06)] md:mt-16 lg:grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[420px] bg-[#eee9df] sm:min-h-[560px] lg:min-h-[680px]">
            <Image
              src="/images/international/why-meishiou-handmade.webp"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
            <p className="text-xl font-light leading-9 tracking-[-0.015em] text-[#454844] sm:text-2xl sm:leading-10">
              “{t.quote}”
            </p>

            <div className="mt-9 border-t border-[#dedbd3]">
              {t.points.map((point, index) => {
                const Icon = icons[index]
                return (
                  <div
                    key={point.title}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#dedbd3] py-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e3f0ee] text-[#6b9f9a]">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium tracking-[-0.01em] text-[#3f423e]">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-7 text-[#6a6d67]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="mt-8 text-xs font-medium tracking-[0.18em] text-[#76aaa5] sm:text-sm">
              {t.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
