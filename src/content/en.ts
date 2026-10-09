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
      title: 'Fullstack Developer',
      place: 'Brup EdTech',
      period: 'november 2024 to august 2026',
      description:
        `I worked as a fullstack developer developing and maintaining distance learning websites. My main responsibilities included
         the development of a new online course platform, the maintenance of existing websites, integration with payment platform APIs,
         and the implementation of new visuals and functionalities for the websites. The website I worked on the most and is the company's 
         highlight was Ineves, a course platform for nursing students and professionals. It can be accessed at: https://ineves.com.br`,
      image: { src: '/works/ineves.webp', alt: 'Imagem do site Ineves' },
    },
  ],
  education: [
    {
      title: 'Systems Analysis and Development',
      place: 'University Dr. Leão Sampaio (UniLeão)',
      period: '2019 to 2022',
    },
  ],
  ui: { theme: 'Toggle light/dark theme', language: 'Language', image: 'Show complementary image' },
}
