"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LearningJourneyMinimal } from "@/components/learning-journey-minimal"
import { TeachersSection } from "@/components/teachers-section"
import {
  Check,
  BookOpen,
  Target,
  MessageCircle,
  Users,
  Video,
  FileText,
  CheckCircle,
  Gift,
  MessageSquare,
  Laptop,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react"
import { PricingSection } from "@/components/pricing-section"

export default function VocabularySupersets() {
  const [activeReview, setActiveReview] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const benefits = [
    {
      icon: BookOpen,
      title: "Лексика для реальной жизни",
      description:
        "Быстро пополнишь словарный запас самой актуальной лексикой из арсенала носителей для всех сфер общения: от рабочей до посиделок в баре.",
    },
    {
      icon: Target,
      title: "Активная практика для закрепления",
      description:
        "На примерах из жизни отточишь контекст и уместность употребления конкретных слов, выражений и их альтернатив.",
    },
    {
      icon: MessageCircle,
      title: "Точность в выражении мыслей",
      description:
        "Сможешь сделать свою речь более разнообразной, добавляя речевые оттенки, и перестанешь всё время говорить одними и теми же словами.",
    },
    {
      icon: Users,
      title: "Комфортное общение",
      description:
        "Сможешь говорить с носителями на современном английском, лучше понимать речь на слух, смотреть фильмы без субтитров и слушать контент в оригинале.",
    },
  ]

  const teachers = [
    {
      name: "Марина Могилко",
      image:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/m-marina.jpg&width=152&height=152&quality=80&mode=resize",
      bio: [
        "Живет и работает в США",
        "Поступила в 5 американских вузов на MBA и магистратуру",
        "Сдала TOEFL — на 117 из 120 и GMAT — на 700 из 800",
        "Ведет 3 YouTube-канала c 7+ млн. подписчиков",
        "Курсы и книги Марины прошли более 10 000 человек",
      ],
    },
    {
      name: "Веня Пак",
      image:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/m-venya.png&width=152&height=152&quality=80&mode=resize",
      bio: [
        "Сертифицированный преподаватель из Лос-Анджелеса (TESOL)",
        "Автор собственной системы изучения языка и трёх учебных пособий",
        "Окончил музыкальный вуз в Лос-Анджелесе",
        "Ведёт свой канал на Youtube уже 6 лет",
      ],
    },
    {
      name: "Анастасия Ивбуле",
      image:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/5d210c36ebfc45e9ac85b4ac697481f043f5dd60a8ca4fefa2a545508399001a.png&width=152&height=152&quality=80&mode=resize",
      bio: [
        "Преподаёт английский больше десяти лет",
        "Окончила Бостонский университет по специальности «лингвистика»",
        "Сдала TOEFL на 119 из 120 и IELTS — на 9 из 9",
        "Говорит на пяти языках",
      ],
    },
  ]

  const howItWorks = [
    {
      icon: Video,
      title: "Уроки и трансляции",
      description:
        "Видеоуроки доступны в любое время и в любом месте. Также раз в месяц ты получаешь доступ к закрытым онлайн-трансляциям с преподавателями.",
    },
    {
      icon: FileText,
      title: "Полезные памятки",
      description: "Получишь суперполезные памятки по темам практикума — они помогут лучше запоминать материал.",
    },
    {
      icon: CheckCircle,
      title: "Тесты нон-стоп",
      description: "Нескучные задания даются после каждого урока, а ещё финальные тесты для закрепления материала.",
    },
    {
      icon: Gift,
      title: "Сертификат и скидка",
      description: "Участники получат сертификат о прохождении курса и скидку 30% на любой другой курс от LinguaTrip.",
    },
    {
      icon: MessageSquare,
      title: "Живое общение",
      description: "Для тех, кому нужны советы, будет чат в Telegram. Там можно пообщаться с другими студентами.",
    },
    {
      icon: Laptop,
      title: "Личный кабинет",
      description: "Все материалы и задания собраны в личном кабинете, который доступен с любого гаджета.",
    },
  ]

  const targetAudience = [
    "Тем, кто хочет пополнить словарный запас актуальной лексикой для продвинутого общения",
    "Тем, кто хочет систематизировать свои знания и готов посвятить этому время",
    "Тем, кто хочет чётко выражать свою точку зрения и не пасовать при общении с нейтивами",
  ]

  const stats = [
    { number: "75", label: "Уроков в записи + 3 общих трансляции", icon: Video },
    { number: "67", label: "Тестов для закрепления материала", icon: CheckCircle },
    { number: "14", label: "Квизов для проверки прогресса", icon: Award },
    { number: "8", label: "Дополнительных памяток + трекер полезных привычек", icon: FileText },
  ]

  const pricingTiers = [
    {
      name: "Basic",
      price: "6750 ₽",
      originalPrice: "15750 ₽",
      spots: null,
      features: [
        "Практикум по лексике, первый уровень",
        "Практикум по лексике, второй уровень",
        "Доступ к платформе на 3 месяца",
        "Разговорный клуб на месяц",
        "Групповой чат с куратором",
        "Сертификат",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "7650 ₽",
      originalPrice: "18720 ₽",
      spots: null,
      features: [
        "Всё, что в тарифе Basic",
        "Практикум по фразовым глаголам",
        "Практикум с нестандартной и нецензурной лексикой",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "9720 ₽",
      originalPrice: "21690 ₽",
      spots: null,
      features: ["Всё, что в тарифе Standard", "Практикум по разговорному английскому"],
      popular: false,
    },
  ]

  const reviews = [
    {
      name: "Елизавета Черепанова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=150&height=150&quality=80&mode=resize",
      text: 'Веня очень хороший учитель. Он всегда улыбается и часто шутит. А когда настроение приподнято, заниматься гораздо легче. Веня при объяснении материала обычно приводит такие яркие, даже я бы сказала "кричащие", примеры, которые хорошо застревают в памяти.',
      verified: true,
    },
    {
      name: "Алина Розова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=150&height=150&quality=80&mode=resize",
      text: "Мой первый интенсив с Веней оставил самые положительные эмоции! Все очень доступно и понятно. Знания, которые когда-то были заложены в мою голову дополнились и систематизировались)",
      verified: true,
    },
    {
      name: "Елизавета Коробейникова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=150&height=150&quality=80&mode=resize",
      text: "Интенсивы это то, что серьезно помогает мне в изучении английского. Прежде всего хотелось бы сказать огромное спасибо LinguaTrip за организацию всего и Вене за прекрасную подачу знаний.",
      verified: true,
    },
    {
      name: "Валентин Алиферов",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/07b022fe71114c888632423cb56da149f09e9bed24f041e6ae18a8f929b6ce40.jfif&width=150&height=150&quality=80&mode=resize",
      text: 'Уроки интенсива с Веней запомнились мне тем, что я получал только актуальную "живую" информацию по теме, все объяснялось на примерах из реальной жизни, простым языком и с юмором :)',
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/0b47ef1aeec74975bd179b9cfd9420cb51a1a56e87204cda90d984d1bb4ae5f7.jpg&width=2360&height=980&quality=95&mode=resize"
          alt="Vocabulary Supersets"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="text-sm font-medium mb-4">Онлайн-обучение · Интенсивы</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Суперсеты практикумов LinguaTrip</h1>
          <p className="text-xl md:text-2xl mb-2 text-balance">Самая нужная лексика английского языка</p>
          <p className="text-lg md:text-xl mb-8 text-balance opacity-90">
            Продвинутый словарный запас для переезда, работы и общения
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-sm opacity-80">Старт</div>
              <div className="font-semibold">В любой день</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-sm opacity-80">Всего уроков</div>
              <div className="font-semibold">до 75</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-sm opacity-80">Стоимость</div>
              <div className="font-semibold">От 6750 ₽</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => scrollToSection("booking")}
            >
              Забронировать участие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30 border-white text-white"
              onClick={() => scrollToSection("benefits")}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Что даст практикум
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Кто ведет практикум
            </button>
            <button
              onClick={() => scrollToSection("audience")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Кому подходит
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Как проходит обучение
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Сеты в цифрах
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Сколько стоит
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              Отзывы
            </button>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Почему словарный запас так важен?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Сколько новых слов ты учишь в неделю в учебниках и приложениях? И сколько из них ты реально
                  используешь?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Мы собрали всю нужную «живую» лексику в один словарный практикум, чтобы ты смог общаться с носителями
                  на любые темы на работе и в жизни.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 border-teal-200 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Актуальная лексика</h3>
                      <p className="text-sm text-gray-600">
                        Только те слова и выражения, которые реально используют носители в повседневной жизни
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-teal-200 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Практическое применение</h3>
                      <p className="text-sm text-gray-600">
                        От обсуждения финансовой сводки с коллегами до рассказа о неудачном свидании друзьям
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection benefits={benefits} />

      {/* Teachers Section */}
      <TeachersSection
        id="teachers"
        title="Кто ведет практикум"
        subtitle="Наши преподаватели живут и работают в США. Они каждый день общаются с носителями на бытовые и рабочие темы и точно знают, какой словарный запас нужен для комфортного общения с друзьями и коллегами."
        teachers={teachers}
        backgroundColor="slate"
        ctaButton={
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => scrollToSection("booking")}
          >
            Зарегистрироваться
          </Button>
        }
      />

      {/* How It Works Section */}
      <LearningJourneyMinimal
        title="Как проходит обучение"
        subtitle="Твой путь к свободному владению английским — шаг за шагом"
        steps={howItWorks}
        ctaButton={
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => scrollToSection("booking")}
          >
            Забронировать участие
          </Button>
        }
      />

      {/* Target Audience Section */}
      <section id="audience" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Кому подходит</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Этот практикум создан для тех, кто хочет вывести свой английский на новый уровень
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {targetAudience.map((item, index) => (
              <Card
                key={index}
                className="p-8 border-slate-200 bg-white hover:shadow-lg hover:border-teal-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-teal-500" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-8 md:p-10 max-w-4xl mx-auto border-teal-200 bg-gradient-to-br from-teal-50 to-white shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Рекомендация от LinguaTrip</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Если собираешься в путешествие или в языковую школу за рубеж и хочешь максимально эффективно прокачать
                  свой словарный запас, мы рекомендуем тариф <span className="font-bold text-teal-600">Standard</span>.
                  По цене двух курсов с доступом Basic ты получишь три практикума с доступом Standard с самой
                  современной английской лексикой, включая коварные фразовые глаголы. А ещё восемь дополнительных
                  памяток по темам, которых нет в практикумах, 14 квизов и целых 67 тестов, чтобы отработать весь
                  материал на практике.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Сеты в цифрах</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Полный набор материалов для эффективного изучения английского
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden border-slate-200 bg-white hover:shadow-xl hover:border-teal-300 transition-all duration-300 group"
                >
                  <div className="relative p-8">
                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <div className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">{stat.number}</div>
                    <p className="text-gray-600 leading-relaxed">{stat.label}</p>
                  </div>
                  {/* Subtle accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

   {/* Pricing Section */}
      <PricingSection
      
        title="Сколько стоит"
        subtitle="Выберите подходящий тариф для изучения английского"
        tiers={pricingTiers}
        showInstallment={true}
        showUrgency={true}
        onSelectTier={() => scrollToSection("booking")}
      />

      {/* Contact Section */}
      <ContactSection />

      <TestimonialsSection testimonials={reviews} backgroundColor="slate" />

      {/* Booking Form */}
      <section id="booking-form" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
