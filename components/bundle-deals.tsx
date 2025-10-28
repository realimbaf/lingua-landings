import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Sparkles, Zap } from "lucide-react"
import Image from "next/image"

export function BundleDeals() {
  const bundles = [
    {
      title: "TOEFL Prep Bundle",
      description: "TOEFL на 100+ баллов и английский до уровня Advanced",
      level: "Для Pre-intermediate и Intermediate",
      startDate: "Старт 31 октября",
      price: 13680,
      originalPrice: 18630,
      badge: "Новинка",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7ba776db63f746358cac81902fbc5cdd62fba3f68fec4b248c9ef4887dad14e1.png&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    },
    {
      title: "IELTS Prep Bundle",
      description: "IELTS на 7,5 и выше + английский до уровня Advanced",
      level: "Для Pre-intermediate и Intermediate",
      startDate: "Старт 31 октября",
      price: 13680,
      originalPrice: 18630,
      badge: "Новинка",
            image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/4bf28ae09bff48c38520d9092445766afcca57465aa4406b80846d03a7766e98.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground text-base px-4 py-1">
            <Sparkles className="w-4 h-4 mr-1" />
            Комплекты со скидкой
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Бандлы курсов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные программы обучения с выгодной скидкой
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={bundle.image || "/placeholder.svg"}
                  alt={bundle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badges overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {bundle.badge && (
                    <Badge className="bg-amber-500 text-white border-amber-600 shadow-lg font-semibold">
                      {bundle.badge}
                    </Badge>
                  )}
                  <Badge className="bg-blue-600 text-white border-blue-700 shadow-lg">
                    <Calendar className="w-3 h-3 mr-1" />
                    {bundle.startDate}
                  </Badge>
                </div>
                {/* Discount badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-destructive text-white border-destructive shadow-lg text-base px-3 py-1">
                    -{Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)}%
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {bundle.level}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{bundle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{bundle.description}</p>
                </div>

                <div className="space-y-4 mt-4">
                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 pt-4 border-t">
                    <div className="text-4xl font-bold text-primary">{bundle.price.toLocaleString("ru-RU")} ₽</div>
                    <div className="text-xl text-muted-foreground line-through">
                      {bundle.originalPrice.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-base h-12 font-semibold shadow-md hover:shadow-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Купить бандл
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
