"use client"

import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { ContactSection } from "@/components/contact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LearningJourneyMinimal } from "@/components/learning-journey-minimal"
import { TeachersSection } from "@/components/teachers-section"
import { PricingSection } from "@/components/pricing-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { HeroHeader } from "@/components/hero-header"
import { Check, Target, Lightbulb, Ear, BookOpen, MessageSquare, Zap } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function IntermediateShortcutPage() {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  // Benefits data for "Что будет на мастер-классе?"
  const benefits = [
    {
      icon: Target,
      title: "Получишь инструменты",
      description: "которые помогут тебе быстрее и эффективнее выйти на средний уровень английского.",
    },
    {
      icon: Lightbulb,
      title: "Определишь свои зоны роста",
      description: "где чаще всего ошибаешься, какие темы проседают и что нужно подтянуть.",
    },
    {
      icon: Ear,
      title: "Начнешь лучше понимать беглую речь",
      description: "носителей — и в жизни, и в фильмах, и в песнях.",
    },
    {
      icon: BookOpen,
      title: "Разберешься, как расширить словарный запас",
      description: "так, чтобы слова больше никогда не забывались.",
    },
  ]

  // Teacher data
  const teacher = [
    {
      name: "Веня Пак",
      image: "https://site.linguacdn.download//Images/online/products/teachers/venya/venya-card.webp",
      bio: [
        "Сертифицированный преподаватель крупнейшей международной ассоциации TESOL.",
        "Автор четырёх учебных пособий и собственной системы изучения языка, которая была разработана и усовершенствована во время самообучения.",
        "Ведущий образовательного и развлекательного канала на YouTube (750к), который вот уже 6 лет помогает зрителям понимать и осваивать современный английский.",
        "Живёт и работает в солнечной Калифорнии уже 10 лет.",
        "Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку и тексты на английском.",
        "Отличный слух и идеальное произношение — главные инструменты, благодаря которым носители не могут распознать в нём иностранца.",
      ],
    },
  ]

  // Program steps for LearningJourneyMinimal
  const programSteps = [
    {
      icon: Check,
      title: "Исправляем частые грамматические ошибки",
      description: "Разберем типичные ошибки и научимся их избегать в речи и письме.",
    },
    {
      icon: Target,
      title: "Структура предложения в английском языке",
      description: "Поймем, как правильно строить предложения для естественной речи.",
    },
    {
      icon: MessageSquare,
      title: "Частые ошибки в произношении",
      description: "Узнаем, какие звуки чаще всего произносятся неправильно и как это исправить.",
    },
    {
      icon: Lightbulb,
      title: "Методы самокоррекции",
      description: "Научимся самостоятельно находить и исправлять свои ошибки.",
    },
    {
      icon: Ear,
      title: "Как понимать быструю речь носителей языка",
      description: "Разберем техники восприятия беглой речи в реальных ситуациях.",
    },
    {
      icon: BookOpen,
      title: "Словарный запас",
      description: "Эффективные методы запоминания новых слов и выражений.",
    },
    {
      icon: Zap,
      title: "Как сделать речь плавной и естественной",
      description: "Практические советы для улучшения беглости и естественности речи.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Елизавета Черепанова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=75&height=75&quality=80&mode=resize",
      text: 'Веня очень хороший учитель. Он всегда улыбается и часто шутит. А когда настроение приподнято, заниматься гораздо легче. Веня при объяснении материала обычно приводит такие яркие, даже я бы сказала "кричащие", примеры, которые хорошо застревают в памяти. Потом они легко вспоминаются. Еще мне понравилось, что Веня общается со всеми, как с давно знакомыми друзьями. Обстановка очень комфортная. Вот бы вживую пообщаться! На моем счету пока только один интенсив - по грамматике. Он достаточно краткий, но ёмкий. Совсем новичкам будет, наверное, сложновато. А те, кто знает грамматику, все равно почерпнут что-то интересное. Не обязательно связанное с правилами языка) Здесь в первую очередь важно, что присутствует прямая связь с преподавателем - жителем США, который погружен в ту среду, и практически любую ситуацию из жизни там может обрисовать. Повторить и закрепить многие штуки было очень полезно. Всем, кто не решался, советую посетить хотя бы один интенсив, чтобы увидеть, как организован процесс. Ну и посмотреть на Вениамина в деле. Он крутой.',
      verified: true,
    },
    {
      name: "Алина Розова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Мой первый интенсив с Веней оставил самые положительные эмоции! Все очень доступно и понятно. Знания, которые когда-то были заложены в мою голову дополнились и систематизировались) И что, на мой взгляд, немаловажно - интенсив проходит легко и весело, в отличие от занятий с репетитором когда-то в школе) в общем, могу сказать, что это не последний мой интенсив, а Веня очень талантливый преподаватель, все здорово, так держать!)",
      verified: true,
    },
    {
      name: "Елизавета Коробейникова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Интенсивы это то, что серьезно помогает мне в изучении английского. Прежде всего хотелось бы сказать огромное спасибо LinguaTrip за организацию всего и Вене за прекрасную подачу знаний. Мне всё очень нравится, занятия проходят информативно и интересно. Домашние задания помогают закрепить информацию, очень нравятся тесты и устные задания. Всем очень рекомендую записаться хотя бы на один интенсив, и вы сами всё поймёте. Лично для меня это далеко не последний интенсив, ибо пока что это самый лучший способ изучать английский.",
      verified: true,
    },
    {
      name: "Валентин Алиферов",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/07b022fe71114c888632423cb56da149f09e9bed24f041e6ae18a8f929b6ce40.jfif&width=75&height=75&quality=80&mode=resize",
      text: 'Уроки интенсива с Веней запомнились мне тем, что я получал только актуальную "живую" информацию по теме, все объяснялось на примерах из реальной жизни, простым языком и с юмором :) Кроме того, порадовала техническая и организационная сторона: вебинары, чаты, напоминания - все четко, современно и со вкусом )) Жду следующих интенсивов!',
      verified: true,
    },
  ]

  // Pricing data
  const pricingTiers = [
    {
      name: "Мастер-класс",
      subtitle: "SHORTCUT К INTERMEDIATE",
      price: "2250 ₽",
      spots: null,
      features: [
        "Запись мастер-класса с Веней Паком",
        "Доступ к материалам навсегда",
        "Практические упражнения",
        "Полезные рекомендации по самостоятельному изучению",
        "Бонусные материалы",
      ],
      popular: true,
    },
  ]

  const targetAudiences = [
    "Для тех, кто хочет сразу учить язык правильно и запоминать надолго.",
    "Для тех, кто стремится говорить на английском более плавно и понятно.",
    "Для тех, кто ищет проверенные лайфхаки по произношению и расширению словарного запаса.",
    "Для тех, кто готовится к экзаменам, планирует работу в международной компании или переезд.",
  ]

  const faqs = [
    {
      question: "Когда можно начать обучение?",
      answer: "Мастер-класс доступен в записи, вы можете начать сразу после оплаты.",
    },
    {
      question: "Для какого уровня подходит мастер-класс?",
      answer:
        "Мастер-класс подходит для студентов уровня Pre-Intermediate и Intermediate, которые хотят улучшить свои навыки.",
    },
    {
      question: "Можно ли вернуть деньги после оплаты?",
      answer: "Да. Условия возврата можно узнать у нас на почте online@linguatrip.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader
        title="SHORTCUT К INTERMEDIATE"
        subtitle="Экспресс переход на уровень Intermediate с Веней Паком"
        badge="Мастер-класс с Веней Паком"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/c067045f8077431bb8c6c672588b2e4cd1e17d5a87fd4115b6c7ff86026a1648.jpg&width=2360&height=980&quality=95&mode=resize"
        stats={[{ label: "Стоимость", value: "2250 ₽" }]}
        ctaButtons={[
          { label: "Забронировать", onClick: scrollToBooking, variant: "primary" },
          {
            label: "Подробнее",
            onClick: () => document.getElementById("what-included")?.scrollIntoView({ behavior: "smooth" }),
            variant: "secondary",
          },
        ]}
        accentColor="teal"
      />

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            {[
              { label: "Что будет на мастер-классе?", id: "what-included" },
              { label: "О преподавателе", id: "teacher" },
              { label: "Кому подходит?", id: "audience" },
              { label: "Программа", id: "program" },
              { label: "Отзывы", id: "reviews" },
              { label: "Сколько стоит?", id: "pricing" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm whitespace-nowrap hover:text-teal-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* What's Included Section - Using BenefitsSection */}
      <div id="what-included">
        <BenefitsSection
          title="Что будет на мастер-классе?"
          benefits={benefits}
          backgroundColor="white"
          accentColor="teal"
        />
      </div>

      {/* Teacher Section - Using TeachersSection */}
      <TeachersSection
        id="teacher"
        title="О преподавателе"
        teachers={teacher}
        backgroundColor="slate"
        accentColor="teal"
      />

      <TargetAudienceSection
        id="audience"
        title="Кому подходит мастер-класс?"
        audiences={targetAudiences}
        accentColor="teal"
        backgroundColor="white"
      />

      {/* Program Section - Using LearningJourneyMinimal */}
      <div id="program" className="bg-slate-50">
        <LearningJourneyMinimal
          title="Программа мастер-класса"
          steps={programSteps}
          accentColor="teal"
          ctaButton={
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-200 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div className="flex-1">
                  <div className="text-sm text-yellow-700 mb-1 font-semibold">Бонус</div>
                  <h3 className="text-lg font-semibold">Полезные рекомендации по самостоятельному изучению языка</h3>
                </div>
              </div>
            </div>
          }
        />
      </div>

      {/* Reviews Section - Using TestimonialsSection */}
      <div id="reviews">
        <TestimonialsSection testimonials={testimonials} backgroundColor="white" />
      </div>

      {/* Pricing Section - Using PricingSection */}
      <div id="pricing" className="bg-slate-50">
        <PricingSection
          title="Сколько стоит?"
          subtitle="Получите доступ к мастер-классу навсегда"
          tiers={pricingTiers}
          showInstallment={true}
          showUrgency={false}
          onSelectTier={scrollToBooking}
        />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Form */}
      <section id="booking-form" className="py-16 md:py-24 bg-slate-50">
        <BookingForm
          title="Забронируй участие в мастер-классе"
          price="2250 ₽"
          description="Мастер-класс Shortcut к Intermediate"
        />
      </section>

      {/* FAQ Section */}
      <FAQSection id="faq" title="Часто задаваемые вопросы" faqs={faqs} accentColor="teal" backgroundColor="white" />

      {/* Footer */}
      <Footer />
    </div>
  )
}
