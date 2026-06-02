"use client"

import Image from "next/image"

// 兼顧 Google SEO 爬蟲字數限制（alt）與米修家專屬故事（description）
const galleryImages = [
  {
    src: "/images/dailymoment-1.webp",
    alt: "宜蘭近羅東三星地區位於安農溪畔米修民宿獨棟外觀，提供專屬停車位與電動車充電樁",
    description: "米修B&B為安農溪畔獨棟建築，民宿門口的專屬停車位及貼心的電動車充電樁，讓您在旅行之餘除了身心之外，也照顧到您的愛車充飽電，安心出遊"
  },
  {
    src: "/images/dailymoment-2.webp",
    alt: "宜蘭米修民宿寬敞大廳與木質用餐空間，給喜歡安靜、鄉村風、木工、手作氛圍的朋友們",
    description: "大廳及用餐空間，木質與手作感紛圍強烈，加上位於安農溪旁遠離喧鬧，特別吸引喜歡安靜、鄉村風、木工、手作的朋友們"
  },
  {
    src: "/images/dailymoment-3.webp",
    alt: "宜蘭米修民宿B&B手工現做溫馨早餐，體驗歐美精緻溫馨的民宿Homestay模式",
    description: "一早享用米修親手作的早餐吧，B&B是Bed and Breakfast的縮寫，一種起源於歐美的溫馨住宿模式，歡迎來體驗米修家堅持的慢活氛圍"
  },
  {
    src: "/images/dailymoment-4.webp",
    alt: "宜蘭合法民宿No.698米修民宿進門慢活角落，陽光灑落的手作木工與植栽裝飾",
    description: "米修民宿宜蘭合法民宿No.698，門口角落特寫，有特色的木工、手作工藝品與植物作裝飾展現用心營造的溫馨氛圍，陽光灑落在用心擺設的手作木作與盆栽細節上，看到了嗎?連上帝都在認證我們是A級民宿呢"
  },
  {
    src: "/images/dailymoment-5.webp",
    alt: "台灣宜蘭米修民宿鄰近柯林湧泉與安農溪，適合親子生態教育與觀察的豐富湧泉渠道溝圳",
    description: "米修民宿地理位置在安農溪旁為柯林湧泉區域，這邊的水質不輸南投埔里，門口圳溝常見黑殼蝦，豐富的生態適合帶孩子一起作生態教育及觀察，是親子小旅行的好地方"
  },
  {
    src: "/images/dailymoment-6.webp",
    alt: "宜蘭包棟民宿推薦米修B&B，堅持自然系風格的民宿，門口專屬烤肉區與兒童戲水池的放鬆慢時光",
    description: "在民宿門口即可歡聚烤肉，也可使用兒童戲水池，大人放鬆同時孩子也開心享受愜意慢時光"
  },
]

export function DailyMoments() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-base font-medium tracking-widest uppercase mb-3">
          Photos
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
          旅行不只景點 相聚也很重要
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          米修B&B保留了舒服自由的空間節奏，
                      <br className="hidden md:block" />
                      讓彼此能好好分享與陪伴
          </p>
        </div>

        {/* Masonry-like grid 不規則拼貼網格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[20px] transform select-none group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* 💡 修正比例：
                  第一張圖 (index === 0) 手機版預設為 aspect-[4/3]，電腦版則為 md:aspect-square (1:1)
                  其餘小圖則一律維持不變的 aspect-[4/3] 比例
              */}
              <div className={`relative w-full h-full ${
                index === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-[4/3]"
              }`}>
                {/* 圖片本身 */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />

                {/* 遮罩與精美固定文字字卡 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6">
                  <div className="max-h-[85%] overflow-y-auto pr-1 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[10px] md:text-sm font-light leading-snug md:leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}