"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Copy, ExternalLink, Facebook, Instagram, Mail } from "lucide-react"
import { useMemo, useState, type ReactNode } from "react"
import type { InternationalLocale } from "./config"

const email = "meishioubnb@gmail.com"
const lineUrl = "https://line.me/R/ti/p/@766nnznw"
const facebookUrl = "https://www.facebook.com/meishioubnb/"
const instagramUrl = "https://www.instagram.com/meishioubnb/"

const roomOptions = {
  en: ["The Red Room · 瑞德溫", "The Green Room · 格林森", "The Blue Room · 布魯水瀾", "The Mix Room · 米斯洛克"],
  ja: ["The Red Room · 瑞德溫", "The Green Room · 格林森", "The Blue Room · 布魯水瀾", "The Mix Room · 米斯洛克"],
  ko: ["The Red Room · 瑞德溫", "The Green Room · 格林森", "The Blue Room · 布魯水瀾", "The Mix Room · 米斯洛克"],
} satisfies Record<InternationalLocale, string[]>

const copy = {
  en: {
    eyebrow: "STAY INQUIRY",
    title: "Tell us a little about your stay.",
    intro: "Fill in what you already know. You can copy the inquiry text below and send it with whichever email service you normally use.",
    to: "Send your inquiry to",
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    name: "Name",
    email: "Email",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Number of guests",
    rooms: "Preferred room(s)",
    flexible: "Flexible Private Stay*",
    yes: "Yes",
    no: "No",
    other: "Other questions or requests",
    otherPlaceholder: "Arrival time, children, transport, EV charging, or anything else you would like us to know.",
    flexibleNote:
      "If you choose “Yes,” only the rooms you need will be prepared for your stay, while the remaining guest rooms will be kept unavailable to other guests. An additional exclusive-use fee of NT$1,500 per unused room on weekdays or NT$2,000 per unused room on weekends and holidays applies.",
    previewTitle: "Your inquiry text",
    previewIntro: "This text updates as you fill in the form. You can also copy the blank template before entering anything.",
    copyText: "Copy Inquiry Text",
    copiedText: "Inquiry text copied",
    openMail: "Open My Email App",
    otherWays: "Other ways to contact Meishiou B&B",
    line: "LINE · @766nnznw",
    back: "Back to Meishiou B&B",
    templateTitle: "Meishiou B&B — Stay Inquiry",
    templateName: "Name",
    templateEmail: "Email",
    templateCheckIn: "Check-in",
    templateCheckOut: "Check-out",
    templateGuests: "Number of guests",
    templateRooms: "Preferred room(s)",
    templateFlexible: "Flexible Private Stay",
    templateOther: "Other questions or requests",
    chooseRooms: "Select any rooms you are considering",
  },
  ja: {
    eyebrow: "宿泊のお問い合わせ",
    title: "ご希望の滞在についてお聞かせください。",
    intro: "わかる範囲でご入力ください。下の問い合わせ文をコピーして、普段お使いのメールサービスから送信できます。",
    to: "お問い合わせ送信先",
    copyEmail: "メールアドレスをコピー",
    copiedEmail: "コピーしました",
    name: "お名前",
    email: "メールアドレス",
    checkIn: "チェックイン",
    checkOut: "チェックアウト",
    guests: "宿泊人数",
    rooms: "希望する客室",
    flexible: "Flexible Private Stay*",
    yes: "希望する",
    no: "希望しない",
    other: "その他のご質問・ご希望",
    otherPlaceholder: "到着予定時刻、お子様、交通手段、EV充電など、ご希望があればご記入ください。",
    flexibleNote:
      "「希望する」を選択した場合、ご利用になる客室のみをご用意し、その他の客室はほかのお客様には販売しません。追加のプライバシー料金として、未使用の客室1室につき平日 NT$1,500、週末・祝日 NT$2,000 がかかります。",
    previewTitle: "問い合わせ文",
    previewIntro: "入力内容はここに自動で反映されます。何も入力していない状態でも、空欄のテンプレートをコピーできます。",
    copyText: "問い合わせ文をコピー",
    copiedText: "問い合わせ文をコピーしました",
    openMail: "メールアプリを開く",
    otherWays: "米修B&Bへのその他の連絡方法",
    line: "LINE · @766nnznw",
    back: "米修B&Bへ戻る",
    templateTitle: "米修B&B — 宿泊のお問い合わせ",
    templateName: "お名前",
    templateEmail: "メールアドレス",
    templateCheckIn: "チェックイン",
    templateCheckOut: "チェックアウト",
    templateGuests: "宿泊人数",
    templateRooms: "希望する客室",
    templateFlexible: "Flexible Private Stay",
    templateOther: "その他のご質問・ご希望",
    chooseRooms: "検討中の客室を選択してください",
  },
  ko: {
    eyebrow: "숙박 문의",
    title: "원하시는 숙박에 대해 알려 주세요.",
    intro: "현재 정해진 내용만 입력하셔도 됩니다. 아래 문의 내용을 복사해 평소 사용하는 이메일 서비스로 보내실 수 있습니다.",
    to: "문의 이메일",
    copyEmail: "이메일 주소 복사",
    copiedEmail: "이메일 복사됨",
    name: "이름",
    email: "이메일",
    checkIn: "체크인",
    checkOut: "체크아웃",
    guests: "숙박 인원",
    rooms: "희망 객실",
    flexible: "Flexible Private Stay*",
    yes: "예",
    no: "아니요",
    other: "기타 질문 또는 요청사항",
    otherPlaceholder: "도착 시간, 어린이 동반, 교통, EV 충전 등 알려주실 내용이 있다면 적어 주세요.",
    flexibleNote:
      "‘예’를 선택하면 필요한 객실만 준비하고 나머지 객실은 다른 고객에게 판매하지 않습니다. 추가 프라이버시 요금은 사용하지 않는 객실 1실당 평일 NT$1,500, 주말 및 공휴일 NT$2,000입니다.",
    previewTitle: "문의 내용",
    previewIntro: "입력한 내용이 자동으로 반영됩니다. 아무것도 입력하지 않은 상태에서도 빈 양식을 복사할 수 있습니다.",
    copyText: "문의 내용 복사",
    copiedText: "문의 내용 복사됨",
    openMail: "이메일 앱 열기",
    otherWays: "Meishiou B&B 다른 연락 방법",
    line: "LINE · @766nnznw",
    back: "Meishiou B&B로 돌아가기",
    templateTitle: "Meishiou B&B — Stay Inquiry",
    templateName: "Name",
    templateEmail: "Email",
    templateCheckIn: "Check-in",
    templateCheckOut: "Check-out",
    templateGuests: "Number of guests",
    templateRooms: "Preferred room(s)",
    templateFlexible: "Flexible Private Stay",
    templateOther: "Other questions or requests",
    chooseRooms: "고려 중인 객실을 선택해 주세요",
  },
} satisfies Record<InternationalLocale, Record<string, string>>

export function InternationalInquiryForm({ locale }: { locale: InternationalLocale }) {
  const t = copy[locale]
  const [name, setName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")
  const [selectedRooms, setSelectedRooms] = useState<string[]>([])
  const [flexible, setFlexible] = useState("")
  const [other, setOther] = useState("")
  const [copied, setCopied] = useState<"email" | "text" | null>(null)

  const inquiryText = useMemo(() => {
    const flexibleValue = flexible === "yes" ? t.yes : flexible === "no" ? t.no : ""
    return [
      t.templateTitle,
      "",
      `${t.templateName}: ${name}`,
      `${t.templateEmail}: ${contactEmail}`,
      `${t.templateCheckIn}: ${checkIn}`,
      `${t.templateCheckOut}: ${checkOut}`,
      `${t.templateGuests}: ${guests}`,
      `${t.templateRooms}: ${selectedRooms.join(", ")}`,
      `${t.templateFlexible}: ${flexibleValue}`,
      `${t.templateOther}: ${other}`,
    ].join("\n")
  }, [checkIn, checkOut, contactEmail, flexible, guests, name, other, selectedRooms, t])

  const copyValue = async (value: string, type: "email" | "text") => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = value
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1800)
    }
  }

  const toggleRoom = (room: string) => {
    setSelectedRooms((current) =>
      current.includes(room) ? current.filter((item) => item !== room) : [...current, room],
    )
  }

  const subject = locale === "ja" ? "米修B&B 宿泊のお問い合わせ" : "Stay inquiry — Meishiou B&B"
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryText)}`

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#343633]">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/LOGO.jpg"
            alt="Meishiou B&B"
            width={128}
            height={128}
            className="h-20 w-20 rounded-full object-cover shadow-sm sm:h-24 sm:w-24"
            priority
          />
          <p className="mt-7 text-[11px] font-medium tracking-[0.34em] text-[#6d9f9a] sm:text-xs">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-3xl font-light leading-[1.25] tracking-[-0.025em] sm:text-4xl md:text-[2.7rem]">{t.title}</h1>
          <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-[#666b66] sm:text-base sm:leading-8">{t.intro}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#d8ddd8] bg-white/70 px-4 py-2.5 text-sm text-[#59635e]">
            <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
            <span className="font-light">{t.to}</span>
            <a href={`mailto:${email}`} className="font-medium text-[#5f8f8a] hover:underline">{email}</a>
            <button type="button" onClick={() => copyValue(email, "email")} className="inline-flex items-center gap-1.5 rounded-full bg-[#edf5f3] px-3 py-1.5 text-xs font-medium text-[#5f8f8a] transition hover:bg-[#e2efec]">
              {copied === "email" ? <Check size={14} /> : <Copy size={14} />}
              {copied === "email" ? t.copiedEmail : t.copyEmail}
            </button>
          </div>
        </div>

        <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(45,55,48,0.07)] sm:p-8 md:p-10 lg:p-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label={t.name}>
              <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} autoComplete="name" />
            </Field>
            <Field label={t.email}>
              <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className={inputClass} type="email" autoComplete="email" />
            </Field>
            <Field label={t.checkIn}>
              <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputClass} type="date" />
            </Field>
            <Field label={t.checkOut}>
              <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputClass} type="date" min={checkIn || undefined} />
            </Field>
            <Field label={t.guests}>
              <input value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClass} type="number" min="1" inputMode="numeric" />
            </Field>
          </div>

          <fieldset className="mt-7">
            <legend className="text-sm font-medium text-[#4d534e]">{t.rooms}</legend>
            <p className="mt-1 text-xs font-light text-[#858a84]">{t.chooseRooms}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {roomOptions[locale].map((room) => (
                <label key={room} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${selectedRooms.includes(room) ? "border-[#8fb9b4] bg-[#eef6f4] text-[#4f7f7a]" : "border-[#dedfd9] bg-[#fbfaf7] text-[#626762] hover:border-[#b8cbc8]"}`}>
                  <input type="checkbox" checked={selectedRooms.includes(room)} onChange={() => toggleRoom(room)} className="h-4 w-4 accent-[#72aaa5]" />
                  <span>{room}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-medium text-[#4d534e]">{t.flexible}</legend>
            <div className="mt-3 flex gap-3">
              {[{ value: "yes", label: t.yes }, { value: "no", label: t.no }].map((option) => (
                <label key={option.value} className={`flex min-w-28 cursor-pointer items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm transition ${flexible === option.value ? "border-[#78aaa5] bg-[#eaf3f1] text-[#4f7f7a]" : "border-[#d8dbd5] bg-white text-[#666b66] hover:border-[#b5c9c6]"}`}>
                  <input type="radio" name="flexible-private-stay" value={option.value} checked={flexible === option.value} onChange={(e) => setFlexible(e.target.value)} className="accent-[#72aaa5]" />
                  {option.label}
                </label>
              ))}
            </div>
            <p className="mt-4 rounded-xl bg-[#f3f6f3] px-4 py-3 text-xs font-light leading-6 text-[#737a74]">* {t.flexibleNote}</p>
          </fieldset>

          <Field label={t.other} className="mt-7">
            <textarea value={other} onChange={(e) => setOther(e.target.value)} className={`${inputClass} min-h-32 resize-y py-3`} placeholder={t.otherPlaceholder} />
          </Field>
        </section>

        <section className="mt-8 rounded-[2rem] bg-[#eaf3f1] p-6 sm:p-8 md:p-10">
          <h2 className="text-xl font-light tracking-[-0.015em] sm:text-2xl">{t.previewTitle}</h2>
          <p className="mt-2 text-sm font-light leading-6 text-[#717873]">{t.previewIntro}</p>
          <pre className="mt-5 whitespace-pre-wrap break-words rounded-2xl border border-[#cfdedb] bg-white/75 p-5 font-sans text-sm font-light leading-7 text-[#555c57]">{inquiryText}</pre>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => copyValue(inquiryText, "text")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#78b9b4] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(79,135,130,0.16)] transition hover:bg-[#6baaa5]">
              {copied === "text" ? <Check size={17} /> : <Copy size={17} />}
              {copied === "text" ? t.copiedText : t.copyText}
            </button>
            <a href={mailHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9ebfbb] bg-white/80 px-6 py-3.5 text-sm font-medium text-[#5f8f8a] transition hover:bg-white">
              <Mail size={17} strokeWidth={1.7} />
              {t.openMail}
            </a>
          </div>
        </section>

        <section className="mt-10 text-center">
          <p className="text-xs font-medium tracking-[0.16em] text-[#777d77]">{t.otherWays}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <ContactLink href={lineUrl} label={t.line} icon={<span className="text-[13px] font-bold">LINE</span>} />
            <ContactLink href={facebookUrl} label="Facebook" icon={<Facebook size={16} strokeWidth={1.7} />} />
            <ContactLink href={instagramUrl} label="Instagram" icon={<Instagram size={16} strokeWidth={1.7} />} />
          </div>
          <Link href={`/${locale}`} className="mt-9 inline-flex items-center gap-1.5 text-sm font-light text-[#6b8f8b] hover:underline">
            {t.back}
            <ExternalLink size={14} strokeWidth={1.6} />
          </Link>
        </section>
      </div>
    </main>
  )
}

const inputClass = "mt-2 w-full rounded-xl border border-[#d9dcd6] bg-[#fbfaf7] px-4 py-3 text-sm text-[#454a46] outline-none transition placeholder:text-[#a5aaa4] focus:border-[#8fb9b4] focus:bg-white focus:ring-2 focus:ring-[#dcecea]"

function Field({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-[#4d534e]">{label}</span>
      {children}
    </label>
  )
}

function ContactLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d6d9d3] bg-white px-4 py-2.5 text-sm font-light text-[#606660] transition hover:border-[#a9c5c1] hover:text-[#5f8f8a]">
      {icon}
      {label}
    </a>
  )
}
