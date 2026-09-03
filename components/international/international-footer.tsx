import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { languageLinks, type InternationalLocale } from "./config"

const mapUrl = "https://www.google.com/maps/search/?api=1&query=%E7%B1%B3%E4%BF%AEB%26B"
const email = "meishioubnb@gmail.com"
const phoneDisplay = "+886 939-741-583"
const phoneHref = "tel:+886939741583"
const lineId = "@766nnznw"
const lineUrl = "https://line.me/R/ti/p/@766nnznw"
const facebookUrl = "https://www.facebook.com/meishioubnb/"
const instagramUrl = "https://www.instagram.com/meishioubnb/"

const copy = {
  en: {
    place: "Yilan · Taiwan",
    findUs: "Find Us",
    contact: "Contact",
    address: "No. 415, Guanghua 1st Rd., Kelin Village, Dongshan Township, Yilan County, Taiwan",
    map: "Open in Google Maps",
    phone: "Phone",
    line: "LINE",
    facebook: "Facebook",
    instagram: "Instagram",
    email: "Email",
    registration: "Legal B&B No. 698 · Taiwan Host No. 805",
  },
  ja: {
    place: "台湾・宜蘭",
    findUs: "所在地",
    contact: "お問い合わせ",
    address: "台湾 宜蘭県冬山郷柯林村光華一路415号",
    map: "Google Mapsで開く",
    phone: "電話",
    line: "LINE",
    facebook: "Facebook",
    instagram: "Instagram",
    email: "メール",
    registration: "宜蘭県登録民宿 No. 698 · Taiwan Host No. 805",
  },
  ko: {
    place: "대만 · 이란",
    findUs: "찾아오시는 길",
    contact: "연락처",
    address: "No. 415, Guanghua 1st Rd., Kelin Village, Dongshan Township, Yilan County, Taiwan",
    map: "Google Maps에서 열기",
    phone: "전화",
    line: "LINE",
    facebook: "Facebook",
    instagram: "Instagram",
    email: "이메일",
    registration: "합법 민박 No. 698 · Taiwan Host No. 805",
  },
} satisfies Record<
  InternationalLocale,
  {
    place: string
    findUs: string
    contact: string
    address: string
    map: string
    phone: string
    line: string
    facebook: string
    instagram: string
    email: string
    registration: string
  }
>

export function InternationalFooter({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]

  const contacts = [
    { href: phoneHref, label: t.phone, value: phoneDisplay, Icon: Phone },
    { href: lineUrl, label: t.line, value: lineId, Icon: MessageCircle, external: true },
    { href: facebookUrl, label: t.facebook, value: "@meishioubnb", Icon: Facebook, external: true },
    { href: instagramUrl, label: t.instagram, value: "@meishioubnb", Icon: Instagram, external: true },
  ]

  return (
    <footer className="border-t border-[#e2e0da] bg-[#f7f5f0] px-6 py-12 text-[#4f534e] sm:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr_1fr] md:gap-12">
          <div>
            <p className="text-lg font-medium tracking-[0.03em]">Meishiou B&B</p>
            <p className="mt-2 text-xs font-light tracking-[0.12em] text-[#7a7e78]">{t.place}</p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.05em] text-[#555a54]">{t.findUs}</p>
            <div className="mt-4 flex items-start gap-2.5 text-xs font-light leading-6 text-[#70756f]">
              <MapPin size={15} strokeWidth={1.6} className="mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p>{t.address}</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#659d98] transition hover:text-[#4f8580]"
                >
                  {t.map} →
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.05em] text-[#555a54]">{t.contact}</p>
            <div className="mt-4 space-y-3">
              {contacts.map(({ href, label, value, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2.5 text-xs font-light text-[#70756f] transition hover:text-[#659d98]"
                >
                  <Icon size={15} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
                  <span className="min-w-[68px] text-[#858983]">{label}</span>
                  <span>{value}</span>
                </a>
              ))}

              <div className="flex items-center gap-2.5 text-xs font-light text-[#70756f]">
                <Mail size={15} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
                <span className="min-w-[68px] text-[#858983]">{t.email}</span>
                <span className="select-all">{email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#e2e0da] pt-7 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            {languageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[#659d98] ${
                  item.locale === locale ? "font-medium text-[#659d98]" : "font-light text-[#858983]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-[11px] font-light leading-5 text-[#92968f]">{t.registration}</p>
          <p className="mt-1 text-[11px] font-light text-[#9a9d97]">© {new Date().getFullYear()} Meishiou B&B</p>
        </div>
      </div>
    </footer>
  )
}
