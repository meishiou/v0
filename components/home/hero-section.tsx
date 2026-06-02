"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

/* === 2026修改開始：清爽重構圖片陣列，修復因語法錯誤導致的排版崩塌 === */
const heroImages = [
  {
    src: "/images/hero-1.webp",
    alt: "台灣宜蘭 (Taiwan, Yilan) 鄰近羅東與三星鄉安農溪畔的米修 B&B 民宿外觀，充滿綠意的花園與手作招牌，提供溫馨的包棟、微型包棟及單間慢活住宿體驗"
  },
  {
    src: "/images/hero-2.webp",
    alt: "台灣宜蘭 (Taiwan, Yilan) 米修 B&B 溫暖的午後陽光灑滿庭院，自然採光與木質手作家具打造出舒適的休閒空間，距離羅東夜市僅10分鐘車程，是主人米修與阿鐵親手為喜歡安靜的情侶或想逛夜市的旅人打造的漫遊空間"
  },
  {
    src: "/images/hero-3.webp",
    alt: "台灣宜蘭 (Taiwan, Yilan) 米修 B&B 民宿充滿生活感的舒適住宿空間，適合家族旅遊、好友聚會、親子同遊或情侶同行的宜蘭質感包棟民宿"
  }
]
/* === 2026修改結束 === */


export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.8)" }}
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
        {/* Warm overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-medium mb-4 tracking-widest text-sm">
          宜蘭安農溪畔
        </p>
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wide">
          米修 B&B
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-2">
          住進宜蘭的光與呼吸裡
        </p>
        <p className="text-white/70 text-base md:text-lg mb-2">
          3+1 個房間的小民宿，為您親手打造的家
        </p>
        <p className="text-white/60 text-sm">
          宜蘭合法民宿 No.698 / 好客民宿 No.805
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-12 right-6 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
