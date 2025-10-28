"use client"

import { Music, Smile, Globe, Zap, TrendingUp, Sparkles, Users } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Music,
      emoji: "🎵",
      title: "Учим через музыку и культуру",
      description: "Никаких скучных учебников! Разбираем песни, фильмы, мемы и реальные диалоги",
    },
    {
      icon: Smile,
      emoji: "😄",
      title: "Весело и с юмором",
      description: "Наши уроки — это не зубрёжка, а увлекательное путешествие в мир английского",
    },
    {
      icon: Globe,
      emoji: "🌍",
      title: "Живой язык от носителей",
      description: "Учим тому, как говорят реальные люди в США, а не по устаревшим учебникам",
    },
    {
      icon: Zap,
      emoji: "⏰",
      title: "Гибкий график обучения",
      description: "Учитесь в удобное время и в своём темпе — доступ к материалам 24/7",
    },
    {
      icon: TrendingUp,
      emoji: "📈",
      title: "50,000+ довольных студентов",
      description: "Тысячи людей уже изменили свою жизнь благодаря нашим курсам",
    },
    {
      icon: Users,
      emoji: "👥",
      title: "Поддержка экспертов",
      description: "Наши преподаватели всегда готовы помочь и ответить на любые вопросы",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary text-sm">Почему выбирают нас</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Что делает нас особенными</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Мы отличаемся от скучных школ английского</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h3 className="font-bold text-xl pt-1">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm pl-12">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
