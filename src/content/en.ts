import type { Content } from './types'

// TODO: review all texts, contacts and periods below.
export const en: Content = {
  htmlLang: 'en',
  name: 'Marlon Santana dos Santos',
  role: 'Fullstack developer',
  location: 'Icó, CE — Brazil',
  bio: "I'm a junior developer with a degree in Systems Analysis and Development. I was born in Icó, in the countryside of Ceará, and I'm looking for new opportunities for my career. My focus is web development.",
  contacts: [
    { label: 'Email', value: 'your-email@example.com', href: 'mailto:your-email@example.com' },
    { label: 'GitHub', value: 'github.com/MarlonSdS', href: 'https://github.com/MarlonSdS' },
    { label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: 'https://linkedin.com/in/your-profile' },
  ],
  resume: { label: 'Resume (PDF)', href: '/curriculo.pdf' },
  sections: { experience: 'Professional experience', education: 'Education' },
  experience: [
    {
      title: 'Developer (temporary)',
      place: 'Municipal Health Department',
      period: 'Period to be defined',
      description:
        "Analyzed and fixed a legacy database used by the department, then integrated it into the department's system through an API provided by the team.",
    },
  ],
  education: [
    {
      title: 'Systems Analysis and Development',
      place: 'Universidade Dr. Leão Sampaio (UniLeão)',
      period: 'Period to be defined',
    },
  ],
  ui: { theme: 'Toggle light/dark theme', language: 'Language' },
}
