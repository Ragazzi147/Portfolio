import { aboutStats } from '../data/site';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="sobre">
      <SectionHeader label="01 / sobre" title="Quem sou" />
      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            Sou desenvolvedor Full Stack com experiência em{' '}
            <strong>aplicações web, APIs e integrações</strong> — do planejamento ao deploy. Gosto de
            resolver problemas reais com código organizado, testes e boas práticas de arquitetura.
          </p>
          <p>
            Na MB Labs, atuo em uma <strong>plataforma white label de banco digital (BaaS)</strong>{' '}
            com integrações a <strong>bancos e parceiros FinTech</strong>. Hoje estou no{' '}
            <strong>setor de Pix</strong>: desenvolvo o <strong>microfrontend do módulo</strong> e o{' '}
            <strong>backend dedicado em NestJS</strong> (APIs consumidas pela plataforma), além de
            ajustes no <strong>backend core</strong> quando o fluxo exige integração entre os dois
            mundos.
          </p>
          <p>
            Já trabalhei com <strong>Salesforce</strong>, <strong>Angular</strong> e{' '}
            <strong>.NET</strong> em outras empresas. Uso <strong>LLMs</strong> no dia a dia para
            acelerar prototipação, refatoração e revisão de código.
          </p>
        </Reveal>
        <div className="about-stats">
          {aboutStats.map((stat) => (
            <Reveal key={stat.label} className="stat-card">
              <>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
