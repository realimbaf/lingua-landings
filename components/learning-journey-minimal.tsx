import type React from "react"
import type { LucideIcon } from "lucide-react"

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

interface LearningJourneyMinimalProps {
  title: string
  subtitle?: string
  steps: Step[]
  accentColor?: string
  ctaButton?: React.ReactNode
}

export function LearningJourneyMinimal({
  title,
  subtitle,
  steps,
  accentColor = "teal",
  ctaButton,
}: LearningJourneyMinimalProps) {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
          {subtitle && <p className="text-center text-gray-600 text-lg mb-16">{subtitle}</p>}

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-200 via-teal-300 to-teal-200" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Icon circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 pb-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {ctaButton && <div className="text-center mt-12">{ctaButton}</div>}
        </div>
      </div>
    </section>
  )
}
