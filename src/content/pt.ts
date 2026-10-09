import type { Content } from './types'

// TODO: revise todos os textos, contatos e períodos abaixo.
export const pt: Content = {
  htmlLang: 'pt-BR',
  name: 'Marlon Santana dos Santos',
  role: 'Desenvolvedor fullstack',
  location: 'Icó, CE — Brasil',
  bio: 'Sou desenvolvedor júnior formado em Análise e Desenvolvimento de Sistemas. Nasci em Icó, no interior do Ceará, e estou em busca de novas oportunidades para a minha carreira. Meu foco é o desenvolvimento web.',
  contacts: [
    { label: 'E-mail', value: 'seu-email@exemplo.com', href: 'mailto:seu-email@exemplo.com' },
    { label: 'GitHub', value: 'github.com/MarlonSdS', href: 'https://github.com/MarlonSdS' },
    { label: 'LinkedIn', value: 'linkedin.com/in/seu-perfil', href: 'https://linkedin.com/in/seu-perfil' },
  ],
  resume: { label: 'Currículo em PDF', href: '/curriculo.pdf' }, // coloque o arquivo em public/
  sections: { experience: 'Experiência profissional', education: 'Formação' },
  experience: [
    {
      title: 'Desenvolvedor (temporário)',
      place: 'Secretaria de Saúde',
      period: 'Período a definir',
      description:
        'Análise e correção de um banco de dados legado da secretaria e integração dele ao sistema da secretaria por meio de uma API fornecida pela equipe.',
    },
  ],
  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      place: 'Universidade Dr. Leão Sampaio (UniLeão)',
      period: 'Período a definir',
    },
  ],
  ui: { theme: 'Alternar tema claro/escuro', language: 'Idioma' },
}
