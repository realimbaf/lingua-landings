import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitsSectionProps {
  title?: string
  subtitle?: string
  benefits: Benefit[]
  backgroundColor?: "white" | "slate"
  accentColor?: "teal" | "blue" | "purple"
}

export function BenefitsSection({
  title = "Что даст практикум",
  subtitle,
  benefits,
  backgroundColor = "white",
  accentColor = "teal",
}: BenefitsSectionProps) {
  const bgClass = backgroundColor === "slate" ? "bg-slate-50" : "bg-white"

  const colorClasses = {
    teal: {
      iconBg: "bg-teal-500",
      iconText: "text-white",
    },
    blue: {
      iconBg: "bg-blue-500",
      iconText: "text-white",
    },
    purple: {
      iconBg: "bg-purple-500",
      iconText: "text-white",
    },
  }

  const colors = colorClasses[accentColor]

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 border-slate-200">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.iconText}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
