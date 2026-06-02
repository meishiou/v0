import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const rooms = [
  {
    id: "red",
    name: "瑞德溫",
    subtitle: "The Red Room",
    description: "溫暖紅色調，雙人浪漫套房",
    image: "/images/rooms-1.webp",
  },
  {
    id: "green",
    name: "格林森",
    subtitle: "The Green Room",
    description: "清新綠意，四人親子套房",
    image: "/images/rooms-2.webp",
  },
  {
    id: "blue",
    name: "布魯水瀾",
    subtitle: "The Blue Room",
    description: "沉靜藍調，雙人舒適套房（可加2人）",
    image: "/images/rooms-3.webp",
  },
  {
    id: "mix",
    name: "米斯洛克",
    subtitle: "The Mix Room",
    description: "手作滑梯，2+2人親子套房",
    image: "/images/rooms-4.webp",
  },
]

export function RoomGrid() {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-base font-medium tracking-widest uppercase mb-3">
            Our Rooms
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            3+1 個乾淨清爽的房間
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            每一處光線落下的地方，都有我們對生活的想像，
            <br className="hidden md:block" />
            期待您在這裡找到喜歡的角落
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/rooms#${room.id}`}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />

              {/* ✨ 關鍵修改：降低遮罩的深色透明度，還原照片明暗度 */}
              {/* 將原本的 black/80 via-black/30 改成 black/30 to-transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Content */}
              {/* p-4 保持緊湊，flex-col justify-end 確保內容安靜貼在左下角 */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-left">
                {/* 1. 英文副標：細小字體，微弱優雅的白 */}
                <p className="text-white/50 text-[10px] tracking-widest uppercase mb-0.5 font-light">
                  {room.subtitle}
                </p>
                
                {/* 2. 房間主標：調整為 text-xl (約 20px)，字重適中更秀氣 */}
                <h3 className="text-white text-xl font-light mb-1">
                  {room.name}
                </h3>
                
                {/* 3. 房型描述：常態顯示不隱藏，使用低調的 text-white/70 伴隨較小字級與緊湊行高 */}
                <p className="text-white/70 text-xs leading-normal font-light">
                  {room.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            探索所有房型 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}