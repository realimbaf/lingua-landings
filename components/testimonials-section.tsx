"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  name: string
  avatar: string
  text: string
  verified?: boolean
}

interface VideoTestimonial {
  name: string
  avatar: string
  videoUrl: string
  verified?: boolean
}

interface TestimonialsSectionProps {
  title?: string
  testimonials: Testimonial[]
  videoTestimonial?: VideoTestimonial
  backgroundColor?: "white" | "slate"
}

function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split("v=")[1]?.split("&")[0]
  return `https://www.youtube.com/embed/${videoId}`
}

export function TestimonialsSection({
  title = "Отзывы",
  testimonials,
  videoTestimonial,
  backgroundColor = "slate",
}: TestimonialsSectionProps) {
  const [activeReview, setActiveReview] = useState(0)

  const bgClass = backgroundColor === "slate" ? "bg-slate-50" : "bg-white"

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>

        {videoTestimonial && (
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={videoTestimonial.avatar || "/placeholder.svg"}
                  alt={videoTestimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{videoTestimonial.name}</h3>
                    {videoTestimonial.verified && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" width="18" height="11">
                        <path
                          fill="#b7b7b7"
                          fillRule="nonzero"
                          d="M 17.587 0.745 c 0.125 -0.43 0 -0.745 -0.596 -0.745 h -1.969 c -0.5 0 -0.731 0.273 -0.856 0.573 c 0 0 -1.002 2.512 -2.42 4.143 c -0.46 0.473 -0.668 0.623 -0.918 0.623 c -0.126 0 -0.307 -0.15 -0.307 -0.58 V 0.745 C 10.521 0.23 10.376 0 9.96 0 H 6.864 a 0.48 0.48 0 0 0 -0.501 0.466 c 0 0.488 0.71 0.6 0.782 1.975 v 2.984 c 0 0.654 -0.114 0.773 -0.365 0.773 c -0.667 0 -2.291 -2.523 -3.254 -5.41 C 3.336 0.227 3.148 0 2.644 0 H 0.675 C 0.113 0 0 0.273 0 0.573 c 0 0.537 0.668 3.199 3.108 6.72 C 4.736 9.696 7.028 11 9.115 11 c 1.251 0 1.406 -0.29 1.406 -0.788 V 8.395 c 0 -0.58 0.119 -0.695 0.515 -0.695 c 0.292 0 0.793 0.15 1.961 1.31 c 1.335 1.374 1.556 1.99 2.307 1.99 h 1.969 c 0.562 0 0.844 -0.29 0.681 -0.86 c -0.177 -0.57 -0.815 -1.396 -1.66 -2.375 c -0.46 -0.559 -1.148 -1.16 -1.357 -1.46 c -0.292 -0.387 -0.208 -0.558 0 -0.902 c 0 0 2.4 -3.477 2.65 -4.658 Z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYouTubeEmbedUrl(videoTestimonial.videoUrl)}
                  title={`Видео-отзыв от ${videoTestimonial.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </Card>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={testimonials[activeReview].avatar || "/placeholder.svg"}
                alt={testimonials[activeReview].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{testimonials[activeReview].name}</h3>
                  {testimonials[activeReview].verified && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11" width="18" height="11">
                      <path
                        fill="#b7b7b7"
                        fillRule="nonzero"
                        d="M 17.587 0.745 c 0.125 -0.43 0 -0.745 -0.596 -0.745 h -1.969 c -0.5 0 -0.731 0.273 -0.856 0.573 c 0 0 -1.002 2.512 -2.42 4.143 c -0.46 0.473 -0.668 0.623 -0.918 0.623 c -0.126 0 -0.307 -0.15 -0.307 -0.58 V 0.745 C 10.521 0.23 10.376 0 9.96 0 H 6.864 a 0.48 0.48 0 0 0 -0.501 0.466 c 0 0.488 0.71 0.6 0.782 1.975 v 2.984 c 0 0.654 -0.114 0.773 -0.365 0.773 c -0.667 0 -2.291 -2.523 -3.254 -5.41 C 3.336 0.227 3.148 0 2.644 0 H 0.675 C 0.113 0 0 0.273 0 0.573 c 0 0.537 0.668 3.199 3.108 6.72 C 4.736 9.696 7.028 11 9.115 11 c 1.251 0 1.406 -0.29 1.406 -0.788 V 8.395 c 0 -0.58 0.119 -0.695 0.515 -0.695 c 0.292 0 0.793 0.15 1.961 1.31 c 1.335 1.374 1.556 1.99 2.307 1.99 h 1.969 c 0.562 0 0.844 -0.29 0.681 -0.86 c -0.177 -0.57 -0.815 -1.396 -1.66 -2.375 c -0.46 -0.559 -1.148 -1.16 -1.357 -1.46 c -0.292 -0.387 -0.208 -0.558 0 -0.902 c 0 0 2.4 -3.477 2.65 -4.658 Z"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{testimonials[activeReview].text}</p>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveReview((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="border-slate-300"
            >
              ←
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeReview ? "bg-teal-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveReview((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="border-slate-300"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
