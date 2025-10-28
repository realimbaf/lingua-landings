"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductCard } from "@/components/product-card"
import type { FilterOptions } from "@/components/product-filters"
import { Testimonials } from "@/components/testimonials"
import { BlackFridayBanner } from "@/components/black-friday-banner"
import { BundleDeals } from "@/components/bundle-deals"
import { WhyChooseUs } from "@/components/why-choose-us"
import {
  BookOpen,
  Zap,
  Star,
  Users,
  Sparkles,
  MessageCircle,
  Send,
  ChevronDown,
  Calendar,
  Clock,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image" // Added for the team section

type Product = {
  title: string
  description: string
  instructor?: string
  href: string
  category: string
  image: string
  price: number
  originalPrice: number
  discount: number
  badge?: string
  featured?: boolean
  levels?: string[]
  topics?: string[]
  categoryType: "books" | "intensives" | "marathons" | "special" | "manuals" | "scheduled" | "self-paced"
  startDate?: string
}

const ALL_PRODUCTS: Product[] = [
  {
    title: "Everyday English",
    description: "Интерактивный практикум с Веней Паком",
    instructor: "с Веней Паком",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/4c1fab522ea24b6880ebaa3aafb102286216c1cd60c4480fb4a1e1efa170b30d.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 4410,
    originalPrice: 6210,
    discount: 29,
    badge: "Новинка",
    categoryType: "self-paced",
    levels: ["B1", "B2", "C1"],
    topics: ["vocabulary", "speaking"],
  },
  {
    title: "Shortcut к Intermediate",
    description: "мастер-класс с Веней Паком",
    instructor: "с Веней Паком",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/1dfe6da8045c41159ad7828587fe9d29cc89f8df05d141e4b4d37e8e096a1a21.png&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 2250,
    originalPrice: 2250,
    discount: 0,
    badge: "Новинка",
    categoryType: "self-paced",
    levels: ["A2", "B1", "B2", "C1", "C2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Наставничество Вени Пака",
    description: "Индивидуальная работа с Веней над твоим произношением за 4 недели",
    instructor: "с Веней Паком",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    featured: true,
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/b9599fdbe77e4a86afc69ab4f5008870d485e3c22d9442cb9b2ff9d56313b535.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 148500,
    originalPrice: 168300,
    discount: 12,
    badge: "Новинка",
    categoryType: "special",
    levels: ["B2"],
    topics: ["pronunciation", "speaking"],
  },
  {
    title: "Разберись с временами раз и навсегда",
    description: "Научись правильно выбирать время в английском",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/d2383df754734be5ae0a8a255634f5bc0d799787bc22449297df4603b2977528.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 5670,
    originalPrice: 10800,
    discount: 47,
    badge: "Суперскидка",
    categoryType: "self-paced",
    levels: ["A2", "B1", "B2"],
    topics: ["grammar", "tenses"],
  },
  {
    title: "TOEFL выше 100 баллов",
    description: "Подготовься к TOEFL и сдай на максимальный балл",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/8b51e475b0d74f8694af77636d86c02da60436e2733d4ce1a40a8b27df3c6bde.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 9810,
    originalPrice: 9810,
    discount: 0,
    badge: "Хит",
    categoryType: "self-paced",
    levels: ["B2", "C1", "C2"],
    topics: ["exam"],
  },
  {
    title: "Самая нужная лексика английского языка",
    description: "Продвинутый словарный запас для переезда, работы и общения",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/f6bf2cea4a774eaca0a0cb656678bb541b672dd8390b4b4db4fec5ec236d5d3f.jpeg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 6750,
    originalPrice: 15750,
    discount: 57,
    badge: "Суперскидка",
    categoryType: "self-paced",
    levels: ["B1", "B2", "C1"],
    topics: ["vocabulary"],
  },
  {
    title: "От Advanced до Proficiency",
    description: "Высшая ступень владения английским за два месяца",
    href: "/products/phrasal-verbs",
    category: "Курс в своём темпе",
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/4c938f37b4d44ea398623a64d228e11b12c771c1a80a458c9007ae7da5515874.jpeg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 8820,
    originalPrice: 8820,
    discount: 0,
    categoryType: "self-paced",
    levels: ["C1", "C2"],
    topics: ["grammar", "vocabulary", "speaking"],
  },
  {
    title: "2 шага до Advanced: скиллы и произношение",
    description: "Английский до уровня Advanced и идеальное произношение",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/f52634ed324c4997baa305c63369cb282546ed1b8c9447c38c8900371d6a01f9.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 12960,
    originalPrice: 17640,
    discount: 27,
    badge: "Новинка",
    categoryType: "scheduled",
    startDate: "Старт 31 октября",
    levels: ["B2", "C1"],
    topics: ["pronunciation", "speaking"],
  },
  {
    title: "От Elementary до Intermediate",
    description: "Рывок до среднего уровня за 7 недель",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/3d346d575b014b69a6c1ed32c2414d8471062a5d243744879d2c181eabcec0cb.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 8820,
    originalPrice: 8820,
    discount: 0,
    categoryType: "scheduled",
    startDate: "Старт уже послезавтра",
    levels: ["A2", "B1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "С нуля до базового",
    description: "Английский с нуля и сразу «правильно»",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/1aa218579c0640d5ae61514f7b9e6b77c8b7183bf09042f79884a999acb4340b.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 6840,
    originalPrice: 6840,
    discount: 0,
    badge: "Новинка",
    categoryType: "scheduled",
    startDate: "Старт 24 ноября",
    levels: ["A1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Lingua Speaking Club PRO",
    description: "Общайся, заводи друзей и прокачивай разговорный английский",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/ac277c08425a4c34837494e602caf3cc4397dca802b8496395adbcaba8daebc3.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 4680,
    originalPrice: 4680,
    discount: 0,
    categoryType: "scheduled",
    startDate: "Старт 3 ноября",
    levels: ["A2", "B1", "B2", "C1"],
    topics: ["speaking"],
  },
  {
    title: "От Intermediate до Advanced",
    description: "Преодолей средний уровень за 7 недель",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/fc6d6727e09d413c906c90866371411cfda781dab48d4afba972727a627a7eab.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 8820,
    originalPrice: 8820,
    discount: 0,
    badge: "Хит",
    categoryType: "scheduled",
    startDate: "Старт 31 октября",
    levels: ["B1", "B2", "C1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "ЧИТ-КОДЫ ПРОИЗНОШЕНИЯ",
    description: "Американское произношение за четыре недели",
    href: "/products/phrasal-verbs",
    category: "Курс с датой старта",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/d2ca5b505fdc460aa5d3f4c548b89cb3ccb944be5c65426c9f13c60b335de5d1.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 6660,
    originalPrice: 8820,
    discount: 24,
    badge: "Новинка",
    categoryType: "scheduled",
    startDate: "Старт 24 ноября",
    levels: ["B2", "C1"],
    topics: ["pronunciation"],
  },
  {
    title: "Мобильное приложение «3000 слов для Intermediate»",
    description: "Приложение по одноимённому пособию Linguatrip — теперь у тебя в кармане",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/1cd6e1231932493a9542f1135fd81388131966bd25594e728899608b84b456ea.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 810,
    originalPrice: 1350,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2"],
    topics: ["vocabulary"],
  },
  {
    title: "Turbo English",
    description: "Купи 2 учебника и получи 3-й в подарок",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/22bc24ff2e4146c8a10b176d00a90eb0f5af4927000d4c678d72ffb0948b0020.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 899,
    originalPrice: 1498,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2", "C1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Essential word families for IELTS",
    description: "Топ необходимых слов для IELTS",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/e8bbbc4903c0459aa8e2a93af0bae34e842c12726ccd40d4b95268b454536354.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 450,
    originalPrice: 750,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B2", "C1", "C2"],
    topics: ["exam", "vocabulary"],
  },
  {
    title: "TOEFL prep book",
    description: "Учебник для успешной сдачи экзамена TOEFL",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/eb872885c5574c13b8644f67979806b14f9210d0.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 1980,
    originalPrice: 3300,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B2", "C1", "C2"],
    topics: ["exam"],
  },
  {
    title: "+300 английских слов и выражений",
    description: "ТОП-300 самых нужных слов для перехода на средний уровень",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/0c102f1e993b48cdac172eecca63fbb9bd767904a2a94ae6ab3ed73190c58d31.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 630,
    originalPrice: 1050,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2", "C1"],
    topics: ["vocabulary"],
  },
  {
    title: "Английский как стиль жизни",
    description: "Учебник о том, как перестать учить английский и начать на нём думать и жить",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/1d50096076254399a4f0c89f116c0dfc89a8c59bcb9547e69d893b3506a9acca.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 630,
    originalPrice: 1050,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    topics: ["vocabulary", "speaking"],
  },
  {
    title: "Учебник «Минус 365 ошибок за год»",
    description: "Избавься от обидных ошибок в английском всего за пару минут в день с нашим учебником-тетрадью",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/a8ce650562a644b6992c4d3617ae4bf27a0adedf50764e75a58ef3d8c0e72890.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 540,
    originalPrice: 900,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2"],
    topics: ["grammar"],
  },
  {
    title: "Словарь-учебник «3000 слов для Intermediate»",
    description: "Вся нужная лексика для среднего уровня под одной обложкой",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/d4e64710917f4fde983bdab83f0fcc0a6b6dd92ffd9c400a9e82cbed7d89dced.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 810,
    originalPrice: 1350,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2"],
    topics: ["vocabulary"],
  },
  {
    title: "Учебник «Grammar is all you need»",
    description: "Cложная английская грамматика простым языком",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/903d129b8a6543e691e621084b96469a34fbb513810d4e2bad5dc213032fb7f9.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 630,
    originalPrice: 1050,
    discount: 40,
    categoryType: "manuals",
    levels: ["B1", "B2", "C1"],
    topics: ["grammar"],
  },
  {
    title: "Учебник «12-in-1 Tenses Handbook»",
    description: "Самая сложная тема в английском простым языком",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/cfbd4cb46c6249dc897056b3ce3d9095eb40f1bb36214627a04978a855d6b8d7.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 540,
    originalPrice: 900,
    discount: 40,
    categoryType: "manuals",
    levels: ["A2", "B1", "B2"],
    topics: ["grammar", "tenses"],
  },
  {
    title: "Учебник «Продвинутая грамматика»",
    description: "Разберись со сложной грамматикой раз и навсегда",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/23d0f780917a4db09ece7170eface9b06d6371d78f1e4b9c946de812b7f5d728.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 540,
    originalPrice: 900,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2", "C1"],
    topics: ["grammar"],
  },
  {
    title: "Секреты английского для Intermediate",
    description: "Прикладной английский для тех, кто хочет стать уверенным Advanced",
    href: "/products/phrasal-verbs",
    category: "Пособие",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/684bc4420c2549de9c854aed80f1c31b16874d87584c4d00bf78e08ec165776b.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 540,
    originalPrice: 900,
    discount: 40,
    badge: "Новинка",
    categoryType: "manuals",
    levels: ["B1", "B2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Grammar is all you need",
    description: "Сложная английская грамматика простым языком",
    href: "/products/phrasal-verbs",
    category: "Книга по грамматике",
    image: "/english-grammar-book-cover-modern-design.jpg",
    price: 2990,
    originalPrice: 4990,
    discount: 40,
    categoryType: "books",
    levels: ["A1", "A2", "B1", "B2"],
    topics: ["grammar"],
  },
  {
    title: "12-in-1 Tenses",
    description: "Самая сложная тема в английском простым языком",
    href: "/products/phrasal-verbs",
    category: "Книга по временам",
    image: "/english-tenses-book-cover-colorful.jpg",
    price: 2490,
    originalPrice: 3990,
    discount: 38,
    categoryType: "books",
    levels: ["A2", "B1", "B2"],
    topics: ["grammar", "tenses"],
  },
  {
    title: "Говорим по-американски",
    description: "Поставим произношение как у носителя языка из США",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/american-english-pronunciation-teacher.jpg",
    price: 7990,
    originalPrice: 12990,
    discount: 38,
    badge: "Хит продаж",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2", "C1"],
    topics: ["pronunciation", "speaking"],
  },
  {
    title: "Разберись с временами раз и навсегда",
    description: "Научись правильно выбирать время в английском и доведи этот навык до автоматизма",
    instructor: "с Веней Пак и Мариной Могилко",
    href: "/products/phrasal-verbs",
    image: "/english-tenses-learning-online-course.jpg",
    price: 8990,
    originalPrice: 14990,
    discount: 40,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["A2", "B1", "B2"],
    topics: ["grammar", "tenses"],
  },
  {
    title: "Разговорный английский",
    description: "Выучи иностранный язык по песням",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/conversational-english-music-learning.jpg",
    price: 6990,
    originalPrice: 9990,
    discount: 30,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["A2", "B1", "B2"],
    topics: ["vocabulary", "speaking"],
  },
  {
    title: "Думай и говори как носитель",
    description: "Живой разговорный язык от американцев за 3 недели",
    instructor: "с Веней Пак и Тикеей Дей",
    href: "/products/phrasal-verbs",
    image: "/native-english-speaker-teaching.jpg",
    price: 9990,
    originalPrice: 15990,
    discount: 38,
    badge: "Новинка",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["speaking", "slang"],
  },
  {
    title: "Грамматика и лексика для уровня А1",
    description: "Английский до уровня А2 за две недели",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/beginner-english-level-a1-course.jpg",
    price: 5990,
    originalPrice: 8990,
    discount: 33,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["A1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Грамматика и лексика для уровня А2",
    description: "2 уровня за две недели (на английском с субтитрами)",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/english-level-a2-intermediate-course.jpg",
    price: 6490,
    originalPrice: 9990,
    discount: 35,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["A2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Грамматика и лексика для уровня В1",
    description: "Поднимись с В1 до В2 за две недели",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/english-level-b1-upper-intermediate.jpg",
    price: 7490,
    originalPrice: 11990,
    discount: 38,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "TOEFL выше 100 баллов",
    description: "Подготовься к экзамену за 2 недели и сдай на максимальный балл",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/toefl-exam-preparation-high-score.jpg",
    price: 12990,
    originalPrice: 19990,
    discount: 35,
    badge: "Популярный",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["exam"],
  },
  {
    title: "IELTS на 7,5 баллов и выше",
    description: "Подготовься к экзамену за 2 недели и сдай на максимальный балл",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/ielts-exam-preparation-high-band.jpg",
    price: 12990,
    originalPrice: 19990,
    discount: 35,
    badge: "Популярный",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["exam"],
  },
  {
    title: "Лексика, которую хотят все",
    description: "Говори как надо: 30 дней погружения в самую крутую современную лексику",
    instructor: "с Веней Пак и Мариной Могилко",
    href: "/products/phrasal-verbs",
    image: "/modern-english-vocabulary-slang.jpg",
    price: 8490,
    originalPrice: 12990,
    discount: 35,
    badge: "Для детей",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2", "C1"],
    topics: ["vocabulary", "slang"],
  },
  {
    title: "Еще больше лексики, которую хотят все",
    description: "Говори еще лучше: 4 недели погружения в самую крутую лексику",
    instructor: "с Веней Пак и Мариной Могилко",
    href: "/products/phrasal-verbs",
    image: "/advanced-english-vocabulary-modern.jpg",
    price: 9490,
    originalPrice: 14990,
    discount: 37,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["vocabulary", "slang"],
  },
  {
    title: "Английский: те самые основы",
    description: "Базовые темы — за 14 занятий",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/english-basics-fundamentals-course.jpg",
    price: 5490,
    originalPrice: 7990,
    discount: 31,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["A1", "A2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Английская грамматика",
    description: "Разбираемся с артиклями и условными предложениями",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/english-grammar-articles-conditionals.jpg",
    price: 6990,
    originalPrice: 9990,
    discount: 30,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2"],
    topics: ["grammar"],
  },
  {
    title: "Прокачиваем аудирование на английском",
    description: "Научим за 20 дней понимать носителей на слух",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 7490,
    originalPrice: 10990,
    discount: 32,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2", "C1"],
    topics: ["listening"],
  },
  {
    title: "Нецензурно по-английски",
    description: "Экспресс-погружение в мир английских ругательств и непристойного сленга",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 4990,
    originalPrice: 6990,
    discount: 29,
    badge: "18+",
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2", "C1"],
    topics: ["slang", "vocabulary"],
  },
  {
    title: "Победи фразовые глаголы в английском",
    description: "За 14 уроков сделаем речь живой и научим не путаться в предлогах",
    instructor: "с Мариной Могилко и Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 6490,
    originalPrice: 8990,
    discount: 28,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B1", "B2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "От Advanced до Proficiency",
    description: "За 25 дней доведем английский до совершенства",
    instructor: "с Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 11990,
    originalPrice: 17990,
    discount: 33,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["C1", "C2"],
    topics: ["grammar", "vocabulary", "speaking"],
  },
  {
    title: "Мотивационное письмо на английском",
    description: "Покажем, как написать, чтобы поступить в университет или колледж",
    instructor: "email-курс",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 3990,
    originalPrice: 5990,
    discount: 33,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["business"],
  },
  {
    title: "Поступаем в США",
    description: "Как выбрать университет, получить полное финансирование и оформить студенческую визу в США",
    instructor: "с Мариной Могилко",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 8990,
    originalPrice: 12990,
    discount: 31,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["business"],
  },
  {
    title: "Математические задачи GMAT на высокий балл",
    description: "Научим решать задания из части Quantitative быстро и эффективно",
    instructor: "с Дмитрием Чайкой",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 9990,
    originalPrice: 14990,
    discount: 33,
    category: "Интенсив",
    categoryType: "intensives",
    levels: ["B2", "C1"],
    topics: ["exam"],
  },
  {
    title: "Вырвись из среднего уровня",
    description: "Грамматика и лексика для рывка вперёд",
    instructor: "с Мариной Могилко и Настей Ивбуле",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 14990,
    originalPrice: 22990,
    discount: 35,
    badge: "Хит продаж",
    category: "Марафон",
    categoryType: "marathons",
    levels: ["B1", "B2"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "Заговори на английском как профи",
    description: "Прокачиваем лексику, грамматику и произношение за месяц",
    instructor: "челлендж-марафон с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 12990,
    originalPrice: 18990,
    discount: 32,
    badge: "Челлендж",
    category: "Марафон",
    categoryType: "marathons",
    levels: ["B1", "B2"],
    topics: ["grammar", "vocabulary", "pronunciation", "speaking"],
  },
  {
    title: "Бытовая лексика",
    description: "Самая базовая лексика, без которой ни в магазин, ни на вечеринку",
    instructor: "с Веней Пак",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 7990,
    originalPrice: 11990,
    discount: 33,
    category: "Марафон",
    categoryType: "marathons",
    levels: ["A1", "A2", "B1"],
    topics: ["vocabulary"],
  },
  {
    title: "Недельный практикум по временам",
    description: "7 стримов в формате «бери и делай» по самой сложной теме в английском",
    instructor: "с Марией Бусыга",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 4990,
    originalPrice: 6990,
    discount: 29,
    category: "Марафон",
    categoryType: "marathons",
    levels: ["A2", "B1", "B2"],
    topics: ["grammar", "tenses"],
  },
  {
    title: "Грамматический практикум",
    description: "Для тех, кто с английским на «ты»",
    instructor: "с Марией Бусыга",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 8990,
    originalPrice: 12990,
    discount: 31,
    category: "Марафон",
    categoryType: "marathons",
    levels: ["B2", "C1"],
    topics: ["grammar"],
  },
  {
    title: "Английский для работы и бизнеса",
    description: "Как строить карьеру и бизнес в США — лексика, инструкции и шаблоны",
    instructor: "с Мариной Могилкой и Еленой Анисимовой",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 13990,
    originalPrice: 19990,
    discount: 30,
    badge: "Для бизнеса",
    category: "Марафон",
    categoryType: "marathons",
    levels: ["B2", "C1"],
    topics: ["business", "vocabulary"],
  },
  {
    title: "Английский для юных первооткрывателей",
    description: "Легко и увлекательно исследуем планету и мир английского языка",
    instructor: "с Елизаветой Бабошко",
    href: "/products/phrasal-verbs",
    image: "/placeholder.svg?height=400&width=600",
    price: 9990,
    originalPrice: 14990,
    discount: 33,
    badge: "Для детей",
    category: "Марафон",
    categoryType: "marathons",
    levels: ["A1", "A2"],
    topics: ["vocabulary", "grammar"],
  },
  {
    title: "Языковой коуч",
    description: "Индивидуальный план учебы, регулярный фидбек и доступ ко всем нашим интенсивам",
    instructor: "с преподавателем",
    href: "/products/phrasal-verbs",
    featured: true,
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/674dfa4a6b4e42ac99f5c398745663e918c21db385204eafa9233b78929f3369.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 49990,
    originalPrice: 69990,
    discount: 29,
    badge: "Премиум",
    category: "Специальная программа",
    categoryType: "special",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    topics: ["grammar", "vocabulary", "speaking", "pronunciation"],
  },
  {
    title: "Индивидуальные онлайн-уроки с преподавателем",
    description: "Индивидуальные онлайн-уроки с преподавателем",
    instructor: "с преподавателем",
    href: "/products/phrasal-verbs",
    featured: true,
    image: "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/edd1eaa4edf54c03af46ed0dc2ecc9712a2e08adca724b93ba58508f74441828.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 2150,
    originalPrice: 2250,
    discount: 10,
    badge: "Премиум",
    category: "Специальная программа",
    categoryType: "special",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    topics: ["grammar", "vocabulary", "speaking", "pronunciation"],
  },
  {
    title: "От Elementary до Intermediate",
    description: "Рывок до среднего уровня за 7 недель",
    href: "/products/phrasal-verbs",
    category: "Марафон",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/3d346d575b014b69a6c1ed32c2414d8471062a5d243744879d2c181eabcec0cb.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 8820,
    originalPrice: 8820,
    discount: 0,
    categoryType: "marathons",
    levels: ["A2", "B1"],
    topics: ["grammar", "vocabulary"],
  },
  {
    title: "От Intermediate до Advanced",
    description: "Преодолей средний уровень за 7 недель",
    href: "/products/phrasal-verbs",
    category: "Марафон",
    image:
      "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/cms/images/fc6d6727e09d413c906c90866371411cfda781dab48d4afba972727a627a7eab.jpg&width=800&height=336&mode=crop&autorotate=true&quality=95&webp=False",
    price: 8820,
    originalPrice: 8820,
    discount: 0,
    categoryType: "marathons",
    levels: ["B1", "B2", "C1"],
    topics: ["grammar", "vocabulary"],
  },
]

export default function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    levels: [],
    topics: [],
    categories: [],
  })
  const [showAllManuals, setShowAllManuals] = useState(false)

  const scrollToScheduledCourses = () => {
    const element = document.getElementById("scheduled-courses")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      if (filters.categories.length > 0 && !filters.categories.includes(product.categoryType)) {
        return false
      }

      if (filters.levels.length > 0) {
        const hasMatchingLevel = product.levels?.some((level) => filters.levels.includes(level))
        if (!hasMatchingLevel) return false
      }

      if (filters.topics.length > 0) {
        const hasMatchingTopic = product.topics?.some((topic) => filters.topics.includes(topic))
        if (!hasMatchingTopic) return false
      }

      return true
    })
  }, [filters])

  const productsByCategory = useMemo(() => {
    return {
      scheduled: filteredProducts.filter((p) => p.categoryType === "scheduled"),
      selfPaced: filteredProducts.filter((p) => p.categoryType === "self-paced"),
      manuals: filteredProducts.filter((p) => p.categoryType === "manuals"),
      books: filteredProducts.filter((p) => p.categoryType === "books"),
      intensives: filteredProducts.filter((p) => p.categoryType === "intensives"),
      marathons: filteredProducts.filter((p) => p.categoryType === "marathons"),
      special: filteredProducts.filter((p) => p.categoryType === "special"),
    }
  }, [filteredProducts])

  const bestsellerCourses = useMemo(() => {
    return ALL_PRODUCTS.filter(
      (p) =>
        (p.title === "От Elementary до Intermediate" || p.title === "От Intermediate до Advanced") &&
        p.categoryType === "marathons",
    )
  }, [])

  const displayedManuals = useMemo(() => {
    return showAllManuals ? productsByCategory.manuals : productsByCategory.manuals.slice(0, 3)
  }, [productsByCategory.manuals, showAllManuals])

  return (
    <main className="min-h-screen">
      {/* Black Friday Banner */}
      <BlackFridayBanner />

      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-8 md:py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,256,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,256,0.08),transparent_50%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6 space-y-3">
              <div className="flex justify-center items-center gap-2 mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M9.01266 0C9.5458 0.0549301 9.93931 0.304613 10.1475 0.796487C10.1957 0.911341 10.2186 1.04367 10.2186 1.16851C10.2186 3.1485 10.866 4.89627 12.2115 6.37689C13.2499 7.51794 14.5218 8.29695 16.0628 8.61404C16.398 8.68395 16.7356 8.75137 17.0707 8.81629C17.647 8.92615 17.9339 9.28819 17.9923 9.84997C18.0532 10.4467 17.741 10.8837 17.4541 11.3456C16.3599 13.1008 14.8493 14.3942 12.9376 15.2281C12.1531 15.5702 11.3356 15.8299 10.4699 15.8973C9.87584 15.9447 9.27923 15.9922 8.68515 15.9996C7.04764 16.0146 5.53961 15.5477 4.13059 14.7512C2.34075 13.74 1.01043 12.3068 0.0990123 10.4942C0.0863184 10.4692 0.0330041 10.4617 0 10.4467C0 10.1671 0 9.88992 0 9.61028C0.0380816 9.56533 0.0863184 9.52289 0.111706 9.47295C0.291959 9.10592 0.563608 8.89119 0.992661 8.8088C1.67305 8.67896 2.36106 8.53914 3.00591 8.30194C5.80618 7.26826 7.77881 4.44435 7.79658 1.4132C7.80166 0.591747 8.09616 0.214727 8.88825 0H9.01012L9.01266 0ZM14.8315 10.8237C12.2699 9.9873 10.3633 8.39932 9.01773 6.0548C7.68488 8.39682 5.77825 9.97731 3.24709 10.8187C6.1413 14.4941 11.9805 14.4891 14.8315 10.8237Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xl md:text-2xl font-bold text-white/90 tracking-wide">linguatrip</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance leading-tight">
                Английский без скуки — это реально!
              </h1>
            </div>
            {/* </CHANGE> */}

            <p className="text-base md:text-lg text-primary-foreground/85 mb-6 text-pretty leading-relaxed">
              Реальный английский от людей, которые живут в США и знают, как на нём действительно говорят. Первые
              результаты — уже через 2 недели!
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToScheduledCourses}
                className="text-base px-8 h-12 font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Выбрать курс
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 font-semibold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Бесплатная консультация
              </Button>
            </div>

            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-5 py-1.5 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              50,000+ довольных студентов выбрали нас
            </Badge>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/90 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 p-0 group"
          title="Написать в Telegram"
        >
          <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 p-0 group"
          title="Написать в WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground text-base px-4 py-1">🔥 Бестселлеры</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Самые популярные марафоны</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Два уровня за 30 дней — проверенная программа от Вени Пак и Марины Могилко
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bestsellerCourses.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* Scheduled Courses */}
          {productsByCategory.scheduled.length > 0 && (
            <div id="scheduled-courses">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold">Онлайн-курсы с датой старта</h2>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Наши марафоны и практикумы — это насыщенные курсы, на которых ежедневно по расписанию открывается новый
                онлайн-урок. У них фиксированная дата старта, присоединиться к курсу раньше или позже не получится.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory.scheduled.map((product, index) => (
                  <div key={index} className="relative">
                    {product.startDate && (
                      <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 shadow-lg font-semibold">
                        <Calendar className="w-3 h-3 mr-1" />
                        {product.startDate}
                      </Badge>
                    )}
                    {/* </CHANGE> */}
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-10 md:p-12 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-balance">Не знаешь, что выбрать?</h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Забронируй бесплатную консультацию или напиши нам — мы поможем подобрать идеальный курс для тебя
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-base md:text-lg px-8 md:px-10 h-12 md:h-14 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Бесплатная консультация
                </Button>

                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white border-[#0088cc] hover:border-[#0088cc]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Telegram
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366] hover:border-[#25D366]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* End of "Не знаешь что выбрать" section */}

          {/* Self-Paced Courses */}
          {productsByCategory.selfPaced.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold">Онлайн-курсы в своём темпе</h2>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Интенсивы подходят тем, кто хочет начать изучать язык прямо сейчас и самостоятельно регулировать
                количество уроков в неделю. Доступ к материалам курса открывается сразу же после оплаты и действует три
                месяца с даты оплаты.
              </p>
              <ProductGrid products={productsByCategory.selfPaced} />
            </div>
          )}

          {/* Manuals */}
          {productsByCategory.manuals.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold">Наши пособия</h2>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
                Авторские методики, проверенные тысячами студентов. Сложные темы простым языком.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayedManuals.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
              {productsByCategory.manuals.length > 3 && (
                <div className="text-center">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setShowAllManuals(!showAllManuals)}
                    className="text-lg px-8 h-12 font-semibold"
                  >
                    {showAllManuals ? (
                      <>Показать меньше</>
                    ) : (
                      <>
                        Еще {productsByCategory.manuals.length - 3} пособий
                        <ChevronDown className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Special Programs */}
          {productsByCategory.special.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Star className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold">Наши специальные программы</h2>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
                Индивидуальный подход и персональное сопровождение для максимального результата.
              </p>
              <ProductGrid products={productsByCategory.special} />
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display font-bold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">Попробуйте изменить фильтры или сбросить их</p>
              <Button
                variant="outline"
                onClick={() =>
                  setFilters({
                    levels: [],
                    topics: [],
                    categories: [],
                  })
                }
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Наша команда экспертов</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Преподаватели с многолетним опытом, которые живут в США и знают все тонкости живого языка
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Веня Пак",
                role: "Эксперт по американскому произношению",
                image:
                  "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/venya-card.webp&width=800&height=800&mode=crop&autorotate=true&quality=95&webp=True",
                courses: "15+ курсов",
              },
              {
                name: "Марина Могилко",
                role: "Основатель Linguatrip, Кремниевая долина",
                image:
                  "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/marina-card.jpg&width=800&height=800&mode=crop&autorotate=true&quality=95",
                courses: "10+ курсов",
              },
              {
                name: "Настя Ивбуле",
                role: "Специалист по подготовке к экзаменам",
                image:
                  "https://site.linguacdn.download/en/imageprocessor/process/?src=https://mpreserverdata.blob.core.windows.net/data/new_landings/nastya-card.webp&width=800&height=800&mode=crop&autorotate=true&quality=95&webp=True",
                courses: "12+ курсов",
              },
            ].map((teacher, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-sm">{teacher.courses}</Badge>
                <h4 className="font-bold text-xl mb-1">{teacher.name}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End of team section */}

      {/* Bundle Deals */}
      <BundleDeals />

      {/* Testimonials */}
      <Testimonials />

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-base px-4 py-1">
            🚀 Начни прямо сейчас
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-balance">
            Начните учить английский с Linguatrip сегодня
          </h2>
          <p className="text-xl mb-4 text-primary-foreground/90 text-pretty">
            Присоединяйтесь к 50,000+ студентов, которые уже улучшили свой английский с нашими курсами
          </p>
          <p className="text-lg mb-8 text-primary-foreground/80 text-pretty">
            ✨ Первые результаты через 2 недели • 💯 Гарантия возврата денег • 🎓 Сертификаты по окончании
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 h-14 font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Выбрать курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 h-14 font-semibold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Linguatrip</p>
          <p>© 2025 Курсы английского языка. Все права защищены.</p>
        </div>
      </footer>
    </main>
  )
}
