import { socialLinks } from '../data/site';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contato">
      <Reveal className="contact-box">
        <h2 className="contact-title">Vamos conversar?</h2>
        <p className="contact-sub">
          Disponível para oportunidades como desenvolvedor Full Stack — produtos digitais, APIs,
          front-end e projetos FinTech.
        </p>
        <div className="contact-links">
          <a href={socialLinks.email} className="btn btn-primary">
            lucasax147@gmail.com
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
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
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
