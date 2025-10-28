"use client"

import { useState, useEffect } from "react"
import { Clock, Flame } from "lucide-react"

export function LimitedOfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
    <div className="bg-gradient-to-r from-destructive to-orange-600 text-white py-3 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="font-bold">Специальное предложение!</span>
          </div>
          <span className="hidden md:inline">Скидки до 40% на все курсы</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-mono font-bold">
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
