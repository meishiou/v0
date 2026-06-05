import Link from "next/link"
import Image from "next/image"
import { Users, Home, Coffee, ArrowRight } from "lucide-react"

const proposals = [
  {
    icon: Users,
    title: "大包棟",
    subtitle: "Complete Privacy",
    description: "四間房，一個家。專屬於你們的私密時光，適合家族旅遊或好友聚會",
    highlight: "最多可住 12+2 人",
    image: "/images/proposals-1.webp", // ✨ 已精準修正為 .webp 副檔名
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Home,
    title: "小包棟",
    subtitle: "Flexible Booking",
    description: "預訂部分房間，我們不接外客。享有包棟般的寧靜，更彈性的選擇",
    highlight: "空房低消方案",
    image: "/images/proposals-2.webp", // ✨ 已精準修正為 .webp 副檔名
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: Coffee,
    title: "單間慢活",
    subtitle: "Solo Retreat",
    description: "不論是獨旅、情侶、閏蜜或小家旅行都值得被好好款待。在米修，找回生活的節奏感",
    highlight: "平日限定",
    image: "/images/proposals-3.webp", // ✨ 已精準修正為 .webp 副檔名
    color: "bg-[#F0A886]/20 text-foreground",
  },
]

export function TravelProposals() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Travel Proposals
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            三種旅行提案
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            不管是熱鬧的家族出遊，還是一個人的靜謐時光，
            <br className="hidden md:block" />
            米修都為你準備了剛剛好的空間。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proposals.map((proposal) => (
            <Link
              key={proposal.title}
              href="/booking"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={proposal.image}
                  alt={proposal.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${proposal.color} flex items-center justify-center shrink-0`}
                  >
                    <proposal.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {proposal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {proposal.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  {proposal.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">
                    {proposal.highlight}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    了解更多 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}