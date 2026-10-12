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
    {
      title: 'Freelance System Analyst and Developer',
      place: 'Icó City Hall',
      period: 'january 2024 to april 2024',
      description:
      `I worked as a freelance system analyst and developer for the Icó City Hall, helping to fix and improve some legacy systems they 
      had. My main responsibilities included updating the communication with API's, fixing bugs, and implementing new features.`
    },
    {
      title: 'Web Development Intern',
      place: 'Grupo Intra EaD',
      period: 'april 2022 to march 2023',
      description:
      `I worked as a web development intern at Grupo Intra EaD, the group that owns Brup EdTech, the company where I recently worked. 
      My main job was to assist in updating an online course website, mainly on the front-end side, but also helping on the back-end side.`
    },
    {
      title: 'Intern',
      place: 'Fábrica de Software (Software Factory)',
      period: 'august 2019 to november 2021',
      description:
      `I was an intern at a project of my university called Fábrica de Software (Software Factory). Me and my colleagues were 
      responsible for developing different systems for the university and partner institutions. Our main project during my time there 
      was the reformulation of sytem owned by our city's health department, which had many integrations with systems of SUS 
      (Brazilian Unified Health System).`
    },
    {
      title: 'Intern',
      place: 'LC Informática',
      period: 'february 2018 to october 2018',
      description:
      `The internship at the end of my high school course. I worked at the computer assistance and parts company LC Informática, 
      where I helped to mount and repair computers, as well as to install and configure software.`
    }
  ],
  education: [
    {
      title: 'Systems Analysis and Development',
      place: 'University Dr. Leão Sampaio (UniLeão)',
      period: '2019 to 2022',
    },
  ],
  skills: {
    title: 'Technologies',
    groups: [
      {
        title: 'Used at work',
        description: `In my most recent work, at Brup EdTech, I coded a lot in pure PHP and a little in CodeIgniter 3, a framework. 
        Eventually, the company wanted to leave legacy systems and create new ones using modern technologies. At this point, I setted up 
        a server with Alma Linux 8 and installed PostgreSQL and a Docker container to run a system in Next.js, a framework of React thet 
        renders its components on the server, making the website lighter for the end user. I mainly coded in TypeScript, and we used 
        GitHub for version control and task organization throgh issues and pull requests.`,
        items: ['TypeScript', 'Next.js', 'PHP', 'Linux', 'Docker', 'PostgreSQL'],
      },
      {
        title: 'Learning',
        description: `I've been studying the Go programming language, and the experience has felt like learning how to program for the 
        first time all over again. Go is quite different from the languages I'm used to, most of which are interpreted languages, and it 
        introduces many concepts that I haven't worked with before. Things like pointers, concurrency, and its approach to error handling 
        are quite different from what I'm accustomed to, but the experience has been very interesting and rewarding. I believe learning 
        Go will help me become a better programmer by pushing me to think differently and learn new concepts. I don't have any 
        professional experience with Go yet, but I've been working on some personal projects that can be found on my GitHub.`,
        items: ['Go'],
      },
    ],
  },
  ui: { theme: 'Toggle light/dark theme', language: 'Language', image: 'Show complementary image' },
}
