"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  Users,
  MessageCircle,
  Globe,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Video,
} from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PricingSection } from "@/components/pricing-section"
import Link from "next/link"

export default function SpeakingClubPage() {
  const [currentReview, setCurrentReview] = useState(0)

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const reviews = [
    {
      name: "Анна Петрова",
      level: "B1",
      text: "Отличный формат для практики! Темы всегда интересные, а атмосфера очень дружелюбная. За месяц заметно улучшилось понимание на слух.",
    },
    {
      name: "Дмитрий Соколов",
      level: "A2",
      text: "Преодолел языковой барьер благодаря клубу! Теперь не боюсь говорить на английском. Нашел много друзей по всему миру.",
    },
    {
      name: "Мария Иванова",
      level: "B2",
      text: "Занятия действительно помогают поддерживать язык в тонусе. Удобно, что можно выбирать темы по интересам и уровню.",
    },
  ]

  const pricingTiers = [
    {
      name: "Lingua Speaking Club PRO",
      subtitle: "Подписка на разговорный клуб на 1 месяц",
      price: "4680 ₽",
      spots: null, // Unlimited spots
      features: ["Участие в интересных обсуждениях и мероприятиях клуба"],
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/873f6f0cb6f148f887087c9b639febc3ccffc398a05a4890a10ad6296c28184c.jpg&width=2360&height=980&quality=95&mode=resize')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Общайся, заводи друзей и прокачивай разговорный английский
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Lingua Speaking Club PRO</p>

            {/* Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Старт</div>
                    <div className="font-semibold">10 ноября</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Длительность</div>
                    <div className="font-semibold">1 месяц</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Стоимость</div>
                    <div className="font-semibold">4680 ₽</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" onClick={scrollToBooking}>
                Забронировать
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                К расписанию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            <a href="#directions" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Направления клуба
            </a>
            <a href="#how-it-works" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Как это работает
            </a>
            <a href="#who-fits" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Кому подходит
            </a>
            <a href="#benefits" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Что ты получишь
            </a>
            <a href="#schedule" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Расписание
            </a>
            <a href="#pricing" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              Сколько стоит
            </a>
            <a href="#faq" className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              <strong>Lingua Speaking Club PRO</strong> — это не просто разговорный клуб, а комьюнити единомышленников,
              которые хотят прокачать английский. На каждой встрече обсуждаем актуальные темы, шутим, учимся
              сторителлингу, пополняем словарный запас и преодолеваем языковой барьер.
            </p>
            <Badge variant="secondary" className="text-base px-4 py-2">
              Подходит для уровней от A2 и выше
            </Badge>
          </div>
        </div>
      </section>

      {/* Club Directions */}
      <section id="directions" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Какие направления есть в клубе</h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lingua Speaking Club</h3>
              <p className="text-muted-foreground leading-relaxed">
                Прокачай свои разговорные навыки, моделируя ситуации из реальной жизни. Вступай в увлекательные
                обсуждения, говори в удовольствие, участвуй в челленджах и выигрывай призы.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">TOEFL Speaking club</h3>
              <p className="text-muted-foreground leading-relaxed">
                Узнай полезные стратегии, отработай все задания и получи обратную связь от эксперта TOEFL, чтобы
                заработать максимальный балл в устной части экзамена.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Public speaking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Присоединяйся к команде амбассадоров LinguaTrip: придумай свою тему для тематического занятия, делись
                опытом, знакомься с новыми людьми и вступай в жаркие дискуссии. Доступно для активных участников
                разговорного клуба и пользователей продуктов Linguatrip.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" onClick={scrollToBooking}>
              Забронировать участие
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как это работает?</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Vimeo Video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://player.vimeo.com/video/1088227786?h=0&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  Каждый понедельник ты будешь получать на почту актуальное расписание и ссылки на встречи — выбирай
                  любые занятия на свой вкус. Клубная неделя начинается в понедельник. Если ты присоединишься во вторник
                  или позже, первое письмо придёт в следующий понедельник, и ты сможешь посещать столько занятий,
                  сколько захочешь, в течение месяца.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  Каждая встреча посвящена отдельной теме и длится 40-60 минут. Занятия проходят в ZOOM, поэтому тебе
                  понадобится приложение.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  Все подробности о мероприятиях, а также обсуждения будут в Телеграм канале. Там ты сможешь
                  познакомиться с участниками коммьюнити и найти себе buddy.
                </p>
              </div>
            </div>

            <Card className="bg-muted/50 border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Занятия клуба проводятся полностью на английском языке</p>
                    <p className="text-sm text-muted-foreground">
                      *Некоторые встречи будут записаны с вашего согласия.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Fits */}
      <section id="who-fits" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Кому подходит клуб</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">Для уровня А2 и выше</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="leading-relaxed">
                Тем, кто хочет стать частью коммьюнити по интересам и завести новые полезные знакомства
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="leading-relaxed">
                Тем, кто хочет нескучно развивать свой английский и укреплять наработанный разговорный навык
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="leading-relaxed">
                Тем, кто хочет преодолеть языковой барьер, пополнить активный словарный запас и лучше понимать речь на
                слух
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="leading-relaxed">
                Тем, кто хочет внедрить английский в свою жизнь, заниматься в удобное время и поддерживать знания в
                тонусе
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что ты получишь</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-teal-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Коммьюнити по интересам</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Познакомишься с интересными людьми со схожими интересами и сможешь найти новых друзей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Нескучный формат занятий</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Примешь участие в действительно интересных обсуждениях и мероприятиях на любой вкус.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Занятия для любого уровня языка</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Посещай занятия с тем рекомендуемым уровнем, который соответствует твоему.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Разговорный навык</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Преодолеешь языковой барьер, начнешь увереннее говорить и понимать речь на слух.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Активный словарный запас</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Сможешь быстро ориентироваться во время разговора, пополнишь активный словарный запас.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-500 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold">Прокачка произношения</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Улучшишь звучание своего английского так, что окружающие станут хорошо понимать твою речь.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" onClick={scrollToBooking}>
              Забронировать участие
            </Button>
          </div>
        </div>
      </section>

      {/* Ambassador Challenge */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-teal-500 rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Есть идеи, которые ты готов презентовать перед всей группой? Отлично, принимай challenge!
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Стань амбассадором LinguaTrip и проведи одно из занятий как лидер и модератор клуба.
            </p>
            <p className="text-lg leading-relaxed">
              Выбери тему, на которую хочется пообщаться с участниками, и обсуди её в группе. Так ты прокачаешь не
              только speaking, но и навыки презентации.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Расписание</h2>
          <p className="text-center text-muted-foreground mb-12">Timezone: GMT London</p>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-semibold text-muted-foreground">November 10</div>
                    <div className="text-2xl font-bold">Monday</div>
                  </div>
                  <div className="flex-1 border-l-2 border-teal-500 pl-4">
                    <div className="font-semibold text-lg mb-1">17:00 Speedfriending (A2+)</div>
                    <p className="text-muted-foreground">Worldwide networking, finding new friends or study buddies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-semibold text-muted-foreground">November 11</div>
                    <div className="text-2xl font-bold">Tuesday</div>
                  </div>
                  <div className="flex-1 border-l-2 border-blue-500 pl-4">
                    <div className="font-semibold text-lg mb-1">18:00 TOEFL Speaking Club (B1+)</div>
                    <p className="text-muted-foreground">Task 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-semibold text-muted-foreground">November 12</div>
                    <div className="text-2xl font-bold">Wednesday</div>
                  </div>
                  <div className="flex-1 border-l-2 border-teal-500 pl-4">
                    <div className="font-semibold text-lg mb-1">17:00 Speaking club (B1+)</div>
                    <p className="text-muted-foreground">Is remote work the future?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-semibold text-muted-foreground">November 13</div>
                    <div className="text-2xl font-bold">Thursday</div>
                  </div>
                  <div className="flex-1 border-l-2 border-teal-500 pl-4">
                    <div className="font-semibold text-lg mb-1">17:00 Speaking club (A2+)</div>
                    <p className="text-muted-foreground">What does snacktime look like in your country?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-sm font-semibold text-muted-foreground">November 14</div>
                    <div className="text-2xl font-bold">Friday</div>
                  </div>
                  <div className="flex-1 border-l-2 border-teal-500 pl-4">
                    <div className="font-semibold text-lg mb-1">17:00 Speaking club (B1+)</div>
                    <p className="text-muted-foreground">What Would You Ban?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted/30">
        <PricingSection
          tiers={pricingTiers}
          showInstallment={false}
          showUrgency={false}
          onSelectTier={scrollToBooking}
        />
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы</h2>

          {/* YouTube Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.youtube.com/embed/I0o9mTCZsQU"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center font-semibold text-lg">Elena</p>
            </div>

            <div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.youtube.com/embed/z7aiMszbeDM"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center font-semibold text-lg">Andrew</p>
            </div>
          </div>

          {/* Text Reviews Carousel */}
          <div className="max-w-3xl mx-auto relative">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-1">{reviews[currentReview].name}</h3>
                  <Badge variant="secondary">{reviews[currentReview].level}</Badge>
                </div>
                <p className="text-lg leading-relaxed">{reviews[currentReview].text}</p>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevReview} className="rounded-full bg-transparent">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentReview ? "bg-teal-500 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextReview} className="rounded-full bg-transparent">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Что происходит после оплаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  После оплаты вы получите письмо с подтверждением и инструкциями. В понедельник вы получите расписание
                  на неделю и ссылки на встречи.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Где и как будут проводиться занятия?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Все занятия проходят онлайн в ZOOM. Вам понадобится установленное приложение ZOOM и стабильное
                  интернет-соединение.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Сколько длится занятие?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Каждая встреча длится 40-60 минут в зависимости от темы и формата занятия.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Сколько человек в группах?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Количество участников варьируется в зависимости от занятия, но обычно это небольшие группы для
                  комфортного общения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Обязательно быть на всех занятиях?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, вы можете выбирать любые занятия по своему интересу и расписанию. Посещайте столько встреч,
                  сколько хотите в течение месяца.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="mt-8 bg-teal-50 border-teal-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Coordinator</h3>
                <p className="mb-2">
                  Если появились вопросы, напишите координатору:{" "}
                  <a href="mailto:online@linguatrip.com" className="text-teal-600 hover:underline">
                    online@linguatrip.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Координатор отвечает на вопросы в будни с 10 до 19 по Мск. Если написали позже, ответ придёт на
                  следующий день.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Form */}
      <section id="booking-form" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm title="Забронируй участие в Lingua Speaking Club PRO" price="4680 ₽" />
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Linguatrip. Все права защищены.</p>
            <div className="mt-2">
              <Link href="/" className="hover:text-primary">
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
