"use client"
import { HeroHeader } from "@/components/hero-header"
import { LearningJourneyMinimal } from "@/components/learning-journey-minimal"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import {
  Target,
  FileText,
  BookOpen,
  TrendingUp,
  MessageCircle,
  ClipboardCheck,
  Video,
  Users,
  BarChart,
  Award,
  CheckCircle,
  Calendar,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function LanguageCoachPage() {

  const menuItems = [
    { label: "Как это работает?", id: "how-it-works" },
    { label: "Чем хороша программа?", id: "benefits" },
    { label: "Сколько стоит?", id: "pricing" },
    { label: "Ответы на вопросы", id: "faq" },
  ]

  const howItWorksSteps = [
    {
      icon: Target,
      title: "Определим твой уровень владения языком и цели обучения",
      description:
        "Выполнишь тест, пообщаешься с коучем по скайпу и расскажешь, зачем тебе нужен английский и чего ты хочешь добиться.",
    },
    {
      icon: FileText,
      title: "Составим персональный план обучения",
      description:
        "Учтём твои слабые места и поставленные цели — ты будешь точно знать, какие уроки смотреть и над какими темами работать в течение месяца.",
    },
    {
      icon: BookOpen,
      title: "Дадим доступ ко всем нашим интенсивам и марафонам",
      description:
        "Грамматика, произношение, подготовка к экзаменам, поступление в зарубежные вузы — наш коуч подскажет, какие именно курсы нужны тебе в зависимости от твоих целей, уровня владения языком и количества времени для занятий.",
    },
    {
      icon: TrendingUp,
      title: "Поможем отслеживать прогресс",
      description:
        "Каждую неделю ты будешь выполнять тест и обсуждать результаты недели с нашим коучем. Ты сможешь задать свои вопросы, получить фидбек по домашним заданиям и лучше понять пройденный материал.",
    },
    {
      icon: MessageCircle,
      title: "Поддержим в любое время",
      description:
        "Ты получишь доступ к чату с коучем на всё время подписки. Здесь можно быстро получить ответы на свои вопросы и отправить домашние работы на проверку.",
    },
    {
      icon: ClipboardCheck,
      title: "Дадим персональные дополнительные задания, если это необходимо",
      description:
        "Если какие-то темы ты так и не понял, коуч подготовит дополнительные упражнения и тесты специально для тебя. Это как личный преподаватель, только дешевле и удобнее.",
    },
  ]

  const benefits = [
    {
      icon: Video,
      title: "Все интенсивы и трансляции",
      description:
        "Доступ ко всем интенсивам и марафонам LinguaTrip.com, а также всем эфирам наших преподавателей. Так ты сможешь сэкономить более 100 000 рублей!",
    },
    {
      icon: Users,
      title: "Живое общение",
      description:
        "Коуч всегда на связи в рабочее время. В чате с коучем можно задать любые вопросы и быстро получить чёткий и подробный ответ.",
    },
    {
      icon: BarChart,
      title: "Видимый прогресс",
      description:
        "Раз в неделю ты будешь получать развёрнутый фидбек от коуча, а также дополнительные задания, если ты отстаёшь от плана или не до конца понял какие-то вещи.",
    },
    {
      icon: Award,
      title: "Достижение личных целей",
      description:
        "Мы дадим вам доступ к более чем 150 урокам на самые разные темы от основ грамматики до поступления в зарубежные вузы.",
    },
    {
      icon: CheckCircle,
      title: "Проверка домашки",
      description:
        "Ты будешь выполнять ежедневные домашние задания к урокам и еженедельные контрольные тесты. Коуч проверит их и поможет понять и исправить ошибки.",
    },
    {
      icon: Calendar,
      title: "Индивидуальный план обучения",
      description: "В начале месяца — чёткий план с целями, в конце — оценка пройденного материала.",
    },
  ]

  const pricingTiers = [
    {
      name: "Основной тариф",
      price: "26910 ₽",
      spots: 2,
      features: [
        "Оценка твоего уровня владения языком",
        "Разработка индивидуального плана занятий",
        "Доступ ко всем интенсивам на 1 месяц (программу выстраивает коуч)",
        "Доступ ко всем онлайн-трансляциям на месяц",
        "Доступ к чату с коучем на месяц",
        "Еженедельные консультации с коучем и детальный фидбек",
        "Дополнительные задания и тесты при необходимости",
      ],
    },
    {
      name: "Расширенный тариф",
      price: "31410 ₽",
      spots: 1,
      popular: true,
      features: [
        "Оценка твоего уровня владения языком",
        "Разработка индивидуального плана занятий",
        "Доступ ко всем интенсивам на 1 месяц (программу выстраивает коуч)",
        "Доступ ко всем онлайн-трансляциям на месяц",
        "Доступ к чату с коучем на месяц",
        "Еженедельные консультации с коучем и детальный фидбек",
        "Дополнительные задания и тесты при необходимости",
        "Разговорная практика раз в неделю: 20 минут на тренировку + 10 минут на фидбек и вопросы",
      ],
    },
  ]

  const faqs = [
    {
      question: "Я оплатил, когда старт?",
      answer:
        "После оплаты мы свяжемся с тобой в течение 24 часов для назначения первой консультации с коучем. Обучение начинается сразу после первой встречи.",
    },
    {
      question: "Как мы будем общаться с коучем?",
      answer:
        "Общение с коучем происходит через чат (Telegram или WhatsApp на твой выбор) и еженедельные видеозвонки по Skype или Zoom.",
    },
    {
      question: "Где брать записи уроков?",
      answer:
        "После оплаты ты получишь доступ к личному кабинету на платформе LinguaTrip, где будут доступны все интенсивы и марафоны.",
    },
    {
      question: "А что делать с домашкой?",
      answer:
        "Домашние задания отправляй коучу в чат. Он проверит их и даст подробный фидбек с объяснением ошибок и рекомендациями.",
    },
    {
      question: "Я готовлюсь к TOEFL и IELTS. Коуч мне поможет?",
      answer:
        "Да, конечно! У нас есть специальные интенсивы по подготовке к TOEFL и IELTS. Коуч включит их в твой индивидуальный план обучения.",
    },
    {
      question: "Что значит, что доступ ко всем интенсивам на 1 месяц?",
      answer:
        "Это значит, что в течение месяца ты можешь смотреть любые интенсивы и марафоны из нашей библиотеки (более 150 уроков). Коуч подберёт те, которые нужны именно тебе.",
    },
    {
      question: "Хочу вернуть деньги, получится?",
      answer:
        "Да, если ты не удовлетворён программой в первые 7 дней, мы вернём деньги без вопросов. Просто напиши нам на online@linguatrip.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <HeroHeader
        badge="Языковой коуч"
        title="Языковой коуч"
        subtitle="Самый эффективный способ прокачать английский"
        description="Индивидуальный план учёбы, регулярный фидбек и доступ ко всем нашим интенсивам"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/30774ce2dfb341ef8b504b86b748290a5db6be54897f4d8f9fd0db2f2d213cab.jpg&width=1180&height=490&quality=80&mode=resize"
        stats={[
          { label: "Стоимость", value: "26910 ₽" },
          { label: "Доступ", value: "1 месяц" },
          { label: "Уроков", value: "150+" },
        ]}
        ctaButtons={[
          {
            label: "Забронировать участие",
            onClick: () => {
              document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
            },
            variant: "primary",
          },
          {
            label: "Подробнее",
            onClick: () => {
              document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
            },
            variant: "secondary",
          },
        ]}
      />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            {menuItems.map((item) => (
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

      {/* Team Quote Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-lg border-teal-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                «Привет, мы — команда опытных преподавателей английского с дипломами профессиональных лингвистов и
                международными сертификатами. Поможем тебе выстроить индивидуальную схему обучения, подберём курсы с
                учётом твоего уровня языка и будем постоянно поддерживать тебя в процессе».
              </blockquote>
              <p className="text-teal-600 font-semibold">Команда LinguaTrip</p>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <div id="how-it-works">
        <LearningJourneyMinimal title="Как это работает?" steps={howItWorksSteps} accentColor="teal" />
      </div>

      {/* Benefits */}
      <div id="benefits">
        <BenefitsSection
          title="Чем хороша эта программа?"
          benefits={benefits}
          accentColor="teal"
          backgroundColor="white"
        />
      </div>
      {/* Pricing */}
      <div id="pricing">
        <PricingSection
          title="Сколько стоит?"
          tiers={pricingTiers}
          showInstallment={false}
          showUrgency={false}
        />
      </div>
      
      {/* Contact Section */}
      <ContactSection
        title="Остались вопросы?"
        description="Оставь заявку и получи подробную консультацию по подбору обучения с учётом твоих целей и свободного времени"
      />

      {/* Booking Form */}
      <section id="booking-form" className="py-16 md:py-24 bg-slate-50">
        <BookingForm
          title="Забронировать участие"
        />
      </section>

           {/* FAQ */}
      <FAQSection id="faq" title="Частые вопросы" faqs={faqs} accentColor="teal" />

      {/* Footer */}
      <Footer />
    </div>
  )
}
