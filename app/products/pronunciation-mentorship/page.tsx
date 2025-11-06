"use client"

import { HeroHeader } from "@/components/hero-header"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { TeachersSection } from "@/components/teachers-section"
import { ScheduleTab, ScheduleTabs } from "@/components/schedule-tabs"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { Mic, MessageCircle, Ear, Users, Video, FileText, MessageSquare, BookOpen, Award, User, Sparkles, Target, Quote } from "lucide-react"

export default function PronunciationMentorshipPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigationItems = [
    { label: "Что даст обучение", id: "benefits" },
    { label: "О преподавателе", id: "teacher" },
    { label: "Кому подходит", id: "target-audience" },
    { label: "Что будет на наставничестве", id: "program" },
    { label: "Расписание", id: "schedule" },
    { label: "Отзывы", id: "testimonials" },
    { label: "Сколько стоит", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ]

  const benefits = [
    {
      icon: Mic,
      title: "Актуальное произношение",
      description:
        "Проработаешь американское произношение и избавишься от акцента так, что тебя будут понимать с полуслова.",
    },
    {
      icon: MessageCircle,
      title: "Снятие языкового барьера",
      description:
        "Перестанешь бояться общаться на английском языке, сможешь спокойно и уверенно говорить с носителями на равных.",
    },
    {
      icon: Ear,
      title: "Понимание речи на слух",
      description: "Начнёшь быстро воспринимать беглую американскую речь на слух в разговоре, сериалах или фильмах.",
    },
    {
      icon: Users,
      title: "Свободное общение",
      description:
        "Сможешь проще достигать своих целей, не будешь думать о своём произношении, а будешь говорить что хочешь и как хочешь.",
    },
  ]

  const targetAudiences = [
    "Тем, кто хочет свободно говорить и естественно звучать на английском.",
    "Тем, кто хочет, чтобы носители понимали его с первого раза, не переспрашивая.",
    "Тем, кто хочет стать увереннее в общении и преодолеть языковой барьер.",
    "Тем, кто хочет сразу понимать речь на слух в разговоре, сериалах и кино.",
  ]

  const teacher = {
    name: "Веня Пак",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/32cb49c2e4094b4c8ff9acca78b0ffbe82f760dc0f9e4f09adfb21fef70ee509.png&width=662&height=420&quality=80&mode=resize",
    bio: [
      "Сертифицированный преподаватель из Лос-Анджелеса (TESOL).",
      "Живёт и работает в США 10 лет.",
      "Автор четырёх учебных пособий и собственной системы изучения языка, которую Веня разработал и усовершенствовал, пока сам себя учил английскому.",
      "Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку на английском — у него отличный слух и идеальное произношение, что даже носители не могут распознать в нём иностранца.",
      "Ведёт свой канал на Youtube, на котором уже 6 лет учит реальному английскому.",
    ],
  }

  const programFeatures = [
    {
      icon: User,
      title: "Личные уроки с Веней каждую неделю",
      description:
        "Для всех участников наставничества будет доступна возможность индивидуально практиковать произношение с Веней каждую неделю и задавать все интересующие вопросы лично!",
    },
    {
      icon: Video,
      title: "20 видео-уроков с теорией",
      description:
        "20 практических уроков с теорией о том, как звучать естественно. Уроки будут доступны в любое время и в любом месте.",
    },
    {
      icon: FileText,
      title: "Задания для закрепления и самостоятельной практики",
      description:
        "После каждой темы ты получаешь домашнее задание для тренировки и закрепления произношения. Выполняй его сразу и регулярно, чтобы достичь максимального результата.",
    },
    {
      icon: MessageSquare,
      title: "Личный чат с Веней",
      description:
        "Ты сможешь загрузить свои аудио/видео - материалы с заданиями на отработку и задать все интересующие вопросы лично Вене!",
    },
    {
      icon: BookOpen,
      title: "Пособие по произношению от Вени",
      description:
        "Веня собрал нереально полезное пособие по произношению звуков со схемами и аудио-дорожками для практики и закрепления навыка.",
    },
    {
      icon: Award,
      title: "Сертификат и скидки для участников",
      description:
        "Сертификат о прохождении наставничества можно добавить в резюме и использовать для получения студенческой визы. А скидку 30% — на любой курс от LinguaTrip.",
    },
  ]

  const scheduleData: ScheduleTab[] = [
    {
      id: "week-1",
      label: "Неделя #1",
      lessons: [
        {
          title: "Вводная консультация с Веней",
          description: 'Оценка твоего состояния "ДО" и советы, на что нужно обратить внимание',
        },
        {
          title: "Урок 1 | Regular T & D",
          description: "Научишься правильной постановке языка и корректному произношению звуков T и D.",
        },
        {
          title: "Урок 2 | Different types of T",
          description: "Полностью освоишь произношение одного из самых сложных звуков в английском — звука T.",
        },
        {
          title: "Урок 3 | Sounds R & H",
          description: "Сможешь произносить звуки R и H как это делают носители.",
        },
        {
          title: "Урок 4 | Unvoiced TH sound",
          description:
            "Научишься произносить самый важный звук TH, неправильное произношение которого выдают в тебе иностранца.",
        },
        {
          title: "Урок 5 | Voiced TH sound",
          description: "Начнешь мастерски произносить звонкий звук TH.",
        },
        {
          title: "Урок 6 | Sounds V & W",
          description: "Перестанешь путаться в произношении звуков V и W.",
        },
        {
          title: "Личный урок с Веней для отработки пройденной теории",
          description: "",
        },
      ],
    },
    {
      id: "week-2",
      label: "Неделя #2",
      lessons: [
        {
          title: "Урок 7 | -ING",
          description: "Окончательно усвоишь, как произносить инговые окончания.",
        },
        {
          title: "Урок 8 | Sounds æ & e: MAN vs. MEN",
          description:
            "Разберешься с артикуляцией в английском, которой нет в русском, и начнешь правильно проговаривать звуки æ и e.",
        },
        {
          title: "Урок 9 | LIVE vs. LEAVE",
          description:
            "Научишься верно доносить свои мысли и не путать похожие по звучанию, но различные по смыслу, слова.",
        },
        {
          title: "Урок 10 | THE LAZIEST SOUND IN ENGLISH",
          description: "Разберёшься с самыми ленивыми звука в английском — ʌ & ə.",
        },
        {
          title: "Урок 11 | good vs food",
          description: "Научишься правильно звучать через практику постановки губ.",
        },
        {
          title: "Урок 12 | cold vs called",
          description: "Сможешь различать тонкую разницу в произношении так похожих слов.",
        },
        {
          title: "Личный урок с Веней для отработки пройденной теории",
          description: "",
        },
      ],
    },
    {
      id: "week-3",
      label: "Неделя #3",
      lessons: [
        {
          title: "Урок 13 | ED & S endings",
          description:
            "Узнаешь о небольших нюансах и трюках в произношении окончаний ED и S, о которых обязательно нужно помнить.",
        },
        {
          title: "Урок 14 | R-modified vowels",
          description: "Выучишь очень важный набор звуков для американского английского.",
        },
        {
          title: "Урок 15 | Intonations",
          description: "Разберёшься с интонацией в английском, чтобы звучать как носитель.",
        },
        {
          title: "Урок 16 | Sentence stresses",
          description:
            "Освоишь искусство расстановки правильных акцентов, чтобы говорить более естественно и точнее передавать смысловые оттенки.",
        },
        {
          title: "Урок 17 | How to connect things to make your sentence flow",
          description: "Узнаешь все трюки и лайфхаки, чтобы говорить более свободно, плавно и естественно.",
        },
        {
          title: "Урок 18 | How to keep learning",
          description:
            "Узнаешь от Вени эффективные способы, как работать над произношением и дальше не теряя мотивацию.",
        },
        {
          title: "Личный урок с Веней для отработки пройденной теории",
          description: "",
        },
      ],
    },
    {
      id: "week-4",
      label: "Неделя #4",
      lessons: [
        {
          title: "Бонусные задания и уроки",
          description: "Для тех, кто выполнил все задания в рамках курса.",
        },
        {
          title: "Урок 19 | How to appear more confident",
          description: "Что делать и говорить, когда в разговоре ты чувствуешь себя очень неуверенно.",
        },
        {
          title: "Урок 20 | The art of presentation",
          description:
            "Узнаешь о том, как эффектно презентовать себя и выступать на публике — ценный навык, который пригодится как в жизни, так и для подготовки творческого задания.",
        },
        {
          title: "Финальная консультация с Веней",
          description: 'Оценка твоего "ПОСЛЕ" и как развивать произношение дальше',
        },
      ],
    },
  ]

  const pricingTiers = [
    {
      name: "Наставничество с Веней",
      price: "148500 ₽",
      originalPrice: "168300 ₽",
      spots: 10,
      features: [
        "5 личных консультаций с Веней",
        "Индивидуальный чат с Веней",
        "20 уроков в записи",
        "Задания к каждому уроку с проверкой",
        "Трекинг прогресса",
        "Тестирование произношения до и после",
        "Доступ на 2 месяца",
        "Скидка на любой интенсив",
        "Сертификат",
      ],
      popular: true,
    },
  ]

  const faqs = [
    {
      question: "Написано, что уроки в записи. Когда старт?",
      answer:
        "Уроки доступны сразу после оплаты. Ты можешь начать обучение в любой удобный для тебя день и проходить материал в своём темпе.",
    },
    {
      question: "Когда будут личные консультации с Веней и как на них попасть?",
      answer:
        "Личные консультации проходят каждую неделю по расписанию. После оплаты ты получишь доступ к календарю, где сможешь выбрать удобное время для встречи с Веней.",
    },
    {
      question: "Какой уровень нужен для прохождения наставничества?",
      answer:
        "Наставничество подходит для студентов с уровнем от Pre-Intermediate и выше. Главное — желание улучшить своё произношение и готовность регулярно практиковаться.",
    },
    {
      question: "Я проходил марафон «Произношение 2025» с Веней Паком, мне будет полезно?",
      answer:
        "Да! Наставничество — это более глубокая и персонализированная работа над произношением. Ты получишь индивидуальную обратную связь от Вени и сможешь проработать именно твои сложности.",
    },
    {
      question: "Хочу скидку 30% на другие курсы от LinguaTrip. Как получить?",
      answer:
        "Скидка 30% автоматически активируется после успешного завершения наставничества. Ты получишь промокод, который сможешь использовать на любой курс от LinguaTrip.",
    },
    {
      question: "Хочу вернуть деньги. Получится?",
      answer:
        "Да, мы предоставляем возврат средств в течение первых 7 дней после начала обучения, если ты не удовлетворён программой. Просто свяжись с нашей службой поддержки.",
    },
  ]

  const testimonials = [
    {
      name: "Анна Петрова",
      avatar: "/diverse-woman-portrait.png",
      text: "После наставничества с Веней моё произношение изменилось кардинально! Теперь коллеги-носители понимают меня с первого раза, и я чувствую себя намного увереннее в общении.",
      verified: true,
    },
    {
      name: "Дмитрий Соколов",
      avatar: "/man.jpg",
      text: "Веня — потрясающий преподаватель! Его методика работает, и результаты видны уже после первой недели. Личные консультации — это то, что действительно помогает закрепить материал.",
      verified: true,
    },
    {
      name: "Мария Иванова",
      avatar: "/professional-woman.png",
      text: "Я наконец-то избавилась от акцента! Веня помог мне понять, как правильно произносить сложные звуки, и теперь я могу свободно общаться на английском без стеснения.",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <HeroHeader
        title="Наставничество Вени Пака"
        subtitle="Индивидуальная работа с Веней над твоим произношением за четыре недели"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/4b412de6825e4d38a0dba0757c0e3f0f2cc9a25fa9a247fa998ad61495911467.jpg&width=1180&height=490&quality=80&mode=resize"
        stats={[
          { label: "Старт", value: "В любой день" },
          { label: "Длительность", value: "4 недели" },
          { label: "Стоимость", value: "148500 ₽" },
        ]}
        ctaButtons={[
          {
            label: "Забронировать",
            onClick: () => scrollToSection("booking-form"),
            variant: "primary",
          },
          {
            label: "Узнать подробнее",
            onClick: () => scrollToSection("benefits"),
            variant: "secondary",
          },
        ]}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8 overflow-x-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 whitespace-nowrap transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 relative">
              <div className="absolute -top-6 left-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full p-4 shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              <div className="mt-4">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-6">
                  Вы ждали, и мы сделали – наставничество от Вени Пака! Личные консультации и индивидуальный чат с
                  Веней, много обратной связи и проверка наработанного материала.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Развивай речь так, чтобы тебя понимали даже носители, изучай английский уверенно и интенсивно,
                  оттачивай полученные знания на практике лично с Веней.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <User className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">Личные консультации и персональная обратная связь от Вени</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Проверенная методика</h3>
                <p className="text-gray-600">20 уроков по авторской системе Вени Пака</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Быстрый результат</h3>
                <p className="text-gray-600">Заметные улучшения уже через 4 недели обучения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection title="Отзывы наших студентов" testimonials={testimonials} />
      </section>

      {/* Benefits Section */}
      <section id="benefits">
        <BenefitsSection title="Что даст наставничество" benefits={benefits} />
      </section>

      {/* Target Audience Section */}
      <section id="target-audience">
        <TargetAudienceSection title="Кому подходит" audiences={targetAudiences} />
      </section>

      {/* Teacher Section */}
      <section id="teacher">
        <TeachersSection title="О преподавателе" teachers={[teacher]} />
      </section>

      {/* Program Features Section */}
      <section id="program">
        <BenefitsSection title="Что будет на наставничестве" benefits={programFeatures} />
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => scrollToSection("booking-form")}
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Забронировать участие
          </button>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Расписание</h2>
          <ScheduleTabs tabs={scheduleData} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection
          title="Сколько стоит"
          subtitle="Цены скоро повысятся!"
          tiers={pricingTiers}
          showInstallment={false}
          showUrgency={true}
        />
      </section>

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

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection title="Частые вопросы" faqs={faqs} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
