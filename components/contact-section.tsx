"use client"

import { Button } from "@/components/ui/button"
import { Send, MessageCircle } from "lucide-react"

interface ContactSectionProps {
  title?: string
  description?: string
  showConsultation?: boolean
  showTelegram?: boolean
  showWhatsApp?: boolean
  onConsultationClick?: () => void
}

export function ContactSection({
  title = "Остались вопросы?",
  description = "Свяжитесь с нами удобным способом, и мы поможем выбрать подходящий тариф",
  showConsultation = true,
  showTelegram = true,
  showWhatsApp = true,
  onConsultationClick,
}: ContactSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {showConsultation && (
              <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={onConsultationClick}>
                Забронировать консультацию
              </Button>
            )}
            {showTelegram && (
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Send className="w-5 h-5" />
                Telegram
              </Button>
            )}
            {showWhatsApp && (
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
