"use client"

import type React from "react"

import { useState } from "react"
import { HeroHeader } from "@/components/hero-header"
import { BenefitsSection } from "@/components/benefits-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, FileText, Briefcase, GraduationCap, TrendingUp, Check, ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { BookingForm } from "@/components/booking-form"

const pricingTiers = [
    {
      name: "Учебник «Essential word families for IELTS",
      price: "450 ₽",
      originalPrice: "700 ₽",
      spots: null,
      features: [
        "Электронный учебник - подборка самых необходимых слов для сдачи IELTS",
      ],
      popular: false,
      audience: [
        "Тем, кто готов избавиться от акцента и звучать как native speaker",
        "Кто хочет освоить всю необходимую лексику для уровня Intermediate +",
        "Кто хочет учить английский легко, в удовольствие и на регулярной основе",
      ],
    },
  ]

export default function IELTSWordFamiliesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
    agreeToNewsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle purchase logic here
  }

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
        title="Essential word families for IELTS"
        subtitle="Топ необходимых слов для IELTS"
        backgroundImage="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/cd109b1f12e74581a2f9eb55ab986a43b165fb5c98b94ce98dcd2fede21b6ca5.jpg&width=1180&height=490&quality=80&mode=resize"
        stats={[
          { label: "Стоимость", value: "450 ₽" },
          { label: "Формат", value: "PDF" },
          { label: "Слов", value: "130+" },
        ]}
        ctaButtons={[
          {
            label: "Купить учебник",
            onClick: () => scrollToSection("purchase-form"),
          },
          {
            label: "Подробнее",
            onClick: () => scrollToSection("content"),
          },
        ]}
        accentColor="teal"
      />

       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("content")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Что внутри
              </button>
              <button
                onClick={() => scrollToSection("audience")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Кому подходит
              </button>
              <button
                onClick={() => scrollToSection("preview")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Как выглядит
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                Купить
              </button>
            </div>
            <Button onClick={() => scrollToSection("purchase-form")} className="bg-teal-600 hover:bg-teal-700">
              Купить учебник
            </Button>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              В этом учебнике мы собрали все самые нужные слова для успешной сдачи экзамена IELTS.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <BenefitsSection
        id="content"
        title="Что внутри"
        benefits={[
          {
            icon: BookOpen,
            title: "Более 130 однокоренных слов",
            description: "Слова сгруппированы по алфавиту и частям речи для удобного изучения и запоминания.",
          },
          {
            icon: FileText,
            title: "Слова в контексте",
            description: "Все слова даны в контексте актуальных и понятных примеров для лучшего усвоения.",
          },
        ]}
        accentColor="teal"
      />

      {/* Target Audience */}
      <TargetAudienceSection
        id="audience"
        title="Кому подходит"
        audiences={[
          "Тем, кто хочет подтвердить свой уровень английского языка.",
          "Абитуриентам английских, американских и других университетов, где принимают IELTS.",
          "Стажёрам и соискателям работы в международных компаниях.",
          "Тем, кто хочет быстрее двигаться по карьерной лестнице.",
        ]}
        accentColor="teal"
      />

       {/* Book Preview */}
      <section id="preview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как выглядит</h2>
            <p className="text-lg text-gray-600">Посмотрите на пример страницы из учебника</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-teal-100">
              <CardContent className="p-0">
                <Image
                  src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/cedb3e1c5db8498a88f526e23ecf4e5e49c105632b3c4ce3b725a4028ee38e52.jpg&width=1000&height=698&quality=100&mode=crop"
                  alt="Страница учебника Essential word families for IELTS"
                  width={1000}
                  height={698}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
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
          title="Купить учебник"
        />
      </section>


     {/* Additional Courses */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Дополнительные курсы и пособия</h2>
            <p className="text-lg text-gray-600">Продолжайте развивать свой английский</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Хит
              </div>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/93a901317ced436e9e9117fb73a00daeef6e8100e00749f0901fb20ad06c5156.jpeg&quality=80&mode=resize"
                    alt="Получи 7.5 или выше на IELTS"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Получи 7.5 или выше на IELTS</CardTitle>
                <CardDescription>
                  Подготовься к экзамену за 2 недели и получи максимально возможный балл
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-600 mb-4">от 109$</p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Узнать больше
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Хит
              </div>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://site.linguacdn.download//en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms%5Cimages%5C903d129b8a6543e691e621084b96469a34fbb513810d4e2bad5dc213032fb7f9.jpg&width=400&height=168&mode=crop&autorotate=true&quality=80&webp=True&quality=80&mode=resize"
                    alt="Grammar is all you need"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Книга «Grammar is all you need»</CardTitle>
                <CardDescription>Cложная английская грамматика простым языком</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-600 mb-4">от 6.99$</p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Узнать больше
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Суперскидка
              </div>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/89e4297bd248409b9e3c2bfc045bfb2251fbf8d3eb03497881a8a2b6228a07ab.webp&quality=80&mode=resize"
                    width={300}
                    height={200}
                    alt={""}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Разберись с временами раз и навсегда</CardTitle>
                <CardDescription>
                  Научись правильно выбирать время в английском и доведи этот навык до автоматизма
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-600 mb-4">от 72$</p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Узнать больше
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Суперскидка
              </div>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/files/6ecf3f8785a549e3b4a975aa9efebac071c7f1637a354d919708488bbd384535.jpg&quality=80&mode=resize"
                    alt="Подготовка к поступлению"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Подготовка к поступлению в зарубежный вуз</CardTitle>
                <CardDescription>Составим пошаговый план твоего поступления за границу</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-600 mb-4">от 102$</p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Узнать больше
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
