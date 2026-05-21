import { experiences } from '../data/experience';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experiencia">
      <SectionHeader label="02 / experiência" title="Onde trabalhei" />
      <div className="timeline">
        {experiences.map((exp) => (
          <Reveal key={`${exp.company}-${exp.date}`} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className={`timeline-dot${exp.active ? ' active' : ''}`} />
            <div className={`timeline-content${exp.featured ? ' featured' : ''}`}>
              <div className="exp-header">
                <span className="exp-company">{exp.company}</span>
                {exp.tag && <span className="exp-tag">{exp.tag}</span>}
              </div>
              <div className="exp-role">{exp.role}</div>
              {exp.context && <p className="exp-context">{exp.context}</p>}
              {exp.description && <p className="exp-desc">{exp.description}</p>}

              {exp.groups?.map((group) => (
                <div key={group.title} className="exp-group">
                  <h4 className="exp-group-title">{group.title}</h4>
                  <ul className="exp-list">
                    {group.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {exp.list && (
                <ul className="exp-list">
                  {exp.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {exp.domains && <p className="exp-domains">{exp.domains}</p>}

              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
