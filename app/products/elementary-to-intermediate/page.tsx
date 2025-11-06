"use client"

import { HeroHeader } from "@/components/hero-header"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { TeachersSection } from "@/components/teachers-section"
import { LearningJourneyMinimal } from "@/components/learning-journey-minimal"
import { ScheduleTab, ScheduleTabs } from "@/components/schedule-tabs"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Video, PenTool, Trophy, Award, MessageCircle, Gift, BookOpen, Users, Target, Zap, Sparkles, Star } from "lucide-react"
import { useState } from "react"

export default function ElementaryIntermediatePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const benefits = [
    {
      icon: Target,
      title: "Чёткая система",
      description: "Сдвинешь свой английский с мёртвой точки и обретёшь уверенность в своих знаниях.",
    },
    {
      icon: BookOpen,
      title: "Твёрдая база в английском",
      description: "Уверенно начнёшь учить язык, больше не нужно будет переучивать английский.",
    },
    {
      icon: MessageCircle,
      title: "Повседневная лексика",
      description: "Только нужные слова и жизненные примеры, никакого олдскула.",
    },
    {
      icon: Zap,
      title: "Бодрая грамматика",
      description: "Отработаешь все провалы на грамматическом минном поле. Сложных тем для тебя не останется.",
    },
  ]

  const teachers = [
    {
      name: "Марина Могилко",
      image:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/m-marina.jpg&width=152&height=152&quality=80&mode=resize",
      bio: [
        "Живёт в Сан-Франциско, управляет LinguaTrip.com и ведёт три YouTube-канала с более, чем семью миллионами подписчиков.",
        "Сдала языковые экзамены на высокие баллы: TOEFL на 117 из 120 и GMAT на 700 из 800.",
        "Поступила в пять американских университетов на MBA и в магистратуру.",
      ],
    },
    {
      name: "Веня Пак",
      image:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/m-venya.png&width=152&height=152&quality=80&mode=resize",
      bio: [
        "Сертифицированный преподаватель (TESOL). Автор четырёх учебных пособий и собственной системы изучения языка.",
        "Живёт в США и ежедневно общается с носителями английского. Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку на английском — у него отличный слух и идеальное произношение.",
        "Ведёт свой канал на YouTube — ВеняПакTV, на котором уже более 780 000 подписчиков.",
      ],
    },
  ]

  const audiences = [
    "Тем, кто хочет сразу начать учить язык правильно и запоминать надолго.",
    "Тем, кто плавает в основах грамматики и ищет спасательный круг.",
    "Тем, кто не может преодолеть языковой барьер и не видит прогресса.",
    "Тем, кто планирует в будущем сдавать экзамены.",
  ]

  const learningSteps = [
    {
      icon: Video,
      title: "30 уроков и трансляции",
      description:
        "Уроки открываются через день, записи доступны в любое время и любом месте. Дополнительно общие трансляции для ответов на вопросы и общения. *Доступ — 3 месяца с даты старта марафона.",
    },
    {
      icon: PenTool,
      title: "Домашнее задание",
      description:
        "После каждого занятия будет тестовое домашнее задание от Вени. Оно поможет закрепить материал. Также в программе предусмотрены дополнительные письменные задания. *Проверка дополнительных заданий доступна только в тарифах STANDARD и PRO.",
    },
    {
      icon: Trophy,
      title: "Рейтинговая система",
      description:
        "Чтобы попасть в топ рейтинга и выиграть лучший приз, нужно выполнять в срок все личные и командные задания. Домашка будет интересной, на злободневные темы и позволит быстро прокачать все навыки. *Только для тарифов STANDARD и PRO.",
    },
    {
      icon: Award,
      title: "Сертификат и скидка",
      description:
        "Все участники, успешно сдавшие тест в конце программы, получат сертификат, который можно добавить в резюме и использовать для получения студенческой визы. А ещё — скидку 30% на любой курс.",
    },
    {
      icon: Gift,
      title: "Розыгрыш призов",
      description:
        "Лучшим достанется всё! Они смогут прокачать все навыки в английском, перейти на Intermediate и получить крутые призы от команды LinguaTrip. Ты с нами? *Только для тарифов STANDARD и PRO.",
    },
    {
      icon: Users,
      title: "Уютный чат для своих",
      description:
        "Для тех, кому нужны советы, будет чат в Telegram. В нем можно задать вопросы куратору и пообщаться с одногруппниками. *Только для тарифов STANDARD и PRO",
    },
  ]

  const scheduleData: ScheduleTab[] = [
    {
      id: "week-1",
      label: "Неделя #1",
      lessons: [
        {
          title: "Как учиться",
          description: "Советы, ресурсы, лайфхаки",
        },
        {
          title: "Что делать в непонятной ситуации",
          description: "Меня всё равно не понимают! SOS",
        },
        {
          title: "Глаголы Have and Be",
          description: "Поговорим о самом главном",
        },
        {
          title: "Артикли",
          description: "Куда, когда и зачем?",
        },
        {
          title: "Правила чтения гласных",
          description: "Не все так просто, как кажется",
        },
        {
          title: "Читаем согласные",
          description: "Секреты произношения как у носителей",
        },
      ],
    },
    {
      id: "week-2",
      label: "Неделя #2",
      lessons: [
        {
          title: "Present Simple",
          description: "Основы настоящего времени",
        },
        {
          title: "Present Continuous",
          description: "Действия в процессе",
        },
        {
          title: "Past Simple",
          description: "Прошедшее время",
        },
        {
          title: "Future Simple",
          description: "Будущее время",
        },
      ],
    },
    {
      id: "week-3",
      label: "Неделя #3",
      lessons: [
        {
          title: "Модальные глаголы",
          description: "Can, must, should и другие",
        },
        {
          title: "Вопросительные предложения",
          description: "Как правильно задавать вопросы",
        },
        {
          title: "Отрицательные предложения",
          description: "Формы отрицания",
        },
        {
          title: "Предлоги времени и места",
          description: "In, on, at и другие",
        },
      ],
    },
    {
      id: "week-4",
      label: "Неделя #4",
      lessons: [
        {
          title: "Present Perfect",
          description: "Настоящее совершенное время",
        },
        {
          title: "Сравнительная степень",
          description: "Прилагательные и наречия",
        },
        {        
          title: "Условные предложения",
          description: "First Conditional",
        },
        {
          title: "Пассивный залог",
          description: "Основы Passive Voice",
        },
      ],
    },
    {
      id: "week-5",
      label: "Неделя #5",
      lessons: [
        {
          title: "Косвенная речь",
          description: "Reported Speech",
        },
        {
          title: "Фразовые глаголы",
          description: "Самые употребляемые",
        },
        {
          title: "Идиомы",
          description: "Популярные выражения",
        },
        {
          title: "Словообразование",
          description: "Префиксы и суффиксы",
        },
      ],
    },
    {
      id: "week-6",
      label: "Неделя #6",
      lessons: [
        {
          title: "Деловой английский",
          description: "Базовая лексика для работы",
        },
        {
          title: "Путешествия",
          description: "Полезные фразы для поездок",
        },
        {
          title: "Повседневное общение",
          description: "Small talk и casual conversations",
        },
        {
          title: "Написание писем",
          description: "Формальные и неформальные письма",
        },
      ],
    },
    {
      id: "week-7",
      label: "Неделя #7",
      lessons: [
        {
          title: "Подготовка к экзаменам",
          description: "Стратегии и советы",
        },
        {
          title: "Аудирование",
          description: "Развитие навыка восприятия на слух",
        },
        {
          title: "Говорение",
          description: "Практика разговорной речи",
        },
        {
          title: "Финальный тест",
          description: "Проверка знаний и получение сертификата",
        },
      ],
    },
  ]

  const pricingTiers = [
    {
      name: "BASIC",
      price: "8820 ₽",
      spots: null,
      features: [
        "Доступ на 3 месяца",
        "Конспекты лекций",
        "30 уроков в записи, Курс длится 7 недель",
        "Задания к каждому уроку",
        "Участие на 3 месяца в эфирах Вопрос-ответ с Веней",
        "Скидка на любой практикум",
        "Сертификат",
        "Трекер полезных привычек",
        "Заморозка доступа на 2 недели",
      ],
    },
    {
      name: "STANDARD",
      subtitle: "программа + Lingua Speaking Club PRO",
      price: "13500 ₽",
      spots: 6,
      popular: true,
      features: [
        "Всe что в тарифе BASIC",
        "Групповой закрытый чат, который курирует Веня Пак",
        "Проверка домашних заданий лично от Вени Пак",
        "Разговорный клуб 1 раз в неделю с носителем",
        "Участие в челлендже от LinguaTrip",
        "Дополнительные задания с твоим buddy",
      ],
    },
    {
      name: "PRO",
      price: "19710 ₽",
      spots: 2,
      features: ["Все что в тарифе STANDARD", "Персональный куратор на время программы для отслеживания прогресса"],
    },
  ]

  const testimonials = [
    {
      name: "Анна Смирнова",
      avatar: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=150&height=150&quality=80&mode=resize",
      text: "Программа-челлендж — это невероятно! Командная работа и рейтинговая система мотивируют как ничто другое. За 7 недель я прошла путь от Elementary до уверенного Intermediate. Веня и Марина — лучшие преподаватели!",
      verified: true,
    },
    {
      name: "Дмитрий Козлов",
      avatar: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=150&height=150&quality=80&mode=resize",
      text: "Я долго искал программу, которая поможет мне систематизировать знания. Эта программа превзошла все ожидания! Домашние задания интересные, трансляции полезные, а призы — отличная мотивация продолжать учиться.",
      verified: true,
    },
    {
      name: "Елена Петрова",
      avatar: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=150&height=150&quality=80&mode=resize",
      text: "Спасибо команде LinguaTrip за эту программу! Я наконец-то преодолела языковой барьер и начала говорить по-английски. Формат челленджа с buddy и командной работой делает обучение увлекательным и эффективным.",
      verified: true,
    },
  ]

  const faqs = [
    {
      question: "Написано, что лекции в записи. Когда старт?",
      answer:
        "Программа стартует 13 ноября. Все уроки будут доступны в записи, и вы сможете проходить их в удобное для вас время в течение 3 месяцев с даты старта.",
    },
    {
      question: "Когда будут онлайн-трансляции и как на них попасть?",
      answer:
        "Онлайн-трансляции проходят регулярно в течение программы. Расписание трансляций будет доступно в личном кабинете после регистрации. Для участия просто переходите по ссылке в указанное время.",
    },
    {
      question: "Какой уровень нужен для прохождения программы?",
      answer:
        "Программа рассчитана на уровни A2-B1 (Elementary-Pre-Intermediate). Если вы знаете базовую грамматику и можете строить простые предложения, эта программа для вас.",
    },
    {
      question: "Где брать записи и как долго можно ими пользоваться?",
      answer:
        "Все записи уроков будут доступны в вашем личном кабинете на платформе LinguaTrip. Доступ к материалам сохраняется в течение 3 месяцев с даты старта программы.",
    },
    {
      question: "А что делать с домашкой?",
      answer:
        "После каждого урока вы получаете тестовое задание для самопроверки. В тарифах STANDARD и PRO дополнительные письменные задания проверяются лично Веней Паком, и вы получаете обратную связь.",
    },
    {
      question: "Написано, что у меня будут конспекты лекций. Я смогу скачать их сразу после урока?",
      answer:
        "Да, конспекты лекций доступны для скачивания сразу после открытия урока. Вы можете использовать их для повторения материала в любое время.",
    },
    {
      question: "Как воспользоваться заморозкой доступа к программе?",
      answer:
        "Если вам нужно сделать перерыв, вы можете заморозить доступ на 2 недели. Для этого напишите в поддержку, и мы приостановим отсчет времени доступа к материалам.",
    },
    {
      question: "Хочу скидку 30% на другой курс. Как получить?",
      answer:
        "Скидка 30% на любой курс LinguaTrip предоставляется всем участникам, успешно завершившим программу и сдавшим финальный тест. Промокод будет отправлен на вашу почту после получения сертификата.",
    },
    {
      question: "Хочу вернуть деньги за программу. Получится?",
      answer:
        "Да, вы можете вернуть деньги в течение 14 дней с момента покупки, если не устроило качество программы. Для возврата свяжитесь с нашей службой поддержки.",
    },
    {
      question: "Хочу выиграть призы! Какие условия?",
      answer:
        "Призы доступны участникам тарифов STANDARD и PRO. Чтобы выиграть, нужно выполнять все личные и командные задания в срок. Чем больше баллов вы наберете, тем выше ваши шансы на победу. Призы включают консультацию с Веней, 3 месяца спикинг клаба, бесплатные практикумы и скидки на курсы.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-teal-600">LinguaTrip</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Что даст программа
              </button>
              <button
                onClick={() => scrollToSection("target-audience")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Кому подходит
              </button>
              <button
                onClick={() => scrollToSection("teachers")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Кто ведет программу
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Как проходит обучение
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Программа
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Сколько стоит
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm hover:text-teal-600 transition-colors">
                Частые вопросы
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Отзывы
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Что даст программа
                </button>
                <button
                  onClick={() => scrollToSection("target-audience")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Кому подходит
                </button>
                <button
                  onClick={() => scrollToSection("teachers")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Кто ведет программу
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Как проходит обучение
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Программа
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Сколько стоит
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm hover:text-teal-600 transition-colors text-left"
                >
                  Частые вопросы
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Header */}
      <div className="pt-16">
        <HeroHeader
          badge="Онлайн-образование для уровня A2-B1"
          title="Программа-челлендж с Веней Паком и Мариной Могилко"
          subtitle="От Elementary до Intermediate"
          description="7 недель, чтобы освоить базу и добраться до среднего уровня"
          backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/f52fd91965c74c0393c086a61044073e4fd297f3da104dbd8c412c9cd0843b0a.jpg&width=1180&height=490&quality=80&mode=resize"
          stats={[
            { label: "Старт", value: "13 ноября" },
            { label: "Всего уроков", value: "30" },
            { label: "Стоимость", value: "От 8820 ₽" },
          ]}
          ctaButtons={[
            {
              label: "Забронировать",
              onClick: () => scrollToSection("booking-form"),
            },
            {
              label: "Подробнее",
              onClick: () => scrollToSection("benefits"),
            },
          ]}
        />
      </div>

      {/* Challenge Description */}
     <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Наша топовая программа, который прошли уже более 15 000 участников!
            </h2>
            <p className="text-lg text-gray-700 mb-8">Готов выйти из зоны комфорта и наконец выучить английский?</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Программа в формате челленджа — это курс с рейтингом, в котором все участники делятся на команды по два
                человека. Те, кто выполняют все задания, поднимаются в топ, быстро прокачивают английский и получают
                подарки. Программа длится 7 недель — без перерывов и отсрочек.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Главная фишка программы — система индивидуальных и парных домашек, которая поможет без стресса
                заговорить и превратить английский в навык.
              </p>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200 shadow-md">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Trophy className="w-8 h-8 text-teal-600" />
                  <h3 className="text-2xl font-bold text-teal-900">
                    Участвуй в челлендже, прокачивай язык и получай подарки от LinguaTrip
                  </h3>
                  <Trophy className="w-8 h-8 text-teal-600" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">Консультация с Веней</p>
                        <p className="text-sm text-gray-600">Личная встреча с преподавателем</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">3 месяца спикинг клаба</p>
                        <p className="text-sm text-gray-600">Разговорная практика с носителями</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">2 практикума бесплатно</p>
                        <p className="text-sm text-gray-600">Любые практикумы на выбор</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">60% скидка на программу</p>
                        <p className="text-sm text-gray-600">На любую программу с датой старта</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold">Команды с 6 по 10 место</span> получат скидку 50$ на любые курсы
                        от LinguaTrip
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold">Все участники</span>, которые полностью пройдут программу,
                        гарантированно получат в подарок один из наших учебников!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Challenge Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Как это работает</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Командная работа</h3>
                <p className="text-gray-700 leading-relaxed">
                  Разделим участников на команды, подберём тебе пару с учётом возраста, интересов и часового пояса.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Рейтинговая система</h3>
                <p className="text-gray-700 leading-relaxed">
                  Специальные домашние задания проверяются кураторами и оцениваются. Баллы добавляются команде и
                  суммируются за все домашки.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Подарки от LinguaTrip</h3>
                <p className="text-gray-700 leading-relaxed">
                  Каждая команда будет участвовать в розыгрыше призов. Чем больше баллов, тем выше рейтинг и шансы на
                  получение призов!
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Азарт и мотивация</h3>
                <p className="text-gray-700 leading-relaxed">
                  Не сделал домашку в паре — значит, подвёл команду, а если подвел команду — упустил заветные баллы и
                  шанс на победу.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed text-center">
                Главная цель этой программы — получить новые твёрдые знания и повысить твой уровень до Intermediate.
                Программа проходит в формате челленджа (только в тарифах STANDARD и PRO), где призы — приятный бонус и
                мотивация.
              </p>
              <p className="text-lg font-semibold text-center mt-4 text-amber-900">
                Учи английский и выигрывай в награду призы – скажи, здорово?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsSection title="Отзывы" testimonials={testimonials} />
      </div>

      {/* Benefits */}
      <div id="benefits">
        <BenefitsSection title="Что даст программа" benefits={benefits} />
      </div>

      {/* Target Audience */}
      <div id="target-audience">
        <TargetAudienceSection title="Кому подходит" audiences={audiences} />
      </div>

      {/* Teachers */}
      <div id="teachers">
        <TeachersSection title="Кто ведет программу" teachers={teachers} accentColor="teal" />
      </div>

      {/* How It Works */}
      <div id="how-it-works">
        <LearningJourneyMinimal
          title="Как проходит обучение"
          steps={learningSteps}
          accentColor="teal"
          ctaButton={
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={() => scrollToSection("booking-form")}>
              Забронировать участие
            </Button>
          }
        />
      </div>

      {/* Freeze Notice */}
      <section className="py-8 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              Если ты заболел, сорвался в отпуск или произошло что-то ещё, не паникуй — можешь заморозить свой доступ к
              видеоурокам на две недели. Так ты не будешь переживать, что сроки поджимают. Уйдёшь в короткий
              академический отпуск и вернёшься к занятиям с новыми силами.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <div id="schedule" className="py-16 md:py-24 bg-slate-50">
        <ScheduleTabs tabs={scheduleData} />
      </div>

      {/* Installment Notice */}
      <section className="py-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-amber-900">Доступна рассрочка 0%!</h3>
            <p className="text-gray-700 leading-relaxed">
              Для оформления нужно выбрать тариф, заполнить форму и перейти к выбору варианта оплаты
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing">
        <PricingSection
          title="Сколько стоит"
          subtitle="Занять место на программе"
          tiers={pricingTiers}
          showInstallment={true}
        />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Form */}
      <section id="booking-form" className="py-16 md:py-24 bg-slate-50">
        <BookingForm
          title="Забронируй участие в программе «От Elementary до Intermediate за 7 недель»"
        />
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection title="Частые вопросы" faqs={faqs} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
