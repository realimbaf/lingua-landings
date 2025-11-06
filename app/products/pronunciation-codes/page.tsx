"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Users,
  Trophy,
  Target,
  Zap,
  MessageCircle,
  Award,
  BookOpen,
  Video,
  Gift,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function PronunciationCodesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [includeSpeakingClub, setIncludeSpeakingClub] = useState(false)

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Актуальное произношение 2025",
      description:
        "Проработаешь американское произношение и избавишься от акцента так, что тебя будут понимать с полуслова.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Снятие языкового барьера",
      description:
        "Перестанешь бояться общаться на английском языке, сможешь спокойно и уверенно говорить с носителями на равных.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Понимание речи на слух",
      description: "Начнёшь быстро воспринимать беглую американскую речь на слух в разговоре, сериалах или фильмах.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Свободное общение",
      description:
        "Сможешь перестать стесняться говорить на английском и использовать язык в своих целях для работы, учебы и общения.",
    },
  ]

  const targetAudience = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Свободное общение",
      text: "Тем, кто хочет свободно говорить и естественно звучать на английском.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Понимание с первого раза",
      text: "Тем, кто хочет, чтобы носители понимали его с первого раза, не переспрашивая.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Уверенность в общении",
      text: "Тем, кто хочет стать увереннее в общении и преодолеть языковой барьер.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Понимание на слух",
      text: "Тем, кто хочет сразу понимать речь на слух в разговоре, сериалах и кино.",
    },
  ]

  const howItWorks = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Очень много практики",
      description:
        "Практика будет всё время: на уроках, в тестах, в рейтинговых заданиях и еженедельно онлайн с Веней.",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Азарт и мотивация",
      description:
        "За каждое рейтинговое задание и участие в трансляциях ты получаешь баллы от кураторов и продвигаешься по турнирной сетке.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Финальная оценка произношения",
      description:
        "Те, кто пройдут все домашки, получат задание* и бонусные уроки, которые помогут набрать дополнительные баллы для победы.",
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Подарки от LinguaTrip",
      description:
        "Ты сможешь поучаствовать в розыгрыше призов. Чем больше баллов, тем выше рейтинг и шансы на получение подарков!",
    },
  ]

  const programFeatures = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "26 уроков и трансляции",
      description:
        "26 практических уроков, 1 трансляция с Веней в зуме по тому, как звучать естественно. Они будут доступны в любое время и в любом месте. Также у тебя будет доступ к общим трансляциям других марафонов.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Очная практика с Веней каждую неделю",
      description:
        "Для участников тарифов STANDARD и PRO будет дополнительная возможность практиковать произношение с Веней каждую неделю и задавать все интересующие вопросы лично!",
      note: "*для тарифов STANDARD и PRO.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Задания для закрепления и самостоятельной практики",
      description:
        "После каждой темы ты получаешь домашнее задание для тренировки и закрепления произношения. Выполняй его сразу и регулярно, чтобы достичь максимального результата!",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Рейтинговая система",
      description:
        "Чтобы попасть в топ рейтинга и выиграть лучший приз, нужно выполнять в срок все рейтинговые задания, приходить на трансляции и выполнить задание* от Вени в конце курса.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Розыгрыш призов",
      description:
        "Лучшим достанется всё! Они смогут поставить американское произношение, перейти к свободному владению английским и получить крутые призы от команды LinguaTrip.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Пособие по произношению от Вени",
      description:
        "Веня собрал нереально полезное пособие по произношению звуков со схемами и аудио-дорожками для практики и закрепления навыка.",
      note: "* для тарифов STANDARD и PRO.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Живое общение и уютный чат для своих",
      description:
        "Ты сможешь задавать вопросы кураторам и общаться с одногруппниками, а для тарифа PRO будет дополнительный персональный чат с Веней на 4 недели.",
      note: "* для тарифов STANDARD и PRO.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Сертификат и скидки для участников",
      description:
        "Сертификат о прохождении программы можно добавить в резюме и использовать для получения студенческой визы. А скидку 30% — на любой курс от LinguaTrip.",
    },
  ]

  const weekSchedules = [
    {
      week: 1,
      lessons: [
        '1. Introduction to Pronunciation - Что такое "работа над произношением" и как к ней подходить',
        "2. Pronunciation Warmup and Preparation with Dr. Justin Key",
        "3. Introduction to IPA + Syllables & Stresses - Разбираемся в нюансах изучения произношения",
      ],
    },
    {
      week: 2,
      lessons: ["Продолжение работы над звуками", "Практика интонации и ритма", "Работа над связной речью"],
    },
    {
      week: 3,
      lessons: [
        "Углубленная работа над сложными звуками",
        "Практика естественного произношения",
        "Работа над беглостью речи",
      ],
    },
    {
      week: 4,
      lessons: ["Финальная отработка произношения", "Практика в реальных ситуациях", "Итоговое задание и оценка"],
    },
  ]

  const testimonials = [
    {
      name: "Kirill",
      text: "The course is amazing. I loved absolutely everything. This course has helped me a lot even though I had had a good pronunciation before this course, I still decided to buy it. I highly recommend you to buy this course if you don't have a good pronunciation. After this course, you'll have it) The course is incredible🔥🔥🔥❤️❤️❤️",
    },
    {
      name: "Andrew Kononov",
      text: "Hello everyone! I want to thank you for this course! A big thank you to the LinguaTrip team @linguacourse for organizing it, and Venya @venya0pak, thank you personally for your support and valuable feedback! This was a very intensive and rich course, but the foundation has been laid! Now I have the basic technique for all the main sounds, and I just need more practice. I've noticed that I've started speaking more slowly to pronounce all the sounds correctly, but I'm sure that speed will come with time.",
    },
    {
      name: "Igor",
      text: "The course helps me feel more confident about my accent and motivates me to record voice messages on Telegram daily to control the difference in my pronunciation. I have already recommended this course to my friends and colleagues.",
    },
    {
      name: "Анна",
      text: "Храни господь Веню Пака, который понятным языком тащит мой уровень английского вверх и своим вайбом заставляет хотеть быть похожей на него, чтобы так же уверенно владеть английским 🙏🙏 ✨ офигенный мужчина, спасибо, что он есть ✨",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/bed0ae22b5aa4fbeb3d6ebc5e6618a45c9e63b0541fd43b8ac9a714b5bd5afd7.jpg&width=2360&height=980&quality=95&mode=resize')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-teal-500 text-white hover:bg-teal-600">Интенсивная программа с Веней Паком</Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ</h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Американское произношение за четыре недели (на английском с русскими и английскими субтитрами)
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-white/80 mb-1">Старт</div>
                <div className="text-xl font-bold">24 ноября</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-white/80 mb-1">Длительность</div>
                <div className="text-xl font-bold">4 недели</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-white/80 mb-1">Стоимость</div>
                <div className="text-xl font-bold">От 6660 ₽</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={scrollToBooking}>
                Забронировать
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Доступна рассрочка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4 text-sm">
            <button onClick={() => scrollToSection("benefits")} className="hover:text-teal-500 transition-colors">
              Что даст программа
            </button>
            <button onClick={() => scrollToSection("audience")} className="hover:text-teal-500 transition-colors">
              Кому подходит
            </button>
            <button onClick={() => scrollToSection("teacher")} className="hover:text-teal-500 transition-colors">
              О преподавателе
            </button>
            <button onClick={() => scrollToSection("prizes")} className="hover:text-teal-500 transition-colors">
              Призы
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-teal-500 transition-colors">
              Как проходит обучение
            </button>
            <button onClick={() => scrollToSection("schedule")} className="hover:text-teal-500 transition-colors">
              Расписание
            </button>
            <button onClick={() => scrollToSection("reviews")} className="hover:text-teal-500 transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-teal-500 transition-colors">
              Сколько стоит
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-teal-500 transition-colors">
              FAQ
            </button>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Почему произношение так важно?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Произношение — это ключ к свободной речи и пониманию носителей.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Чем чётче и правильнее ты говоришь, тем увереннее становишься, а значит — больше и чаще практикуешься
                  и прокачиваешь все аспекты английского!
                </p>
                <p className="text-lg leading-relaxed font-semibold text-teal-600 dark:text-teal-400">
                  Мы сделали программу в формате челленджа — теперь внутри неё ещё больше практики и возможность
                  выиграть крутые призы от LinguaTrip!
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t1lldWOxbCo?start=1"
                  title="Видео-интро курса"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что даст программа</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-teal-500 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Кому подходит</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-teal-500">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
            <p className="text-lg leading-relaxed text-center">
              <strong>Формат челленджа:</strong> рейтинговый курс, где участники получают баллы за выполненные задания.
              Те, кто выполняют всё, поднимаются в топ, быстро прокачивают произношение и получают подарки.
            </p>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О преподавателе</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://site.linguacdn.download//Images/online/products/teachers/venya/venya-card.webp"
                  alt="Веня Пак"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Веня Пак</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span>Сертифицированный преподаватель из Лос-Анджелеса (TESOL).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span>Живёт и работает в США.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span>Автор собственной системы изучения языка и четырёх учебных пособий.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span>
                      Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку на английском — у него отличный слух и
                      идеальное произношение, что даже носители не могут распознать в нём иностранца.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span>Ведёт свой канал на Youtube, на котором уже 6 лет учит реальному английскому.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Prizes Section */}
      <section id="prizes" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Участвуй в челлендже, прокачивай язык и получай подарки от LinguaTrip
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🥇</div>
              <h3 className="font-bold text-sm mb-1">Консультация с Веней</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🥈</div>
              <h3 className="font-bold text-sm mb-1">3 месяца спикинг клаба</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🥉</div>
              <h3 className="font-bold text-sm mb-1">2 любых практикума на выбор бесплатно</h3>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🎁</div>
              <h3 className="font-bold text-sm mb-1">60% скидка на любую программу с датой старта</h3>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg text-center">
            <p className="text-sm font-semibold">
              Все участники челленджа, которые полностью пройдут программу, гарантированно получат в подарок наше
              пособие!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Как это работает</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-900/20 text-teal-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что будет на программе</h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg bg-background hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="text-teal-500 flex-shrink-0">{feature.icon}</div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-2">{feature.description}</p>
                  {feature.note && <p className="text-sm text-muted-foreground italic">{feature.note}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-600" onClick={scrollToBooking}>
              Забронировать участие
            </Button>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Расписание</h2>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="intro" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="intro">INTRO</TabsTrigger>
                <TabsTrigger value="week1">Неделя #1</TabsTrigger>
                <TabsTrigger value="week2">Неделя #2</TabsTrigger>
                <TabsTrigger value="week3">Неделя #3</TabsTrigger>
                <TabsTrigger value="week4">Неделя #4</TabsTrigger>
              </TabsList>

              <TabsContent value="intro" className="space-y-6">
                <Card className="p-6 bg-teal-50 dark:bg-teal-950/20">
                  <p className="text-sm text-muted-foreground mb-4">
                    Трансляции в ZOOM проходят вечером по мск в 20-21:00. Время онлайн-встреч может быть изменено по
                    техническим причинам или личным причинам преподавателя, а также в связи с изменениями часовых
                    поясов.
                  </p>
                </Card>

                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-2">1. Introduction to Pronunciation</h3>
                      <p className="text-muted-foreground text-sm">
                        Что такое "работа над произношением" и как к ней подходить
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-2">
                        2. Pronunciation Warmup and Preparation with Dr. Justin Key
                      </h3>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-2">3. Introduction to IPA + Syllables & Stresses</h3>
                      <p className="text-muted-foreground text-sm">Разбираемся в нюансах изучения произношения</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="week1" className="space-y-6">
                <Card className="p-6 bg-teal-50 dark:bg-teal-950/20">
                  <p className="text-sm text-muted-foreground">Трансляции в ZOOM проходят вечером по мск в 20-21:00</p>
                </Card>

                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">24 ноября</div>
                      <h3 className="font-bold text-lg mb-2">4. Lesson 1 | Regular T & D</h3>
                      <p className="text-muted-foreground text-sm">
                        Научишься правильной постановке языка и корректному произношению звуков T и D.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">25 ноября</div>
                      <h3 className="font-bold text-lg mb-2">5. Lesson 2 | Different types of T's</h3>
                      <p className="text-muted-foreground text-sm">
                        Полностью освоишь произношение одного из самых сложных звуков в английском — звука T.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">26 ноября</div>
                      <h3 className="font-bold text-lg mb-2">6. Lesson 3 | R & H</h3>
                      <p className="text-muted-foreground text-sm">
                        Сможешь произносить звуки R и H как это делают носители.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">27 ноября</div>
                      <h3 className="font-bold text-lg mb-2">7. Lesson 4 | Unvoiced TH</h3>
                      <p className="text-muted-foreground text-sm">
                        Научишься произносить самый важный звук TH, неправильное произношение которого выдают в тебе
                        иностранца.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">28 ноября</div>
                      <h3 className="font-bold text-lg mb-2">8. Lesson 5 | Voiced TH</h3>
                      <p className="text-muted-foreground text-sm">Начнешь мастерски произносить звонкий звук TH.</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">29 ноября</div>
                      <h3 className="font-bold text-lg mb-2">9. LESSON 6 | V,F,B,P & W</h3>
                      <p className="text-muted-foreground text-sm">Разберешься с этими звуками раз и навсегда.</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-yellow-500 border-4 border-background" />
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg shadow-sm border-2 border-yellow-200 dark:border-yellow-800">
                      <div className="text-xs text-yellow-700 dark:text-yellow-400 font-semibold mb-2">29 ноября</div>
                      <h3 className="font-bold text-lg mb-2">Online practice session with Venya</h3>
                      <p className="text-sm text-muted-foreground italic">Только для тарифов STANDARD и PRO</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="week2" className="space-y-6">
                <Card className="p-6 bg-teal-50 dark:bg-teal-950/20">
                  <p className="text-sm text-muted-foreground">Трансляции в ZOOM проходят вечером по мск в 20-21:00</p>
                </Card>

                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">1 декабря</div>
                      <h3 className="font-bold text-lg mb-2">10. Lesson 7 | N & -ng</h3>
                      <p className="text-muted-foreground text-sm">
                        Окончательно усвоишь, как произносить инговые окончания.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">2 декабря</div>
                      <h3 className="font-bold text-lg mb-2">11. Lesson 8 | MAN vs. MEN: æ & ɛ</h3>
                      <p className="text-muted-foreground text-sm">
                        Разберешься с артикуляцией в английском, которой нет в русском, и начнешь правильно
                        проговаривать звуки æ и ɛ.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">3 декабря</div>
                      <h3 className="font-bold text-lg mb-2">12. LESSON 9 | LIVE vs. LEAVE: I & i</h3>
                      <p className="text-muted-foreground text-sm">
                        Научишься верно доносить свои мысли и не путать похожие по звучанию, но различные по смыслу,
                        слова.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">4 декабря</div>
                      <h3 className="font-bold text-lg mb-2">13. Lesson 10 | The laziest sounds: ʌ & ə</h3>
                      <p className="text-muted-foreground text-sm">
                        Разберёшься с самыми ленивыми звука в английском — ʌ & ə.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">5 декабря</div>
                      <h3 className="font-bold text-lg mb-2">14. Lesson 11 | GOOD vs FOOD: ʊ & u</h3>
                      <p className="text-muted-foreground text-sm">
                        Научишься правильно звучать через практику постановки губ.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">6 декабря</div>
                      <h3 className="font-bold text-lg mb-2">15. LESSON 12 | COLD vs CALLED: oʊ & ɔ</h3>
                      <p className="text-muted-foreground text-sm">
                        Сможешь различать тонкую разницу в произношении так похожих слов.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-yellow-500 border-4 border-background" />
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg shadow-sm border-2 border-yellow-200 dark:border-yellow-800">
                      <div className="text-xs text-yellow-700 dark:text-yellow-400 font-semibold mb-2">6 декабря</div>
                      <h3 className="font-bold text-lg mb-2">Online practice session with Venya</h3>
                      <p className="text-sm text-muted-foreground italic">Только для тарифов STANDARD и PRO</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="week3" className="space-y-6">
                <Card className="p-6 bg-teal-50 dark:bg-teal-950/20">
                  <p className="text-sm text-muted-foreground">Трансляции в ZOOM проходят вечером по мск в 20-21:00</p>
                </Card>

                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">8 декабря</div>
                      <h3 className="font-bold text-lg mb-2">16. LESSON 13 | Sibilants & Clusters</h3>
                      <p className="text-muted-foreground text-sm">
                        Разберешься с шипящими звуками, а еще узнаешь, что такое кластерные звуки.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">9 декабря</div>
                      <h3 className="font-bold text-lg mb-2">17. Lesson 14 | ED & S endings</h3>
                      <p className="text-muted-foreground text-sm">
                        Узнаешь о небольших нюансах и трюках в произношении окончаний ED и S, о которых обязательно
                        нужно помнить.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">10 декабря</div>
                      <h3 className="font-bold text-lg mb-2">18. Lesson 15 | R-controlled vowels</h3>
                      <p className="text-muted-foreground text-sm">
                        Выучишь очень важный набор звуков для американского английского.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">11 декабря</div>
                      <h3 className="font-bold text-lg mb-2">19. Lesson 16 | Review of all contrasting sounds</h3>
                      <p className="text-muted-foreground text-sm">Большой обзор самых сложных звуков.</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">12 декабря</div>
                      <h3 className="font-bold text-lg mb-2">20. Lesson 17 | Sentence stresses (Focus words) #1</h3>
                      <p className="text-muted-foreground text-sm">
                        Тут мы заходим дальше чем "звуки" и учимся говорить более длинные предожения нативно.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">13 декабря</div>
                      <h3 className="font-bold text-lg mb-2">21. Lesson 18 | Sentence stresses (Focus words) #2</h3>
                      <p className="text-muted-foreground text-sm">
                        Освоишь искусство расстановки правильных акцентов, чтобы говорить более естественно и точнее
                        передавать смысловые оттенки.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-yellow-500 border-4 border-background" />
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg shadow-sm border-2 border-yellow-200 dark:border-yellow-800">
                      <div className="text-xs text-yellow-700 dark:text-yellow-400 font-semibold mb-2">13 декабря</div>
                      <h3 className="font-bold text-lg mb-2">Online practice session with Venya</h3>
                      <p className="text-sm text-muted-foreground italic">Только для тарифов STANDARD и PRO</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="week4" className="space-y-6">
                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">15 декабря</div>
                      <h3 className="font-bold text-lg mb-2">
                        22. LESSON 19 | Intonation & Pitch + How to apply Intonations and Stresses in a real dialogue
                        (Practice)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Интонация: вниз или вверх? + Практическая сессия, чтобы попробовать это все применить в реальной
                        жизни
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">16 декабря</div>
                      <h3 className="font-bold text-lg mb-2">
                        23. Lesson 20 | How to connect things to make your sentence flow #1 (Linking)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Узнаешь все трюки и лайфхаки, чтобы говорить более свободно, плавно и естественно.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">17 декабря</div>
                      <h3 className="font-bold text-lg mb-2">
                        24. Lesson 21 | How to connect things to make your sentence flow #2 (Reductions)
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Узнаешь все трюки и лайфхаки, чтобы говорить более свободно, плавно и естественно.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">18 декабря</div>
                      <h3 className="font-bold text-lg mb-2">25. Lesson 22 | One vowel & Two vowel rule</h3>
                      <p className="text-muted-foreground text-sm">
                        Полезный бонус, который поможет вам справляться с произношением незнакомых слов.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-teal-500 border-4 border-background" />
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold mb-2">19 декабря</div>
                      <h3 className="font-bold text-lg mb-2">26. Lesson 23 | How to awaken your confidence</h3>
                      <p className="text-muted-foreground text-sm">
                        Что делать и говорить, когда в разговоре ты чувствуешь себя очень неуверенно.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-yellow-500 border-4 border-background" />
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg shadow-sm border-2 border-yellow-200 dark:border-yellow-800">
                      <div className="text-xs text-yellow-700 dark:text-yellow-400 font-semibold mb-2">20 декабря</div>
                      <h3 className="font-bold text-lg mb-2">Final meeting with Venya and winner announcements</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы</h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VotLhHRu_2M"
                title="Видео-отзыв"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <div className="text-center">
                  <p className="text-lg leading-relaxed mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                  <p className="font-bold text-teal-600 dark:text-teal-400">{testimonials[currentTestimonial].name}</p>
                </div>
              </Card>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background border-2 shadow-lg hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background border-2 shadow-lg hover:bg-muted transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-teal-500 w-8" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Сколько стоит</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6">
                Выберите подходящий тариф
              </p>

              {/* Speaking Club Toggle */}
              <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg border-2 border-yellow-200 dark:border-yellow-800 mb-10">
                <input
                  type="checkbox"
                  id="speaking-club"
                  checked={includeSpeakingClub}
                  onChange={(e) => setIncludeSpeakingClub(e.target.checked)}
                  className="w-5 h-5 text-teal-500 rounded focus:ring-2 focus:ring-teal-500"
                />
                <label htmlFor="speaking-club" className="cursor-pointer flex-1">
                  <span className="font-bold text-lg">🎁 Добавить Lingua Speaking Club</span>
                  <span className="block text-sm text-muted-foreground">
                    Для лучшей прокачки разговорного навыка (+4680 ₽)
                  </span>
                </label>
                <a
                  href="/products/speaking-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 dark:text-teal-400 hover:underline font-medium whitespace-nowrap"
                >
                  Узнать больше →
                </a>
              </div>

              {/* Installment Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border-2 border-emerald-500/30 rounded-2xl px-8 py-4 shadow-lg">
                <div className="text-3xl">💳</div>
                <div className="text-left">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 text-lg">Рассрочка 0%</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-500">Без переплат и скрытых комиссий</p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  name: "BASIC",
                  subtitle: "Базовый",
                  price: includeSpeakingClub ? "13500" : "8820",
                  originalPrice: includeSpeakingClub ? "17280" : "12600",
                  features: [
                    "Доступ на 3 месяца",
                    "26 уроков в записи",
                    "Задания к каждому уроку",
                    "Участие на 2 месяца в эфирах Вопрос-ответ",
                    "Скидка на любой курс",
                    "Сертификат",
                    ...(includeSpeakingClub ? ["✨ 1 месяц Lingua Speaking Club"] : []),
                  ],
                  spots: null,
                  popular: false,
                },
                {
                  name: "STANDARD",
                  subtitle: "Стандарт",
                  price: includeSpeakingClub ? "17460" : "12780",
                  originalPrice: includeSpeakingClub ? "22937" : "18257",
                  features: [
                    "Все что в тарифе BASIC",
                    "Проверка домашних заданий",
                    "Закрытый чат с кураторами",
                    "Участие в челлендже от LinguaTrip",
                    "Обновлённое пособие по произношению",
                    "3 трансляции с Веней для практики",
                    ...(includeSpeakingClub ? ["✨ 1 месяц Lingua Speaking Club"] : []),
                  ],
                  spots: 19,
                  popular: true,
                },
                {
                  name: "PRO",
                  subtitle: "Профессионал",
                  price: includeSpeakingClub ? "24390" : "19710",
                  originalPrice: includeSpeakingClub ? "32837" : "28157",
                  features: [
                    "Все что в тарифе STANDARD",
                    "Персональный чат с Веней на 4 недели для личной проверки",
                    "Эксклюзивные обучающие материалы",
                    ...(includeSpeakingClub ? ["✨ 1 месяц Lingua Speaking Club"] : []),
                  ],
                  spots: 8,
                  popular: false,
                },
              ].map((tier, index) => (
                <Card
                  key={index}
                  className={
                    tier.popular
                      ? "relative border-primary border-2 shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-accent/5"
                      : "relative hover:shadow-lg transition-shadow"
                  }
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-bold shadow-lg">
                        <Sparkles className="w-4 h-4 mr-1 inline" />
                        Лучший выбор
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 md:p-10">
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                        {tier.subtitle}
                      </p>
                    </div>
                    <div className="text-center mb-8 pb-8 border-b">
                      <div className="flex items-baseline justify-center gap-2 mb-3">
                        <span className="text-5xl font-bold">{tier.price.split(" ")[0]}</span>
                        <span className="text-2xl text-muted-foreground">{tier.price.split(" ")[1]}</span>
                      </div>
                      {tier.spots !== null && (
                        <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-1.5">
                          <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                            Осталось {tier.spots} мест
                          </span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={
                        tier.popular
                          ? "w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-12 font-semibold shadow-lg"
                          : "w-full text-lg h-12 font-semibold"
                      }
                      size="lg"
                      variant={tier.popular ? "default" : "outline"}
                      onClick={scrollToBooking}
                    >
                      {tier.popular ? "Забронировать сейчас" : "Выбрать тариф"}
                    </Button>
                    {tier.popular && (
                      <p className="text-center text-xs text-muted-foreground mt-3">
                        🔥 Самый популярный выбор среди студентов
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Более 50,000 студентов уже выбрали Linguatrip</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Возврат до старта курса</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Сертификат по окончании</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm
            title="Забронируй участие в программе «ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ»"
            price="6660 ₽"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Написано, что уроки в записи. Когда старт?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Старт программы 24 ноября. Все уроки будут доступны в записи, что позволяет проходить их в удобное для
                  вас время.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Когда будут онлайн-трансляции и как на них попасть?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Онлайн-трансляции проходят еженедельно в 20-21:00 по московскому времени. Ссылки на трансляции будут
                  отправлены участникам на почту.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какой уровень нужен для прохождения программы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Программа подходит для студентов с любым уровнем английского, кто хочет улучшить своё произношение.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Я проходил интенсив «Говорим по-американски» с Веней Паком, мне будет полезно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! Эта программа включает новые материалы и более глубокую проработку произношения с дополнительной
                  практикой.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Похоже, тариф PRO самый крутой. Что в нём такого?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Тариф PRO включает персональный чат с Веней на 4 недели для личной проверки произношения и
                  эксклюзивные обучающие материалы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Хочу скидку 30% на другие курсы от LinguaTrip. Как получить?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Скидка 30% предоставляется всем участникам программы после её завершения. Промокод будет отправлен на
                  вашу почту.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Хочу вернуть деньги за программу. Получится?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, возврат возможен до старта курса в полном объёме. После начала занятий условия возврата меняются.
                  Подробности можно узнать у координатора на почте online@linguatrip.com.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="mt-8 p-6 bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800">
              <h3 className="font-bold text-lg mb-2">Coordinator</h3>
              <p className="text-muted-foreground mb-2">Если появились вопросы, напиши нам на online@linguatrip.com.</p>
              <p className="text-sm text-muted-foreground">
                Координатор отвечает на вопросы в будни с 10 до 19 по Мск. Если написали позже, ответ придёт на
                следующий день.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LinguaTrip. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
