import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, ArrowDown } from "lucide-react"

export default function PhrasalVerbsLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/f9ffd03f259b4c389d20b10fd270f5ff8ebf4441afbc40af8922117ff9841d8d.jpg&width=1180&height=490&quality=80&mode=resize')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-600">Онлайн-интенсив</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            с Мариной Могилко и Настей Ивбуле
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">
            Победи фразовые глаголы в английском
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-balance">
            За 14 уроков сделаем речь живой и научим не путаться в предлогах
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div>
              <span className="font-semibold">Старт:</span> В любой день
            </div>
            <div>
              <span className="font-semibold">Всего уроков:</span> 14
            </div>
            <div>
              <span className="font-semibold">Стоимость:</span> От 9810 ₽
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
              Забронировать участие
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto gap-6 py-4 text-sm whitespace-nowrap">
            <li>
              <a href="#authors" className="hover:text-primary transition-colors">
                Кто ведет интенсив
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-primary transition-colors">
                Что даст интенсив
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-primary transition-colors">
                Как проходит обучение
              </a>
            </li>
            <li>
              <a href="#who-fits" className="hover:text-primary transition-colors">
                Кому подходит
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-primary transition-colors">
                Программа
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-primary transition-colors">
                Сколько стоит
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                Частые вопросы
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Authors Section */}
      <section id="authors" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Кто ведет интенсив</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">О Марине Могилко</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Живёт в Сан-Франциско, управляет LinguaTrip.com и ведёт три YouTube-канала с более, чем семью
                  миллионами подписчиков. Сдала языковые экзамены на высокие баллы: TOEFL на 117 из 120 и GMAT на 700 из
                  800. Поступила в пять американских университетов на MBA и в магистратуру.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">О Насте Ивбуле</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Выпускница Бостонского университета (топ-40 в США). Сдала IELTS на 9 из 9 и TOEFL на 119 из 120, а
                  CELTA на максимальный Grade A. Свободно говорит на русском, английском, испанском, французском и
                  итальянском.
                </p>
              </Card>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zA4dtr28YP4"
                title="Презентация курса"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Что даст интенсив</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Посмотрите, как изменится ваш английский всего за 14 уроков
          </p>

          {/* Transformation Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
              {/* BEFORE - Left Side */}
              <div className="space-y-4">
                <div className="text-center lg:text-right mb-6">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-red-500/10 text-red-700 border-red-200">
                    😰 Сейчас вы...
                  </Badge>
                </div>

                <Card className="p-6 bg-red-500/5 border-red-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="text-4xl flex-shrink-0">😕</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-red-900">Путаетесь в предлогах</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Get up, get on, get in... Какая разница? Постоянно делаете ошибки и боитесь говорить
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-red-500/5 border-red-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="text-4xl flex-shrink-0">🤷</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-red-900">Не понимаете носителей</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        В сериалах и разговорах постоянно проскакивают непонятные фразы. Приходится переспрашивать
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-red-500/5 border-red-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="text-4xl flex-shrink-0">📝</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-red-900">Пишете как робот</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ваши письма звучат формально и неестественно. Коллеги сразу видят, что вы не носитель
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-red-500/5 border-red-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="text-4xl flex-shrink-0">😰</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-red-900">Боитесь ошибиться</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Избегаете фразовых глаголов в речи, потому что не уверены в правильности использования
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* ARROW - Center */}
              <div className="flex justify-center items-center lg:block lg:self-center">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center shadow-xl animate-pulse">
                    <div className="text-4xl lg:text-5xl">→</div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <Badge className="bg-primary text-xs">14 уроков</Badge>
                  </div>
                </div>
              </div>

              {/* AFTER - Right Side */}
              <div className="space-y-4">
                <div className="text-center lg:text-left mb-6">
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 bg-green-500/10 text-green-700 border-green-200"
                  >
                    ✨ После интенсива...
                  </Badge>
                </div>

                <Card className="p-6 bg-green-500/5 border-green-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">🗣️</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-green-900">Говорите как носитель</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Используете фразовые глаголы естественно и уверенно. Ваша речь звучит живо и современно
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-green-500/5 border-green-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">⚡</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-green-900">Понимаете на лету</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Схватываете смысл мгновенно в любой ситуации. Сериалы, подкасты, разговоры — всё понятно
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-green-500/5 border-green-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">✍️</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-green-900">Пишете профессионально</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Ваши письма звучат естественно и профессионально. Коллеги впечатлены вашим уровнем
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-green-500/5 border-green-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">💪</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-green-900">Уверены в себе</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Больше не боитесь ошибок. Знаете систему и можете использовать любой фразовый глагол правильно
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* End of restructured layout */}

            {/* Bottom Summary Card */}
            <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Трансформация за 14 уроков</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  От неуверенности и путаницы к свободному владению фразовыми глаголами
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    🎯 Системный подход
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    💡 Практические примеры
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    ✅ Проверенная методика
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Как проходит обучение</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Пошаговый путь к свободному владению фразовыми глаголами
          </p>

          <div className="max-w-6xl mx-auto space-y-8 relative">
            {[
              {
                title: "Уроки и трансляции",
                description:
                  "14 уроков в записи и одна новая онлайн-трансляция каждый месяц, а также доступ к уже прошедшим. Можно смотреть онлайн или в записи.",
                note: "*Доступ к курсу — 3 месяца.",
                emoji: "📹",
              },
              {
                title: "Домашнее задание",
                description:
                  "После каждого урока тебя ждёт задание от Насти и Марины. Советуем не откладывать домашку: так материал запомнится гораздо быстрее.",
                emoji: "📝",
              },
              {
                title: "Полезные материалы",
                description: "Памятки — чтобы меньше конспектировать и быстрее запоминать материал.",
                note: "*Только для тарифов Master и Guru.",
                emoji: "📚",
              },
              {
                title: "Сертификат и скидка",
                description: "Участники интенсива получат сертификат, а также скидку 30 $ — на интенсив.",
                emoji: "🎓",
              },
              {
                title: "Живое общение",
                description:
                  "Для тех, кому нужны советы, будет чат в Telegram. Там можно пообщаться с другими студентами и задать вопросы Насте.",
                note: "*Только для тарифов Master и Guru.",
                emoji: "💬",
              },
              {
                title: "Персональные советы",
                description:
                  "Личная консультация с Настей Ивбуле, на которой уяснишь самые каверзные нюансы + дополнительное задание с проверкой.",
                note: "*Только для тарифа Guru.",
                emoji: "👨‍🏫",
              },
            ].map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative">
                  {/* Journey step */}
                  <div
                    className={`flex flex-col lg:flex-row gap-6 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Left/Right content */}
                    <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 group inline-block w-full">
                        <div className={`flex items-start gap-4 ${isEven ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                          <div className="text-5xl group-hover:scale-110 transition-transform flex-shrink-0">
                            {item.emoji}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            {item.note && (
                              <p className="text-sm text-muted-foreground italic mt-3 bg-muted/50 p-2 rounded">
                                {item.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Center step indicator */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-background">
                        {index + 1}
                      </div>
                    </div>

                    {/* Right/Left spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>

                  {/* Arrow connector */}
                  {index < 5 && (
                    <div className="flex justify-center my-4">
                      <div className="flex flex-col items-center">
                        <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Journey completion badge */}
          <div className="mt-16 flex justify-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 inline-block">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Путешествие завершено!</h3>
                  <p className="text-muted-foreground">Теперь ты владеешь фразовыми глаголами как носитель</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Fits Section */}
      <section id="who-fits" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Кому подходит</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Этот интенсив создан специально для тех, кто хочет наконец разобраться в фразовых глаголах
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Featured card - larger and more prominent */}
            <Card className="p-8 mb-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    Студентам и школьникам, которые никак не могут разобраться в фразовых глаголах
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Если фразовые глаголы кажутся сложными и запутанными, этот курс для вас. Мы разложим всё по полочкам
                    и научим использовать их уверенно.
                  </p>
                </div>
              </div>
            </Card>

            {/* Grid of other audience cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Готовишься к экзаменам",
                  description: "TOEFL, IELTS, CAE — фразовые глаголы везде",
                  emoji: "📋",
                  color: "bg-blue-500/10",
                },
                {
                  title: "Работаешь с иностранцами",
                  description: "Нужна уверенность в деловом общении",
                  emoji: "💼",
                  color: "bg-purple-500/10",
                },
                {
                  title: "Смотришь сериалы",
                  description: "Хочешь понимать всё без субтитров",
                  emoji: "🎬",
                  color: "bg-pink-500/10",
                },
                {
                  title: "Живёшь за границей",
                  description: "Или планируешь переезд",
                  emoji: "✈️",
                  color: "bg-green-500/10",
                },
                {
                  title: "Любишь английский",
                  description: "И хочешь прокачать его до нового уровня",
                  emoji: "❤️",
                  color: "bg-red-500/10",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base leading-tight">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-15">{item.description}</p>
                </Card>
              ))}
            </div>

            {/* Bottom CTA card */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👋</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Не уверен, подходит ли тебе курс?</h3>
                    <p className="text-muted-foreground text-sm">
                      Забронируй бесплатную консультацию, и мы поможем определиться
                    </p>
                  </div>
                </div>
                <Button className="whitespace-nowrap">Получить консультацию</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Программа курса</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            14 уроков, которые изменят твой английский навсегда
          </p>
          <div className="max-w-4xl mx-auto space-y-3">
            {[
              { lesson: 1, title: "Универсальные фразовые глаголы", emoji: "🌟" },
              { lesson: 2, title: "Самые популярные фразовые глаголы в США. Часть 1", emoji: "🇺🇸" },
              { lesson: 3, title: "Самые популярные фразовые глаголы в США. Часть 2", emoji: "🗽" },
              { lesson: 4, title: "Семья", emoji: "👨‍👩‍👧‍👦" },
              { lesson: 5, title: "Шоппинг", emoji: "🛍️" },
              { lesson: 6, title: "Путешествия", emoji: "✈️" },
              { lesson: 7, title: "Работа и бизнес", emoji: "💼" },
              { lesson: 8, title: "Вечеринки и отдых", emoji: "🎉" },
              { lesson: 9, title: "Деньги", emoji: "💰" },
              { lesson: 10, title: "Новые хобби", emoji: "🎨" },
              { lesson: 11, title: "Учёба", emoji: "📚" },
              { lesson: 12, title: "Отношения", emoji: "💕" },
              { lesson: 13, title: "Общение по телефону", emoji: "📱" },
              { lesson: 14, title: "Фразовые глаголы в письменной речи", emoji: "✍️" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-5 hover:shadow-lg transition-all duration-300 hover:border-primary group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs font-bold">
                        Урок {item.lesson}
                      </Badge>
                      <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary card */}
          <Card className="mt-8 p-8 bg-primary/5 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Полная программа за 14 уроков</h3>
                <p className="text-muted-foreground">
                  От базовых универсальных глаголов до профессиональной письменной речи
                </p>
              </div>
              <div className="flex gap-4 text-center">
                <div className="px-6 py-4 bg-background rounded-lg shadow">
                  <div className="text-3xl font-bold text-primary">14</div>
                  <div className="text-sm text-muted-foreground">уроков</div>
                </div>
                <div className="px-6 py-4 bg-background rounded-lg shadow">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">месяца</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Сколько стоит</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите тариф, который подходит именно вам
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* NEWBIE Tariff */}
            <Card className="p-6 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">NEWBIE</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-2">9810 ₽</div>
                  <Badge variant="secondary" className="text-xs">
                    Мест: ∞
                  </Badge>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>14 лекций в записи</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Доступ к общей трансляции раз в месяц</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Домашнее задание к каждому уроку</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Сертификат</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Личный кабинет. Доступ — 3 месяца</span>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Забронировать
              </Button>
            </Card>

            {/* MASTER Tariff */}
            <Card className="p-6 flex flex-col border-2 border-primary shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярный</Badge>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">MASTER</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-2">11610 ₽</div>
                  <Badge variant="secondary" className="text-xs bg-orange-500/10 text-orange-700 border-orange-200">
                    Осталось мест: 3
                  </Badge>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>14 лекций в записи</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Доступ к общей трансляции раз в месяц</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Домашнее задание к каждому уроку</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Сертификат</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Личный кабинет. Доступ — 3 месяца</span>
                </div>

                <div className="pt-4 mt-4 border-t">
                  <div className="text-xs font-semibold text-primary mb-3">ДОПОЛНИТЕЛЬНО</div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>Чат в Телеграм для вопросов</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm mt-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>
                      Дополнительные памятки по самым используемым идиомам для тех, кому мало фразовых глаголов
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full">Забронировать</Button>
            </Card>

            {/* GURU Tariff */}
            <Card className="p-6 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">GURU</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-2">15210 ₽</div>
                  <Badge variant="secondary" className="text-xs bg-orange-500/10 text-orange-700 border-orange-200">
                    Осталось мест: 5
                  </Badge>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>14 лекций в записи</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Доступ к общей трансляции раз в месяц</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Домашнее задание к каждому уроку</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Сертификат</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>Личный кабинет. Доступ — 3 месяца</span>
                </div>

                <div className="pt-4 mt-4 border-t">
                  <div className="text-xs font-semibold text-primary mb-3">ДОПОЛНИТЕЛЬНО</div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>Чат в Телеграм для вопросов</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm mt-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>
                      Дополнительные памятки по самым используемым идиомам для тех, кому мало фразовых глаголов
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm mt-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>Консультация с Настей Ивбуле</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm mt-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>Дополнительное итоговое задание с проверкой</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Забронировать
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами удобным способом, и мы поможем выбрать подходящий тариф
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600">
                Забронировать консультацию
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Send className="w-5 h-5" />
                Telegram
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Какой уровень английского нужен?",
                answer:
                  "Рекомендуем уровень Intermediate (B1) и выше. Если вы понимаете этот текст без словаря — вам подойдёт.",
              },
              {
                question: "Сколько времени займёт обучение?",
                answer: "14 уроков, каждый длится 40-60 минут. Можно проходить в своём темпе в течение 3 месяцев.",
              },
              {
                question: "Будут ли домашние задания?",
                answer:
                  "Да, после каждого урока. Они помогут закрепить материал и отработать фразовые глаголы на практике.",
              },
              {
                question: "Хочу скидку 30 $ на интенсив. Как получить?",
                answer:
                  "Скидку получат все, кто закончил курс. Ссылка появится в последнем уроке. Внимание: скидка ≠ возврат стоимости пройденного интенсива. Это возможность записаться на другой понравившийся курс по сниженной цене.",
              },
              {
                question: "Похоже, что тариф Guru — самый крутой. Что в нём такого?",
                answer:
                  "В тарифе Guru есть личная консультация с Настей Ивбуле, на которой она ответит на любые вопросы и расскажет, как сохранить полученные навыки. А ещё тебя ждёт дополнительное итоговое домашнее задание, по которому Настя даст подробную обратную связь.",
              },
              {
                question: "Хочу вернуть деньги за интенсив. Получится?",
                answer:
                  "Да, но только если ты еще не приступил к курсу. Если ты уже запустил курс на платформе, условия возврата средств после старта курса можно узнать у нас на почте online@linguatrip.com",
              },
              {
                question: "Получу ли я сертификат?",
                answer: "Да, все участники получают сертификат о прохождении интенсива на русском и английском языках.",
              },
              {
                question: "Как проходит обучение?",
                answer:
                  "Уроки доступны в записи в личном кабинете. Смотрите когда удобно, выполняйте задания и общайтесь в чате.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к тысячам студентов, которые уже улучшили свой английский
          </p>
          <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
            Забронировать участие
          </Button>
        </div>
      </section>
    </div>
  )
}
