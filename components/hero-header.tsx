"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  backgroundImage: string
  stats?: Array<{
    label: string
    value: string
  }>
  ctaButtons: Array<{
    label: string
    onClick: () => void
    variant?: "primary" | "secondary"
  }>
  accentColor?: "teal" | "blue" | "purple" | "orange"
}

export function HeroHeader({
  title,
  subtitle,
  description,
  badge,
  backgroundImage,
  stats,
  ctaButtons,
  accentColor = "teal",
}: HeroHeaderProps) {
  const accentColors = {
    teal: {
      primary: "bg-teal-500 hover:bg-teal-600",
      secondary: "bg-white/20 hover:bg-white/30",
    },
    blue: {
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-white/20 hover:bg-white/30",
    },
    purple: {
      primary: "bg-purple-500 hover:bg-purple-600",
      secondary: "bg-white/20 hover:bg-white/30",
    },
    orange: {
      primary: "bg-orange-500 hover:bg-orange-600",
      secondary: "bg-white/20 hover:bg-white/30",
    },
  }

  const colors = accentColors[accentColor]

  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        {badge && <div className="text-sm font-medium mb-4">{badge}</div>}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl mb-2 text-balance">{subtitle}</p>}
        {description && <p className="text-lg md:text-xl mb-8 text-balance opacity-90">{description}</p>}

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm opacity-80">{stat.label}</div>
                <div className="font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 justify-center">
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              size="lg"
              className={
                button.variant === "secondary" ? `${colors.secondary} border-white text-white` : colors.primary
              }
              variant={button.variant === "secondary" ? "outline" : "default"}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
