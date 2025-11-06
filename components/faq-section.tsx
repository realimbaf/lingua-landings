"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  id?: string
  title?: string
  subtitle?: string
  faqs: FAQ[]
  accentColor?: "teal" | "blue" | "purple" | "green"
  backgroundColor?: "white" | "slate"
}

export function FAQSection({
  id,
  title = "Часто задаваемые вопросы",
  subtitle,
  faqs,
  accentColor = "teal",
  backgroundColor = "white",
}: FAQSectionProps) {
  const bgClass = backgroundColor === "slate" ? "bg-slate-50" : "bg-white"

  const accentColors = {
    teal: "text-teal-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
          {subtitle && <p className="text-center text-gray-600 text-lg mb-12">{subtitle}</p>}

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  <span className={accentColors[accentColor]}>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
