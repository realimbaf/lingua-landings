"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, SlidersHorizontal } from "lucide-react"

export type FilterOptions = {
  levels: string[]
  topics: string[]
  categories: string[]
}

type ProductFiltersProps = {
  onFilterChange: (filters: FilterOptions) => void
  activeFilters: FilterOptions
}

const LEVELS = [
  { id: "A1", label: "A1 (Beginner)" },
  { id: "A2", label: "A2 (Elementary)" },
  { id: "B1", label: "B1 (Intermediate)" },
  { id: "B2", label: "B2 (Upper-Intermediate)" },
  { id: "C1", label: "C1 (Advanced)" },
  { id: "C2", label: "C2 (Proficiency)" },
]

const TOPICS = [
  { id: "grammar", label: "Грамматика" },
  { id: "vocabulary", label: "Лексика" },
  { id: "pronunciation", label: "Произношение" },
  { id: "speaking", label: "Разговорный" },
  { id: "listening", label: "Аудирование" },
  { id: "tenses", label: "Времена" },
  { id: "exam", label: "Подготовка к экзаменам" },
  { id: "business", label: "Бизнес-английский" },
  { id: "slang", label: "Сленг" },
]

const CATEGORIES = [
  { id: "books", label: "Пособия" },
  { id: "intensives", label: "Интенсивы" },
  { id: "marathons", label: "Марафоны" },
  { id: "special", label: "Специальные программы" },
]

export function ProductFilters({ onFilterChange, activeFilters }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilter = (type: keyof FilterOptions, value: string) => {
    const currentFilters = activeFilters[type]
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter((item) => item !== value)
      : [...currentFilters, value]

    onFilterChange({
      ...activeFilters,
      [type]: newFilters,
    })
  }

  const clearAllFilters = () => {
    onFilterChange({
      levels: [],
      topics: [],
      categories: [],
    })
  }

  const activeFilterCount = activeFilters.levels.length + activeFilters.topics.length + activeFilters.categories.length

  return (
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          <Button variant="outline" size="lg" onClick={() => setIsOpen(!isOpen)} className="gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Фильтры
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFilterCount}
              </Badge>
            )}
          </Button>

          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="gap-2">
              <X className="w-4 h-4" />
              Сбросить все
            </Button>
          )}
        </div>

        {isOpen && (
          <div className="space-y-6 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">Категория</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeFilters.categories.includes(category.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter("categories", category.id)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Levels */}
            <div>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                Уровень языка
              </h3>
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((level) => (
                  <Button
                    key={level.id}
                    variant={activeFilters.levels.includes(level.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter("levels", level.id)}
                    className="rounded-full"
                  >
                    {level.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">Тематика</h3>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <Button
                    key={topic.id}
                    variant={activeFilters.topics.includes(topic.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter("topics", topic.id)}
                    className="rounded-full"
                  >
                    {topic.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {activeFilterCount > 0 && !isOpen && (
          <div className="flex flex-wrap gap-2 mt-3">
            {activeFilters.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="gap-1">
                {CATEGORIES.find((c) => c.id === cat)?.label}
                <button onClick={() => toggleFilter("categories", cat)} className="ml-1 hover:text-destructive">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {activeFilters.levels.map((level) => (
              <Badge key={level} variant="secondary" className="gap-1">
                {LEVELS.find((l) => l.id === level)?.label}
                <button onClick={() => toggleFilter("levels", level)} className="ml-1 hover:text-destructive">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {activeFilters.topics.map((topic) => (
              <Badge key={topic} variant="secondary" className="gap-1">
                {TOPICS.find((t) => t.id === topic)?.label}
                <button onClick={() => toggleFilter("topics", topic)} className="ml-1 hover:text-destructive">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
