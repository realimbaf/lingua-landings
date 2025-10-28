"use client"

import { useState, useEffect } from "react"
import { Clock, Tag, Zap } from "lucide-react"

export function BlackFridayBanner() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date()
    const endDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)
    const diff = endDate.getTime() - now.getTime()

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59, days: prev.days }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 px-4 overflow-hidden border-b-4 border-yellow-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1 left-[15%] animate-pulse" style={{ animationDelay: "0s" }}>
          <Tag className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute top-1 left-[45%] animate-pulse" style={{ animationDelay: "0.7s" }}>
          <Zap className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute top-1 left-[75%] animate-pulse" style={{ animationDelay: "1.4s" }}>
          <Tag className="w-6 h-6 text-yellow-400" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Title */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-md font-black text-sm md:text-base uppercase tracking-wide">
              Black Friday
            </div>
            <span className="font-bold text-lg md:text-xl">Скидки до 40% на все курсы!</span>
          </div>

          {/* Right side - Countdown */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-100 font-medium text-sm hidden md:inline">Осталось:</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg px-3 py-2 min-w-[60px] shadow-lg border border-yellow-300/50">
                  <span className="font-bold text-3xl text-black leading-none">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-semibold text-yellow-100 uppercase mt-1.5 tracking-wider">Дней</span>
              </div>

              <span className="text-yellow-400 font-bold text-2xl mb-6">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg px-3 py-2 min-w-[60px] shadow-lg border border-gray-600">
                  <span className="font-bold text-3xl text-white leading-none">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase mt-1.5 tracking-wider">Часов</span>
              </div>

              <span className="text-yellow-400 font-bold text-2xl mb-6">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg px-3 py-2 min-w-[60px] shadow-lg border border-gray-600">
                  <span className="font-bold text-3xl text-white leading-none">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase mt-1.5 tracking-wider">Минут</span>
              </div>

              <span className="text-yellow-400 font-bold text-2xl mb-6">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg px-3 py-2 min-w-[60px] shadow-lg border border-gray-600 animate-pulse">
                  <span className="font-bold text-3xl text-white leading-none">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase mt-1.5 tracking-wider">Секунд</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
