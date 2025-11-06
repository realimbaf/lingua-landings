"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Clock, Shield, Zap } from "lucide-react"
import { useState } from "react"

interface BookingFormProps {
  title?: string
  price?: string
  description?: string
  steps?: string[]
  onSubmit?: (data: BookingFormData) => void
}

export interface BookingFormData {
  firstName: string
  contactType: "email" | "phone"
  contact: string
  consent: boolean
  newsletter: boolean
}

export function BookingForm({
  title = "Забронировать участие",
  price = "От 6840 ₽",
  description = "Забронируй участие в челлендже!",
  steps = ["Регистрируешься на челлендж", "Оплачиваешь указанную стоимость", "Получаешь доступ к программе на почту"],
  onSubmit,
}: BookingFormProps) {
  const [contactType, setContactType] = useState<"email" | "phone">("email")
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    contactType: "email",
    contact: "",
    consent: false,
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <div className="container mx-auto px-4">
      <Card className="max-w-3xl mx-auto shadow-2xl border-2">
        <CardContent className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
            <div className="mb-3">
              <span className="text-xl text-muted-foreground mr-2">От</span>
              <span className="text-5xl font-bold text-teal-500">{price.split(" ")[0]}</span>
              <span className="text-2xl text-muted-foreground ml-2">{price.split(" ")[1]}</span>
            </div>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <Zap className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-sm">Быстрый старт</p>
                <p className="text-xs text-muted-foreground">Доступ сразу после оплаты</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-sm">Гарантия возврата</p>
                <p className="text-xs text-muted-foreground">До старта курса</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-sm">Поддержка 24/7</p>
                <p className="text-xs text-muted-foreground">Ответим на все вопросы</p>
              </div>
            </div>
          </div>

          {steps && steps.length > 0 && (
            <div className="mb-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-bold mb-5 text-lg flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Как принять участие:
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-sm pt-2 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                Ваше имя
              </Label>
              <Input
                id="firstName"
                placeholder="Введите ваше имя"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Как с вами связаться?</Label>
              <RadioGroup
                value={contactType}
                onValueChange={(value: "email" | "phone") => {
                  setContactType(value)
                  setFormData({ ...formData, contactType: value, contact: "" })
                }}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg px-4 py-3 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email" className="font-normal cursor-pointer flex-1">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg px-4 py-3 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone" className="font-normal cursor-pointer flex-1">
                    Телефон
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              {contactType === "email" ? (
                <Input
                  type="email"
                  placeholder="example@linguatrip.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="h-12"
                  required
                />
              ) : (
                <Input
                  type="tel"
                  placeholder="+7 XXX XXX XX XX"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="h-12"
                  required
                />
              )}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  required
                  className="mt-0.5"
                />
                <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  Я даю согласие на обработку моих персональных данных на условиях{" "}
                  <a href="#" className="text-primary hover:underline">
                    политики конфиденциальности
                  </a>
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                  className="mt-0.5"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Я хочу получать полезные советы, новости, акции и специальные предложения
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full h-14 text-lg font-bold shadow-lg" size="lg">
              Оплатить и начать обучение
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              🔒 Безопасная оплата через защищенное соединение
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
