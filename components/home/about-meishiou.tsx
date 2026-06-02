"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutMeishiou() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. 標題與英文小標：完美同步 room grid 的外邊距 mb-16 */}
        <div className="text-center mb-16">
          <span className="text-primary text-base font-medium tracking-widest uppercase block mb-3">
            ABOUT US
          </span>
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            住進宜蘭的光與呼吸裡
          </h3>
        </div>
        
        {/* 下方內容區：電腦版 (md) 左右兩欄，手機版上下單欄 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 【相本大圖區塊】✨ 調整寬度比例：手機版縮小至 w-[85%]，電腦版維持精緻的 md:w-[90%] */}
          <div className="w-[85%] md:w-[90%] mx-auto order-2 md:order-1">
            <Link 
              href="https://share.google/020qhD9A4CNk4Jh5j"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-square rounded-2xl overflow-hidden hover:opacity-95 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Image
                src="/images/aboutmeishiou-1.webp"
                alt="米修民宿外觀"
                fill
                className="object-cover"
              />
            </Link>
          </div>

          {/* 【文案與按鈕區塊】透過 order 調整：手機版時在上方 (order-1)，電腦版時在右側 (md:order-2) */}
          <div className="flex flex-col text-center md:text-left order-1 md:order-2">
            
            {/* 2. 響應式內文排版：手機版時文字會自動置中；電腦版時文字會自動靠左 */}
            <div className="text-center md:text-left text-sm md:text-base text-muted-foreground leading-relaxed mb-8 flex flex-col gap-4">
              
              {/* 第一段：引言 */}
              <div>
                <p>暄鬧的世界裡 人總是在趕路</p>
              </div>

              {/* 第二段：慢下來 */}
              <div>
                <p>而旅行最舒服的時候，</p>
                <p>往往是終於慢下來的那一刻</p>
              </div>

              {/* 第三段：米修初初衷 */}
              <div>
                <p>米修家經營民宿很多年了，</p>
                <p>我們不走精品飯店的路線</p>
              </div>

              {/* 第四段：剛剛好的舒服 */}
              <div>
                <p>而是更真實、更生活感的陪伴，</p>
                <p>我們把「剛剛好的舒服」留在空間裡</p>
              </div>

              {/* 第五段：結尾期待 */}
              <div>
                <p>期待你見過宜蘭的水與綠，</p>
                <p>回來後，是可以真正放鬆的自己</p>
              </div>

            </div>

            {/* 3. 互動按鈕區塊：同樣維持手機版置中 (justify-center)、電腦版靠左 (md:justify-start) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/space"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                米修家的故事
              </Link>
              <Link
                href="/space#enjoy-life"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-medium"
              >
                一起.玩生活
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}