import { Shield, RefreshCw, Award, Headphones } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-16 px-4 border-y bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="font-semibold">Гарантия результата</div>
            <div className="text-sm text-muted-foreground">Или вернём деньги</div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <RefreshCw className="w-8 h-8 text-primary" />
            </div>
            <div className="font-semibold">14 дней на возврат</div>
            <div className="text-sm text-muted-foreground">Без вопросов</div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="font-semibold">Сертификат</div>
            <div className="text-sm text-muted-foreground">По окончании курса</div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Headphones className="w-8 h-8 text-primary" />
            </div>
            <div className="font-semibold">Поддержка 24/7</div>
            <div className="text-sm text-muted-foreground">Всегда на связи</div>
          </div>
        </div>
      </div>
    </section>
  )
}
