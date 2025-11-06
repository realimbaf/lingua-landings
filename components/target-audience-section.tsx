import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface TargetAudienceSectionProps {
  id?: string
  title: string
  subtitle?: string
  audiences: string[]
  accentColor?: "teal" | "blue" | "purple" | "orange"
  backgroundColor?: "white" | "slate"
  recommendation?: {
    title: string
    content: string
    highlight?: string
  }
}

export function TargetAudienceSection({
  id,
  title,
  subtitle,
  audiences,
  accentColor = "teal",
  backgroundColor = "slate",
  recommendation,
}: TargetAudienceSectionProps) {
  const bgClass = backgroundColor === "slate" ? "bg-slate-50" : "bg-white"
  const accentColors = {
    teal: {
      border: "border-teal-500",
      text: "text-teal-500",
      cardHover: "hover:border-teal-200",
      recommendationBg: "from-teal-50",
      recommendationIcon: "bg-teal-500",
      recommendationText: "text-teal-600",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-500",
      cardHover: "hover:border-blue-200",
      recommendationBg: "from-blue-50",
      recommendationIcon: "bg-blue-500",
      recommendationText: "text-blue-600",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-500",
      cardHover: "hover:border-purple-200",
      recommendationBg: "from-purple-50",
      recommendationIcon: "bg-purple-500",
      recommendationText: "text-purple-600",
    },
    orange: {
      border: "border-orange-500",
      text: "text-orange-500",
      cardHover: "hover:border-orange-200",
      recommendationBg: "from-orange-50",
      recommendationIcon: "bg-orange-500",
      recommendationText: "text-orange-600",
    },
  }

  const colors = accentColors[accentColor]

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
        {subtitle && <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">{subtitle}</p>}

        <div className={`grid md:grid-cols-${audiences.length === 4 ? "2" : "3"} gap-8 max-w-6xl mx-auto mb-12`}>
          {audiences.map((item, index) => (
            <Card
              key={index}
              className={`p-8 border-slate-200 bg-white hover:shadow-lg ${colors.cardHover} transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 ${colors.border} flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  <Check className={`w-4 h-4 ${colors.text}`} strokeWidth={3} />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            </Card>
          ))}
        </div>

        {recommendation && (
          <Card
            className={`p-8 md:p-10 max-w-4xl mx-auto border-${accentColor}-200 bg-gradient-to-br ${colors.recommendationBg} to-white shadow-lg`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 ${colors.recommendationIcon} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{recommendation.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {recommendation.content}
                  {recommendation.highlight && (
                    <span className={`font-bold ${colors.recommendationText}`}> {recommendation.highlight}</span>
                  )}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
