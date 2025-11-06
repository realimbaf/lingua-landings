"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { ScheduleTabs, type ScheduleTab } from "@/components/schedule-tabs"
import { PricingWithUpsell, type PricingTier, type UpsellOption } from "@/components/pricing-with-upsell"

export default function EnglishTensesPracticePage() {
  const [activeTab, setActiveTab] = useState("simple")
  const [activeReview, setActiveReview] = useState(0)

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const scheduleTabs: ScheduleTab[] = [
    {
      id: "simple",
      label: "Simple tenses",
      lessons: [
        { title: "Present Simple", description: "Закладываем основы" },
        { title: "Past Simple", description: "Путешествуем в прошлое" },
        { title: "Future Simple", description: "Кто хочет заглянуть в будущее?" },
        {
          title: "Дополнительное практическое задание",
          description: "Время для выполнения домашней работы",
          isSpecial: true,
        },
      ],
    },
    {
      id: "progressive",
      label: "Progressive tenses",
      lessons: [
        { title: "Present Progressive", description: "Его девичья фамилия — Continuous" },
        { title: "Past Progressive", description: "Подробности о смутном прошлом" },
        { title: "Future Progressive", description: "Что ты будешь делать завтра вечером?" },
        {
          title: "Дополнительное практическое задание",
          description: "Время для выполнения домашней работы",
          isSpecial: true,
        },
      ],
    },
    {
      id: "perfect",
      label: "Perfect tenses",
      lessons: [
        { title: "Present Perfect", description: "Все на нём спотыкаются" },
        { title: "Past Perfect", description: "Оставим прошлое в прошлом" },
        { title: "Future Perfect", description: "Я обязательно это сделаю. Как можно быстрее." },
        {
          title: "Дополнительное практическое задание",
          description: "Время для выполнения домашней работы",
          isSpecial: true,
        },
      ],
    },
    {
      id: "perfect-progressive",
      label: "Perfect Progressive",
      lessons: [
        { title: "Present Perfect Progressive", description: "Ого, три слова в названии!" },
        { title: "Past Perfect Progressive", description: "Подчеркнём продолжительность прошлого" },
        {
          title: "Future Perfect Progressive",
          description: "Говорят, что это время используют только люди с живым воображением",
        },
        { title: "Future In The Past", description: "Мы знали, что ты запишешься на этот курс!" },
        { title: "WOULD, COULD, SHOULD", description: "Всё об их прошлом и настоящем" },
        { title: "Финальная работа", description: "Время для выполнения домашней работы", isSpecial: true },
      ],
    },
  ]

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      subtitle: "Базовый",
      basePrice: 5670,
      originalPrice: 10800,
      features: [
        "14 лекций в записи",
        "Прямой эфир каждый месяц",
        "Домашнее задание и тест после каждого урока",
        "Сертификат участника",
        "Доступ в личный кабинет — 3 месяца",
        "Скидка на один практикум на твой выбор",
        "Воркбук с правилами грамматики и дополнительными заданиями",
      ],
      spots: null,
      popular: false,
    },
    {
      name: "Standard",
      subtitle: "Стандарт",
      basePrice: 6750,
      originalPrice: 12780,
      features: [
        "Всё, что в тарифе Basic",
        "Полезные памятки, которые помогут с выбором правильного времени",
        "Доступ к чату в Telegram с Веней и другими студентами",
      ],
      spots: 3,
      popular: true,
    },
    {
      name: "GURU",
      subtitle: "Профессионал",
      basePrice: 9900,
      originalPrice: 18720,
      features: ["Всё, что в тарифе Standard", "Доступ к закрытому чату с куратором на 2 недели"],
      spots: 3,
      popular: false,
    },
  ]

  const upsellOption: UpsellOption = {
    id: "speaking-club",
    title: "Добавить Lingua Speaking Club",
    description: "Для лучшей прокачки разговорного навыка",
    price: 4680,
    learnMoreUrl: "/products/speaking-club",
    learnMoreText: "Узнать больше",
  }

  const reviews = [
    {
      name: "Елизавета Черепанова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=75&height=75&quality=80&mode=resize",
      text: 'Веня очень хороший учитель. Он всегда улыбается и часто шутит. А когда настроение приподнято, заниматься гораздо легче. Веня при объяснении материала обычно приводит такие яркие, даже я бы сказала "кричащие", примеры, которые хорошо застревают в памяти. Потом они легко вспоминаются. Еще мне понравилось, что Веня общается со всеми, как с давно знакомыми друзьями. Обстановка очень комфортная. Вот бы вживую пообщаться! На моем счету пока только один интенсив - по грамматике. Он достаточно краткий, но ёмкий. Совсем новичкам будет, наверное, сложновато. А те, кто знает грамматику, все равно почерпнут что-то интересное. Не обязательно связанное с правилами языка) Здесь в первую очередь важно, что присутствует прямая связь с преподавателем - жителем США, который погружен в ту среду, и практически любую ситуацию из жизни там может обрисовать. Повторить и закрепить многие штуки было очень полезно. Всем, кто не решался, советую посетить хотя бы один интенсив, чтобы увидеть, как организован процесс. Ну и посмотреть на Вениамина в деле. Он крутой.',
    },
    {
      name: "Алина Розова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Мой первый интенсив с Веней оставил самые положительные эмоции! Все очень доступно и понятно. Знания, которые когда-то были заложены в мою голову дополнились и систематизировались) И что, на мой взгляд, немаловажно - интенсив проходит легко и весело, в отличие от занятий с репетитором когда-то в школе) в общем, могу сказать, что это не последний мой интенсив, а Веня очень талантливый преподаватель, все здорово, так держать!)",
    },
    {
      name: "Елизавета Коробейникова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=75&height=75&quality=80&mode=resize",
      text: "Интенсивы это то, что серьезно помогает мне в изучении английского. Прежде всего хотелось бы сказать огромное спасибо LinguaTrip за организацию всего и Вене за прекрасную подачу знаний. Мне всё очень нравится, занятия проходят информативно и интересно. Домашние задания помогают закрепить информацию, очень нравятся тесты и устные задания. Всем очень рекомендую записаться хотя бы на один интенсив, и вы сами всё поймёте. Лично для меня это далеко не последний интенсив, ибо пока что это самый лучший способ изучать английский.",
    },
    {
      name: "Валентин Алиферов",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/07b022fe71114c888632423cb56da149f09e9bed24f041e6ae18a8f929b6ce40.jfif&width=75&height=75&quality=80&mode=resize",
      text: 'Уроки интенсива с Веней запомнились мне тем, что я получал только актуальную "живую" информацию по теме, все объяснялось на примерах из реальной жизни, простым языком и с юмором :) Кроме того, порадовала техническая и организационная сторона: вебинары, чаты, напоминания - все четко, современно и со вкусом )) Жду следующих интенсивов!',
    },
  ]

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/ef8efcad58374a1dbc27ca089fc1a2e3c09e7028c9e941cda854e898bfc41474.jpg&width=2360&height=980&quality=95&mode=resize)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full mb-6">
            <span className="text-teal-300 text-sm font-medium">Онлайн образование · Интенсивы</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Разберись с временами раз и навсегда
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto text-balance">
            Научись правильно выбирать время в английском и доведи этот навык до автоматизма
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            <div className="text-center">
              <div className="text-sm text-slate-300 mb-1">Старт</div>
              <div className="text-lg font-semibold text-white">В любой день</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-sm text-slate-300 mb-1">Всего уроков</div>
              <div className="text-lg font-semibold text-white">14</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-sm text-slate-300 mb-1">Стоимость</div>
              <div className="text-lg font-semibold text-teal-400">От 5670 ₽</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg"
            >
              Забронировать
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-white/20 hover:bg-white/30 border-white text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-6 overflow-x-auto py-4 text-sm">
            <button
              onClick={() => scrollToSection("teachers")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Кто ведет практикум
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Что даст практикум
            </button>
            <button
              onClick={() => scrollToSection("audience")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Кому подходит
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Как проходит обучение
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Программа
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Сколько стоит
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
            >
              Отзывы
            </button>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-teal-100 rounded-full">
                <span className="text-teal-700 text-sm font-semibold">Почему этот практикум?</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Времена английского языка — это просто</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Студенты любого уровня часто допускают ошибки в использовании времен в английском языке и путают формы
                глаголов. Мы создали этот практикум, чтобы помочь вам{" "}
                <span className="font-semibold text-teal-600">раз и навсегда освоить времена</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Простые объяснения</h3>
                    <p className="text-slate-600 text-sm">
                      Все объяснения даны в простой для понимания форме, а примеры основаны на реальном жизненном опыте
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Автоматизм навыка</h3>
                    <p className="text-slate-600 text-sm">
                      Вы освоите использование времен и сделаете этот навык естественным и автоматическим
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Для любого уровня</h3>
                    <p className="text-slate-600 text-sm">
                      От pre-intermediate до upper-intermediate — каждый найдет что-то новое и полезное
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Кто ведёт практикум</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Marina Mogilko */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img
                  src="https://site.linguacdn.download//Images/online/products/teachers/marina/marina-card.webp"
                  alt="Марина Могилко"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Марина Могилко</h3>
              <p className="text-slate-700 leading-relaxed">
                Живёт и работает в США. Поступила в пять американских вузов на MBA и магистратуру, сдала TOEFL — на 117
                из 120 и GMAT — на 700 из 800. Марина ведёт три YouTube-канала c 7+ млн. подписчиков, где рассказывает
                об обучении за рубежом, изучении английского языка и жизни в США.
              </p>
            </div>

            {/* Venya Pak */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img
                  src="https://site.linguacdn.download//Images/online/products/teachers/venya/venya-card.webp"
                  alt="Веня Пак"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Веня Пак</h3>
              <p className="text-slate-700 leading-relaxed">
                Сертифицированный преподаватель из Лос-Анджелеса (TESOL) и автор собственной системы изучения языка и
                трёх учебных пособий. Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку на английском — у него
                отличный слух и идеальное произношение. Веня ведёт свой канал на Youtube, на котором уже 6 лет учит
                реальному английскому.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Что даст практикум</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Всё по полочкам</h3>
              <p className="text-slate-700">
                Подробно разберёшь всю систему английских времён и навсегда избавишься от проблем выбора.
              </p>
            </Card>

            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Мышление носителей</h3>
              <p className="text-slate-700">
                На реальных примерах из жизни научишься определять контекст использования времён.
              </p>
            </Card>

            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Закрепление через практику</h3>
              <p className="text-slate-700">
                Крутая домашка после каждого урока в виде теста для тех, у кого мало времени, и дополнительного воркбука
                для тех, кто хочет больше.
              </p>
            </Card>

            <Card className="p-8 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Понятный материал</h3>
              <p className="text-slate-700">
                Никакой воды и перегруженных таблиц, только полезная информация в удобном формате, которая останется
                после курса в виде памяток и воркбука.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Кому подходит</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Тем, кто хочет комплексно подходить к временам, чтобы начать использовать их автоматически и перейти
                  на более сложную грамматику
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Тем, кто знает основные правила английских времен, но не понимает их и постоянно путает формы
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Тем, кто уже знаком с основными временами, но хочет освежить память и изучить более сложные времена
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Тем, кто планирует сдавать экзамены по английскому языку, где правильное использование времен имеет
                  жизненно важное значение
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Как проходит обучение</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Лекции и стримы</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Вы можете смотреть уроки где угодно и когда угодно, в своем собственном темпе. Единственное, что вам
                нужно, это доступ в Интернет.
              </p>
              <p className="text-xs text-slate-500">**Доступ на три месяца с момента покупки</p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">✍️</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Домашние задания и тесты</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Марина и Веня будут давать вам тесты после каждого урока. Каждые 4 урока у вас также будет
                дополнительная практика в вашей рабочей тетради.
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">📋</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Конспекты лекций и памятки</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Мы собрали все конспекты лекций в удобном формате рабочей тетради. Там вы найдете всю информацию в
                сочетании с заданиями и тестами.
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Сертификат и скидки</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Все студенты получат сертификат, который смогут добавить в свое резюме. Кроме того, ты получишь скидку в
                размере 30% на другой курс.
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">💬</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Live Chat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Для обладателей пакета Standard будет чат в Telegram. У обладателей тарифа Pro также будет закрытый чат
                с куратором.
              </p>
            </Card>

            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Удобная онлайн-платформа</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Весь контент и задания собраны воедино в личном кабинете. Аккаунт доступен с любого устройства: ПК,
                ноутбука, смартфона или планшета.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Программа практикума</h2>

          <div className="max-w-5xl mx-auto">
            <ScheduleTabs tabs={scheduleTabs} defaultTab="simple" />
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={scrollToBooking} className="bg-teal-500 hover:bg-teal-600 text-white">
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <section id="pricing" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingWithUpsell
            title="Сколько стоит"
            subtitle="Выберите подходящий тариф"
            tiers={pricingTiers}
            upsell={upsellOption}
            onBooking={scrollToBooking}
            showInstallment={true}
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Отзывы</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={reviews[activeReview].avatar || "/placeholder.svg"}
                    alt={reviews[activeReview].name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-lg">{reviews[activeReview].name}</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" width="18" height="11">
                        <path
                          fill="#b7b7b7"
                          fillRule="nonzero"
                          d="M 17.587 0.745 c 0.125 -0.43 0 -0.745 -0.596 -0.745 h -1.969 c -0.5 0 -0.731 0.273 -0.856 0.573 c 0 0 -1.002 2.512 -2.42 4.143 c -0.46 0.473 -0.668 0.623 -0.918 0.623 c -0.126 0 -0.307 -0.15 -0.307 -0.58 V 0.745 C 10.521 0.23 10.376 0 9.96 0 H 6.864 a 0.48 0.48 0 0 0 -0.501 0.466 c 0 0.488 0.71 0.6 0.782 1.975 v 2.984 c 0 0.654 -0.114 0.773 -0.365 0.773 c -0.667 0 -2.291 -2.523 -3.254 -5.41 C 3.336 0.227 3.148 0 2.644 0 H 0.675 C 0.113 0 0 0.273 0 0.573 c 0 0.537 0.668 3.199 3.108 6.72 C 4.736 9.696 7.028 11 9.115 11 c 1.251 0 1.406 -0.29 1.406 -0.788 V 8.395 c 0 -0.58 0.119 -0.695 0.515 -0.695 c 0.292 0 0.793 0.15 1.961 1.31 c 1.335 1.374 1.556 1.99 2.307 1.99 h 1.969 c 0.562 0 0.844 -0.29 0.681 -0.86 c -0.177 -0.57 -0.815 -1.396 -1.66 -2.375 c -0.46 -0.559 -1.148 -1.16 -1.357 -1.46 c -0.292 -0.387 -0.208 -0.558 0 -0.902 c 0 0 2.4 -3.477 2.65 -4.658 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{reviews[activeReview].text}</p>
              </Card>

              {/* Navigation Buttons */}
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeReview ? "bg-teal-500 w-8" : "bg-slate-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Написано, что лекции в записи. Как это работает?</h3>
              <p className="text-slate-600 text-sm">
                Все лекции доступны в записи в вашем личном кабинете. Вы можете смотреть их в любое удобное время.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Где брать записи и как долго можно ими пользоваться?</h3>
              <p className="text-slate-600 text-sm">
                Записи доступны в личном кабинете в течение 3 месяцев с момента покупки.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">А что делать с домашкой?</h3>
              <p className="text-slate-600 text-sm">
                После каждого урока вы получите тест для самопроверки. Обладатели тарифа Pro также могут проверить
                домашнюю работу с куратором.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Какой уровень нужен для прохождения практикума?</h3>
              <p className="text-slate-600 text-sm">
                Практикум подходит для студентов от уровня pre-intermediate до уровня выше среднего.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Я предпочитаю смотреть уроки на смартфоне. Это возможно?</h3>
              <p className="text-slate-600 text-sm">
                Да, личный кабинет доступен с любого устройства: ПК, ноутбука, смартфона или планшета.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Хочу скидку 30% на другой курс. Как получить?</h3>
              <p className="text-slate-600 text-sm">
                После завершения практикума вы получите промокод на скидку 30% на любой другой курс.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Хочу вернуть деньги за практикум. Получится?</h3>
              <p className="text-slate-600 text-sm">
                Да, вы можете вернуть деньги в течение 14 дней с момента покупки, если не начали проходить курс.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 md:py-24">
        <BookingForm
          title="Забронируй участие в практикуме"
          price="5670 ₽"
          description="Разберись с временами раз и навсегда"
        />
      </section>

      <Footer />
    </div>
  )
}
