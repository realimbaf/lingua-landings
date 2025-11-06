import Image from "next/image"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface Teacher {
  name: string
  image: string
  bio: string[]
  videoUrl?: string
}

interface TeachersSectionProps {
  title?: string
  subtitle?: string
  teachers: Teacher[]
  accentColor?: string
  backgroundColor?: "white" | "slate"
  ctaButton?: ReactNode
  id?: string
}

function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split("v=")[1]?.split("&")[0]
  return `https://www.youtube.com/embed/${videoId}`
}

export function TeachersSection({
  title = "Кто ведет практикум",
  subtitle,
  teachers,
  accentColor = "teal",
  backgroundColor = "slate",
  ctaButton,
  id,
}: TeachersSectionProps) {
  const isSingleTeacher = teachers.length === 1
  const bgClass = backgroundColor === "slate" ? "bg-slate-50" : "bg-white"

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">{subtitle}</p>}
        </div>

        {/* Single Teacher Layout */}
        {isSingleTeacher && (
          <Card className="max-w-5xl mx-auto border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-[500px_1fr] gap-8 p-8 md:p-10">
              <div className="flex flex-col items-center md:items-start">
                {teachers[0].videoUrl ? (
                  <div className="w-full aspect-square max-w-[500px] mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={getYouTubeEmbedUrl(teachers[0].videoUrl)}
                      title={`Видео о ${teachers[0].name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-full aspect-square max-w-[500px] mb-4">
                    <Image
                      src={teachers[0].image || "/placeholder.svg"}
                      alt={teachers[0].name}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center md:text-left">{teachers[0].name}</h3>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-4">
                  {teachers[0].bio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-${accentColor}-500 flex-shrink-0 mt-2`}
                        style={{ backgroundColor: accentColor === "teal" ? "#14b8a6" : undefined }}
                      />
                      <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}

        {/* Multiple Teachers Layout */}
        {!isSingleTeacher && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-content-center">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="p-6 border-slate-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300 w-full"
              >
                {teacher.videoUrl ? (
                  <div className="w-1/2 aspect-square mb-6 overflow-hidden rounded-full mx-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={getYouTubeEmbedUrl(teacher.videoUrl)}
                      title={`Видео о ${teacher.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-full"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-1/2 aspect-square mb-6 overflow-hidden rounded-full mx-auto">
                    <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6 text-center">{teacher.name}</h3>
                <ul className="space-y-3">
                  {teacher.bio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-${accentColor}-500 flex-shrink-0 mt-2`}
                        style={{ backgroundColor: accentColor === "teal" ? "#14b8a6" : undefined }}
                      />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {ctaButton && <div className="text-center mt-12">{ctaButton}</div>}
      </div>
    </section>
  )
}

