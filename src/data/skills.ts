export type SkillGroup = {
  title: string;
  items: { name: string; hot: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: [
      { name: 'NestJS', hot: true },
      { name: 'Node.js', hot: true },
      { name: 'TypeScript', hot: true },
      { name: 'REST APIs', hot: true },
      { name: 'JWT / Auth', hot: true },
      { name: '.NET / Apex', hot: false },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', hot: true },
      { name: 'Microfrontend', hot: true },
      { name: 'TypeScript', hot: true },
      { name: 'Angular', hot: false },
      { name: 'Design System', hot: false },
    ],
  },
  {
    title: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', hot: true },
      { name: 'TypeORM', hot: true },
      { name: 'Transações ACID', hot: true },
      { name: 'SQL', hot: false },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS (ECS, S3)', hot: true },
      { name: 'CloudWatch', hot: true },
      { name: 'CodeBuild', hot: true },
      { name: 'CI/CD', hot: true },
      { name: 'SonarQube', hot: true },
    ],
  },
  {
    title: 'FinTech & domínio',
    items: [
      { name: 'Pix & Payments', hot: true },
      { name: 'BaaS / Banking APIs', hot: true },
      { name: 'CNAB · Boletos · Cards', hot: false },
      { name: 'Real Estate Tech', hot: false },
      { name: 'Salesforce', hot: false },
    ],
  },
  {
    title: 'AI & Produtividade',
    items: [
      { name: 'LLMs (Claude, GPT)', hot: true },
      { name: 'AI-Augmented Dev', hot: true },
      { name: 'Agentes de automação', hot: true },
      { name: 'Prompt Engineering', hot: true },
    ],
  },
];
