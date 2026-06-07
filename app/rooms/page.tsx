"use client"

import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { useState } from "react"
import { Maximize2, Users, Ruler, Bath, Wifi, Wind, Coffee, Tv } from "lucide-react"

const rooms = [
  {
    id: "The Red Room",
    name: "瑞德溫雙人套房",
    subtitle: "The Red Room",
    tagline: "溫暖木色裡，藏著一點童趣與旅行感",
    description: "進入瑞德溫房開門抬頭，就是一朵紅色向日葵燈飾，橘紅色的床頭上，掛著一朵朵燦爛的雛菊，彩色的枕頭，各種粉嫩色彩的牆壁，組合成一段最愉悅的睡前繪本",
    story: "RGB代表光的三原色，有著柔和色調、溫暖色系、手感木作與安靜光影的瑞德溫房，不是華麗的房間，卻有種剛剛好的舒服，像回到某段單純而自在的日子。",
    images: [
      "/images/red-01.webp",
      "/images/red-02.webp",
      "/images/red-03.webp",
      "/images/red-04.webp",
    ],
    specs: {
      size: "11坪",
      bed: "Queen size雙人床 x1",
      capacity: "2人(不提供加床)",
      bathroom: "獨立乾溼分離衛浴",
    },
    amenities: ["大陽台", "免費 Wi-Fi", "Hitachi冷暖空調", "除濕機", "浴室冷暖風機", "吹風機", "CD音響", "沐浴洗髮二合一洗浴乳", "毛巾", "迎賓茶點"],
    color: "bg-pink-50",
    price: {
      weekday: "2600",
      holiday: "3200",
      peak: "3500",
      lunar: "4200",
    },
  },
  {
    id: "The Green Room",
    name: "格林森四人套房",
    subtitle: "The Green Room",
    tagline: "陽光灑進木質空間裡，享受輕盈的呼吸感",
    description: "兩張併排的床，一起打滾、一起交換秘密，天花板邊，一隻紅色恐龍被汽球拉上了天空，肚子上的時鐘喀啦喀啦走，彷彿在暗示，通往歡樂的冒險就在此刻！",
    story: "格林森房擁有最大的窗景及空間，窗外是安農溪及雪山山脈滿屏的綠，室內是清新的湖水綠、明亮的暖黃牆。拉著家人、閏蜜分享心事，一起徜徉在格林森的自由感中。",
    images: [
      "/images/Green-01.webp",
      "/images/Green-02.webp",
      "/images/Green-03.webp",
      "/images/Green-04.webp",
    ],
    specs: {
      size: "12坪",
      bed: "Double Size雙人床 x2",
      capacity: "4人(不提供加床)",
      bathroom: "獨立乾溼分離衛浴",
    },
    amenities: ["大陽台", "免費 Wi-Fi", "Hitachi冷暖空調", "除濕機", "浴室冷暖風機", "吹風機", "CD音響", "沐浴洗髮二合一洗浴乳", "毛巾", "迎賓茶點"],
    color: "bg-teal-50",
    price: {
      weekday: "3600",
      holiday: "4200",
      peak: "4800",
      lunar: "5800",
    },
  },
  {
    id: "The Blue Room",
    name: "布魯水瀾雙人套房",
    subtitle: "The Blue Room",
    tagline: "躺在大片木地板的沉靜與溫暖的海色調中放空",
    description: "親手作的木地板上是一排打高的藍色浪花做床頭板，這個房型擁有米修家唯一可以泡澡的浴室，為妳漆上戀愛般的夢幻粉色，泡在水藍色馬賽克磁磚拼貼而成的浴缸，這是人魚公主給妳們的浪漫祝福",
    story: "就像宜蘭人心中的精神象徵龜山島一樣，布魯水瀾溫潤的木地板與海色線條也圍出一座小島，從清晨到黃昏構成恰好的一室清新。",
    images: [
      "/images/Blue-01.webp",
      "/images/Blue-02.webp",
      "/images/Blue-03.webp",
      "/images/Blue-04.webp",
    ],
    specs: {
      size: "11坪",
      bed: "Queen size雙人床 x1",
      capacity: "2人(加床1~2人 ; $800/人)",
      bathroom: "獨立衛浴（浴缸)",
    },
    amenities: ["大陽台", "泡澡浴缸", "免費 Wi-Fi", "Hitachi冷暖空調", "除濕機", "浴室冷暖風機", "吹風機", "CD音響", "沐浴洗髮二合一洗浴乳", "毛巾", "迎賓茶點"],
    color: "bg-orange-50",
    price: {
      weekday: "2800",
      holiday: "3400",
      peak: "3800",
      lunar: "4600",
    },
  },
  {
    id: "The Mix Room",
    name: "米斯洛克2+2人親子滑梯套房",
    subtitle: "The Mix Room",
    tagline: "探險樂園般的房間！秘密基地與滑梯完美融合",
    description: "仿彿進到不同天地，閣樓下是爸爸媽媽休息處，上方是孩子的祕密基地, 連接上下的是米修親手作的溜滑梯及遊戲空間小賣所，有事叫喚一聲即可，小幫手會立即從天而降",
    story: "一間有溜滑梯、攀爬架的房間是孩子的夢想，因此米修親手設計製作，略微加高了米斯洛克的挑戰難度，而爸媽也別太擔心，孩子的敏捷度是在空間裡玩出來的，而相信是給孩子最大的支持力量",
    images: [
      "/images/mix-01.webp",
      "/images/mix-04.webp",
      "/images/mix-03.webp",
      "/images/mix-02.webp",
    ],
    specs: {
      size: "11.6坪",
      bed: "Queen Size雙人床 x1 + 單人床墊 x2",
      capacity: "4人(不提供加床)",
      bathroom: "獨立乾溼分離衛浴",
    },
    amenities: ["手作溜滑梯", "手作遊戲角落", "免費 Wi-Fi", "Hitachi冷暖空調", "除濕機", "浴室冷暖風機", "吹風機", "沐浴洗髮二合一洗浴乳", "毛巾", "迎賓茶點"],
    color: "bg-slate-50",
    price: {
      weekday: "4000",
      holiday: "5000",
      peak: "5600",
      lunar: "6800",
    },
  },
]

const amenityIcons: Record<string, typeof Wifi> = {
  "免費 Wi-Fi": Wifi,
  "冷暖空調": Wind,
  "迎賓茶點": Coffee,
  "有線電視":Tv,
}

export default function RoomsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          ROOMS OF Playful
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-[1.3]">
          童趣系<br />
          房型攝影集
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            瑞德溫的暖、格林森的綠、布魯水瀾的靜、米斯洛克的自由<br className="hidden md:block" />
            選一間，住進你喜歡的繽紛裡
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-32">
          {rooms.map((room, index) => (
            <article 
              key={room.id} 
              id={room.id}
              className="scroll-mt-24"
            >
              {/* Room Header */}
              <div className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Main Image */}
                <div className="w-full md:w-1/2">
                  <div 
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(room.images[0])}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${room.images[0]})` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={18} />
                    </button>
                  </div>
                  
                  {/* === 2026修改開始：小圖排版邏輯微調，使用 slice(1) 排除大圖 === */}
                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {room.images.slice(1).map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(img)}
                        className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                      >
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      </button>
                    ))}
                  </div>
                  {/* === 2026修改結束 === */}
                </div>

                {/* Room Info */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
                      {room.subtitle}
                    </p>
                    <h2 className="text-4xl font-light text-foreground mb-2">{room.name}</h2>
                    <p className="text-xl text-muted-foreground">{room.tagline}</p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Specs */}
                  <div className={`${room.color} rounded-xl p-6`}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Ruler size={18} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">坪數</p>
                          <p className="font-medium text-foreground">{room.specs.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users size={18} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">可住人數</p>
                          <p className="font-medium text-foreground">{room.specs.capacity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-primary">🛏️</span>
                        <div>
                          <p className="text-xs text-muted-foreground">床型</p>
                          <p className="font-medium text-foreground">{room.specs.bed}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Bath size={18} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">衛浴</p>
                          <p className="font-medium text-foreground">{room.specs.bathroom}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">房間設施</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <span 
                          key={amenity}
                          className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-foreground/80"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-sm font-semibold text-foreground">
                        房價資訊
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        ※價格已含早餐
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="border border-primary/20 rounded-xl p-3 text-center bg-white/70">
                        <p className="text-sm font-medium text-primary mb-1">平日</p>
                        <p className="text-base font-light text-foreground">
                          NT$ {room.price.weekday}
                        </p>
                      </div>

                      <div className="border border-primary/20 rounded-xl p-3 text-center bg-white/70">
                        <p className="text-sm font-medium text-primary mb-1">假日</p>
                        <p className="text-base font-light text-foreground">
                          NT$ {room.price.holiday}
                        </p>
                      </div>

                      <div className="border border-primary/20 rounded-xl p-3 text-center bg-white/70">
                        <p className="text-sm font-medium text-primary mb-1">旺日</p>
                        <p className="text-base font-light text-foreground">
                          NT$ {room.price.peak}
                        </p>
                      </div>

                      <div className="border border-primary/20 rounded-xl p-3 text-center bg-white/70">
                        <p className="text-sm font-medium text-primary mb-1">春節</p>
                        <p className="text-base font-light text-foreground">
                          NT$ {room.price.lunar}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        <p>※ 旺日定義：暑期週五六、連假、跨年夜</p>
                        <p>※ 續住另有優惠，詳細請參閱訂房說明</p>
                      </div>

                      <a
                        href="/booking"
                        className="inline-flex items-center justify-center px-5 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        查看訂房&住宿說明
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://www.booking-owlnest.com/meishioubnb?lang=zh_TW&adult=1&child=0&infant=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    線上查看空房
                  </a>
                </div>
              </div>

              {/* Room Story */}
              <div className="mt-12 p-8 bg-secondary/20 rounded-2xl">
                <p className="text-sm text-primary font-medium mb-2">房間故事</p>
                <p className="text-foreground/80 leading-relaxed italic">
                  {`"${room.story}"`}
                </p>
                <p className="text-right text-sm text-muted-foreground mt-4">— 米修主人</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Room detail" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}