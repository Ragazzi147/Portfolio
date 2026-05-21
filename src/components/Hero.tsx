import { heroBadges, socialLinks } from '../data/site';

export default function Hero() {
  return (
    <div className="hero">
      <p className="hero-tag">// Disponível para novas oportunidades</p>
      <h1>
        Lucas
        <br />
        <span>Ragazzi</span>
      </h1>
      <p className="hero-subtitle">
        Desenvolvedor Full Stack que entrega <strong>produtos web de ponta a ponta</strong> — do
        backend à interface — com foco em código limpo, APIs bem desenhadas e experiência do usuário.
        Também atuo em <strong>FinTech</strong> e sistemas de alta criticidade.
      </p>
      <div className="hero-badges">
        {heroBadges.map((badge) => (
          <span key={badge.label} className={`badge${badge.accent ? ' accent' : ''}`}>
            {badge.label}
          </span>
        ))}
      </div>
      <div className="hero-cta">
        <a href="#contato" className="btn btn-primary">
          Entre em contato
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          GitHub ↗
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
