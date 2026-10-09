import type { Content } from './types'

// TODO: review all texts, contacts and periods below.
export const en: Content = {
  htmlLang: 'en',
  name: 'Marlon Santana dos Santos',
  role: 'Fullstack developer',
  location: 'Juazeiro do Norte, CE — Brazil',
  bio: "I'm a junior developer with a degree in Systems Analysis and Development. I was born in Icó, in the countryside of Ceará, Brazil, and I'm looking for new opportunities for my career. My focus is web development.",
  contacts: [
    { label: 'E-mail', value: 'marlon.sd.santos@protonmail.com', href: 'mailto:marlon.sd.santos@protonmail.com' },
    { label: 'Cellphone', value: '+55 88 9 9646-9864', href: 'https://wa.me/5588996469864' },
    { label: 'GitHub', value: 'github.com/MarlonSdS', href: 'https://github.com/MarlonSdS' },
    { label: 'LinkedIn', value: 'linkedin.com/in/marlon-dos-santos-17469417b', href: 'https://www.linkedin.com/in/marlon-dos-santos-17469417b' },
  ],
  resume: { label: 'Resume (PDF)', href: '/resume.pdf' },
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
