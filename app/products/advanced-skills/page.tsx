"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Users,
  Trophy,
  Gift,
  Zap,
  BookOpen,
  Video,
  MessageCircle,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { PricingSection } from "@/components/pricing-section"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdvancedSkillsPage() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null)
  const [activePronunciationWeek, setActivePronunciationWeek] = useState<number | null>(null)

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    {
      title: "Убираем пробелы в знаниях",
      description:
        "Закроешь все пробелы, которые остались ещё со школьного английского, перестанешь путаться и допускать ошибки.",
      icon: "🎯",
    },
    {
      title: "Доводим грамматику до автоматизма",
      description:
        "На актуальных примерах разберёшься со сложными конструкциями раз и навсегда, и сможешь уверенно писать и говорить на английском.",
      icon: "⚡",
    },
    {
      title: "Расширяем словарный запас",
      description:
        "Научишься быстро учить и запоминать новые слова, освоишь всю лексику, необходимую для общения на продвинутом уровне.",
      icon: "📚",
    },
    {
      title: "Прокачиваем «разговорный» навык",
      description: "Преодолеешь языковой барьер, сможешь комфортно говорить и понимать английскую речь на слух.",
      icon: "💬",
    },
  ]

  const prizes = [
    { title: "Консультация с Веней", icon: "🎁", place: "1 место" },
    { title: "3 месяца Speaking Club", icon: "🗣️", place: "2 место" },
    { title: "Два любых практикума на выбор бесплатно", icon: "📖", place: "3 место" },
    { title: "60% скидка на любую программу с датой старта", icon: "🎉", place: "4-5 место" },
  ]

  const targetAudience = [
    "Тем, кто уже давно знает английский на среднем уровне, но хочет начать говорить быстро и без запинок",
    "Тем, кто никак не может перейти на уровень выше и преодолеть языковое «плато»",
    "Школьникам и студентам для закрепления пройденного материала и подготовки к экзаменам",
    "Сотрудникам международных компаний и тем, кто хочет свободно общаться на английском",
  ]

  const howItWorks = [
    {
      title: "Командная работа",
      description:
        "Разделим участников на команды, подберём тебе пару с учётом возраста, интересов и уровня английского.",
      icon: Users,
    },
    {
      title: "Рейтинговая система",
      description:
        "Специальные домашние задания проверяются кураторами и оцениваются. Баллы добавляются команде и суммируются за все домашки.",
      icon: Trophy,
    },
    {
      title: "Подарки от LinguaTrip",
      description:
        "Каждая команда будет участвовать в розыгрыше призов. Чем больше баллов, тем выше рейтинг и шансы на получение призов!",
      icon: Gift,
    },
    {
      title: "Азарт и мотивация",
      description:
        "Не сделал домашку в паре — значит, подвёл команду, а если подвёл команду — упустил заветные баллы и шанс на победу.",
      icon: Zap,
    },
  ]

  const teachers = [
    {
      name: "Марина Могилко",
      image: "https://site.linguacdn.download//Images/online/products/teachers/marina/marina-card.webp",
      description: [
        "Сооснователь LinguaTrip.",
        "Живет в Калифорнии и ведет три канала на YouTube с более чем 11 миллионами подписчиков.",
        "Марина сдала языковые тесты на высокие баллы: 117 из 120 по TOEFL и 700 из 800 по GMAT.",
        "Была принята в 5 американских университетов на программы MBA и магистратуры.",
      ],
    },
    {
      name: "Веня Пак",
      image: "https://site.linguacdn.download//Images/online/products/teachers/venya/venya-card.webp",
      description: [
        "Сертифицированный преподаватель из Лос-Анджелеса (TESOL).",
        "Живёт и работает в США.",
        "Автор собственной системы изучения языка и четырёх учебных пособий.",
        "Окончил музыкальный колледж в Лос-Анджелесе, пишет музыку на английском языке — у него отличный слух и идеальное произношение.",
        "Ведёт свой канал на Youtube, на котором уже более шести лет учит реальному английскому.",
      ],
    },
    {
      name: "Энджела Пироцци",
      image: "https://site.linguacdn.download//Images/online/products/teachers/angela/angela-card.webp",
      description: [
        "Носитель языка, родилась в США",
        "Преподает английский язык как иностранный с 2013 года.",
        "Получила степень магистра преподавания английского языка как иностранного в Университете de Oviedo (Испания)",
      ],
    },
  ]

  const programFeatures = [
    {
      title: "40 уроков и трансляции",
      description:
        "Уроки открываются каждый день, записи доступны в любое время и любом месте. Дополнительно групповые трансляции с Веней для ответов на вопросы и общения.",
      icon: Video,
    },
    {
      title: "Конспекты к урокам и памятки",
      description:
        "После курса у тебя останутся памятки с материалами, чтобы ты смог вернуться к пройденному и освежить знания в любой момент.",
      icon: BookOpen,
    },
    {
      title: "Разговорные клубы с носителем из США",
      description: "Для того, чтобы победить языковой барьер — 1 раз в неделю в течение всех 7 недели.",
      icon: MessageCircle,
      note: "*Только для тарифов STANDARD и PRO.",
    },
    {
      title: "Сертификат и скидка",
      description:
        "Все участники, успешно сдавшие тест в конце курса, получат сертификат, который можно добавить в резюме и использовать для получения студенческой визы.",
      icon: Award,
    },
    {
      title: "Живые уроки с Веней Паком",
      description:
        "Для супер прокачки твоего английского. Ты попадёшь в Inner Circle — мини-группу участников, где будет максимум практики.",
      icon: Users,
      note: "*Только для тарифа PRO.",
    },
    {
      title: "Уютный чат для своих",
      description:
        "Для тех, кому нужны советы, будет чат в Telegram. В нем можно задать вопросы куратору и пообщаться с одногруппниками.",
      icon: MessageCircle,
      note: "*Только для тарифов STANDARD и PRO.",
    },
  ]

  const pronunciationBenefits = [
    {
      title: "Актуальное произношение 2025",
      description:
        "Проработаешь американское произношение и избавишься от акцента так, что тебя будут понимать с полуслова.",
      icon: "🎤",
    },
    {
      title: "Снятие языкового барьера",
      description:
        "Перестанешь бояться общаться на английском языке, сможешь спокойно и уверенно говорить с носителями на равных.",
      icon: "🚀",
    },
    {
      title: "Понимание речи на слух",
      description: "Начнёшь быстро воспринимать беглую американскую речь на слух в разговоре, сериалах или фильмах.",
      icon: "👂",
    },
    {
      title: "Свободное общение",
      description:
        "Сможешь перестать стесняться говорить на английском и использовать язык в своих целях для работы, учебы и общения.",
      icon: "💪",
    },
  ]

  const weekSchedule = [
    {
      week: 1,
      startDate: "14 ноября",
      lessons: [
        { date: "14 ноября", title: "ИНТРО", description: "" },
        { date: "14 ноября", title: "Вводная трансляция", description: "" },
        {
          date: "15 ноября",
          title: "День 1 | Present Simple & Present Continuous",
          description:
            "Перестанешь путаться в выборе нужного времени для описания настоящего и доведёшь это до автоматизма",
        },
        {
          date: "16 ноября",
          title: "День 2 | Subject + verb agreement",
          description: "Сможешь на автомате выбирать верную форму глагола для любого подлежащего",
        },
        {
          date: "17 ноября",
          title: "День 3 | Appearance + character vocab",
          description: "Выучишь и потренируешь новую лексику о внешнем виде",
        },
        {
          date: "19 ноября",
          title: "День 4 | Relative clauses",
          description:
            "Научишься различать типы придаточных предложений, а также правильно расставлять знаки препинания",
        },
        {
          date: "21 ноября",
          title: "День 5 | Countable + uncountable nouns",
          description: "Будешь отличать исчисляемые и неисчисляемые существительные",
        },
      ],
    },
  ]

  const pronunciationSchedule = [
    {
      week: "INTRO",
      lessons: [
        {
          title: "1. Introduction to Pronunciation",
          description: 'Что такое "работа над произношением" и как к ней подходить',
        },
        { title: "2. Pronunciation Warmup and Preparation with Dr. Justin Key", description: "" },
        {
          title: "3. Introduction to IPA + Syllables & Stresses",
          description: "Разбираемся в нюансах изучения произношения",
        },
      ],
    },
  ]

  const pricingTiers = [
    {
      name: "BASIC",
      price: "12960 ₽",
      originalPrice: "17640 ₽",
      duration: "Доступ на 3 месяца",
      features: [
        "Модуль предобучения с уроками для подготовки к программе",
        "Тестирование уровня до и после",
        "40 уроков в записи",
        "Конспекты лекций",
        "Задания к каждому уроку",
        "Участие на 2 месяца в эфирах Вопрос-ответ",
        "Сертификат",
        "Заморозка доступа на 2 недели",
        "Участие в челлендже «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ» (тариф BASIC)",
      ],
      spots: null,
      popular: false,
    },
    {
      name: "STANDARD",
      price: "21960 ₽",
      originalPrice: "26280 ₽",
      duration: "Все что в тарифе BASIC",
      features: [
        "Групповой закрытый чат, который курирует Веня Пак",
        "Проверка домашних заданий",
        "Разговорный клуб 1 раз в неделю с носителем языка",
        "Дополнительные памятки и полезные материалы",
        "Участие в челлендже и возможность выиграть призы от LinguaTrip",
        "Дополнительные задания с твоим buddy",
        "Участие в челлендже «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ» (тариф STANDARD)",
        "Обновлённый учебник по произношению",
      ],
      spots: 5,
      popular: true,
    },
    {
      name: "PRO",
      price: "31410 ₽",
      originalPrice: "39420 ₽",
      duration: "Все что в тарифе STANDARD",
      features: [
        "7 Zoom-уроков с Веней Паком в мини-группе: дополнительные темы и больше практики",
        "Личный чат с Веней Паком на время курса для отслеживания прогресса",
        "Участие в челлендже «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ» (тариф PRO)",
        "Обновлённый учебник по произношению",
      ],
      spots: 5,
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Написано, что лекции в записи. Когда старт?",
      answer:
        "Старт программы 14 ноября. Лекции будут открываться каждый день по расписанию, но вы сможете смотреть их в любое удобное время.",
    },
    {
      question: "Когда будут онлайн-трансляции и как на них попасть?",
      answer:
        "Онлайн-трансляции проходят по расписанию. Ссылки на трансляции будут отправлены на вашу почту и доступны в личном кабинете.",
    },
    {
      question: "Где брать записи и как долго можно ими пользоваться?",
      answer: "Все записи доступны в личном кабинете. Доступ к материалам зависит от выбранного тарифа (от 3 месяцев).",
    },
    {
      question: "А что делать с домашкой?",
      answer:
        "Домашние задания доступны после каждого урока. Для тарифов STANDARD и PRO предусмотрена проверка домашних заданий кураторами.",
    },
    {
      question: "Хочу выиграть призы! Какие условия?",
      answer:
        "Для участия в розыгрыше призов нужно выбрать тариф STANDARD или PRO, выполнять все домашние задания и набирать баллы в рейтинге.",
    },
    {
      question: "Как воспользоваться заморозкой доступа к программе?",
      answer: "Напишите на почту online@linguatrip.com с просьбой заморозить доступ. Заморозка доступна на 2 недели.",
    },
    {
      question: "Какой уровень нужен для прохождения программы?",
      answer:
        "Программа рассчитана на уровень Intermediate (B1) и выше. Если вы не уверены в своем уровне, напишите нам для консультации.",
    },
    {
      question: "Сколько длится занятие?",
      answer: "Длительность видео-уроков варьируется от 15 до 40 минут. Вы можете смотреть их в удобном темпе.",
    },
    {
      question: "Написано, что у меня будут конспекты лекций. Где их найти?",
      answer:
        "Конспекты доступны в личном кабинете после каждого урока. Вы можете скачать их и использовать для повторения материала.",
    },
    {
      question: "Хочу скидку 30% на практикум. Как получить?",
      answer: "Скидка 30% предоставляется всем участникам, успешно завершившим программу и сдавшим финальный тест.",
    },
    {
      question: "Хочу вернуть деньги за программу. Получится?",
      answer:
        "Да, возврат возможен до старта программы. После начала занятий условия возврата меняются. Подробности можно узнать на почте online@linguatrip.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/ed0baf36e4c4417cb2dff84af947e153e8d160281e9c46a99be2c346bbcc01f4.jpg&width=2360&height=980&quality=95&mode=resize)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-white/30">
              Онлайн образование · Курс для среднего уровня
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2 шага до Advanced: скиллы и произношение
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Английский до уровня Advanced и идеальное произношение — всё в одной программе
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white/70 text-sm mb-1">Старт</div>
                <div className="text-white font-semibold text-lg">14 ноября</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white/70 text-sm mb-1">Стоимость</div>
                <div className="text-white font-semibold text-lg">От ₽12960</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={scrollToBooking}>
                Забронировать
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => scrollToSection("benefits")}
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-6 text-sm">
            <button
              onClick={() => scrollToSection("benefits")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Что даст программа
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("audience")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Кому подходит
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Как проходит обучение
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              О преподавателях
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Расписание
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              Сколько стоит
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="whitespace-nowrap hover:text-teal-500 transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Интенсивная прокачка всех навыков</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground">
              Отзывы студентов будут добавлены после запуска программы
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Rewards Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Участвуй в челлендже, прокачивай язык и получай подарки от LinguaTrip
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {prizes.map((prize, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{prize.icon}</div>
                <Badge className="mb-2 bg-teal-500 text-white">{prize.place}</Badge>
                <h3 className="font-semibold">{prize.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4 max-w-3xl mx-auto">
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <p className="text-center">
                Команды, занявшие с 6 по 10 место, получат скидку 50$ на любые курсы от LinguaTrip.
              </p>
            </Card>
            <Card className="p-6 bg-blue-50 border-blue-200">
              <p className="text-center">
                Все участники челленджа, которые полностью пройдут курс, гарантированно получат в подарок один из наших
                учебников!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Кому подходит программа</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg">
                <Check className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <Card className="mt-12 p-8 max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
            <p className="text-lg mb-4">
              <strong>Программа в формате челленджа</strong> — это программа с рейтингом, в котором все участники
              делятся на команды по два человека. Те, кто выполняют все задания, поднимаются в топ, быстро прокачивают
              английский и получают подарки. Программа длится 7 недель — без перерывов и отсрочек.
            </p>
            <p className="text-lg">
              <strong>Главная фишка</strong> — система индивидуальных и парных домашек, которая поможет без стресса
              заговорить и превратить английский в навык.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как это работает</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-12 p-8 max-w-4xl mx-auto bg-amber-50 border-amber-200">
            <p className="text-center text-lg">
              Главная цель этой программы — получить новые знания, повысить твой уровень и преодолеть языковой барьер.
              Да, программа проходит в формате челленджа (в тарифах STANDARD и PRO), но призы — это приятный бонус.
              Пожалуйста, помни, что они не должны быть основной мотивацией для участия в программе.
            </p>
          </Card>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ведущие курса</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="p-6">
                <img
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-center mb-4">{teacher.name}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {teacher.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <p className="text-center text-lg">
              Каждый участник программы сможет участвовать в индивидуальном челлендже. Выполняй задания, улучшай
              прогресс и выигрывай индивидуальную консультацию с Веней Паком!
            </p>
          </Card>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что будет в программе</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{feature.description}</p>
                {feature.note && <p className="text-xs text-muted-foreground italic">{feature.note}</p>}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={scrollToBooking}>
              Забронировать участие
            </Button>
          </div>
        </div>
      </section>

      {/* Pronunciation Course Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/80 backdrop-blur-sm">
              <p className="text-lg mb-8">
                Для того, чтобы дойти до заветного уровня Advanced, недостаточно просто знать грамматику и правописание.
                В программу включён курс-челлендж <strong>«ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ»</strong>, который поможет улучшить
                произношение, избавиться от языкового барьера, акцента и заговорить на английском уверенно.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {pronunciationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Расписание "От Intermediate до Advanced"</h2>
          <p className="text-center text-muted-foreground mb-12">Предобучение доступно сразу после оплаты курса</p>

          <div className="max-w-4xl mx-auto space-y-4">
            {weekSchedule.map((week) => (
              <Card key={week.week} className="overflow-hidden">
                <button
                  onClick={() => setActiveWeek(activeWeek === week.week ? null : week.week)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Badge className="bg-teal-500 text-white">Неделя #{week.week}</Badge>
                    <span className="font-semibold">{week.startDate}</span>
                  </div>
                  {activeWeek === week.week ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {activeWeek === week.week && (
                  <div className="p-6 pt-0 space-y-4 border-t">
                    {week.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="text-sm text-muted-foreground whitespace-nowrap">{lesson.date}</div>
                        <div>
                          <div className="font-medium">{lesson.title}</div>
                          {lesson.description && (
                            <div className="text-sm text-muted-foreground mt-1">{lesson.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}

            <Card className="p-6 text-center bg-muted/30">
              <p className="text-muted-foreground">Следующие недели...</p>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <p className="text-center mb-8">
                У тебя есть возможность выбрать дату старта обучения «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ» в течение 6 месяцев с даты
                покупки программы. Для выбора удобной даты из предложенных напиши нам на почту online@linguatrip.com
                после оплаты.
              </p>

              <h3 className="text-2xl font-bold text-center mb-6">Программа «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ»</h3>

              <div className="space-y-4">
                {pronunciationSchedule.map((week, index) => (
                  <Card key={index} className="overflow-hidden bg-white">
                    <button
                      onClick={() => setActivePronunciationWeek(activePronunciationWeek === index ? null : index)}
                      className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <Badge className="bg-indigo-500 text-white">{week.week}</Badge>
                      {activePronunciationWeek === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {activePronunciationWeek === index && (
                      <div className="p-6 pt-0 space-y-4 border-t">
                        {week.lessons.map((lesson, idx) => (
                          <div key={idx}>
                            <div className="font-medium">{lesson.title}</div>
                            {lesson.description && (
                              <div className="text-sm text-muted-foreground mt-1">{lesson.description}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}

                <Card className="p-6 text-center bg-muted/30">
                  <p className="text-muted-foreground">Следующие недели...</p>
                </Card>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Трансляции в ZOOM проходят вечером по мск в 20-21:00
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={scrollToBooking}>
              Забронировать участие
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <PricingSection
            //@ts-ignore
            tiers={pricingTiers}
            title="Сколько стоит"
            subtitle="Доступна рассрочка 0%! Для оформления нужно выбрать тариф, заполнить форму и перейти к выбору варианта оплаты"
            showUrgency={true}
          />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
              <h3 className="font-semibold mb-2">Coordinator</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Если появились вопросы, напиши нам на online@linguatrip.com.
              </p>
              <p className="text-xs text-muted-foreground">
                Координатор отвечает на вопросы в будни с 10 до 19 по Мск. Если написали позже, ответ придёт на
                следующий день.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BookingForm
            title="Забронируй участие в «2 шага до Advanced: скиллы и произношение»"
            price="12960 ₽"
              //@ts-ignore
            startDate="14 ноября"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© 2025 LinguaTrip. Все права защищены.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-teal-500 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
