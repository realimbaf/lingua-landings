"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { Check, BookOpen, Brain, Target, Award, Video, FileText, MessageSquare, Monitor } from "lucide-react"

export default function EnglishTensesPage() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/ef8efcad58374a1dbc27ca089fc1a2e3c09e7028c9e941cda854e898bfc41474.jpg&width=2360&height=980&quality=95&mode=resize')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Английские времена</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
            Освой все времена английского языка раз и навсегда
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="text-lg">
              <span className="text-slate-300">От</span>
              <span className="text-3xl font-bold ml-2">5670 ₽</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg"
            >
              Забронировать место
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/20 hover:bg-white/30 border-white text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm">
            {[
              "Кто ведет практикум",
              "Что даст практикум",
              "Кому подходит",
              "Как проходит обучение",
              "Программа",
              "Сколько стоит",
              "Отзывы",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="whitespace-nowrap text-slate-600 hover:text-teal-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Студенты любого уровня часто допускают ошибки в использовании времен в английском языке и путают формы
              глаголов. Мы создали этот практикум, чтобы помочь вам раз и навсегда освоить времена.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Все объяснения даны в простой для понимания форме, а примеры основаны на реальном жизненном опыте. Вы
              освоите использование времен и сделаете этот навык естественным и автоматическим.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Этот практикум отлично подходит для студентов от уровня pre-intermediate до уровня выше среднего. Те, кто
              только начал, смогут усвоить все понятия временного употребления, а те, кто изучает английский уже
              некоторое время, усовершенствуют свои знания и станут ближе к носителям языка.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="кто-ведет-практикум" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Кто ведёт практикум</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Marina Mogilko */}
            <Card className="p-8">
              <div className="flex gap-6 mb-6">
                <img
                  src="https://site.linguacdn.download//Images/online/products/teachers/marina/marina-card.webp"
                  alt="Марина Могилко"
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Марина Могилко</h3>
                  <p className="text-slate-600">Основатель LinguaTrip</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Живёт и работает в США. Поступила в пять американских вузов на MBA и магистратуру, сдала TOEFL — на 117
                из 120 и GMAT — на 700 из 800. Марина ведёт три YouTube-канала c 7+ млн. подписчиков, где рассказывает
                об обучении за рубежом, изучении английского языка и жизни в США.
              </p>
            </Card>

            {/* Venya Pak */}
            <Card className="p-8">
              <div className="flex gap-6 mb-6">
                <img
                  src="https://site.linguacdn.download//Images/online/products/teachers/venya/venya-card.webp"
                  alt="Веня Пак"
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Веня Пак</h3>
                  <p className="text-slate-600">Преподаватель из Лос-Анджелеса</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Сертифицированный преподаватель из Лос-Анджелеса (TESOL) и автор собственной системы изучения языка и
                трёх учебных пособий. Окончил музыкальный вуз в Лос-Анджелесе, пишет музыку на английском — у него
                отличный слух и идеальное произношение. Веня ведёт свой канал на Youtube, на котором уже 6 лет учит
                реальному английскому.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="что-даст-практикум" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Что даст практикум</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Всё по полочкам</h3>
              <p className="text-slate-600">
                Подробно разберёшь всю систему английских времён и навсегда избавишься от проблем выбора.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Мышление носителей</h3>
              <p className="text-slate-600">
                На реальных примерах из жизни научишься определять контекст использования времён.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Закрепление через практику</h3>
              <p className="text-slate-600">
                Крутая домашка после каждого урока в виде теста для тех, у кого мало времени, и дополнительного воркбука
                для тех, кто хочет больше.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Понятный материал</h3>
              <p className="text-slate-600">
                Никакой воды и перегруженных таблиц, только полезная информация в удобном формате, которая останется
                после курса в виде памяток и воркбука.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="кому-подходит" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Кому подходит</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50">
              <Check className="w-6 h-6 text-teal-600 mb-3" />
              <p className="text-slate-700">
                Тем, кто хочет комплексно подходить к временам, чтобы начать использовать их автоматически и перейти на
                более сложную грамматику
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <Check className="w-6 h-6 text-purple-600 mb-3" />
              <p className="text-slate-700">
                Тем, кто знает основные правила английских времен, но не понимает их и постоянно путает формы
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <Check className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-slate-700">
                Тем, кто уже знаком с основными временами, но хочет освежить память и изучить более сложные времена
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
              <Check className="w-6 h-6 text-orange-600 mb-3" />
              <p className="text-slate-700">
                Тем, кто планирует сдавать экзамены по английскому языку, где правильное использование времен имеет
                жизненно важное значение
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="как-проходит-обучение" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Как проходит обучение</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Video className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Лекции и стримы</h3>
              <p className="text-slate-600 text-sm mb-2">
                Вы можете смотреть уроки где угодно и когда угодно, в своем собственном темпе. Единственное, что вам
                нужно, это доступ в Интернет.
              </p>
              <p className="text-xs text-slate-500">**Доступ на три месяца с момента покупки</p>
            </Card>

            <Card className="p-6">
              <FileText className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Домашние задания и тесты</h3>
              <p className="text-slate-600 text-sm">
                Марина и Веня будут давать вам тесты после каждого урока. Каждые 4 урока у вас также будет
                дополнительная практика в вашей рабочей тетради.
              </p>
            </Card>

            <Card className="p-6">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Конспекты лекций и памятки</h3>
              <p className="text-slate-600 text-sm">
                Мы собрали все конспекты лекций в удобном формате рабочей тетради. Там вы найдете всю информацию в
                сочетании с заданиями и тестами.
              </p>
            </Card>

            <Card className="p-6">
              <Award className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Сертификат и скидки</h3>
              <p className="text-slate-600 text-sm">
                Все студенты получат сертификат, который смогут добавить в свое резюме или использовать для получения
                визы. Кроме того, ты получишь скидку в размере 30% на другой курс.
              </p>
            </Card>

            <Card className="p-6">
              <MessageSquare className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Live Chat</h3>
              <p className="text-slate-600 text-sm">
                Для обладателей пакета Standard будет чат в Telegram. У обладателей тарифа Pro также будет закрытый чат
                с куратором.
              </p>
            </Card>

            <Card className="p-6">
              <Monitor className="w-8 h-8 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-3">Удобная онлайн-платформа</h3>
              <p className="text-slate-600 text-sm">
                Весь контент и задания собраны воедино в личном кабинете. Аккаунт доступен с любого устройства: ПК,
                ноутбука, смартфона или планшета.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="программа" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Программа практикума</h2>

          <div className="space-y-8">
            {/* Simple Tenses */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Simple tenses</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-teal-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Present Simple</h4>
                    <p className="text-slate-600 text-sm">Закладываем основы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-teal-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Past Simple</h4>
                    <p className="text-slate-600 text-sm">Путешествуем в прошлое</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-teal-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Future Simple</h4>
                    <p className="text-slate-600 text-sm">Кто хочет заглянуть в будущее?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-amber-600">📝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Дополнительное практическое задание</h4>
                    <p className="text-slate-600 text-sm">Время для выполнения домашней работы</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Progressive Tenses */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Progressive tenses</h3>
              <p className="text-slate-600">Содержание раздела будет доступно после начала курса</p>
            </Card>

            {/* Perfect Tenses */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Perfect tenses</h3>
              <p className="text-slate-600">Содержание раздела будет доступно после начала курса</p>
            </Card>

            {/* Perfect Progressive */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Perfect Progressive</h3>
              <p className="text-slate-600">Содержание раздела будет доступно после начала курса</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="отзывы" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Отзывы</h2>
          <div className="text-center text-slate-600">
            <p>Отзывы студентов будут добавлены здесь</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Pricing Section */}
      <section id="сколько-стоит">
        <PricingSection
          title="Сколько стоит"
          subtitle=""
          tiers={[
            {
              name: "Basic",
              price: "5670 ₽",
              originalPrice: "10800 ₽",
              features: [
                "14 лекций в записи",
                "Прямой эфир каждый месяц",
                "Домашнее задание и тест после каждого урока",
                "Сертификат участника",
                "Доступ в личный кабинет — 3 месяца",
                "Скидка на один практикум на твой выбор",
                "Воркбук с правилами грамматики и дополнительными заданиями",
              ],
              spots: "∞",
              highlighted: false,
            },
            {
              name: "Standard",
              price: "6750 ₽",
              originalPrice: "12780 ₽",
              features: [
                "Всё, что в тарифе Basic",
                "Полезные памятки, которые помогут с выбором правильного времени",
                "Доступ к чату в Telegram с Веней и другими студентами",
              ],
              spots: "3",
              highlighted: true,
            },
            {
              name: "GURU",
              price: "9900 ₽",
              originalPrice: "18720 ₽",
              features: ["Всё, что в тарифе Standard", "Доступ к закрытому чату с куратором на 2 недели"],
              spots: "3",
              highlighted: false,
            },
          ]}
          showUrgency={true}
        />
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4">
          <BookingForm title="Забронируй участие в практикуме" subtitle="Английские времена" price="5670 ₽" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Написано, что лекции в записи. Как это работает?</h3>
              <p className="text-slate-600 text-sm">
                Все лекции доступны в записи в вашем личном кабинете. Вы можете смотреть их в любое удобное время.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Где брать записи и как долго можно ими пользоваться?</h3>
              <p className="text-slate-600 text-sm">
                Записи доступны в личном кабинете на платформе. Доступ предоставляется на 3 месяца с момента покупки.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">А что делать с домашкой?</h3>
              <p className="text-slate-600 text-sm">
                После каждого урока вы получаете тест для закрепления материала. Обладатели тарифа Pro могут проверить
                домашнюю работу с куратором.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Какой уровень нужен для прохождения практикума?</h3>
              <p className="text-slate-600 text-sm">
                Практикум подходит для студентов от уровня pre-intermediate до уровня выше среднего.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Я предпочитаю смотреть уроки на смартфоне. Это возможно?</h3>
              <p className="text-slate-600 text-sm">
                Да, платформа доступна с любого устройства: ПК, ноутбука, смартфона или планшета.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Хочу скидку 30% на другой курс. Как получить?</h3>
              <p className="text-slate-600 text-sm">
                Скидка 30% на другой курс предоставляется автоматически после завершения практикума.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Хочу вернуть деньги за практикум. Получится?</h3>
              <p className="text-slate-600 text-sm">
                Да, вы можете вернуть деньги в течение 14 дней с момента покупки, если не устроило качество курса.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
