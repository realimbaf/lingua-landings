"use client"

import { HeroHeader } from "@/components/hero-header"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Zap, Globe, BookOpen } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export default function TurboEnglishPage() {
  const benefits = [
    {
      icon: Target,
      title: "Вижу цель — иду к ней",
      description:
        "Каждый сет ориентирован на конкретный запрос и результат. Учебники собраны в удобном сочетании и не содержат ничего лишнего.",
    },
    {
      icon: TrendingUp,
      title: "Турбо-сет — это выгодно!",
      description:
        "Приобретай наши культовые учебники по сниженной цене в составе турбо-сетов. Экономь силы и сбережения и приобретай любой сет для достижения твоих целей.",
    },
    {
      icon: Zap,
      title: "Быстро и эффективно",
      description:
        "Грамотно подобранная программа позволит максимально быстро прийти к результату: освоить новое, избавиться от ошибок, повысить уровень.",
    },
    {
      icon: Globe,
      title: "Везде и всегда под рукой",
      description:
        "Занимайся в комфортной обстановке: в любое время, в удобном месте. Всё, что от тебя требуется — доступ к интернету и желание учиться.",
    },
  ]

  const books = [
    {
      title: "Grammar is all you need",
      description: "Сложная английская грамматика простым языком",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/c103ba3902284193a60a1cc375cb135412f5485c0d86499da72a8b36843e765a.webp&quality=80&mode=resize",
    },
    {
      title: "3000 слов для Intermediate",
      description: "Вся нужная лексика для уровня Intermediate с озвучкой",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/7ca259f928ab4d6683c5d1dfc9b76eebac5d2909cd1e414b84b2608d92aabf3a.webp&quality=80&mode=resize",
    },
    {
      title: "TOEFL prep book",
      description: "Учебник для успешной сдачи экзамена TOEFL",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/0df3838bcda24038a12661d7a4a0eabbc3516d620b634eecbba9f94cbf2133a9.jpg&quality=80&mode=resize",
    },
    {
      title: "Минус 365 ошибок за год",
      description: "Избавление от самых частых ошибок всего за несколько минут в день",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/3ebaebc6fee94a438f9ce93e6d2a4af1488672d46b7142b39cbbcc76eb2def41.webp&quality=80&mode=resize",
    },
    {
      title: "Английский как стиль жизни",
      description: "Учебник о том, как перестать учить английский и начать на нём думать и жить",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/18309ceb6d5d45adaafe799fd44012a9644bfc412de94a898e9bed2be14393ad.webp&quality=80&mode=resize",
    },
    {
      title: "+300 английских слов и выражений",
      description: "Учебник для тех, кто хочет ввести в свою речь активную лексику",
      image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/a02c4412f22747648d3df691ee06b52c25603050515a4015833adab09a83a0d1.webp&quality=80&mode=resize",
    },
  ]

  const pricingTiers = [
    {
      name: "Прокачать словарный запас и speaking",
      price: "1079 ₽",
      originalPrice: "4770 ₽",
      spots: null,
      features: [
        "Учебник-словарь «3000 слов для Intermediate»",
        "Электронный учебник +300 ENGLISH WORDS AND EXPRESSIONS",
        "В подарок: Электронный учебник «Английский как стиль жизни»",
      ],
      popular: false,
      audience: [
        "Тем, кто готов избавиться от акцента и звучать как native speaker",
        "Кто хочет освоить всю необходимую лексику для уровня Intermediate +",
        "Кто хочет учить английский легко, в удовольствие и на регулярной основе",
      ],
    },
    {
      name: "Разобраться с грамматикой и понять её",
      price: "899 ₽",
      originalPrice: "4590 ₽",
      spots: null,
      features: [
        "Учебник в электронном формате «Grammar is all you need»",
        "Учебник-словарь «3000 слов для Intermediate»",
        "В подарок: Учебник-настолка «365 ошибок»",
      ],
      popular: true,
      audience: [
        "Тем, кто хочет освоить сложную английскую грамматику, разобраться с временами и подтянуть лексику",
        "Кому нужен грамотный письменный английский и чистая речь",
        "Кто сдает экзамены, планирует вести переписку на английском",
      ],
    },
    {
      name: "Подготовиться к поступлению",
      price: "2430 ₽",
      originalPrice: "6390 ₽",
      spots: null,
      features: ["Учебник «TOEFL prep book»", "В подарок: Учебник-словарь «3000 слов для Intermediate»"],
      popular: false,
      audience: [
        "Кто учится, сдает экзамены или планирует поступать университет",
        "Кто хочет без стеснения говорить с одногруппниками",
        "Кто мечтает получать стипендию и учиться в топовом вузе США или Европы",
      ],
    },
  ]

  const faqs = [
    {
      question: "Как я получу учебники?",
      answer:
        "После оплаты вы получите доступ к электронным версиям учебников в личном кабинете. Вы сможете скачать их на любое устройство и заниматься в удобное время.",
    },
    {
      question: "Можно купить учебники для друга?",
      answer:
        "Да, вы можете приобрести учебники в подарок. При оформлении заказа укажите email получателя, и мы отправим доступ к учебникам на указанный адрес.",
    },
    {
      question: "Хочу вернуть деньги за учебники. Получится?",
      answer:
        "Да, у нас действует политика возврата средств в течение 14 дней с момента покупки, если вы не удовлетворены качеством материалов. Свяжитесь с нашей службой поддержки для оформления возврата.",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     
      {/* Hero Header */}
      <HeroHeader
        title="Turbo English"
        subtitle="Купи 2 учебника и получи 3-й в подарок"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/1cc77e7b94be4615ae70747060dfba782f44db855b4a426192bdc258995b8c34.jpg&width=1180&height=490&quality=80&mode=resize"
        stats={[{ label: "Стоимость", value: "от 899 ₽" }]}
        ctaButtons={[
          {
            label: "Купить",
            onClick: () => scrollToSection("pricing"),
          },
          {
            label: "Подробнее",
            onClick: () => scrollToSection("format"),
          },
        ]}
        accentColor="teal"
      />

       <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-teal-600" />
              <span className="font-bold text-xl">LinguaTrip</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("format")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Новый формат
              </button>
              <button
                onClick={() => scrollToSection("books")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Культовые учебники
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Сколько стоит
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Частые вопросы
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Турбо-сеты учебников от LinguaTrip — это буст знаний, приближающий к конкретной цели. Больше не придётся
              думать о том, как собрать комплект материалов, включающих в себя темы по английскому, которые нужны именно
              тебе.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div id="format">
        <BenefitsSection title="Новый формат турбо-сетов" benefits={benefits} accentColor="teal" />
      </div>

      {/* Books Section */}
      <section id="books" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Внутри турбо-сетов наши культовые учебники
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {books.map((book, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-48 h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection
          title="Сколько стоит"
          subtitle="Цены скоро повысятся!"
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

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection title="Частые вопросы" faqs={faqs} accentColor="teal" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
