"use client"

import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube } from "lucide-react"
import Image from "next/image"

const bloggers = [
  {
    name: "Катя Усманова",
    handle: "@usmanovakate",
    image: "https://site.linguacdn.download/Images/index/subscription/tild3932-6131-4733-a335-356561613534__2d64vthav6i.jpg",
    description: "Блогер с аудиторией в 3,6 млн подписчиков, чемпионка РФ с опытом 15 лет, основатель школы фитнеса",
    platform: "instagram" as const,
  },
  {
    name: "Денис Кукояка",
    handle: "@denisque",
    image: "https://site.linguacdn.download/Images/index/subscription/tild6636-6438-4738-a431-353737663336__77e9eee58e7f4f8b33b7.jpg",
    description: "Видео-блогер с аудиторией в 1,6 млн подписчиков, актёр, музыкант, бывший участник группы Хлеб",
    platform: "instagram" as const,
  },
  {
    name: "Карина Нигай",
    handle: "@karina_nigay",
    image: "https://site.linguacdn.download/Images/index/subscription/tild6566-3639-4232-b963-373063326662__bez_imeni-1-vosstano.jpg",
    description: "Популярный блогер и медийная личность с многомиллионной аудиторией",
    platform: "instagram" as const,
  },
  {
    name: "Ирина Голдман",
    handle: "@veryire",
    image: "https://site.linguacdn.download/Images/index/subscription/tild3061-6634-4738-a462-396338643939__pic_1651672791.jpg",
    description:
      "Блогер с аудиторией в 786 тыс. подписчиков, создатель пространства Spacecool по копирайтингу, автор онлайн-курсов, книг",
    platform: "instagram" as const,
  },
  {
    name: "Регина Тодоренко",
    handle: "@reginatodorenko",
    image: "https://site.linguacdn.download/Images/index/subscription/tild6137-6536-4962-b538-343936336538__2a3e532d2b9c6472073d.jpg",
    description: "Телеведущая, певица и блогер с многомиллионной аудиторией",
    platform: "instagram" as const,
  },
  {
    name: "Маша Солодар",
    handle: "@mariyasolodar",
    image: "https://site.linguacdn.download/Images/index/subscription/tild3238-6238-4339-b537-633566353430__img_8440-683x1024.jpg",
    description: "Блогер с аудиторией в 2,6 млн подписчиков, автор книг, обучила более 750 тыс. человек по всему миру",
    platform: "instagram" as const,
  },
  {
    name: "Илья Стрекаловский",
    handle: "ILYA STREKAL",
    image: "https://site.linguacdn.download/Images/index/subscription/tild6534-3566-4366-b465-353931356137__lab0etgkt4q.jpg",
    description: "Популярный YouTube-блогер с активной аудиторией",
    platform: "youtube" as const,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-base px-4 py-1">
            ⭐ Известные личности
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">С нами учат английский</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Блогеры и медийные личности с многомиллионной аудиторией выбирают Linguatrip
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bloggers.map((blogger, index) => (
            <div key={index} className="group transition-all duration-300">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 mb-4">
                <Image
                  src={blogger.image || "/placeholder.svg"}
                  alt={blogger.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 backdrop-blur-sm text-foreground border-0 shadow-lg">
                    {blogger.platform === "instagram" ? (
                      <Instagram className="w-3 h-3 mr-1" />
                    ) : (
                      <Youtube className="w-3 h-3 mr-1" />
                    )}
                    {blogger.handle}
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{blogger.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{blogger.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к тысячам студентов, которые уже улучшили свой английский с Linguatrip
          </p>
        </div>
      </div>
    </section>
  )
}
