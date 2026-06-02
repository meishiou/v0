"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"

// 🌐 1. 探索米修的中英文對照資料結構 (中文 ‧ 英文 並排型式)
const EXPLORE_LINKS = [
  { href: "/space", labelTw: "遇見米修", labelEn: "ABOUT" },
  { href: "/booking", labelTw: "入住提案", labelEn: "PLANS" },
  { href: "/rooms", labelTw: "房型介紹", labelEn: "ROOMS" },
  { href: "/yilan", labelTw: "宜蘭漫遊", labelEn: "YILAN" },
]

// 📷 包棟說明的多張圖片路徑陣列 (順序固定：上集、下集)
const BAODONG_IMAGES = [
  "/images/illustrate-03.webp",   // 第一張圖 (原包棟說明)
  "/images/illustrate-04.webp"  // 第二張圖 (新增的包棟說明下集)
]

/* === 2026修改開始：修正導出語法並完整保留雙欄選單與住宿說明按鈕 === */
export default function Footer() {
  // 控制燈箱是否開啟，以及目前顯示圖片的索引值
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 開啟燈箱並重設索引為 0
  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex(0)
    setIsLightboxOpen(true)
  }

  // 切換下一張圖片
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % BAODONG_IMAGES.length)
  }

  // 切換上一張圖片
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + BAODONG_IMAGES.length) % BAODONG_IMAGES.length)
  }

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 🌿 欄位一：品牌文案區 + 🗺️ Google 地標地圖 */}
          <div className="flex flex-col space-y-5">
            <div>
              {/* 頁尾品牌標誌：左側對齊加入稍微放大的 LOGO 圖章 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-11 h-11 shrink-0 mix-blend-multiply">
                  <Image
                    src="/images/LOGO.jpg"
                    alt="米修 B&B 頁尾 LOGO"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-semibold text-primary">米修</span>
                  <span className="text-lg text-muted-foreground pt-1">B&B</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                一本有陽光與風的旅行繪本。<br />
                在宜蘭，等你翻開下一頁。
              </p>
            </div>

            {/* 🗺️ 地圖區塊 */}
            <div className="w-full flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.176378415848!2d121.7247348!3d24.686419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e2343ecb3459%3A0xcda770dfca7a8c3!2z57Gz5L_bIELDQUIo56666Jit5rCR5b_vKQ!5e0!3m2!1zhmt-TW!2stw!4v1716712000000!5m2!1zhmt-TW!2stw5"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl border border-border/50 shadow-sm"
                title="米修 B&B 官方地標定位"
              />
              <p className="text-[11px] text-muted-foreground/70 tracking-wide mt-1.5 pl-0.5">
                Google 地標 : 米修B&B
              </p>
            </div>
          </div>

          {/* 🔍 欄位二：探索米修 (雙欄排列 + 住宿說明按鈕) */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground tracking-wide text-lg">探索米修</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {EXPLORE_LINKS.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="group flex flex-row items-baseline gap-2 py-0.5"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors text-base font-normal tracking-wide">
                      {link.labelTw}
                    </span>
                    <span className="text-muted-foreground/20 group-hover:text-primary/40 text-xs select-none">·</span>
                    <span className="text-[11px] text-muted-foreground/40 group-hover:text-primary transition-colors font-medium tracking-wider uppercase">
                      {link.labelEn}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 📋 住宿說明獨立功能區塊 */}
            <div className="pt-6 border-t border-border/40 space-y-4">
              <h3 className="font-semibold text-foreground tracking-wide text-lg">住宿說明</h3>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="/images/illustrate-01.webp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/40"
                >
                  訂房說明
                </a>
                <a 
                  href="/images/illustrate-02.webp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/40"
                >
                  住宿約定
                </a>
                
                {/* 🌟 方案一修改點：點擊觸發 Lightbox 燈箱切換兩張圖 */}
                <button 
                  onClick={openLightbox}
                  className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/40 text-left"
                >
                  包棟說明
                </button>

                <a 
                  href="/images/illustrate-05.webp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/40"
                >
                  其他事項
                </a>
              </div>
            </div>
          </div>

          {/* 📞 欄位三：聯絡我們 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground tracking-wide text-lg">聯絡我們</h3>
            <div className="space-y-3.5">
              
              {/* 1. 電話 */}
              <a 
                href="tel:+886939741583" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                <Phone size={16} className="shrink-0" />
                <span>0939-741-583 阿鐵</span>
              </a>

              {/* 2. LINE */}
              <a 
                href="https://line.me/R/ti/p/@766nnznw" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.308-.252 1.206 1.089.658 1.341-.548 7.234-4.261 9.871-7.298 2.051-2.307 2.078-4.793 2.078-5.672zm-14.912 2.115c0 .242-.196.438-.438.438H6.533a.438.438 0 0 1-.438-.438v-3.836c0-.242.196-.438.438-.438h.547c.242 0 .438.196.438.438v2.851h1.117c.242 0 .438.196.438.438v.547zm2.461-.438a.438.438 0 0 1-.438.438h-.546a.438.438 0 0 1-.438-.438v-3.836c0-.242.196-.438.438-.438h.546c.242 0 .438.196.438.438v3.836zm4.43 0a.438.438 0 0 1-.439.438h-.551a.434.434 0 0 1-.365-.198l-1.427-2.008v1.768c0 .242-.196.438-.438.438h-.547a.438.438 0 0 1-.438-.438v-3.836c0-.242.196-.438.438-.438h.541c.21 0 .393.149.44.354l1.373 1.93v-1.846c0-.242.196-.438.438-.438h.547c.242 0 .438.196.438.438v3.836zm3.623-.629a.438.438 0 0 1-.438.438h-1.654a.438.438 0 0 1-.438-.438v-3.836c0-.242.196-.438.438-.438h1.654c.242 0 .438.196.438.438v.547a.438.438 0 0 1-.438.438h-1.108v.537h1.108c.242 0 .438.196.438.438v.547a.438.438 0 0 1-.438.438h-1.108v.561h1.108c.242 0 .438.196.438.438v.547z"/>
                </svg>
                <span>LINE: @766nnznw</span>
              </a>

              {/* 3. Facebook */}
              <a 
                href="https://www.facebook.com/meishioubnb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                <Facebook size={16} className="shrink-0" />
                <span>FB: @meishioubnb</span>
              </a>

              {/* 4. Instagram */}
              <a 
                href="https://www.instagram.com/meishioubnb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                <Instagram size={16} className="shrink-0" />
                <span>IG: @meishioubnb</span>
              </a>

              {/* 5. 郵件 */}
              <a 
                href="mailto:meishioubnb@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                <Mail size={16} className="shrink-0" />
                <span className="break-all">meishioubnb@gmail.com</span>
              </a>

              {/* 6. 地址 */}
              <div className="flex items-center gap-3 text-muted-foreground py-0.5">
                <MapPin size={16} className="shrink-0" />
                <span>宜蘭縣柯林村光華一路415號</span>
              </div>

            </div>
          </div>
        </div>

        {/* 版權宣告 */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 米修 B&B. All rights reserved.</p>
        </div>
      </div>

      {/* 🖼️ 彈出燈箱 Lightbox UI 區塊 */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* 點擊背景可關閉 */}
          <div className="absolute inset-0" onClick={() => setIsLightboxOpen(false)} />

          {/* 燈箱本體容器 */}
          <div className="relative z-10 max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center">
            
            {/* 頂部操作按鈕區 */}
            <div className="absolute -top-10 right-0 flex items-center gap-4 text-white text-sm font-light">
              <span>{currentImageIndex + 1} / {BAODONG_IMAGES.length}</span>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="關閉燈箱"
              >
                <X size={20} />
              </button>
            </div>

            {/* 圖片主體 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={BAODONG_IMAGES[currentImageIndex]} 
              alt={`包棟說明-${currentImageIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
            />

            {/* 左側切換箭頭 */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:-left-16 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-xs"
              aria-label="上一張"
            >
              <ChevronLeft size={24} />
            </button>

            {/* 右側切換箭頭 */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:-right-16 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-xs"
              aria-label="下一張"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}