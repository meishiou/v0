import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { Calendar, Heart, Instagram } from "lucide-react"

const posts = [
  {
    date: "2024.03.15",
    title: "春天的第一株新芽",
    content: "今天在露台發現了新種的薰衣草冒出了第一株新芽！期待夏天整片紫色的花海。每次看到植物的成長，都覺得選擇來宜蘭生活是對的。",
    image: "/images/daily-1.jpg",
    tags: ["花園", "春天"],
  },
  {
    date: "2024.03.08",
    title: "手作新菜單測試",
    content: "為了新的早餐菜單，這週試做了三種不同的司康。杏仁口味大獲好評，決定加入固定菜單了！謝謝這週的客人當試吃員。",
    image: "/images/daily-2.jpg",
    tags: ["早餐", "手作"],
  },
  {
    date: "2024.02.28",
    title: "下雨天的閱讀時光",
    content: "宜蘭的冬天總是陰雨綿綿，但我漸漸愛上這樣的天氣。泡一壺茶，窩在沙發上看書，聽著窗外的雨聲，這就是慢活的意義吧。",
    image: "/images/daily-3.jpg",
    tags: ["閱讀", "雨天"],
  },
  {
    date: "2024.02.14",
    title: "情人節的小驚喜",
    content: "今天有對可愛的情侶來入住，偷偷幫他們在房間裡放了玫瑰花瓣和小卡片。看到他們開心的表情，我們也跟著幸福起來了。",
    image: "/images/daily-4.jpg",
    tags: ["客人", "浪漫"],
  },
  {
    date: "2024.02.01",
    title: "年前大掃除完成！",
    content: "花了整整三天，終於把米修從裡到外打掃乾淨。換上新的床單被套，擺上新買的乾燥花，準備迎接新年的第一批客人。",
    image: "/images/daily-5.jpg",
    tags: ["新年", "整理"],
  },
  {
    date: "2024.01.20",
    title: "冬日的田野散步",
    content: "今天天氣難得放晴，帶著相機去附近的田野散步。冬天的稻田雖然沒有金黃色的稻穗，但蕭條的景色也有另一種美。",
    image: "/images/daily-6.jpg",
    tags: ["散步", "攝影"],
  },
]

export default function DailyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Meishiou Daily
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            米修日常
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            記錄我們在宜蘭的生活點滴，<br className="hidden md:block" />
            分享米修的每一個小日常。
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-primary hover:underline"
          >
            <Instagram size={18} />
            追蹤我們的 Instagram
          </a>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.date}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div 
                  className="aspect-square bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{post.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 text-foreground/70 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <Heart size={32} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-light text-foreground mb-4">
            訂閱米修生活誌
          </h2>
          <p className="text-muted-foreground mb-8">
            每月一封，分享宜蘭的季節風景、米修的最新消息，還有不定期的住宿優惠。
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="輸入你的 Email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              訂閱
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            我們不會寄送垃圾郵件，隨時可以取消訂閱。
          </p>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}
