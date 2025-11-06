"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, TrendingUp } from "lucide-react"

interface PricingTier {
  name: string
  subtitle?: string
  price: string
  originalPrice?: string
  spots: number | string | null // Allow null for unlimited spots
  features: string[]
  popular?: boolean
}

interface PricingSectionProps {
  title?: string
  subtitle?: string
  tiers: PricingTier[]
  showInstallment?: boolean
  showUrgency?: boolean // Added prop to control urgency timer display
  onSelectTier?: (tierName: string) => void
}

export function PricingSection({
  title = "Сколько стоит",
  subtitle = "Выберите подходящий тариф",
  tiers,
  showInstallment = true,
  showUrgency = false, // Default to false to avoid scammy appearance
  onSelectTier,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {showUrgency && (
              <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-full px-5 py-2 mb-4">
                <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">Цены скоро повысятся</span>
              </div>
            )}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
            {showInstallment && (
              <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border-2 border-emerald-500/30 rounded-2xl px-8 py-4 shadow-lg">
                <div className="text-3xl">💳</div>
                <div className="text-left">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 text-lg">Рассрочка 0%</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-500">Без переплат и скрытых комиссий</p>
                </div>
              </div>
            )}
          </div>

          <div
            className={
              tiers.length === 1
                ? "flex justify-center"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
            }
          >
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={
                  tier.popular
                    ? "relative border-primary border-2 shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-accent/5"
                    : "relative hover:shadow-lg transition-shadow"
                }
                style={tiers.length === 1 ? { maxWidth: "500px", width: "100%" } : undefined}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-bold shadow-lg">
                      <Sparkles className="w-4 h-4 mr-1 inline" />
                      Лучший выбор
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                      {tier.subtitle}
                    </p>
                  </div>
                  <div className="text-center mb-8 pb-8 border-b">
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-5xl font-bold">{tier.price.split(" ")[0]}</span>
                      <span className="text-2xl text-muted-foreground">{tier.price.split(" ")[1]}</span>
                    </div>
                    {tier.spots !== null && (
                      <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-1.5">
                        <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                          Осталось {tier.spots} мест
                        </span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      className={
                        tier.popular
                          ? "w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-12 font-semibold shadow-lg"
                          : "w-full text-lg h-12 font-semibold"
                      }
                      size="lg"
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => onSelectTier?.(tier.name)}
                    >
                      {tier.popular ? "Забронировать сейчас" : "Выбрать тариф"}
                    </Button>
                    {tier.popular && (
                      <p className="text-center text-xs text-muted-foreground mt-3">
                        🔥 Самый популярный выбор среди студентов
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
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
      </div>
    </section>
  )
}
