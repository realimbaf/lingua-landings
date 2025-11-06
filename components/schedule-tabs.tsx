"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface ScheduleLesson {
  date?: string
  title: string
  description?: string
  isSpecial?: boolean
}

export interface ScheduleTab {
  id: string
  label: string
  note?: string
  lessons: ScheduleLesson[]
}

interface ScheduleTabsProps {
  tabs: ScheduleTab[]
  defaultTab?: string
}

export function ScheduleTabs({ tabs, defaultTab }: ScheduleTabsProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue={defaultTab || tabs[0]?.id} className="w-full">
        <TabsList className="flex flex-wrap w-full mb-8 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex-1 min-w-[120px]">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="space-y-6">
            {tab.note && (
              <Card className="p-6 bg-teal-50 dark:bg-teal-950/20">
                <p className="text-sm text-muted-foreground">{tab.note}</p>
              </Card>
            )}

            <div className="relative pl-8 space-y-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />

              {tab.lessons.map((lesson, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -left-8 w-6 h-6 rounded-full border-4 border-background ${
                      lesson.isSpecial ? "bg-yellow-500" : "bg-teal-500"
                    }`}
                  />
                  <div
                    className={`p-4 rounded-lg shadow-sm ${
                      lesson.isSpecial
                        ? "bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800"
                        : "bg-background"
                    }`}
                  >
                    {lesson.date && (
                      <div
                        className={`text-xs font-semibold mb-2 ${
                          lesson.isSpecial ? "text-yellow-700 dark:text-yellow-400" : "text-teal-600 dark:text-teal-400"
                        }`}
                      >
                        {lesson.date}
                      </div>
                    )}
                    <h3 className="font-bold text-lg mb-2">{lesson.title}</h3>
                    {lesson.description && <p className="text-muted-foreground text-sm">{lesson.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
