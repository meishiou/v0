import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { MapPin, Clock, Car, Utensils, Mountain, Coffee, ShoppingBag, Camera } from "lucide-react"

const categories = [
  { id: "food", name: "美食", icon: Utensils },
  { id: "nature", name: "自然", icon: Mountain },
  { id: "cafe", name: "咖啡", icon: Coffee },
  { id: "shop", name: "市集", icon: ShoppingBag },
  { id: "photo", name: "打卡", icon: Camera },
]

const spots = [
  {
    category: "food",
    name: "好森咖啡x大吉",
    description: "隱身五結鄉間的咖啡店，使用在地食材的特色沙拉手作料理，位置不多建議先訂位！也可預約外燴或餐盒。",
    distance: "車程 17 分鐘",
    image: "/images/yilan.food-01.webp",
    tags: ["好森咖啡", "咖啡", "沙拉"],
  },
  {
    category: "food",
    name: "黑肉古早冰",
    description: "米修家常去的愛店，老闆用烹飪的概念來作古早冰，會吃到不同一般的冰種，炒飯炒麵也很驚艷，塔香抄飯堪比義式青醬比冰還推薦哦。如果你不趕路願意等待，這裡很值得來。",
    distance: "車程 8 分鐘",
    image: "/images/yilan.food-02.webp",
    tags: ["小吃", "隱藏版名店"],
  },
  {
    category: "nature",
    name: "梅花湖",
    description: "環湖步道非常適合散步或騎單車，湖邊有許多特色咖啡廳，是悠閒度過午後的好地方。",
    distance: "車程 11 分鐘",
    image: "/images/yilan.nature-01.webp",
    tags: ["湖景", "單車"],
  },
  {
    category: "nature",
    name: "太平山國家森林遊樂區",
    description: "搭乘蹦蹦車穿越台灣最美之一的太平山森林鐵道，CNN評比全球最美28條小路之一的見晴懷古步道，太平山國家森林四季都有不同的美景。",
    distance: "車程 50 分鐘",
    image: "/images/yilan.nature-02.webp",
    tags: ["太平山國家森林遊樂區", "森林浴", "蹦蹦車"],
  },
  {
    category: "cafe",
    name: "烏龜島咖啡甜點伴手禮",
    description: "以龜山島為建築設計概念的咖啡廳，主業是品牌伴手禮店，下午茶蛋糕超優也是網美名店，大片落地玻璃窗外滿是稻田，來品嚐最療癒的下午茶吧。",
    distance: "車程 2 分鐘",
    image: "/images/yilan.cafe-01.webp",
    tags: ["特色建築", "咖啡", "伴手禮"],
  },
  {
    category: "cafe",
    name: "Maslow Cafe",
    description: "隱身小巷內老屋改造設計感十足的空間，是文青必訪的景點，除了主角自烘咖啡之外手作甜點及麵包很優。",
    distance: "車程 8 分鐘",
    image: "/images/yilan.cafe-02.webp",
    tags: ["老屋", "咖啡", "甜點烘焙"],
  },
  {
    category: "shop",
    name: "羅東夜市",
    description: "宜蘭最熱鬧的常駐夜市之一，外地遊客必訪之地，包心粉圓、烤肉、蔥油餅⋯⋯ 一個晚上吃不完！",
    distance: "車程 15 分鐘",
    image: "/images/yilan.market-01.webp",
    tags: ["羅東夜市", "觀光夜市", "小吃"],
  },
  {
    category: "shop",
    name: "清溝夜市",
    description: "週三晚上限定的在地流動市集，很有在地生活感。",
    distance: "車程 10 分鐘",
    image: "/images/yilan.market-02.webp",
    tags: ["清溝夜市", "週三限定", "小吃"],
  },
  {
    category: "photo",
    name: "龜山島",
    description: "宜蘭最具代表性的地標，可以搭船登島或賞鯨豚。歡迎右上角Line聯絡阿鐵預訂行程。",
    distance: "烏石港 車程 50 分鐘",
    image: "/images/yilan.photo-1.webp",
    tags: ["烏石港", "龜山島", "賞鯨"],
  },
  {
    category: "photo",
    name: "抹茶山",
    description: "正式名稱為「三角崙山」（台灣小百岳之一），天主教徒的朝聖之路，因日本攝影師小林賢伍在社群上將其形容為「臺灣の抹茶冰淇淋山」而一夕暴紅。",
    distance: "登山口五峰旗停車場 車程 45 分鐘",
    image: "/images/yilan.photo-2.webp",
    tags: ["抹茶山", "聖母山莊"],
  },
]

export default function YilanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Yilan Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            宜蘭漫遊地圖
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            我們精選了宜蘭的私房景點，<br className="hidden md:block" />
            跟著這張地圖，發現宜蘭的美好角落。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-primary/10 hover:text-primary rounded-full text-sm font-medium text-foreground/80 transition-colors whitespace-nowrap"
              >
                <cat.icon size={16} />
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spots by Category */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl font-light text-foreground">{cat.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {spots
                  .filter((spot) => spot.category === cat.id)
                  .map((spot) => (
                    <div
                      key={spot.name}
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                    >
                      <div 
                        className="aspect-[16/9] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${spot.image})` }}
                      />
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-semibold text-foreground">{spot.name}</h3>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                            <Car size={12} />
                            {spot.distance}
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {spot.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {spot.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-accent/30 text-accent-foreground text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-foreground text-center mb-8">旅行小提醒</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Clock size={24} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">最佳旅遊時間</h3>
              <p className="text-sm text-foreground/70">
                春秋兩季氣候宜人，夏天可以玩水避暑，冬天則有溫泉可泡。
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <Car size={24} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">交通建議</h3>
              <p className="text-sm text-foreground/70">
                建議自行開車較方便，我們也提供免費腳踏車借用。
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <MapPin size={24} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">更多推薦</h3>
              <p className="text-sm text-foreground/70">
                出發前歡迎向我們詢問旅遊資訊及交通規劃，還有更多秘密基地等你發現！
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}
