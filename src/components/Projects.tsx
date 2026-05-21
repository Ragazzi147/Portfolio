import { useMemo, useState } from 'react';
import { projectFilterTags, projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projetos">
      <SectionHeader label="04 / projetos" title="Projetos públicos" />

      <Reveal>
        <div className="project-filters">
          {projectFilterTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`filter-btn${activeFilter === tag ? ' active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="projects-grid">
        {filtered.length === 0 ? (
          <p className="projects-empty">Nenhum projeto com essa tag.</p>
        ) : (
          filtered.map((project) => (
            <Reveal key={project.id} className="project-card">
              <img
                className="project-thumb"
                src={project.image}
                alt={project.imageAlt}
                width={400}
                height={225}
                loading="lazy"
              />
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver site ↗
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}
