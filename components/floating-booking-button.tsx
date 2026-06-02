"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"

export function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://www.booking-owlnest.com/meishioubnb?lang=zh_TW&adult=1&child=0&infant=0"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <Calendar size={18} />
      <span className="font-medium">預訂.Reserve</span>
    </a>
  )
}
