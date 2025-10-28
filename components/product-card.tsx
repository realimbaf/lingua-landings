"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  instructor?: string
  category?: string
  href: string
  featured?: boolean
  image?: string
  price?: number
  originalPrice?: number
  discount?: number
  badge?: string
}

const getBadgeStyle = (badge: string) => {
  const lowerBadge = badge.toLowerCase()

  if (lowerBadge.includes("новинка")) {
    return {
      gradient: "from-emerald-500 to-green-600",
      emoji: "✨",
    }
  } else if (lowerBadge.includes("хит")) {
    return {
      gradient: "from-red-500 to-orange-600",
      emoji: "🔥",
    }
  } else if (lowerBadge.includes("эксклюзив")) {
    return {
      gradient: "from-purple-500 to-indigo-600",
      emoji: "💎",
    }
  } else if (lowerBadge.includes("суперскидка")) {
    return {
      gradient: "from-blue-500 to-cyan-600",
      emoji: "⚡",
    }
  } else {
    // Default styling for any other badge
    return {
      gradient: "from-amber-400 to-orange-500",
      emoji: "⭐",
    }
  }
}

export function ProductCard({
  title,
  description,
  instructor,
  category,
  href,
  featured = false,
  image,
  price,
  originalPrice,
  discount,
  badge,
}: ProductCardProps) {
  const badgeStyle = badge ? getBadgeStyle(badge) : null

  return (
    <Link href={href} className="group h-full block">
      <Card
        className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
          featured ? "border-primary border-2 ring-2 ring-primary/20" : ""
        }`}
      >
        {image && (
          <div className="relative h-40 w-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {discount && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xs px-2.5 py-1 shadow-lg border-0">
                  -{discount}%
                </Badge>
              </div>
            )}
            {badge && badgeStyle && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <Badge
                  className={`bg-gradient-to-r ${badgeStyle.gradient} text-white font-semibold text-xs px-2.5 py-1 shadow-lg border-0 flex items-center gap-1 w-fit`}
                >
                  <span className="text-sm">{badgeStyle.emoji}</span>
                  {badge}
                </Badge>
              </div>
            )}
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <CardHeader className="pb-3 pt-3.5 px-5 space-y-1.5">
            {category && <div className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</div>}
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors text-balance leading-snug">
              {title}
            </CardTitle>
            {instructor && <div className="text-sm text-muted-foreground font-medium">{instructor}</div>}
          </CardHeader>
          <CardContent className="flex-1 flex flex-col px-5 pb-5 pt-0">
            <CardDescription className="text-sm leading-relaxed text-pretty mb-4">{description}</CardDescription>

            {price && (
              <div className="space-y-3 pt-4 border-t mt-auto">
                <div className="flex items-baseline gap-2.5">
                  <div className="text-2xl font-bold text-primary">{price.toLocaleString("ru-RU")} ₽</div>
                  {originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      {originalPrice.toLocaleString("ru-RU")} ₽
                    </div>
                  )}
                </div>
                {originalPrice && (
                  <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded inline-block">
                    Экономия {(originalPrice - price).toLocaleString("ru-RU")} ₽
                  </div>
                )}

                <Button className="w-full group-hover:shadow-lg transition-all mt-3" size="default">
                  Узнать больше
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
