import type { ReactNode } from 'react';

export type ExperienceGroup = {
  title: string;
  items: ReactNode[];
};

export type ExperienceEntry = {
  date: string;
  active?: boolean;
  featured?: boolean;
  company: string;
  tag?: string;
  role: string;
  context?: string;
  description?: string;
  groups?: ExperienceGroup[];
  list?: ReactNode[];
  domains?: ReactNode;
  tags: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    date: '2024 — atual',
    active: true,
    featured: true,
    company: 'MB Labs',
    tag: 'Pix',
    role: 'Desenvolvedor Full Stack',
    context: 'Setor Pix · Microfrontend · Backend dedicado + core',
    description:
      'Realocado para o setor de Pix dentro da plataforma BaaS (administradoras e condomínios). Atuo de ponta a ponta no módulo — interface isolada e serviços backend — com evolução contínua do core quando necessário.',
    groups: [
      {
        title: 'Setor Pix — atuação atual',
        items: [
          <>
            <strong>Microfrontend Pix:</strong> desenvolvimento e manutenção da interface do módulo em
            React + TypeScript, integrada ao ecossistema da plataforma
          </>,
          <>
            <strong>Backend Pix:</strong> APIs REST em <strong>NestJS + TypeScript</strong>, módulo
            consumido pelos demais serviços (transferências, chaves, QR Code, devolução e conciliação)
          </>,
          <>
            <strong>Backend core:</strong> ajustes e evoluções no núcleo da plataforma para suportar
            fluxos Pix e integrações com bancos FinTech
          </>,
          <>Idempotência, tratamento de erros e segurança em fluxos de pagamento instantâneo</>,
        ],
      },
      {
        title: 'Backend & sistemas distribuídos',
        items: [
          <>
            APIs REST em <strong>Node.js + TypeScript</strong> para contas digitais, TED, P2P, CNAB
            (240/400) e boletos (contexto BaaS)
          </>,
          <>Integrações com operadoras de cartão, adquirentes e provedores bancários (Banking APIs)</>,
          <>
            PostgreSQL (RDS) + TypeORM: indexação, transações ACID e otimização de queries para
            workloads financeiros
          </>,
          <>Autenticação via JWT, tratamento de erros e idempotência em fluxos de pagamento</>,
        ],
      },
      {
        title: 'Frontend & UX',
        items: [
          <>
            Interfaces responsivas em <strong>React + TypeScript</strong>, Design System e
            componentização reutilizável
          </>,
          <>Dashboards financeiros em tempo real: receitas, inadimplência e fluxo de caixa</>,
          <>Otimização de performance (rendering, bundle size e Core Web Vitals)</>,
        ],
      },
      {
        title: 'Cloud, DevOps & qualidade',
        items: [
          <>
            Deploy e operação em <strong>AWS</strong> (ECS, S3, CodeBuild, CloudWatch) com
            observabilidade e SLAs
          </>,
          <>Code reviews orientados a segurança (OWASP), performance e arquitetura limpa</>,
          <>Qualidade contínua com SonarQube, Clean Code, SOLID e Design Patterns</>,
        ],
      },
      {
        title: 'AI-augmented engineering',
        items: [
          <>
            Uso de <strong>LLMs</strong> (Claude, ChatGPT e outros) para prototipação, refactoring,
            code review assistido, documentação e agentes de automação
          </>,
        ],
      },
    ],
    domains: (
      <>
        <strong>Domínios:</strong> FinTech · BaaS · Payments · Pix · CNAB · Cards · Real Estate Tech
      </>
    ),
    tags: [
      'NestJS',
      'Node.js',
      'TypeScript',
      'React',
      'Microfrontend',
      'Pix',
      'PostgreSQL',
      'TypeORM',
      'REST APIs',
      'JWT',
      'AWS',
      'SonarQube',
      'CI/CD',
      'Clean Architecture',
    ],
  },
  {
    date: '2023 — 2024',
    company: 'Sottelli',
    role: 'Desenvolvedor Salesforce (Estagiário)',
    list: [
      <>Desenvolvimento em Apex e JavaScript em sistemas Salesforce</>,
      <>Implementação de pipelines CI/CD e práticas DevOps</>,
      <>Metodologias ágeis (Scrum e Kanban)</>,
    ],
    tags: ['Salesforce', 'Apex', 'JavaScript', 'CI/CD'],
  },
  {
    date: '2022 — 2023',
    company: 'Sequoia',
    role: 'Analista de Sistemas (Estagiário)',
    list: [
      <>Suporte, manutenção e desenvolvimento de sistemas internos</>,
      <>Automatização de processos e integração de sistemas</>,
      <>Análise de dados com Tableau</>,
    ],
    tags: ['Angular', '.NET', 'TypeScript', 'SQL', 'Tableau'],
  },
];
