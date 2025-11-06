"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, CheckCircle2, Award, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { PricingSection } from "@/components/pricing-section"

export default function ZeroToBasicPage() {
  const [currentReview, setCurrentReview] = useState(0)
  const [activeTab, setActiveTab] = useState<"grammar" | "vocabulary" | "speaking">("grammar")

  const testimonials = [
    {
      name: "Мария Петрова",
      text: "Отличный курс для начинающих! Все объясняется очень понятно, и уже через месяц я начала говорить простыми фразами. Анастасия - замечательный преподаватель!",
      rating: 5,
    },
    {
      name: "Алексей Иванов",
      text: "Программа действительно работает. Мне понравилась система с баллами и призами - это мотивирует не бросать. Рекомендую всем, кто хочет начать с нуля.",
      rating: 5,
    },
    {
      name: "Екатерина Смирнова",
      text: "Я учила английский в школе, но все забыла. Этот курс помог мне восстановить базу и двигаться дальше. Очень довольна результатом!",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      text: "Удобная платформа, интересные задания и поддержка кураторов. За 3 месяца я прошел путь от нуля до уверенного базового уровня.",
      rating: 5,
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const pricingTiers = [
    {
      name: "Basic",
      subtitle: "1 МОДУЛЬ ОБУЧЕНИЯ",
      price: "6840 ₽",
      spots: 30,
      features: [
        "Доступ на 35 дней",
        "2-3 видео-урока в неделю",
        "Групповые занятия с преподавателем раз в неделю",
        "Домашние задания на платформе с автопроверкой и ответами от кураторов",
        "Библиотека знаний с дополнительными материалами и заданиями",
        "Тестирование и трекинг прогресса с разборами",
        "Чат для вопросов к кураторам",
        "Участие в челлендже и возможность выиграть призы",
      ],
    },
    {
      name: "Standard",
      subtitle: "3 МОДУЛЯ ОБУЧЕНИЯ",
      price: "16740 ₽",
      spots: 20,
      popular: true,
      features: [
        "Доступ на 4 месяца",
        "2-3 видео-урока в неделю",
        "Групповые занятия с преподавателем раз в неделю",
        "Домашние задания на платформе с автопроверкой и ответами от кураторов",
        "Библиотека знаний с дополнительными материалами и заданиями",
        "Тестирование и трекинг прогресса с разборами",
        "Чат для вопросов к кураторам",
        "Участие в челлендже и возможность выиграть призы",
      ],
    },
  ]

  const faqItems = [
    {
      question: "Когда можно начать обучение?",
      answer: "Дата старта занятий — 27 октября.",
    },
    {
      question: "Для какого уровня подходит обучение?",
      answer: "Обучение подходит для студентов, которые хотят начать учить английский с нуля или заново.",
    },
    {
      question: "Можно ли вернуть деньги после оплаты?",
      answer:
        "Да. До старта курса можно вернуть полную стоимость. В день старта курса или после начала занятий условия возврата меняются. Их можно узнать у нас на почте online@linguatrip.com.",
    },
    {
      question: "Можно ли продлить обучение?",
      answer: "Конечно, как и в любой школе, ты можешь продолжить обучение, совершенствуя язык.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/bffe5ba83cbd467e9e2d8c4d3b8084cdae21189f345c4c109cc3732c65e835e2.png&width=2360&height=980&quality=95&mode=resize"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-teal-500 text-white hover:bg-teal-600 border-0">
              Челлендж с Анастасией Ивбуле
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">С нуля до базового уровня</h1>
            <p className="text-lg md:text-xl mb-8 text-pretty">
              Английский с нуля и сразу «правильно», чтобы собрать уверенную базу и начать говорить
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Старт</span>
                </div>
                <p className="text-2xl font-bold">24 ноября</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Количество мест</span>
                </div>
                <p className="text-2xl font-bold">55</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Стоимость</span>
                </div>
                <p className="text-2xl font-bold">от 6840 ₽</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-500 text-white hover:bg-teal-600 text-lg px-10 py-6 h-auto font-semibold"
                onClick={() => scrollToSection("booking")}
              >
                Забронировать
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 text-lg px-10 py-6 h-auto bg-white/10"
                onClick={() => scrollToSection("program")}
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 text-sm">
            {[
              { label: "Почему мы", id: "benefits" },
              { label: "О преподавателе", id: "teacher" },
              { label: "Кому подойдёт", id: "audience" },
              { label: "Как проходит обучение", id: "process" },
              { label: "Программа", id: "program" },
              { label: "Отзывы", id: "reviews" },
              { label: "Сколько стоит", id: "pricing" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap px-4 py-2 rounded-full hover:bg-accent/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="benefits" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Что делает нас особенными</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Программа построена так, чтобы ты собрал уверенную базу и начал говорить на английском
            </p>

            {/* Why Effective Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Равномерная нагрузка</h3>
                  <p className="text-muted-foreground">
                    Программа построена так, что на обучение нужно выделять всего 20-30 минут в день. В приоритете
                    регулярность и отсутствие желания бросить.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Учим говорить сразу</h3>
                  <p className="text-muted-foreground">
                    Уделяем большое внимание практике и говорению. Учим сразу использовать язык, даже на самом старте,
                    что сильно поможет в будущем.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">База знаний по английскому</h3>
                  <p className="text-muted-foreground">
                    В доступе видео-материалы, памятки, словари и интерактивные задания, чтобы легко освоить новую или
                    вернуться к пройденной теме.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Мотивация, чтобы уже выучить английский</h3>
                  <p className="text-muted-foreground">
                    Учись и получай подарки от LinguaTrip — учебник "English as a lifestyle", скидку 60% на любой
                    продукт Linguatrip, консультацию с Анастасией Ивбуле.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" onClick={() => scrollToSection("booking")}>
                Забронировать участие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Кто преподает</h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://site.linguacdn.download//Images/online/products/teachers/nastya/nastya-card.webp"
                      alt="Анастасия Ивбуле"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Анастасия Ивбуле</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Преподаватель-практик.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Сдала международные экзамены TOEFL на 119 из 120 и IELTS на 9 из 9.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Более десяти лет преподаёт английский и готовит студентов к экзаменам.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Окончила Бостонский университет по специальности «Лингвистика».</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          Говорит на пяти языках: русском, английском, испанском, французском и итальянском. А сейчас
                          учит иврит и турецкий.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                  <h4 className="text-lg font-semibold mb-4">Что вы получите на курсе:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Практика, задания с проверкой по всем темам для уверенной базы
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Чёткая система обучения, чтобы быстро освоить базу и двигаться вперёд
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Поддержка мотивации и прогресса на время всего обучения
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Этот программа для тех, кто</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl">👋</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Только начинает учить английский</h3>
                  <p className="text-muted-foreground">
                    Вы никогда не изучали английский или изучали очень давно и хотите начать с правильной базы
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Учил язык так давно, что уже полностью забыл</h3>
                  <p className="text-muted-foreground">
                    Вы изучали английский в школе или университете, но все забыли и хотите восстановить знания
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-lg">
                Челлендж создан специально для тех, кто только начинает учить язык. Программа построена так, чтобы потом
                не пришлось переучивать или начинать всё заново. На челлендже ты соберёшь уверенную базу, с которой
                можно повышать уровень.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works and Rewards Combined */}
      <section id="process" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Как проходит обучение на программе</h2>
              <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Учись в удобном темпе, получай поддержку и зарабатывай баллы за выполнение заданий
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Изучай материалы</h3>
                    <p className="text-muted-foreground">
                      Получаешь план обучения, смотришь уроки в записи на платформе и выполняешь задания
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Практикуй разговорный</h3>
                    <p className="text-muted-foreground">
                      Каждые 2 недели участвуешь в групповой практике по пройденным темам в формате разговорного клуба
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Получай обратную связь</h3>
                    <p className="text-muted-foreground">
                      Выполняешь задания и получаешь обратную связь по всем вопросам от кураторов
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Отслеживай прогресс</h3>
                    <p className="text-muted-foreground">
                      В конце месяца подводишь итоги и оцениваешь прогресс, закрепляешь полученные знания за месяц
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Учёба с тебя, награда — с нас!</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  За каждое выполненное вовремя задание и пройденный урок ты получаешь баллы. Победители получают призы
                  от LinguaTrip!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4">
                  <div className="text-6xl mb-3">🥇</div>
                  <h3 className="text-lg font-bold mb-2">Первое место</h3>
                  <p className="text-sm text-muted-foreground">Консультация с Настей Ивбуле по результатам курса</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-6xl mb-3">🥈</div>
                  <h3 className="text-lg font-bold mb-2">Второе место</h3>
                  <p className="text-sm text-muted-foreground">Скидка 60% на любой продукт Linguatrip</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-6xl mb-3">🥉</div>
                  <h3 className="text-lg font-bold mb-2">Третье место</h3>
                  <p className="text-sm text-muted-foreground">Учебник "English as a lifestyle"</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" onClick={() => scrollToSection("booking")}>
                  Забронировать участие
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Программа</h2>
            <p className="text-center text-muted-foreground mb-12">
              Программа рассчитана на 3 модуля. Вы можете приобрести полноценное обучение сразу, либо изучить 1 модуль и
              принять решение о продолжении занятий потом.
            </p>

            {/* Tabs Navigation */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              <Button
                variant={activeTab === "grammar" ? "default" : "outline"}
                onClick={() => setActiveTab("grammar")}
                className="px-6"
              >
                📝 Грамматика
              </Button>
              <Button
                variant={activeTab === "vocabulary" ? "default" : "outline"}
                onClick={() => setActiveTab("vocabulary")}
                className="px-6"
              >
                📚 Лексика
              </Button>
              <Button
                variant={activeTab === "speaking" ? "default" : "outline"}
                onClick={() => setActiveTab("speaking")}
                className="px-6"
              >
                💬 Разговорный навык
              </Button>
            </div>

            <Card>
              <CardContent className="p-8">
                {activeTab === "grammar" && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Грамматика</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Множественное число",
                        "Глагол to be в настоящем времени",
                        "Сокращения глагола to be",
                        "Личные местоимения и притяжательные прилагательные",
                        "Артикли и предлоги места",
                        "Применение слов this / that / here / there",
                        "Времена Present Simple и Past Simple",
                        "Adverbs of frequency",
                        "Конструкции There is / There are",
                      ].map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "vocabulary" && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Лексика</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {["Изучение и использование цифр", "Изучение и использование алфавита", "Типы вопросов"].map(
                        (topic, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm">{topic}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "speaking" && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Разговорный навык</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Как прочитать информацию про школу или университет на английском",
                        "Чтение несложных текстов",
                      ].map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section id="reviews" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы студентов</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="border-2">
                <CardContent className="p-8 md:p-12">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-center mb-6 text-muted-foreground italic">
                    "{testimonials[currentReview].text}"
                  </p>
                  <p className="text-center font-semibold text-lg">{testimonials[currentReview].name}</p>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevReview}
                  className="rounded-full w-12 h-12 bg-transparent"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview ? "bg-primary w-8" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextReview}
                  className="rounded-full w-12 h-12 bg-transparent"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted/30">
        <PricingSection tiers={pricingTiers} showInstallment={true} onSelectTier={() => scrollToSection("booking")} />
      </section>

      {/* Contact Section */}
      <ContactSection
        showConsultation={true}
        showTelegram={true}
        showWhatsApp={true}
        onConsultationClick={() => scrollToSection("booking")}
      />

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm
            title="Забронировать участие"
            price="От 6840 ₽"
            description="Забронируй участие в челлендже «С нуля до базового уровня»!"
            steps={[
              "Регистрируешься на челлендж",
              "Оплачиваешь указанную стоимость",
              "Получаешь доступ к программе на почту",
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Частые вопросы</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Остались вопросы?</h3>
                <p className="text-muted-foreground text-sm">
                  Если появились вопросы, напишите координатору{" "}
                  <a href="mailto:online@linguatrip.com" className="text-primary hover:underline font-medium">
                    online@linguatrip.com
                  </a>
                  .
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Он отвечает на письма в будни с 10 до 19 по Мск. Если написали позже, ответ придет на следующий день.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
