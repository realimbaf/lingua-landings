"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles } from "lucide-react"

export interface PricingTier {
  name: string
  subtitle: string
  basePrice: number
  originalPrice: number
  features: string[]
  spots?: number | null
  popular?: boolean
}

export interface UpsellOption {
  id: string
  title: string
  description: string
  price: number
  learnMoreUrl?: string
  learnMoreText?: string
}

interface PricingWithUpsellProps {
  title: string
  subtitle?: string
  tiers: PricingTier[]
  upsell?: UpsellOption
  onBooking: () => void
  showInstallment?: boolean
}

export function PricingWithUpsell({
  title,
  subtitle,
  tiers,
  upsell,
  onBooking,
  showInstallment = true,
}: PricingWithUpsellProps) {
  const [includeUpsell, setIncludeUpsell] = useState(false)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6">{subtitle}</p>}

        {/* Upsell Toggle */}
        {upsell && (
          <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg border-2 border-yellow-200 dark:border-yellow-800 mb-10">
            <input
              type="checkbox"
              id={`upsell-${upsell.id}`}
              checked={includeUpsell}
              onChange={(e) => setIncludeUpsell(e.target.checked)}
              className="w-5 h-5 text-teal-500 rounded focus:ring-2 focus:ring-teal-500"
            />
            <label htmlFor={`upsell-${upsell.id}`} className="cursor-pointer flex-1">
              <span className="font-bold text-lg">🎁 {upsell.title}</span>
              <span className="block text-sm text-muted-foreground">
                {upsell.description} (+{upsell.price} ₽)
              </span>
            </label>
            {upsell.learnMoreUrl && (
              <a
                href={upsell.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-600 dark:text-teal-400 hover:underline font-medium whitespace-nowrap"
              >
                {upsell.learnMoreText || "Узнать больше"} →
              </a>
            )}
          </div>
        )}

        {/* Installment Badge */}
        {showInstallment && (
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border-2 border-emerald-500/30 rounded-2xl px-8 py-4 shadow-lg">
            <div className="text-3xl">💳</div>
            <div className="text-left">
              <p className="font-bold text-emerald-700 dark:text-emerald-400 text-lg">Рассрочка 0%</p>
              <p className="text-sm text-emerald-600 dark:text-emerald-500">Без переплат и скрытых комиссий</p>
            </div>
          </div>
        )}
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {tiers.map((tier, index) => {
          const finalPrice = tier.basePrice + (includeUpsell && upsell ? upsell.price : 0)
          const finalOriginalPrice = tier.originalPrice + (includeUpsell && upsell ? upsell.price : 0)
          const upsellFeature = includeUpsell && upsell ? `✨ ${upsell.title}` : null

          return (
            <Card
              key={index}
              className={
                tier.popular
                  ? "relative border-primary border-2 shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-accent/5"
                  : "relative hover:shadow-lg transition-shadow"
              }
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4 mr-1 inline" />
                    Лучший выбор
                  </Badge>
                </div>
              )}
              <CardContent className="p-8 md:p-10">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{tier.subtitle}</p>
                </div>
                <div className="text-center mb-8 pb-8 border-b">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-2xl text-muted-foreground line-through">{finalOriginalPrice} ₽</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="text-5xl font-bold">{finalPrice}</span>
                    <span className="text-2xl text-muted-foreground">₽</span>
                  </div>
                  {tier.spots !== null && tier.spots !== undefined && (
                    <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-1.5">
                      <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                        Осталось {tier.spots} мест
                      </span>
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {upsellFeature && (
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed font-semibold text-yellow-700 dark:text-yellow-400">
                        {upsellFeature}
                      </span>
                    </li>
                  )}
                </ul>
                <Button
                  className={
                    tier.popular
                      ? "w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-12 font-semibold shadow-lg"
                      : "w-full text-lg h-12 font-semibold"
                  }
                  size="lg"
                  variant={tier.popular ? "default" : "outline"}
                  onClick={onBooking}
                >
                  {tier.popular ? "Забронировать сейчас" : "Выбрать тариф"}
                </Button>
                {tier.popular && (
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    🔥 Самый популярный выбор среди студентов
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground mb-4">Более 50,000 студентов уже выбрали Linguatrip</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Возврат до старта курса</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Сертификат по окончании</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
