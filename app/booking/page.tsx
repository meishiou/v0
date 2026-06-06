import { Navigation } from "@/components/navigation"
import  Footer  from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { Users, Home, Coffee, Check, X, Calendar, Clock, CreditCard, Phone, AlertCircle } from "lucide-react"

/* === 2026修改開始：修正引號與逗號錯誤，還原乾淨完整代碼 === */
const bookingPlans = [
  {
    icon: Users,
    title: "大包棟",
    subtitle: "Complete Privacy",
    price: "NT$ 13,000 起 / 晚",
    description: "3+1間房，一個家。專屬於你們的私密時光，適合家族旅遊或好友聚會",
    features: [
      "3+1間獨立房間(最多12人+加床2人)",
      "房型人數 2/2+2/4/4",
      "免費停車位 2+2 個",
      "免費自行車借用",      
      "獨享整棟空間與設施",
      "大廳可煮火鍋",
      "住宿附手作早餐(續住9折則無)",
      "烤肉、戲水池(6~9月)空瑜設備...加價Go",
      "可接待小型寵物，請先提出商議",
      "代訂龜山島賞鯨/泛舟/SUP/沙灘車...等在地遊程",      
    ],
    highlight: true,
  },
  {
    icon: Home,
    title: "小包棟",
    subtitle: "Flexible Booking",
    price: "NT$ 7,100 起 / 晚",
    description: "預訂部分房間，空房不使用以低消價計算，我們不接外客。享有包棟般的寧靜，更彈性的選擇",
    features: [
      "預訂 1 間房+空房低消即可啟動",
      "空房低消費用：NT$ 1,500 起/ 間",
      "免費停車位 2+2 個",
      "免費自行車借用",
      "同樣享有包棟隱私",
      "大廳可煮火鍋",
      "住宿附手作早餐(續住9折則無)",
      "烤肉、戲水池(6~9月)、空瑜設備...加價Go",
      "可接待小型寵物，請先提出商議",
      "代訂龜山島賞鯨/泛舟/SUP/沙灘車...等在地遊程",
    ],
    highlight: false,
  },
  {
    icon: Coffee,
    title: "單間慢活",
    subtitle: "Solo Retreat",
    price: "NT$ 2,600 起 / 晚",
    description: "不論是獨旅、情侶、閏蜜或小家旅行都值得被好好款待。在米修，找回生活的節奏感",
    features: [
      "平日限定（週日至週四）",
      "獨立衛浴空間",
      "可使用公共區域",
      "免費自行車借用",
      "免費停車位 1 個",
      "住宿附手作早餐(續住9折則無)",
      "歡迎預約玩生活小手作課程",
      "代訂龜山島賞鯨/泛舟/SUP/沙灘車...等在地遊程",      
    ],
    highlight: false,
  },
]

const houseRules = [
  {
    icon: Clock,
    title: "入住 / 退房時間",
    items: [
      { text: "入住時間：下午 3:00 後", allowed: true },
      { text: "退房時間：上午 11:00 前", allowed: true },
      { text: "提早放行李請事先告知", allowed: true },
    ],
  },
  {
    icon: AlertCircle,
    title: "住宿規定",
    items: [
      { text: "歡迎兒童入住", allowed: true },      
      { text: "22:00 後請降低音量", allowed: true },
      { text: "包棟可接待小型寵物，請事先提出商議", allowed: true },
      { text: "室內禁止吸菸（含電子菸）", allowed: false },
    ],
  },
]

const cancellationPolicy = [
  { days: "14 天前", refund: "退款 100%訂金" },
  { days: "10-13 日前", refund: "退款 70%訂金" },
  { days: "7-9 日前", refund: "退款 50%訂金" },
  { days: "4-6 日前", refund: "退款 40%訂金" },
  { days: "2-3 日前", refund: "退款 30%訂金" },
  { days: "1 日前", refund: "退款20%訂金" },
]

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Booking Plans
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            入住提案與旅宿須知
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            選擇最適合您的入住方式，<br className="hidden md:block" />
            讓米修成為你旅途中最溫暖的落腳處
          </p>
        </div>
      </section>

      {/* Booking Plans */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bookingPlans.map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-2xl p-8 border ${
                  plan.highlight 
                    ? "border-primary bg-primary/5 shadow-lg" 
                    : "border-border bg-card"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    最受歡迎
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    <plan.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>
                </div>

                <p className="text-2xl font-semibold text-primary mb-4">{plan.price}</p>
                <p className="text-foreground/80 leading-relaxed mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://line.me/R/ti/p/@766nnznw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center rounded-xl font-medium transition-colors ${
                    plan.highlight 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  立即預訂
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              House Rules
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              旅宿須知
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {houseRules.map((section) => (
              <div key={section.title} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {item.allowed ? (
                        <Check size={16} className="text-primary shrink-0" />
                      ) : (
                        <X size={16} className="text-destructive shrink-0" />
                      )}
                      <span className="text-sm text-foreground/80">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cancellation Policy */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard size={20} className="text-primary" />
              <h3 className="font-semibold text-foreground">退訂政策(依旅宿業法定政策辦理)</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cancellationPolicy.map((policy) => (
                <div key={policy.days} className="text-center p-4 bg-secondary/30 rounded-xl">
                  <p className="font-medium text-foreground mb-1">{policy.days}</p>
                  <p className="text-sm text-primary">{policy.refund}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              * 如遇颱風等天災，可保留入住資格一年，讓您可以彈性調整入住日期
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">其他住宿約定請詳頁尾，有任何問題歡迎聯繫我們</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href="tel:+886939741583" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Phone size={18} />
                0939-741-583 阿鐵 (阿鐵LINE:0939741583)
              </a>
              <a 
                href="https://line.me/R/ti/p/@766nnznw" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06C755] text-white hover:bg-[#05b34c] transition-colors font-medium text-sm shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.269-5.383-9.556-12-9.556-6.617 0-12 4.287-12 9.556 0 4.72 4.263 8.665 10.011 9.422.39.083.92.258 1.055.594.122.302.08.775.039 1.08l-.167 1.002c-.05.303-.244 1.186 1.054.647 1.298-.538 6.996-4.12 9.539-7.054 1.771-1.954 2.469-3.705 2.469-5.731zm-15.006 2.45h-1.543c-.221 0-.4-.179-.4-.4v-4.103c0-.221.179-.4.4-.4h1.543c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4h-1.143v1.018h1.143c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4h-1.143v1.02h1.143c.221 0 .4.179.4.4v.332c0 .222-.179.4-.4.4zm3.013 0h-.342c-.221 0-.4-.179-.4-.4v-4.103c0-.221.179-.4.4-.4h.342c.221 0 .4.179.4.4v4.103c0 .221-.179.4-.4.4zm5.176 0h-1.311l-1.637-2.316v1.916c0 .221-.179.4-.4.4h-.342c-.221 0-.4-.179-.4-.4v-4.103c0-.221.179-.4.4-.4h1.28c.039 0 .077.006.115.017c.18.053.308.21.308.4v1.89l1.583-1.939c.1-.122.25-.188.411-.188h.408c.277 0 .463.267.377.53l-1.42 1.737 1.633 2.306c.143.203.003.45-.245.45zm3.435-1.02h-1.143v-.41h1.143c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4zm0-1.428h-1.143v-1.019h1.143c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4zm0-1.805h-1.543c-.221 0-.4-.179-.4-.4v-4.103c0-.221.179-.4.4-.4h1.543c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4h-1.143v1.018h1.143c.221 0 .4.179.4.4v.333c0 .221-.179.4-.4.4z"/>
                </svg>
                官方LINE @766nnznw
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookingButton />
    </main>
  )
}
/* === 2026修改結束 === */