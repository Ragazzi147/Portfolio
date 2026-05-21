export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  siteUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description:
      'Rede social para pets com autenticação, upload de fotos e feed dinâmico. Construído com React + hooks personalizados.',
    image: `${import.meta.env.BASE_URL}img/dogs.png`,
    imageAlt: 'Preview do projeto Dogs',
    tags: ['React', 'JavaScript', 'REST API'],
    siteUrl: 'https://dogs-one-xi.vercel.app/',
    githubUrl: 'https://github.com/Ragazzi147/Dogs',
  },
  {
    id: 'dsmeta',
    name: 'DSmeta',
    description:
      'Dashboard de lista de vendas com filtros por data e notificações via SMS. Stack fullstack com React no frontend e Java no backend.',
    image: `${import.meta.env.BASE_URL}img/dsmeta.png`,
    imageAlt: 'Preview do projeto DSmeta',
    tags: ['React', 'Java', 'Spring'],
    siteUrl: 'https://lista-de-vendas-ragazzi.netlify.app/',
    githubUrl: 'https://github.com/Ragazzi147/dsmeta',
  },
  {
    id: 'bikcraft',
    name: 'Bikcraft',
    description:
      'Site institucional de bicicletaria customizada. Layout responsivo com HTML semântico, CSS modular e JavaScript para interações.',
    image: `${import.meta.env.BASE_URL}img/bikcraft.png`,
    imageAlt: 'Preview do projeto Bikcraft',
    tags: ['HTML', 'CSS', 'JavaScript'],
    siteUrl: 'https://bikcraft-lilac.vercel.app/',
    githubUrl: 'https://github.com/Ragazzi147/bikcraft',
  },
];

export const projectFilterTags = ['Todos', ...new Set(projects.flatMap((p) => p.tags))];
