import { Bike, Bus, Car, Clock3, Coffee, MapPin, MoonStar, Train } from "lucide-react"
import type { InternationalLocale } from "./config"

const copy = {
  en: {
    eyebrow: "GETTING HERE",
    title: "Close to Luodong,\nwith the countryside at your door.",
    intro: "Meishiou B&B is in the Yilan countryside, close to Luodong and the Annong River. Luodong is the nearest major transport hub, while driving is the easiest way to explore the area.",
    locationLabel: "LOCATION",
    locationTitle: "Meishiou B&B",
    map: "Open in Google Maps",
    publicLabel: "PUBLIC TRANSPORT",
    train: "Train",
    trainValue: "Luodong Station",
    terminal: "Bus terminal",
    terminalValue: "Luodong Bus Station",
    airport: "Taoyuan Airport → Luodong",
    airportValue: "Ubus Route 1661",
    routeInfo: "Route information",
    local: "Luodong → Meishiou B&B",
    localValue: "Bus 1792 or 1798 · Get off at Kezilin Stop",
    busInfo: "Bus information",
    carLabel: "BY CAR",
    carTitle: "Easy countryside access",
    address: "No. 415, Guanghua 1st Rd., Kelin Village, Dongshan Township, Yilan County, Taiwan",
    interchange: "About 20 minutes by car from Luodong Interchange.",
    parking: "Free on-site parking is available.\nAn EV charging point is also available.",
    stay: "A few things to know before you arrive.",
    items: [["Check-in", "After 3:00 PM"], ["Check-out", "Before 11:00 AM"], ["Breakfast", "Homemade breakfast included*"], ["Parking", "Free on-site parking"], ["Quiet hours", "Please keep voices low after 10:00 PM"], ["Bicycles", "Free bicycles available for guests"]],
    foot: "* For discounted consecutive-night stays, breakfast may not be included.",
  },
  ja: {
    eyebrow: "GETTING HERE",
    title: "羅東からほど近く、\n扉の外には宜蘭の田園。",
    intro: "米修B&Bは宜蘭の田園エリアにあり、羅東や安農渓にも近い場所です。公共交通の主な拠点は羅東で、周辺観光には車がもっとも便利です。",
    locationLabel: "LOCATION",
    locationTitle: "米修B&B",
    map: "Google Mapsで見る",
    publicLabel: "PUBLIC TRANSPORT",
    train: "鉄道",
    trainValue: "羅東駅",
    terminal: "バスターミナル",
    terminalValue: "羅東転運站",
    airport: "桃園空港 → 羅東",
    airportValue: "統聯客運 1661番",
    routeInfo: "路線情報",
    local: "羅東 → 米修B&B",
    localValue: "1792 または 1798番バス · 柯子林バス停下車",
    busInfo: "バス情報",
    carLabel: "BY CAR",
    carTitle: "田園エリアへ車でアクセス",
    address: "台湾 宜蘭県冬山郷柯林村光華一路415号",
    interchange: "羅東インターチェンジから車で約20分です。",
    parking: "敷地内に無料駐車場があります。\nEV充電設備もご利用いただけます。",
    stay: "ご到着前に知っておきたいこと。",
    items: [["チェックイン", "15:00以降"], ["チェックアウト", "11:00まで"], ["朝食", "手作り朝食付き*"], ["駐車場", "敷地内無料"], ["夜間", "22:00以降はお静かに"], ["自転車", "宿泊者は無料で利用可"]],
    foot: "* 連泊割引をご利用の場合、朝食が付かないことがあります。",
  },
  ko: {
    eyebrow: "GETTING HERE",
    title: "뤄둥과 가깝고,\n문밖에는 이란(宜蘭)의 전원 풍경.",
    intro: "Meishiou B&B는 이란(宜蘭)의 한적한 전원 지역에 있으며 뤄둥과 안농강(安農溪)에서 가깝습니다. 주요 대중교통 거점은 뤄둥이며, 주변 여행은 자동차가 가장 편리합니다.",
    locationLabel: "LOCATION",
    locationTitle: "Meishiou B&B",
    map: "Google Maps에서 보기",
    publicLabel: "PUBLIC TRANSPORT",
    train: "기차",
    trainValue: "뤄둥역",
    terminal: "버스 터미널",
    terminalValue: "뤄둥 버스 터미널",
    airport: "타오위안 공항 → 뤄둥",
    airportValue: "Ubus 1661번",
    routeInfo: "노선 정보",
    local: "뤄둥 → Meishiou B&B",
    localValue: "1792 또는 1798번 버스 · 커쯔린(柯子林, Kezilin) 정류장 하차",
    busInfo: "버스 정보",
    carLabel: "BY CAR",
    carTitle: "차량 / 렌터카 이용 시",
    address: "No. 415, Guanghua 1st Rd., Kelin Village, Dongshan Township, Yilan County, Taiwan",
    interchange: "뤄둥 IC에서 차로 약 20분 소요됩니다.",
    parking: "숙소 내 무료 주차가 가능합니다.\n전기차 충전 시설도 이용할 수 있습니다.",
    stay: "도착 전에 알아두면 좋은 안내.",
    items: [["체크인", "오후 3시 이후"], ["체크아웃", "오전 11시 이전"], ["아침 식사", "홈메이드 조식 포함*"], ["주차", "숙소 내 무료 주차"], ["야간 에티켓", "오후 10시 이후에는 조용히 이용해 주세요."], ["자전거", "투숙객 무료 이용"]],
    foot: "* 연박 할인 적용 시 조식이 포함되지 않을 수 있습니다.",
  },
} satisfies Record<InternationalLocale, any>

const mapUrl = "https://www.google.com/maps/search/?api=1&query=%E7%B1%B3%E4%BF%AEB%26B"
const mapEmbedUrl = "https://www.google.com/maps?q=%E7%B1%B3%E4%BF%AEB%26B&output=embed"
const airportBusUrl = "https://www.ubus.com.tw/Booking/StationInquiry/91/"
const localBusUrl = "https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=06240&lan=C"

export function InternationalGettingHere({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]
  const icons = [Clock3, Clock3, Coffee, Car, MoonStar, Bike]

  return (
    <section id="getting-here" className="bg-[#fbfaf7] text-[#343633]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12 lg:pt-28 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[.36em] text-[#76aaa5]">{t.eyebrow}</p>
            <h2 className="mt-6 whitespace-pre-line text-4xl font-light leading-[1.22] sm:text-5xl">{t.title}</h2>
          </div>
          <p className="max-w-2xl self-end text-sm font-light leading-8 text-[#74766f] sm:text-base sm:leading-9">{t.intro}</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-[1.6rem] border border-[#e1ded6] bg-[#f4f2ed]">
            <div className="p-6 pb-5 sm:p-7 sm:pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e0efec] text-[#6eaaa5]"><MapPin size={19} /></div>
              <p className="mt-6 text-[10px] font-medium tracking-[.3em] text-[#76aaa5]">{t.locationLabel}</p>
              <h3 className="mt-3 text-xl font-light">{t.locationTitle}</h3>
            </div>
            <div className="mx-5 overflow-hidden rounded-[1.1rem] border border-[#dedbd3] bg-white sm:mx-6">
              <iframe
                title="Meishiou B&B Google Map"
                src={mapEmbedUrl}
                className="h-44 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="px-6 pb-7 pt-4 sm:px-7">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-medium text-[#659d98] underline underline-offset-4">{t.map} →</a>
            </div>
          </article>

          <article className="rounded-[1.6rem] border border-[#e1ded6] bg-[#f4f2ed] p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e0efec] text-[#6eaaa5]"><Bus size={19} /></div>
            <p className="mt-6 text-[10px] font-medium tracking-[.3em] text-[#76aaa5]">{t.publicLabel}</p>
            <div className="mt-4 space-y-4 text-sm font-light leading-6 text-[#74766f]">
              <div className="flex gap-3"><Train className="mt-0.5 shrink-0 text-[#79aaa6]" size={16} /><p><span className="font-medium text-[#4f524d]">{t.train}</span><br />{t.trainValue}</p></div>
              <div className="flex gap-3"><Bus className="mt-0.5 shrink-0 text-[#79aaa6]" size={16} /><p><span className="font-medium text-[#4f524d]">{t.terminal}</span><br />{t.terminalValue}</p></div>
              <div className="border-t border-[#dfdcd4] pt-4"><p className="font-medium text-[#4f524d]">{t.airport}</p><p className="mt-1">{t.airportValue}</p><a href={airportBusUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex font-medium text-[#659d98] underline underline-offset-4">{t.routeInfo} →</a></div>
              <div className="border-t border-[#dfdcd4] pt-4"><p className="font-medium text-[#4f524d]">{t.local}</p><p className="mt-1">{t.localValue}</p><a href={localBusUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex font-medium text-[#659d98] underline underline-offset-4">{t.busInfo} →</a></div>
            </div>
          </article>

          <article className="rounded-[1.6rem] border border-[#e1ded6] bg-[#f4f2ed] p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e0efec] text-[#6eaaa5]"><Car size={19} /></div>
            <p className="mt-6 text-[10px] font-medium tracking-[.3em] text-[#76aaa5]">{t.carLabel}</p>
            <h3 className="mt-3 text-xl font-light">{t.carTitle}</h3>
            <p className="mt-4 text-sm font-light leading-7 text-[#74766f]">{t.address}</p>
            <p className="mt-4 border-t border-[#dfdcd4] pt-4 text-sm font-light leading-7 text-[#74766f]">{t.interchange}</p>
            <p className="mt-3 whitespace-pre-line text-sm font-light leading-7 text-[#74766f]">{t.parking}</p>
          </article>
        </div>

        <div className="mt-16 border-t border-[#dedbd3] pt-14 lg:grid lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[.32em] text-[#76aaa5]">STAY ESSENTIALS</p>
            <h3 className="mt-5 max-w-md text-3xl font-light leading-[1.3]">{t.stay}</h3>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-x-5 lg:mt-0">
            {t.items.map(([label, value]: string[], i: number) => {
              const I = icons[i]
              return <div key={label} className="border-b border-[#e3e0d9] py-5"><div className="flex gap-3"><I className="mt-0.5 shrink-0 text-[#79aaa6]" size={17} /><div><p className="text-xs font-medium text-[#85877f]">{label}</p><p className="mt-1 text-sm font-light leading-6 text-[#4f524d]">{value}</p></div></div></div>
            })}
          </div>
        </div>
        <p className="mt-5 text-xs font-light leading-5 text-[#92948d]">{t.foot}</p>
      </div>
    </section>
  )
}
