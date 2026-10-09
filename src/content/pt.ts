import type { Content } from './types'

// TODO: revise todos os textos, contatos e períodos abaixo.
export const pt: Content = {
  htmlLang: 'pt-BR',
  name: 'Marlon Santana dos Santos',
  role: 'Desenvolvedor fullstack',
  location: 'Juazeiro do Norte, CE — Brasil',
  bio: 'Sou desenvolvedor júnior formado em Análise e Desenvolvimento de Sistemas. Nasci em Icó, no interior do Ceará, e estou em busca de novas oportunidades para a minha carreira. Meu foco é o desenvolvimento web.',
  contacts: [
    { label: 'E-mail', value: 'marlon.sd.santos@protonmail.com', href: 'mailto:marlon.sd.santos@protonmail.com' },
    { label: 'Whatsapp', value: '(88) 9 9646-9864', href: 'https://wa.me/5588996469864' },
    { label: 'GitHub', value: 'github.com/MarlonSdS', href: 'https://github.com/MarlonSdS' },
    { label: 'LinkedIn', value: 'linkedin.com/in/marlon-dos-santos-17469417b', href: 'https://www.linkedin.com/in/marlon-dos-santos-17469417b' },
  ],
  resume: { label: 'Currículo em PDF', href: '/curriculo.pdf' }, 
  sections: { experience: 'Experiência profissional', education: 'Formação' },
  experience: [
    {
      title: 'Desenvolvedor Fullstack',
      place: 'Brup EdTech',
      period: 'novembro de 2024 a agosto de 2026',
      description:
        `Atuei como desenvolvedor fullstack desenvolvendo e mantendo sites de ensino a distância. Minhas principais responsabilidades
        incluíam a o desenvolvimento de uma nova plataforma de cursos online, a manutenção de sites existentes, a integração com APIs de
        plataformas de pagamentos e a implementação de novos visuais e funcionalidades para os sites. O site em que mais trabalhei
        e é o destaque da empresa foi o Ineves, plataforma de cursos para estudantes e profissionais de enfermagem. Pode ser acessado
        em: https://ineves.com.br`,
      image: { src: '/works/ineves.webp', alt: 'Imagem do site Ineves' },
    },
  ],
  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      place: 'Universidade Dr. Leão Sampaio (UniLeão)',
      period: '2019 a 2022',
    },
  ],
  ui: { theme: 'Alternar tema claro/escuro', language: 'Idioma', image: 'Mostrar imagem complementar' },
}
