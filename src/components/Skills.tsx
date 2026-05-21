import { skillGroups } from '../data/skills';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader label="03 / stack" title="Tecnologias" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="skill-group">
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-items">
              {group.items.map((item) => (
                <div key={item.name} className="skill-item">
                  <div className={`skill-dot${item.hot ? ' hot' : ''}`} />
                  {item.name}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
