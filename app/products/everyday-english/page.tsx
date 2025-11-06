"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { PricingSection } from "@/components/pricing-section"

export default function EverydayEnglishPage() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currentReview, setCurrentReview] = useState(0)

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const reviews = [
    {
      name: "Елизавета Черепанова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b870c8c1cf9c4d4da1b82b726a9642dbe14ac553324c4008b8e2b9620421bc70.jfif&width=75&height=75&quality=80&mode=resize",
      social: "vk",
      text: 'Веня очень хороший учитель. Он всегда улыбается и часто шутит. А когда настроение приподнято, заниматься гораздо легче. Веня при объяснении материала обычно приводит такие яркие, даже я бы сказала "кричащие", примеры, которые хорошо застревают в памяти. Потом они легко вспоминаются. Еще мне понравилось, что Веня общается со всеми, как с давно знакомыми друзьями. Обстановка очень комфортная. Вот бы вживую пообщаться! На моем счету пока только один интенсив - по грамматике. Он достаточно краткий, но ёмкий. Совсем новичкам будет, наверное, сложновато. А те, кто знает грамматику, все равно почерпнут что-то интересное. Не обязательно связанное с правилами языка) Здесь в первую очередь важно, что присутствует прямая связь с преподавателем - жителем США, который погружен в ту среду, и практически любую ситуацию из жизни там может обрисовать. Повторить и закрепить многие штуки было очень полезно. Всем, кто не решался, советую посетить хотя бы один интенсив, чтобы увидеть, как организован процесс. Ну и посмотреть на Вениамина в деле. Он крутой.',
    },
    {
      name: "Алина Розова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/099e1af6ffcc4674b3995662abdf9ef6e77e2eb391514fcdba247c8cb47a372f.jfif&width=75&height=75&quality=80&mode=resize",
      social: "vk",
      text: "Мой первый интенсив с Веней оставил самые положительные эмоции! Все очень доступно и понятно. Знания, которые когда-то были заложены в мою голову дополнились и систематизировались) И что, на мой взгляд, немаловажно - интенсив проходит легко и весело, в отличие от занятий с репетитором когда-то в школе) в общем, могу сказать, что это не последний мой интенсив, а Веня очень талантливый преподаватель, все здорово, так держать!)",
    },
    {
      name: "Елизавета Коробейникова",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/7b209a6acd474ec8950dd453b6a8bb0702e1fd0f511840d8b04cd74735985af1.jfif&width=75&height=75&quality=80&mode=resize",
      social: "vk",
      text: "Интенсивы это то, что серьезно помогает мне в изучении английского. Прежде всего хотелось бы сказать огромное спасибо LinguaTrip за организацию всего и Вене за прекрасную подачу знаний. Мне всё очень нравится, занятия проходят информативно и интересно. Домашние задания помогают закрепить информацию, очень нравятся тесты и устные задания. Всем очень рекомендую записаться хотя бы на один интенсив, и вы сами всё поймёте. Лично для меня это далеко не последний интенсив, ибо пока что это самый лучший способ изучать английский.",
    },
    {
      name: "Валентин Алиферов",
      avatar:
        "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/07b022fe71114c888632423cb56da149f09e9bed24f041e6ae18a8f929b6ce40.jfif&width=75&height=75&quality=80&mode=resize",
      social: "vk",
      text: 'Уроки интенсива с Веней запомнились мне тем, что я получал только актуальную "живую" информацию по теме, все объяснялось на примерах из реальной жизни, простым языком и с юмором :) Кроме того, порадовала техническая и организационная сторона: вебинары, чаты, напоминания - все четко, современно и со вкусом )) Жду следующих интенсивов!',
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/f2d9c48945d044f290ba9c01f3c4f108aee6768d236f4c47802ccac1d1a0324f.jpg&width=2360&height=980&quality=95&mode=resize)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-teal-500 hover:bg-teal-600 text-white">Интерактивный практикум с Веней Паком</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Everyday English</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty">
            Прокачай английский, как носитель! Живая речь, нужные фразы и формат, который реально работает
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-1">Стоимость</p>
              <p className="text-3xl font-bold">От 4410 ₽</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6"
            >
              Забронировать
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("what-included")}
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-6"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-4 overflow-x-auto">
            <button
              onClick={() => scrollToSection("what-included")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Что будет на практикуме?
            </button>
            <button
              onClick={() => scrollToSection("teacher")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              О преподавателе
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Как проходит обучение?
            </button>
            <button
              onClick={() => scrollToSection("audience")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Кому подходит?
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Программа
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              Сколько стоит?
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm hover:text-teal-500 transition-colors whitespace-nowrap"
            >
              FAQ
            </button>
          </div>
        </div>
      </nav>

      {/* What's Included */}
      <section id="what-included" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Что будет на практикуме?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Everyday English с Веней Паком — это не просто практикум, а взрывной микс современного английского,
              интерактива и фана. Учишься легко, запоминаешь быстро, говоришь уверенно!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">Актуальная лексика на каждый день</h3>
              <p className="text-muted-foreground">От базовых фраз до современных идиом</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">Живой формат обучения</h3>
              <p className="text-muted-foreground">Влоги, подкасты и интерактивные задания</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4">Практика и разбор примеров</h3>
              <p className="text-muted-foreground">Учимся говорить так, как в реальной жизни</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4">Дополнительные бонусы</h3>
              <p className="text-muted-foreground">
                Визуальные словари, задания для практики, творческие задания, сеты с лексикой в Quizlet (последнее -
                только для тарифа PRO)
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">О преподавателе</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="flex-shrink-0 w-full md:w-[150px]">
                  <img
                    src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/5637670cceee4a59ab28764987bcff8ecc0de7e4c562479d98f3dc3427838860.png&width=300&height=190&quality=80&mode=resize"
                    alt="Веня Пак"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Веня Пак</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>Сертифицированный преподаватель крупнейшей международной ассоциации TESOL.</p>
                    <p>
                      Автор четырёх учебных пособий и собственной системы изучения языка, которая была разработана и
                      усовершенствованна во время самообучения.
                    </p>
                    <p>
                      Ведущий образовательного и развлекательного канала на YouTube (750к), который вот уже 6 лет
                      помогает зрителям понимать и осваивать современный английский.
                    </p>
                    <p>Живёт и работает в солнечной Калифорнии уже 10 лет.</p>
                    <p>Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку и тексты на английском.</p>
                    <p>
                      Отличный слух и идеальное произношение — главные инструменты, благодаря которым носители не могут
                      распознать в нём иностранца.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Как проходит обучение?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-4">Новый формат обучения</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 12 основных + 2 бонусных урока в формате Edutainment - сочетание образования и развлечения</li>
                <li>🔹 Видеоуроки: влоги, подкасты, скетчи + подробный разбор лексики</li>
                <li>🔹 Английский через контекст, а не списки слов!</li>
                <li>🔹 После развлекательной части — подробный разбор лексики с примерами и дефинициями</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Бонусные уроки только для тарифов STANDARD и PRO.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-4">Задания для практики</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 После каждого урока — интерактивные задания на закрепление</li>
                <li>
                  🔹 Упражнения на лексику, разговорную речь (Speaking), письмо (Writing) и аудирование (Listening)
                </li>
                <li>🔹 Творческие задания для продвинутой практики с проверкой куратором</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Проверка творческих заданий доступна только в тарифах Standard и Pro.
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-4">Визуальные словари</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 PDF-материалы со всей лексикой урока</li>
                <li>🔹 Яркие, красочные изображения для лучшего запоминания</li>
                <li>🔹 Доступ к файлам даже после окончания практикума</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-4">Уютный групповой чат</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 Telegram-чат для общения с одногруппниками</li>
                <li>🔹 Возможность задать вопросы по практикуму кураторам</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">*Только для тарифов Standard и Pro.</p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold mb-4">Личный чат с Веней</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 Индивидуальный чат с Веней в Telegram</li>
                <li>🔹 Дополнительная лексика через видеокружочки</li>
                <li>🔹 Фидбек на выполнение заданий</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">*Только для тарифа Pro</p>
            </Card>

            <Card className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Quizlet-сеты для лексики</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>🔹 Готовые карточки для интервального повторения</li>
                <li>🔹 Вся лексика разбита по темам</li>
                <li>🔹 Удобное запоминание буквально в пару кликов</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">*Только для тарифа Pro</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={scrollToBooking} className="bg-teal-500 hover:bg-teal-600 text-white">
              Забронировать участие
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Все уроки практикума проходят на английском языке с английскими субтитрами
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Кому подходит практикум?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Если у вас уровень B1-B2</h3>
                  <p className="text-muted-foreground">и вы хотите улучшить разговорный английский</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Если надоел скучный учебник,</h3>
                  <p className="text-muted-foreground">а хочется учиться через интересный контент</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Если хотите понимать носителей языка</h3>
                  <p className="text-muted-foreground">в реальных ситуациях</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Если нужна лексика</h3>
                  <p className="text-muted-foreground">для работы, учебы, путешествий и жизни</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Программа практикума</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                {[
                  { num: 1, title: "Home Tour", desc: "Учим лексику по теме дома и бытовых вещей" },
                  { num: 2, title: "Daily Routines", desc: "Разберем ежедневные дела и управление временем" },
                  { num: 3, title: "Shopping", desc: "Покупки, скидки, возвраты и полезные выражения" },
                  { num: 4, title: "Friendships", desc: "Общение, дружба" },
                  { num: 5, title: "Romantic Relationships", desc: "Романтические отношения" },
                  { num: 6, title: "Workplace", desc: "Рабочая лексика" },
                  { num: 7, title: "School & Studies", desc: "Учебная лексика" },
                  { num: 8, title: "Movies & Books", desc: "Как обсуждать кино и книги на английском" },
                  { num: 9, title: "Feeling Unwell", desc: "Полезные слова и выражения для общения с врачом" },
                  { num: 10, title: "Money & Personal Finance", desc: "Управление финансами, оплата счетов, кредиты" },
                  { num: 11, title: "Weekends & Free Time", desc: "Активный отдых и развлечения" },
                ].map((lesson) => (
                  <div key={lesson.num} className="flex items-start gap-6 relative">
                    {/* Badge */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {lesson.num}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <h3 className="font-bold text-xl mb-2">{lesson.title}</h3>
                      <p className="text-muted-foreground">{lesson.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Bonus lessons */}
                <div className="flex items-start gap-6 relative">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      B12
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-xl mb-2">Modern Idioms</h3>
                    <p className="text-muted-foreground">Современные выражения</p>
                    <p className="text-sm text-yellow-600 mt-2 font-medium">STANDARD и PRO</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 relative">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      B13
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-xl mb-2">Modern Slang</h3>
                    <p className="text-muted-foreground">Неформальный язык</p>
                    <p className="text-sm text-yellow-600 mt-2 font-medium">STANDARD и PRO</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 relative">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      14
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-xl mb-2">Review</h3>
                    <p className="text-muted-foreground">Повторение и закрепление всего материала</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-background rounded-lg p-8 md:p-12 border">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={reviews[currentReview].avatar || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-lg">{reviews[currentReview].name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" width="18" height="11">
                        <path
                          fill="#b7b7b7"
                          fillRule="nonzero"
                          d="M 17.587 0.745 c 0.125 -0.43 0 -0.745 -0.596 -0.745 h -1.969 c -0.5 0 -0.731 0.273 -0.856 0.573 c 0 0 -1.002 2.512 -2.42 4.143 c -0.46 0.473 -0.668 0.623 -0.918 0.623 c -0.126 0 -0.307 -0.15 -0.307 -0.58 V 0.745 C 10.521 0.23 10.376 0 9.96 0 H 6.864 a 0.48 0.48 0 0 0 -0.501 0.466 c 0 0.488 0.71 0.6 0.782 1.975 v 2.984 c 0 0.654 -0.114 0.773 -0.365 0.773 c -0.667 0 -2.291 -2.523 -3.254 -5.41 C 3.336 0.227 3.148 0 2.644 0 H 0.675 C 0.113 0 0 0.273 0 0.573 c 0 0.537 0.668 3.199 3.108 6.72 C 4.736 9.696 7.028 11 9.115 11 c 1.251 0 1.406 -0.29 1.406 -0.788 V 8.395 c 0 -0.58 0.119 -0.695 0.515 -0.695 c 0.292 0 0.793 0.15 1.961 1.31 c 1.335 1.374 1.556 1.99 2.307 1.99 h 1.969 c 0.562 0 0.844 -0.29 0.681 -0.86 c -0.177 -0.57 -0.815 -1.396 -1.66 -2.375 c -0.46 -0.559 -1.148 -1.16 -1.357 -1.46 c -0.292 -0.387 -0.208 -0.558 0 -0.902 c 0 0 2.4 -3.477 2.65 -4.658 Z"
                        ></path>
                      </svg>
                      <span className="text-sm text-muted-foreground">VK</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{reviews[currentReview].text}</p>
              </div>

              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border rounded-full p-2 hover:bg-muted transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border rounded-full p-2 hover:bg-muted transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? "bg-teal-500" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <PricingSection
            title="Сколько стоит"
            subtitle=""
            tiers={[
              {
                name: "BASIC",
                price: "4410 ₽",
                originalPrice: "6210 ₽",
                features: [
                  "12 уроков (видео + задания на отработку)",
                  "Интерактивные задания для практики в каждом уроке",
                  "Визуальные словари",
                  "Доступ на 3 месяца",
                  "Доступ к эфирам «Вопрос-ответ» с Веней Паком на 3 месяца",
                  "Сертификат",
                  "Скидка на любой практикум",
                ],
                popular: false,
                spots: null,
              },
              {
                name: "STANDARD",
                price: "5850 ₽",
                originalPrice: "7200 ₽",
                features: [
                  "14 уроков (два бонусных урока: Modern Idioms и Modern Slang)",
                  "Все из тарифа BASIC",
                  "Проверка творческих заданий куратором",
                  "Чат для общения",
                ],
                popular: true,
                spots: null,
              },
              {
                name: "PRO",
                price: "9900 ₽",
                originalPrice: "23670 ₽",
                features: [
                  "Все из тарифа STANDARD",
                  "Личный чат с Веней на 1 месяц",
                  "Сеты с лексикой в Quizlet",
                  "Доступ к дополнительному практикуму «Нецензурно по-английски»",
                ],
                popular: false,
                spots: null,
              },
            ]}
            onSelectTier={scrollToBooking}
            showUrgency={false}
          />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Form */}
      <section id="booking-form" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BookingForm title="Забронируй участие в Everyday English" price="4410 ₽" description="Everyday English" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Когда можно приступить к практикуму?</h3>
              <p className="text-muted-foreground">Вы можете приступить к практикуму сразу после оплаты.</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Какой уровень нужен для интенсива?</h3>
              <p className="text-muted-foreground">Для участия в практикуме рекомендуется уровень B1-B2.</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Как проходит обучение?</h3>
              <p className="text-muted-foreground">
                Обучение проходит в формате видеоуроков с интерактивными заданиями. Все материалы доступны в личном
                кабинете.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Coordinator</h2>
            <p className="text-muted-foreground mb-4">
              Если появились вопросы, напишите координатору интенсива:{" "}
              <a href="mailto:online@linguatrip.com" className="text-teal-500 hover:underline">
                online@linguatrip.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Он отвечает на письма по будням с 10 до 19 по Мск. Если написали позже, ответ придет на следующий день.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 LinguaTrip. Все права защищены.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
