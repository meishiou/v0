/* === 2026修改開始：修正 Footer 引入語法，與元件對齊 === */
import { Navigation } from "@/components/navigation"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import Footer from "@/components/footer" // 🟢 關鍵修正：移除大括號，完美對齊預設導出！
import { HeroSection } from "@/components/home/hero-section"
import { TravelProposals } from "@/components/home/travel-proposals"
import { RoomGrid } from "@/components/home/room-grid"
import { DailyMoments } from "@/components/home/daily-moments"
import { AboutMeishiou } from "@/components/home/about-meishiou" 

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      
      {/* 🟢 照片牆區塊：順利移到內容區塊的第一段 */}
      <DailyMoments />
      
      <TravelProposals />
      
      <RoomGrid />
      
      {/* 🟢 原處位置：後半段的「關於米修與房間故事介紹」 */}
      <AboutMeishiou />
      
      <Footer />
      <FloatingBookingButton />
    </main>
  )
}
/* === 2026修改結束 === */