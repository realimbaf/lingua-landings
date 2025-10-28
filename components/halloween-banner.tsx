"use client"

import { useState, useEffect } from "react"
import { Clock, Ghost, Sparkles } from "lucide-react"

export function HalloweenBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        setPrevTimeLeft(prev)
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-orange-600 via-purple-700 to-orange-600 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-[10%] animate-bounce" style={{ animationDelay: "0s" }}>
          👻
        </div>
        <div className="absolute top-3 left-[30%] animate-bounce" style={{ animationDelay: "0.5s" }}>
          🎃
        </div>
        <div className="absolute top-2 left-[50%] animate-bounce" style={{ animationDelay: "1s" }}>
          🦇
        </div>
        <div className="absolute top-3 left-[70%] animate-bounce" style={{ animationDelay: "1.5s" }}>
          🕷️
        </div>
        <div className="absolute top-2 left-[90%] animate-bounce" style={{ animationDelay: "2s" }}>
          🍬
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <Ghost className="w-7 h-7 animate-pulse text-orange-200" />
            <span className="font-bold text-2xl md:text-3xl text-balance">Жуткие скидки на Halloween!</span>
            <Sparkles className="w-7 h-7 animate-pulse text-orange-200" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-orange-200 animate-pulse" />
              <span className="text-orange-100 font-semibold text-lg">Предложение истекает через:</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Hours */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 blur-xl opacity-50 rounded-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl px-5 py-4 min-w-[80px] shadow-2xl border-2 border-orange-300/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <span className="relative font-mono font-black text-4xl md:text-5xl text-white drop-shadow-2xl tracking-wider">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-orange-100 uppercase tracking-wide">Часов</span>
              </div>

              {/* Separator */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-orange-300 shadow-lg shadow-orange-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-orange-300 shadow-lg shadow-orange-500/50"></div>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 rounded-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-xl px-5 py-4 min-w-[80px] shadow-2xl border-2 border-purple-300/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <span className="relative font-mono font-black text-4xl md:text-5xl text-white drop-shadow-2xl tracking-wider">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-purple-100 uppercase tracking-wide">Минут</span>
              </div>

              {/* Separator */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-300 shadow-lg shadow-purple-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-purple-300 shadow-lg shadow-purple-500/50"></div>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 blur-xl opacity-60 rounded-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl px-5 py-4 min-w-[80px] shadow-2xl border-2 border-orange-300/60 backdrop-blur-sm animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <span className="relative font-mono font-black text-4xl md:text-5xl text-white drop-shadow-2xl tracking-wider">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-orange-100 uppercase tracking-wide">Секунд</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-300/30">
            <span className="text-lg md:text-xl text-orange-100 font-bold">🎃 Скидки до 40% на все курсы 🎃</span>
          </div>
        </div>
      </div>
    </div>
  )
}
