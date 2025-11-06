"use client"

import { HeroHeader } from "@/components/hero-header"
import { BenefitsSection } from "@/components/benefits-section"
import { TeachersSection } from "@/components/teachers-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { LearningJourneyMinimal } from "@/components/learning-journey-minimal"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ScheduleTabs } from "@/components/schedule-tabs"
import type { ScheduleTab } from "@/components/schedule-tabs"
import {
  MessageCircle,
  Globe,
  BookOpen,
  FileText,
  Award,
  Users,
  Video,
  PenTool,
  GraduationCap,
  User,
} from "lucide-react"

export default function AdvancedProficiencyPage() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Общение на любые темы",
      description:
        "Сложных тем для разговора не останется — после практикума сможешь обсуждать с иностранцами и политику, и бизнес, и науку. А также поддержать разговор на любую жизненную тему.",
    },
    {
      icon: Globe,
      title: "Богатая речь на уровне носителей",
      description:
        "Уровень С2 — ступень про контекст и культуру. Разберёшься с тем, как сделать речь богаче, точнее выражать свои мысли с помощью составных слов и метафор и сможешь говорить не хуже выпускников Гарварда.",
    },
    {
      icon: BookOpen,
      title: "Сложные нюансы продвинутой грамматики",
      description:
        "Научишься строить красивые и сложные выражения, изысканные фразы, и на автомате блистать сложными языковыми конструкциями в деловой или научной деятельности.",
    },
    {
      icon: FileText,
      title: "Письменный английский на автомате",
      description:
        "Начнёшь вести переписку уверенно и убедительно, по всем правилам и без необходимости каждый раз заглядывать в словари или учебники для перепроверки себя.",
    },
    {
      icon: Award,
      title: "Знания на высоте",
      description:
        "Сможешь не только смотреть онлайн-курсы, но и учиться в англоязычной докторантуре, общаться в высокопрофессиональной среде, показывать высокие результаты на международных экзаменах.",
    },
    {
      icon: Users,
      title: "Свободное владение языком",
      description:
        "Отшлифуешь пробелы в изучении и сможешь пользоваться разными стилями речи, передавать тонкие оттенки смысла, думать и общаться на английском во всех сферах: от личной до профессиональной.",
    },
  ]

  const teacher = {
    name: "Анастасия Ивбуле",
    image: "/professional-teacher-portrait.png",
    videoUrl: "https://www.youtube.com/watch?v=3nijp-OqfEI",
    bio: [
      "Преподаватель-практик.",
      "Сдала международные экзамены TOEFL на 119 из 120 и IELTS на 9 из 9.",
      "Более десяти лет преподаёт английский и готовит студентов к экзаменам.",
      "Окончила Бостонский университет по специальности «Лингвистика».",
      "Говорит на пяти языках: русском, английском, испанском, французском и итальянском. А сейчас учит иврит и турецкий.",
    ],
  }

  const targetAudiences = [
    "Тем, кто хочет сделать мощный скачок перейти на свободный уровень владения языком.",
    "Тем, кто работает в иностранных компаниях и хочет общаться с зарубежными коллегами.",
    "Тем, кто хочет быть уверенным в своем английском перед экзаменами или учебой.",
    "Тем, кто хочет перестать испытывать трудности и начать жить, говорить и думать на английском языке.",
  ]

  const learningSteps = [
    {
      icon: Video,
      title: "25 уроков в записи",
      description:
        "Уроки открыты каждый день. Записи доступны в любое время и в любом месте. У тебя также будет двухмесячный доступ к закрытым трансляциям. Их можно смотреть в прямом эфире или в записи.",
      highlight: "Доступ — 3 месяца с даты старта",
    },
    {
      icon: PenTool,
      title: "Домашние задания",
      description:
        "После каждого урока получишь домашнее задание в разных форматах от Насти. Будут и тесты, и упражнения в pdf-файлах. Они помогут тебе закрепить пройденный материал.",
    },
    {
      icon: FileText,
      title: "Конспекты и памятки",
      description:
        "Помимо уроков и заданий на платформе появятся дополнительные памятки по самым важным темам, чтобы ты мог вернуться и повторить изученное.",
    },
    {
      icon: GraduationCap,
      title: "Сертификат и скидка",
      description:
        "Участники получат сертификат о прохождении практикума, который можно добавить в резюме и использовать для получения студенческой визы. А ещё — скидка 30% на любой курс от LinguaTrip.com",
    },
    {
      icon: MessageCircle,
      title: "Живое общение",
      description:
        "Для тех, кому нужны советы, будет чат в Telegram. Там можно задать вопросы и пообщаться с коучем и одногруппниками.",
      highlight: "Только для тарифа STANDARD и PRO",
    },
    {
      icon: User,
      title: "Личный урок с Анастасией Ивбуле",
      description:
        "Для участников тарифа PRO доступна возможность индивидуальной практики английского с Анастасией на персональной консультации, где можно задать все интересующие вопросы лично.",
      highlight: "Только для тарифа PRO",
    },
  ]

  const pricingTiers = [
    {
      name: "BASIC",
      price: "8820 ₽",
      spots: null,
      features: [
        "Доступ на 3 месяца",
        "25 уроков в записи",
        "Задания к каждому уроку",
        "Доступ на три месяца к общим трансляциям",
        "Скидка на любой интенсив",
        "Сертификат",
      ],
    },
    {
      name: "STANDARD",
      subtitle: "Все что в тарифе BASIC, а еще",
      price: "12780 ₽",
      spots: 4,
      popular: true,
      features: ["Конспекты лекций", "Проверка домашних заданий", "Групповой чат с Анастасией Ивбуле"],
    },
    {
      name: "PRO",
      subtitle: "Все что в тарифе STANDARD, а еще",
      price: "19710 ₽",
      spots: 3,
      features: ["Личный урок с Анастасией Ивбуле"],
    },
  ]

  const videoTestimonial = {
    name: "Видео-отзыв",
    avatar:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=75&height=75&quality=80&mode=resize",
    videoUrl: "https://www.youtube.com/watch?v=mc1wr12ekNo",
    verified: true,
  }

  const testimonials = [
    {
      name: "Елизавета Черепанова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Анастасия очень профессиональный преподаватель. Она всегда улыбается и создает комфортную атмосферу на занятиях. При объяснении материала приводит яркие примеры, которые хорошо застревают в памяти. Обстановка очень комфортная. На моем счету уже несколько интенсивов. Они достаточно краткие, но ёмкие. Здесь в первую очередь важно, что присутствует прямая связь с преподавателем высокого уровня. Повторить и закрепить многие темы было очень полезно. Всем советую посетить хотя бы один интенсив!",
      verified: true,
    },
    {
      name: "Алина Розова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Мой первый интенсив с Анастасией оставил самые положительные эмоции! Все очень доступно и понятно. Знания, которые когда-то были заложены в мою голову дополнились и систематизировались. И что важно - интенсив проходит легко и весело. Могу сказать, что это не последний мой интенсив, а Анастасия очень талантливый преподаватель!",
      verified: true,
    },
    {
      name: "Елизавета Коробейникова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Интенсивы это то, что серьезно помогает мне в изучении английского. Хотелось бы сказать огромное спасибо LinguaTrip за организацию и Анастасии за прекрасную подачу знаний. Занятия проходят информативно и интересно. Домашние задания помогают закрепить информацию. Всем очень рекомендую записаться хотя бы на один интенсив. Лично для меня это самый лучший способ изучать английский.",
      verified: true,
    },
    {
      name: "Валентин Алиферов",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/07b022fe71114c888632423cb56da149f09e9bed24f041e6ae18a8f929b6ce40.jfif&width=75&height=75&quality=80&mode=resize",
      text: 'Уроки интенсива запомнились мне тем, что я получал только актуальную "живую" информацию по теме, все объяснялось на примерах из реальной жизни, простым языком. Порадовала техническая и организационная сторона: вебинары, чаты, напоминания - все четко и современно. Жду следующих интенсивов!',
      verified: true,
    },
  ]

  const faqs = [
    {
      question: "Я проходил курс «От Advanced до Proficiency», мне будет полезно?",
      answer:
        "Да, этот практикум будет полезен даже если вы уже проходили курс. Мы углубимся в темы и добавим новые материалы для закрепления знаний.",
    },
    {
      question: "Написано, что лекции в записи. Когда старт?",
      answer: "Вы можете начать в любой удобный для вас день. Все материалы будут доступны сразу после оплаты.",
    },
    {
      question: "Когда будут онлайн-трансляции и как на них попасть?",
      answer:
        "Онлайн-трансляции проходят регулярно в течение двух месяцев. Расписание будет доступно после регистрации.",
    },
    {
      question: "Где брать записи и как долго можно ими пользоваться?",
      answer:
        "Все записи доступны на нашей платформе в течение 3 месяцев с даты старта. Вы можете смотреть их в любое удобное время.",
    },
    {
      question: "А что делать с домашкой?",
      answer: "Домашние задания выполняются на платформе. Для тарифов STANDARD и PRO предусмотрена проверка заданий.",
    },
    {
      question: "Какой уровень нужен для прохождения курса?",
      answer:
        "Для этого практикума необходим уровень Advanced (C1) или выше. Если вы не уверены в своем уровне, свяжитесь с нами для консультации.",
    },
    {
      question: "Сколько длится занятие?",
      answer: "Каждый урок длится от 45 до 60 минут. Всего в практикуме 25 уроков.",
    },
    {
      question: "Хочу скидку на другой курс. Как получить?",
      answer:
        "После завершения практикума вы автоматически получите промокод на скидку 30% на любой курс от LinguaTrip.com.",
    },
    {
      question: "Хочу вернуть деньги за практикум. Получится?",
      answer:
        "Да, вы можете вернуть деньги в течение 14 дней с момента покупки, если не начали проходить уроки. Свяжитесь с нашей поддержкой для оформления возврата.",
    },
  ]

  const scheduleTabs: ScheduleTab[] = [
    {
      id: "week-1-2",
      label: "1-2 неделя",
      lessons: [
        {
          title: "1. | Как написать идеальное эссе",
          description: "Перестанешь делать неочевидные ошибки, которые допускают 90% студентов в письменных работах",
        },
        {
          title: "2. | Артикли для продвинутых",
          description: "Сможешь с лёгкостью выбрать нужный артикль даже в спорных и неочевидных ситуациях",
        },
        {
          title: "3. | Идиомы и метафоры",
          description: "Начнёшь использовать идиомы и метафоры, которые помогут точнее выражать свои намерения и мысли",
        },
        {
          title: "4. | Как использовать инверсию",
          description: "Перестанешь ошибаться в предложениях с инверсией и предашь им более эмоциональное звучание",
        },
        {
          title: "5. | Лексика: Обучение в США",
          description: "Сможешь комфортно общаться в среде носителей во время англоязычного обучения",
        },
        {
          title: "6. | Лексика: Офисные будни",
          description: "Начнёшь свободно общаться на любые рабочие темы с носителями",
        },
        {
          title: "7. | Ошибки профессионалов",
          description: "Перестанешь совершать обидные ошибки, которые часто происходят на уровне Proficiency",
        },
        {
          title: "8. | Фразовые глаголы",
          description: "Научишься легко применять фразовые глаголы в формальной переписке и переговорах",
        },
      ],
    },
    {
      id: "week-3-4",
      label: "3-4 неделя",
      lessons: [
        {
          title: "9. | Лексика: Шопинг на высшем уровне",
          description:
            "Начнёшь безошибочно описывать стили и тренды в одежде и обуви, а также усвоишь всю нужную лексику для шоппинга",
        },
        {
          title: "10. | Сложная грамматика. Расщеплённые предложения.",
          description: "Разберёшься с расщеплёнными предложениями и сможешь лучше расставлять акценты в своей речи",
        },
        {
          title: "11. | Игра в синонимы 1.0",
          description: "Сможешь сделать свою речь разнообразнее и богаче и увеличишь активный словарный запас",
        },
        {
          title: "12. | Устойчивые выражения",
          description: "Начнёшь использовать устойчивые выражения, которые сделают твою речь более развернутой",
        },
        {
          title: "13. | Лексика: Политика и право",
          description: "Сможешь применять продвинутую лексику в разговорах на тему политики и права",
        },
        {
          title: "14. | Как звучать естественно в любом разговоре",
          description: "Начнёшь говорить как носитель и чувствовать себя намного увереннее в разговоре",
        },
        {
          title: "15. | Игра в синонимы 2.0",
          description: "Увеличишь активный словарный запас новыми словами и будешь выражать свои мысли ещё точнее",
        },
      ],
    },
    {
      id: "week-5-6",
      label: "5-6 неделя",
      lessons: [
        {
          title: "16. | Лексика: работа в Google",
          description: "Сможешь свободно общаться с коллегами и партнёрами по работе",
        },
        {
          title: "17. | Как стать писателем!",
          description: "Научишься без труда писать историю или рассказ на английском",
        },
        {
          title: "18. | Лексика: продвижение и реклама",
          description: "Освоишь нужную лексику для общения в сфере рекламы и продвижения",
        },
        {
          title: "19. | Миссия невыполнима - инверсия в условных предложениях",
          description: "Сможешь легко и эмоционально выражать свои мысли, используя инверсию в условных предложениях",
        },
        {
          title: "20. | Игра в синонимы 3.0",
          description: "Перестанешь повторяться и начнёшь точнее выражать свои мысли",
        },
        {
          title: "21. | Лексика: технологии и наука",
          description: "Получишь всю необходимую лексику для свободного общения в сфере науки и технологий",
        },
        {
          title: "22. | Лексика: спорт",
          description: "Сможешь с лёгкостью обсуждать темы спорта и соревнований",
        },
      ],
    },
    {
      id: "week-7",
      label: "7 неделя",
      note: "Финальная неделя практикума с завершающими уроками",
      lessons: [
        {
          title: "23. | Лексика: экономика и бизнес",
          description: "Начнёшь свободно говорить и обсуждать темы экономики и бизнеса",
        },
        {
          title: "24. | Конструкции с HAVE и GET",
          description: "Научишься легко использовать конструкции принуждения с have и get",
        },
        {
          title: "25. | Лексика: здоровье",
          description: "Сможешь легко записаться на приём к врачу, рассказать свои жалобы и выслушать рекомендации",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <HeroHeader
        badge="Практикум с Анастасией Ивбуле"
        title="От Advanced до Proficiency"
        description="Чёрный пояс по английскому: стань ближе к уровню носителей за два месяца"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/72190c5296cf48b2a10a4e91e8ae78ee98d93a5ac1f7477b88cd5c97387c9b61.png&width=1180&height=490&quality=80&mode=resize"
        stats={[
          { label: "Старт", value: "в любой день" },
          { label: "Всего уроков", value: "25" },
          { label: "Стоимость", value: "От 8820 ₽" },
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

      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            {[
              { label: "Что даст практикум", id: "benefits" },
              { label: "О преподавателе", id: "teacher" },
              { label: "Кому подходит", id: "audience" },
              { label: "Как проходит обучение", id: "learning" },
              { label: "Расписание", id: "schedule" },
              { label: "Отзывы", id: "reviews" },
              { label: "Сколько стоит", id: "pricing" },
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

      <div id="benefits">
        <BenefitsSection title="Что даст практикум" benefits={benefits} accentColor="teal" />
      </div>

      <div id="teacher">
        <TeachersSection title="Об Анастасии Ивбуле" teachers={[teacher]} accentColor="teal" />
      </div>

      <div id="audience">
        <TargetAudienceSection title="Кому подходит" audiences={targetAudiences} accentColor="teal" />
      </div>

      <div id="learning">
        <LearningJourneyMinimal title="Как проходит обучение" steps={learningSteps} accentColor="teal" />
      </div>

      <section id="schedule" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Расписание практикума</h2>
            <p className="text-muted-foreground text-lg">
              25 уроков распределены по 7 неделям для комфортного усвоения материала
            </p>
          </div>
          <ScheduleTabs tabs={scheduleTabs} />
        </div>
      </section>

      <div id="reviews">
        <TestimonialsSection
          title="Отзывы"
          videoTestimonial={videoTestimonial}
          testimonials={testimonials}
          backgroundColor="white"
        />
      </div>

      <ContactSection />

      <div id="pricing">
        <PricingSection
          title="Сколько стоит"
          subtitle="занять место на практикуме"
          tiers={pricingTiers}
          showInstallment={false}
          showUrgency={false}
        />
      </div>

      <section id="booking-form" className="py-16 md:py-24 bg-slate-50">
        <BookingForm
          title="Забронировать участие"
          //subtitle="Заполните форму, и мы свяжемся с вами для подтверждения"
         // accentColor="teal"
        />
      </section>

      <div id="faq">
        <FAQSection title="Частые вопросы" faqs={faqs} accentColor="teal" />
      </div>
      <Footer />
    </main>
  )
}
