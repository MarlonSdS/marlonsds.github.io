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
    {
      title: 'Analista e Desenvolvedor de Sistemas Freelancer',
      place: 'Prefeitura de Icó',
      period: 'janeiro de 2024 a abril de 2024',
      description:
      `Atuei como analista e desenvolvedor de sistemas freelancer para a Prefeitura de Icó, ajudando a corrigir e melhorar alguns 
      sistemas legados que eles possuíam. Minhas principais responsabilidades incluíam atualizar a comunicação com APIs, corrigir bugs 
      e implementar novas funcionalidades.`
    },
    {
      title: 'Estagiário de Desenvolvimento Web',
      place: 'Grupo Intra EaD',
      period: 'abril de 2022 a março de 2023',
      description:
      `Atuei como estagiário de desenvolvimento web no Grupo Intra EaD, grupo dono da Brup EdTech, empresa onde trablhei recentemente. 
      Meu principal trabalho foi auxiliar na atualização de um site de cursos online, principalmente na parte de front-end, mas 
      também ajudando na parte de back-end.`
    },
    {
      title: 'Estagiário',
      place: 'Fábrica de Software (Software Factory)',
      period: 'agosto de 2019 a novembro de 2021',
      description:
      `Eu fui estagiário em um projeto da minha universidade chamado Fábrica de Software. Eu e meus colegas éramos responsáveis por 
      desenvolver diferentes sistemas para a universidade e instituições parceiras. Nosso principal projeto durante meu tempo lá foi a 
      reformulação de um sistema da secretaria de saúde da nossa cidade, que possuía muitas integrações com sistemas do SUS.`
    },
    {
      title: 'Estagiário',
      place: 'LC Informática',
      period: 'fevereiro de 2018 a outubro de 2018',
      description:
      `O estágio no final do meu curso no ensino médio. Trabalhei na empresa de assistência técnica e peças de computadores 
      Lc Informática, onde eu ajudei a montar computadores, instalar sistemas operacionais e também manutenções. Também realizei alguns
      atendimentos de clientes.`
    }
  ],
  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      place: 'Universidade Dr. Leão Sampaio (UniLeão)',
      period: '2019 a 2022',
    },
  ],
  skills: {
    title: 'Tecnologias',
    groups: [
      {
        title: 'Uso no trabalho',
        description: `No meu trabalho mais recente, na Brup EdTech, eu programei bastante em PHP puro e um pouco no frameworkd 
        CodeIgniter 3. Eventualmente a empresa quis deixar os sistemas legados e criar novos, com tecnologias mais modernas. 
        Neste ponto eu configurei um servidor Linux (Alma Linux 8) com PostgreSQL e um container Docker para rodar um sistema em 
        Next.js, que é um framework de React que renderiza seus componentes no servidor, tornando o site mais leve para o usuário final. 
        Nesta etapa a programção foi feita em TypeScript, usamos o github para versionamento de código e organização de tarefas através 
        de issues e pull resquests.`,
        items: ['TypeScript', 'Next.js', 'PHP', 'Linux', 'Docker', 'PostgreSQL'],
      },
      {
        title: 'Estudando',
        description: `Tenho estudado a linguagem de programação Go, a experiência tem sido como aprender a programar pela primeira vez 
        de novo, esta linguagem é bem diferente e usa muitos conceitos inexistentes em linguagens com as quais estou acostumado, sendo 
        principalmente linguagens interpretadas. Coisas como ponteiros, concorrência e a forma de lidar com erros são bem diferentes 
        do que estou acostumado, mas é uma experiência bem interessante e enriquecedora. Acredito que aprender Go me ajudará a ser um 
        programador melhor, pois me forçará a pensar de forma diferente e a aprender novos conceitos. Eu não tenho experiência 
        profissional em Go, mas tenho feito alguns projetos pessoais os quais podem ser encontrados no meu GitHub.`,
        items: ['Go'],
      },
    ],
  },
  ui: { theme: 'Alternar tema claro/escuro', language: 'Idioma', image: 'Mostrar imagem complementar' },
}
