/* === 2026修改：修復遇見米修頁面全檔（修正 handmadeItems 語法錯誤並加入點擊圖片看大圖功能） === */
import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"

// 空間導覽的資料定義
const spaces = [
  {
    title: "庭院",
    subtitle: "Front yard",
    description: "阿鐵米修都是都市長大的孩子，心中嚮往著一方庭園的綠意，生態系的米修庭院不追求物種單一，我們儘可能維持視覺上的平衡，與花草蟲鳥共生的自由呼吸感，是我們喜歡的節奏。",
    image: "/images/space-02.webp",
  },
  {
    title: "木質系大廳",
    subtitle: "Living Room",
    description: "木紋地板、米修手作的傢俱、阿鐵貼的磁磚面板、大面窗景配上舒適的音樂，很多住宿朋友都說一進米修家客廳不久，心中的煩悶立馬天然消散了非常神奇，我想客套難免，但開心大家也喜歡這種自然系氛圍。",
    image: "/images/space-03.webp",
  },
  {
    title: "樓梯間",
    subtitle: "stairwell",
    description: "樓梯是連結上下樓層的動線，這個空間也是我們所重視的地方，所以你會看到樓梯板、扶手、牆上掛的拚圖，甚至轉角的小書架都是阿鐵與米修手作的，搭配錯落的光影，每次經過都有幸福感呢。",
    image: "/images/space-04.webp",
  },
  {
    title: "早餐角落",
    subtitle: "Breakfast Corner",
    description: "在景觀窗旁享用早餐是最佳位置，清晨的陽光灑在木桌上，配上我們精心準備的手作早點，開啟美好的一天。",
    image: "/images/space-05.webp",
  },
]

// 1. 定義手作物件的 TypeScript 型別，允許 link 屬性
interface HandmadeItem {
  title: string;
  story: string;
  image: string;
  link?: string; // 選填的連結屬性
}

// 2. 補齊所有項目的欄位，並將手作課程圖片設為 enjoy-05.webp，點擊目標設為 enjoy-050.webp
const handmadeItems: HandmadeItem[] = [
  {
    title: "米修家散步攻略1-安農溪分洪堰公園",
    story: "米修家散步至安農溪分洪堰公園約1小時來回的路程，你會體驗到一望無際的水與綠及不輸日本鴨川的風景",
    image: "/images/enjoy-01.webp",
    link: "",
  },
  {
    title: "米修家散步攻略2-柯林湧泉園區",
    story: "米修家位於柯林湧泉區，是重要的農業灌溉水源，也是絕佳的親水生態教育園區，帶孩子享受愜意的鄉村風光，來趟自然景觀與生態水路巡禮吧",
    image: "/images/enjoy-04.webp",
    link: "",
  },
  {
    title: "安農溪自行車道",
    story: "雖然米修家也有幾台免費自行車可借用，但真的很建議您帶自己的車過來花個半天時間騎遠些，一路沿著安農溪自行車道騎到蘭陽電廠福利社，吃個冰棒再回來，延途滿是壯闊的河濱景觀，也會經過輕艇激流訓練中心，觀看選手們訓練體驗一把速度與激情。",
    image: "/images/enjoy-02.webp",
    link: "",
  },
  {
    title: "玩生活小手作課程",
    story: "2026年米修家的主題玩生活小手作課程是手機掛繩，您可以現場挑選自己喜歡的顏色體驗基礎+一點點變化的法式Marcrame棉繩編織，成品實用新手友善容易上手，歡迎點照片看詳細資訊、右上方Line圖標按鈕聯繫預約 一起 玩生活。",
    image: "/images/enjoy-05.webp",
    link: "/images/enjoy-050.webp",
  },
]

export default function SpacePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            ABOUT Meishioubnb
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            遇見米修
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            這裡的每一個角落都有故事，<br className="hidden md:block" />
            每一件物品都承載著我們對生活的熱愛
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">關於米修</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="aspect-[4/5] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url(/images/space-01.webp)" }}
              />
              <div className="space-y-6 text-foreground/80 leading-relaxed text-base">
                <p>
                  喜愛山林的阿鐵與米修，一直很想離山和土地近一點，
                  2011 年，我們離開台北，帶著狗狗 Bogi 來到宜蘭。
                  房子一邊蓋，生活也一邊慢慢成形。
                </p>
                <p>
                  我們不是設計師，只是因為米修上了幾堂木工課後，開始試著做房門
                  、家具及裝潢，獲得了滿滿成就感，後來才發現，
                  原來生活，也可以靠自己親手慢慢完成，
                  現在房子裡的很多角落，都還留著當年的敲敲打打的痕跡。
                </p>
                <p>
                  這些年，米修家經歷過很多變化。
                  阿鐵生病復健、Bogi 離開、佑佑來到，一路走到現在開始有了新的生活節奏。
                  而米修和阿鐵也還是和以前一樣，認真地生活、慢慢地接待旅人。
                </p>
                <p>
                  一切沒有變得比較容易，但我們慢慢學會活在當下，
                  把生活當成一場打怪升級的遊戲場認真的對待與拆解。
                </p>
                <p>
                  也因為這樣，更希望來到這裡的人，能真正放鬆地住幾天。
                  期待遠道而來的你，與我們一起玩生活。
                </p>
                <p className="text-right text-primary font-medium pt-2">
                  — 米修主人 阿鐵 & 米修
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Gallery */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              Spaces
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              空間導覽
            </h2>
          </div>

          <div className="space-y-24">
            {spaces.map((space, index) => (
              <div 
                key={space.title}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div 
                    className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url(${space.image})` }}
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-primary text-sm font-medium tracking-widest uppercase">
                    {space.subtitle}
                  </p>
                  <h3 className="text-3xl font-light text-foreground">{space.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handmade Items - ✨ 補上 id="enjoy-life" 錨點與滾動邊距補償 */}
      <section id="enjoy-life" className="py-20 px-6 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              Enjoy life
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              宿 . 木工 . 玩生活
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              人生不是打卡清單，而是慢慢收藏生活微光的旅程，<br className="hidden md:block" />
              在安農溪畔的綠與手作課程中體驗心流
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {handmadeItems.map((item) => (
              <div 
                key={item.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* 3. 圖片邏輯：如果資料有填寫 link 就用 <a> 標籤包起來，讓它可以點擊開新視窗看大圖 */}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                    <div 
                      className="aspect-[16/9] bg-cover bg-center cursor-pointer hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </a>
                ) : (
                  <div className="overflow-hidden">
                    <div 
                      className="aspect-[16/9] bg-cover bg-center hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}