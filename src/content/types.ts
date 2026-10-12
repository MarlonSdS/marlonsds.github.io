export type Locale = 'pt' | 'en'

export interface TimelineItem {
  title: string
  place: string
  period: string
  description?: string
  image?: { src: string; alt: string }
}

export interface SkillGroup {
  title: string
  description?: string 
  link?: { label: string; href: string }
  items: string[]
}

export interface Content {
  htmlLang: string
  name: string
  role: string
  location: string
  bio: string
  contacts: { label: string; value: string; href: string }[]
  resume: { label: string; href: string }
  sections: { experience: string; education: string }
  experience: TimelineItem[]
  education: TimelineItem[]
  ui: { theme: string; language: string; image: string }
  skills: { title: string; groups: SkillGroup[] }
}
